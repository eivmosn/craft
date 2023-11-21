import {
  defineConfig,
} from 'vite'
import Vue from '@vitejs/plugin-vue'
import JSX from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import Unimport from 'unimport/unplugin'

export default defineConfig({
  plugins: [
    Vue(),
    JSX(),
    UnoCSS(),
    Unimport.vite({
      presets: [
        'vue',
        {
          from: '@vueuse/core',
          imports: [
            'useDark',
            'useToggle',
          ],
        },
      ],
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      src: '/src',
    },
  },
})
