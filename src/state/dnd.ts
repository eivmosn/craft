import { h, render } from 'vue'
import Ghost from '../view/Ghost'
import { Css } from './dist'

export function createGhost(event: MouseEvent, widget: object) {
  const ghost = document.querySelector<HTMLElement>('.sortable-fallback')
  const pageX = event.pageX
  const pageY = event.pageY
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
      widget,
    }), ghost)
  }
}
