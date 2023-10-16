import { defineComponent } from 'vue'
import Navbar from './Navbar'
import StateProvider from './StateProvider'

export default defineComponent({
  inheritAttrs: false,
  name: 'FormCook',
  render() {
    return (<StateProvider>
      <Navbar />
    </StateProvider>)
  },
})
