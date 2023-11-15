import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerVariantGroup,
} from 'unocss'

import themes from './src/theme'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  preflights: [
    {
      getCSS: () => themes,
    },
  ],
  theme: {
    colors: {
      background: {
        light: '#f5f5f5',
        dark: '#121212',
      },
    },
  },
})
