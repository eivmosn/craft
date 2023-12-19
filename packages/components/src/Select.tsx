import { NSelect } from 'naive-ui'
import { defineComponent } from 'vue'

export const Select = defineComponent({
  inheritAttrs: false,
  name: 'Select',
  setup() {

  },
  render() {
    return (
      <NSelect
        options={[
          {
            label: 'MacBookPro2012',
            value: 'mac',
          },
        ]}
      />
    )
  },
})
