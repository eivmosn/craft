import {
  defineConfig,
} from 'vite'
import Vue from '@vitejs/plugin-vue'
import JSX from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    Vue(),
    JSX(),
    Unocss(),
  ],
})
