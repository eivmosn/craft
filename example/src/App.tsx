import { defineComponent } from "vue"
import { Designer, ThemeProvider } from "@codepan/designer";

export default defineComponent({
  name: 'App',
  setup() {

  },
  render() {
    return <ThemeProvider>
      <Designer />
    </ThemeProvider>
  },
})
