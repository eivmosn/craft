import { defineComponent } from 'vue'
import { FormCook, ThemeProvider } from '@/components'

export default defineComponent({
  setup() {

  },
  render() {
    return (<ThemeProvider>
      <FormCook />
    </ThemeProvider>)
  },
})
