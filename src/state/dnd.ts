import type { PropType } from 'vue'
import { defineComponent, h, render } from 'vue'
import VueDraggable from 'vuedraggable'
import Ghost from '../view/Ghost'
import { Css } from './dist'

function createGhost(event: DragStartEvent, ghostClas: string) {
  const { originalEvent, item } = event
  const ghost = document.querySelector<HTMLElement>(ghostClas)
  const pageX = originalEvent.pageX
  const pageY = originalEvent.pageY
  if (ghost) {
    /** remove clone node child */
    ghost.innerHTML = ''
    /** clean up clone node css */
    Css.setStyle(ghost, {
      opacity: '1',
      width: '',
      border: '',
      height: '',
      background: '',
      top: `${pageY - 18}px`,
      left: `${pageX - 20}px`,
    })
    render(h(Ghost, {
      widget: item._underlying_vm_,
    }), ghost)
  }
}

export const Container = defineComponent({
  name: 'DndContainer',
  props: {
    widgets: {
      type: Array as PropType<any[]>,
      default: [],
    },
  },
  setup() {

  },
  render() {
    return h(VueDraggable, {
      list: this.widgets,
      sort: false,
      itemKey: 'id',
      forceFallback: true,
      fallbackOnBody: true,
      fallbackClass: 'ghost',
      fallbackTolerance: 5,
      scrollSensitivity: 150,
      onStart: event => createGhost(event, '.ghost'),
    }, {
      item: (params: any) => {
        return this.$slots.default?.(params)
      },
    })
  },
})
