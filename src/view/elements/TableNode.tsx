import { defineComponent } from 'vue'
import { Handle, Position } from '@vue-flow/core'

export default defineComponent({
  inheritAttrs: false,
  name: 'TableNode',
  setup() {

  },
  render() {
    const createProt = (length: number) => {
      const portRight = Array.from({ length }).map((_, i) => (
        <Handle
          position={Position.Right}
          style={{
            top: `${16 + i * 11}%`,
            right: '-2.5px',
          }}
          id={`1-handle-right-${i}`}
        />
      ))
      const portLeft = Array.from({ length }).map((_, i) => (
        <Handle
          position={Position.Left}
          style={{
            top: `${16 + i * 11}%`,
            left: '-2.5px',
          }}
          id={`1-handle-left-${i}`}
        />
      ))

      return {
        portLeft,
        portRight,
      }
    }

    const { portRight } = createProt(8)

    const items = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
      <div class="flex flex-col bg-#fff w-200px">
        {portRight}
        <div class="bg-blue h-22px">

        </div>
        <div class="b border-t-none border-blue">
          {items.map(() => (
            <div class="min-h-24px [&:not(:last-child)]:b-bottom b-blue">

            </div>
          ))}
        </div>
      </div>
    )
  },
})
