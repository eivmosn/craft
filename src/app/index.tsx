import { defineComponent } from 'vue'
import i18n from 'i18n'
import { Position } from 'src/core/enums'

export default defineComponent({
  inheritAttrs: false,
  setup() {
    console.log(i18n, Position.BOTTOM)
  },
  render() {
    return <div>index</div>
  },
})
