type TMessageHandler = (data: any) => void;

const SOURCES: { [url: string]: EventSource } = {};

export function subscribeSSE(url: string, onMessage: TMessageHandler) {
  try {
    if (url in SOURCES) return false;

    const eventSource = new EventSource(url, { withCredentials: true });

    eventSource.onopen = () => {
      console.info(`SSE connection opened for ${url}`);
    };

    // eventSource.onmessage = (event) => {
    //   try {
    //     onMessage(JSON.parse(event.data));
    //   } catch {
    //     onMessage(event.data);
    //   }
    // };

    eventSource.addEventListener('auth', (event: MessageEvent) => {
      try {
        onMessage(JSON.parse(event.data));
      } catch {
        onMessage(event.data);
      }
    });

    eventSource.addEventListener('connection', (event: MessageEvent) => {
      try {
        storeSource(JSON.parse(event.data), url, eventSource);
      } catch {
        storeSource(event.data, url, eventSource);
      }
    });

    eventSource.addEventListener('message', (event: MessageEvent) => {
      try {
        onMessage(JSON.parse(event.data));
      } catch {
        onMessage(event.data);
      }
    });

    eventSource.onerror = (error) => {
      console.error(`SSE error for URL: ${url}`, error instanceof Error ? error.message : 'Unknown error occurred');
      unsubscribeSSE(url);
    };

    return true;
  } catch (error) {
    console.error(`Failed to create SSE connection for URL: ${url}`, error);
    return false;
  }
}

function storeSource(message: any, url: string, eventSource: EventSource) {
  if (message?.action === 'connected') {
    SOURCES[url] = eventSource;
  }
  if (message?.action === 'disconnect') {
    unsubscribeSSE(url);
  }
}

export function unsubscribeSSE(url: string) {
  if (url in SOURCES) {
    SOURCES[url].close();
    delete SOURCES[url];
    console.warn(`SSE connection closed: ${url}`);
  }
}

export function unsubscribeAllSSE() {
  Object.values(SOURCES).forEach((source) => source.close());
  for (const key in SOURCES) {
    delete SOURCES[key];
  }
  console.warn('All SSE connections closed');
}
