import { h, render } from 'vue'
import Ghost from '../view/Ghost'
import { Css } from './dist'

export function createGhost(event: MouseEvent, options: {
  widget: object
  offsetTop?: number
  offsetLeft?: number
}) {
  const { widget, offsetTop = 18, offsetLeft = 20 } = options
  const ghost = document.querySelector<HTMLElement>('.sortable-fallback')
  const pageX = event.pageX
  const pageY = event.pageY
  if (ghost) {
    /** remove clone node child */
    ghost.innerHTML = ''
    /** clean up clone node css */
    Css.setStyle(ghost, {
      top: `${pageY - offsetTop}px`,
      left: `${pageX - offsetLeft}px`,
    })
    render(h(Ghost, {
      widget,
    }), ghost)
  }
}
