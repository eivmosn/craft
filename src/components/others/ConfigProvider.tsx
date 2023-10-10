import { defineComponent, renderSlot } from 'vue'
import { NConfigProvider } from 'naive-ui'

export default defineComponent({
  name: 'ConfigProvider',
  render() {
    return (<NConfigProvider>
      {renderSlot(this.$slots, 'default')}
    </NConfigProvider>)
  },
})
