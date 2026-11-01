import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// Plugin Linaria
import linaria from '@wyw-in-js/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    linaria(),
    react(),
  ],
  build: {
    rollupOptions: {
      input: {
        tugas33_1 : "tugas33_1.html",
        tugas33_2 : "tugas33_2.html",
      }
    }
  },
})
