import { defineComponent } from 'vue'
import { Input, InputNumber } from '@form-cook/components'

export default defineComponent({
  inheritAttrs: false,
  name: 'App',
  setup() {

  },
  render() {
    return (
      <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: '1', gap: '12px' }}>
        <Input />
        <InputNumber />
      </div>
    )
  },
})
