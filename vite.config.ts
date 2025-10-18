import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['src/**/*'] })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'EternalStyles',
      fileName: 'index',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'primereact', 'moment-timezone'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          primereact: 'PrimeReact',
          'moment-timezone': 'moment'
        }
      }
    },
    cssCodeSplit: false
  },
  optimizeDeps: {
    include: ['primereact/editor', 'primereact/api', 'primereact/button', 'primereact/inputtext'],
  },
});
