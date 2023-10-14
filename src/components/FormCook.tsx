import { defineComponent, inject } from 'vue'
import Navbar from './Navbar'
import StateProvider from './StateProvider'

export default defineComponent({
  inheritAttrs: false,
  name: 'FormCook',
  setup() {
  },
  render() {
    return (<StateProvider>
      <Navbar />
    </StateProvider>)
  },
})
