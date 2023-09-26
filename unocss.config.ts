import {
  presetUno,
  defineConfig,
  presetIcons,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
      },
    }),
  ],
  shortcuts: {
    'b': 'border-1 border-solid'
  },
  transformers: [
    transformerVariantGroup()
  ]
})
