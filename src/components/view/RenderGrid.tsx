import {
  toPxString,
} from 'src/shared/utils'
import type {
  PropType,
} from 'vue'
import RenderGridItem from './RenderGridItem'

const RenderGrid = defineComponent({
  inheritAttrs: false,
  name: 'Grid',
  props: {
    gap: {
      type: Object as PropType<Record<'x' | 'y', number>>,
      default: () => ({
        x: 8,
        y: 8,
      }),
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
          gap: `${toPxString(this.gap.y)} ${toPxString(this.gap.x)}`,
          gridTemplateColumns: `repeat(${this.cols}, minmax(0px, 1fr))`,
        }}
      >
        <RenderGridItem />
        <RenderGridItem />
      </div>
    )
  },
})

export default RenderGrid