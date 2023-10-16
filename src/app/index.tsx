import { defineComponent } from 'vue'
import { CodeEditor, FormCook, ThemeProvider } from '@/components'

export default defineComponent({
  setup() {

  },
  render() {
    return (<ThemeProvider class="p-10">
      {/* <FormCook /> */}
      <CodeEditor />
    </ThemeProvider>)
  },
})
