import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import JSX from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    Vue(),
    JSX(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      core: '/src/core',
      components: '/src/components',
    },
  },
})
