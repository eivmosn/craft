import { defineComponent, renderSlot } from 'vue'
import { NConfigProvider } from 'naive-ui'
import { themeOverrides, useDarkMode } from 'core/theme'

export default defineComponent({
  name: 'ConfigProvider',
  setup() {
    const { toggle, theme } = useDarkMode()
    toggle()
    return {
      theme,
      toggle,
    }
  },
  render() {
    return (<NConfigProvider
      theme={this.theme}
      themeOverrides={themeOverrides}
      class="bg-[var(--x-background)]"
    >
      {renderSlot(this.$slots, 'default')}
    </NConfigProvider>)
  },
})
