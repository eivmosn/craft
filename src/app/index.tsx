import { defineComponent } from 'vue'
import {
  ConfigProvider,
} from 'components/index'

export default defineComponent({
  setup() {

  },
  render() {
    return (<ConfigProvider>
      123
    </ConfigProvider>)
  },
})
