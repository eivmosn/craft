import {
  render,
} from 'vue'
import Ghost from '../Ghost'
import {
  Css,
} from '../../dist'

export function onDragStart(event: DragStartEvent) {
  const { originalEvent, item } = event
  const ghost = document.querySelector<HTMLElement>('.ghost')
  const pageX = originalEvent.pageX
  const pageY = originalEvent.pageY
  if (ghost) {
    /** remove clone node child */
    ghost.innerHTML = ''
    /** clean up clone node css */
    Css.setStyle(ghost, {
      opacity: '1',
      width: 'unset',
      border: 'unset',
      height: 'unset',
      background: 'unset',
      top: `${pageY - 10}px`,
      left: `${pageX - 12}px`,
    })
    render(h(Ghost, {
      widget: item._underlying_vm_,
    }), ghost)
  }
}
