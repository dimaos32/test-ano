import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/test-ano/',
  server: {
    host: 'localhost',
    open: true,
  },
});
