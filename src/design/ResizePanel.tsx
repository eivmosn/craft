import {
  Position,
} from 'src/enums/Position'

type ResizePosition = `${Position.LEFT}` | `${Position.RIGHT}`

export default defineComponent({
  inheritAttrs: false,
  name: 'ResizePanel',
  setup() {
    const size = reactive({
      left: 310,
      right: 310,
    })
    const onResize = (width: number, position: ResizePosition) => {
      position === Position.LEFT ? (size.left = width) : (size.right = width)
    }
    const onMousedown = (evt: MouseEvent, position: ResizePosition) => {
      const onMousemove = (event: MouseEvent) => {
        if (evt.target instanceof HTMLElement) {
          const clientRect = evt.target.getBoundingClientRect()
          const offset = clientRect.left - size.left
          const width = position === Position.LEFT ? event.clientX - offset : window.innerWidth - event.clientX
          onResize(width, position)
        }
      }
      document.addEventListener('mousemove', onMousemove)
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMousemove)
      })
    }
    return {
      size,
      onResize,
      onMousedown,
    }
  },
  render() {
    return (
      <div class="h-full flex">
        {this.$slots.nav?.()}
        <div style={{ width: `${this.size.left}px` }}>
          {this.$slots.left?.()}
        </div>
        <div class="b-left b-right relative flex-1 select-none b-[var(--base-border-color)]">
          <div class="separator -left-3px" onMousedown={evt => this.onMousedown(evt, Position.LEFT)} />
          <div class="separator -right-3px" onMousedown={evt => this.onMousedown(evt, Position.RIGHT)} />
          {this.$slots.default?.()}
        </div>
        <div style={{ width: `${this.size.right}px` }}>
          {this.$slots.right?.()}
        </div>
      </div>
    )
  },
})
