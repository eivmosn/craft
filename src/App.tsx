import { defineComponent } from 'vue'
import { NConfigProvider } from 'naive-ui'
import FormCook from './design'
import { useTheme } from '@/composables/useTheme'

export default defineComponent({
  inheritAttrs: false,
  name: 'App',
  setup() {
    const { toggle, theme } = useTheme()
    toggle()
    return {
      theme,
    }
  },
  render() {
    return (
      <NConfigProvider theme={this.theme} class="h-full">
        <FormCook />
      </NConfigProvider>
    )
  },
})
