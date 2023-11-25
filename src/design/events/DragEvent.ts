import { h, render } from 'vue'
import { Css } from '../../dist'
import Ghost from '../internals/Ghost'

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
      top: `${pageY - 10}px`,
      left: `${pageX - 12}px`,
    })
    render(h(Ghost, {
      widget: item._underlying_vm_,
    }), ghost)
  }
}

export {
  createGhost,
}
