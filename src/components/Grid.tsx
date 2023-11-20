import {
  toPxString,
} from 'src/shared/utils'

export default defineComponent({
  inheritAttrs: false,
  name: 'Grid',
  props: {
    gap: {
      type: [String, Number],
      default: 8,
    },
    cols: {
      type: [String, Number],
      default: 24,
    },
  },
  render() {
    return (
      <div
        style={{
          width: '100%',
          display: 'grid',
          gap: toPxString(this.gap),
          gridTemplateColumns: `repeat(${this.cols}, minmax(0px, 1fr))`,
        }}
      >
        {this.$slots.default?.()}
      </div>
    )
  },
})
