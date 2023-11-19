import type {
  PropType,
  SlotsType,
} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'Hello',
  slots: Object as SlotsType<{
    default?: any
  }>,
  props: {
    name: {
      type: String as PropType<string>,
      default: 'World',
    },
  },
  render() {
    return (
      <div>
        {this.$slots.default?.()}
      </div>
    )
  },
})
