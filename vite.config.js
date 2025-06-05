import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@srv': new URL('./src', import.meta.url),
      '@': new URL('./src/components', import.meta.url),
    },
  },
});
