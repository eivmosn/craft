import {
  defineConfig,
  presetIcons,
  presetUno,
  toEscapedSelector,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
      },
    }),
  ],
  rules: [
    [/b-image-\[(.+)\]/, ([_, str], { rawSelector }) => {
      const className = toEscapedSelector(rawSelector)
      const [border_1, border_2] = str.split(',')
      return `
          ${className} {
            border: 1px solid;
            border-image: linear-gradient(to right, ${border_1}, ${border_2}) 1;
          }
        `
    }],
  ],
  shortcuts: {
    'b': 'border border-solid b-[var(--fc-border)]',
    'b-top': 'b-l b-t-solid b-[var(--fc-border)]',
    'b-left': 'b-l b-l-solid b-[var(--fc-border)]',
    'b-right': 'b-r b-r-solid b-[var(--fc-border)]',
    'b-bottom': 'b-b b-b-solid b-[var(--fc-border)]',
    'fe': 'flex items-center justify-end',
    'fs': 'flex items-center justify-start',
    'fc': 'flex items-center justify-center',
    'fb': 'flex items-center justify-between',
  },
  transformers: [
    transformerVariantGroup(),
  ],
})
