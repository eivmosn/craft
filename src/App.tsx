import { defineComponent } from 'vue'
import FormCook from './design'
import { useTheme } from './composables/useTheme'

export default defineComponent({
  inheritAttrs: false,
  name: 'App',
  setup() {
    const { toggle } = useTheme()
    toggle()
  },
  render() {
    return <FormCook />
  },
})
