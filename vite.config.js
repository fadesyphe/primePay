import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vitePluginRequire from 'vite-plugin-require'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), vitePluginRequire.default()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
