import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://threeai.github.io/2024-2-VK-EDU-Frontend-A-Alexandrov/',
  server: {
    watch: {
      usePolling: true,
    },
  },
})