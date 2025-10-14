import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    server: {
      host: env.VITE_HOST || '0.0.0.0',
      port: parseInt(env.VITE_PORT || '3100'),
    },
    optimizeDeps: {
      include: ['primereact/editor', 'primereact/api', 'primereact/button', 'primereact/inputtext'],
    },
  };
});
