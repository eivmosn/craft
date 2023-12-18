import {
  defineConfig,
} from 'vite'
import Vue from '@vitejs/plugin-vue'
import JSX from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    Vue(),
    JSX(),
  ],
})
