import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy:{
      '/api': {
        target: 'http://localhost:8000',
      }
    }
  },
  build: {
    rollupOptions: {
      external: ['axios'], // Add axios to external dependencies if necessary
    },
  },
})
