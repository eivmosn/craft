import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerVariantGroup,
} from 'unocss'
import css from './src/css'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
      },
    }),
  ],
  shortcuts: {
    'b': 'border-1 border-solid',
    'b-top': 'border-t border-t-solid',
    'b-left': 'border-l border-l-solid',
    'b-right': 'border-r border-r-solid',
    'b-bottom': 'border-b border-b-solid',
    'fe': 'flex items-center justify-end',
    'fs': 'flex items-center justify-start',
    'fc': 'flex items-center justify-center',
    'fb': 'flex items-center justify-between',
  },
  transformers: [
    transformerVariantGroup(),
  ],
  preflights: [
    {
      getCSS: () => css,
    },
  ],
})
