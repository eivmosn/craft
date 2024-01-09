import { defineComponent } from 'vue'
import { Input } from '@form-cook/components'

export default defineComponent({
  inheritAttrs: false,
  name: 'App',
  setup() {

  },
  render() {
    const props = {
      name: 'hello',
      age: 123,
    }

    return (
      <div
        style={{
          padding: '2rem',
          display: 'grid',
          gridTemplateColumns: '1',
          gap: '12px',
        }}
      >
        <Input {...props} />
        <Input {...props} />
      </div>
    )
  },
})
