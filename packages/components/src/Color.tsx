import { NColorPicker, colorPickerProps } from 'naive-ui'
import { defineComponent } from 'vue'

export const extendColorPickerProps = {
  ...colorPickerProps,
}

export const swatches = [
  '#FFFFFF',
  '#18A058',
  '#2080F0',
  '#F0A020',
  '#000000',
]

export const Color = defineComponent({
  name: 'Color',
  inheritAttrs: false,
  props: extendColorPickerProps,
  setup() {

  },
  render() {
    return (
      <NColorPicker
        defaultValue={null}
        swatches={swatches}
        actions={['clear', 'confirm']}
      />
    )
  },
})
