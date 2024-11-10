import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://threeai.github.io/2024-2-VK-EDU-Frontend-A-Alexandrov/',
  server: {
    // proxy: {
    //   '/api': {
    //     // target: 'http://localhost:8080/api',
    //     target: 'https://vkedu-fullstack-div2.ru/api',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
    watch: {
      usePolling: true,
    },
  },
})