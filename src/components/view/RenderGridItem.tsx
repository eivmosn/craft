import {
  NFormItem,
  NInput,
} from 'naive-ui'
import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'RenderGridItem',
  setup() {

  },
  render() {
    return (
      <div
        style={{
          width: '100%',
          gridColumn: 'span 12 / span 12',
        }}
      >
        <NFormItem label="测试:">
          <NInput />
        </NFormItem>
      </div>
    )
  },
})
