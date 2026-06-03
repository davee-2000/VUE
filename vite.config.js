import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/VUE/',
  server: {
    port: 5173,
    open: true
  }
})
