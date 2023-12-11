import { h, ref, render } from 'vue'
import { createGlobalState } from '@vueuse/core'
import Ghost from '../view/Ghost'
import { Css } from './dist'
import type { FormCookWidget } from './transform'

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
    while (ghost.hasChildNodes())
      ghost.firstChild && ghost.removeChild(ghost.firstChild)

    /** clean up clone node css */
    Css.setStyle(ghost, {
      top: `${pageY - offsetTop}px`,
      left: `${pageX - offsetLeft}px`,
      justifyContent: 'unset',
      alignItems: 'unset',
    })
    render(h(Ghost, {
      widget,
    }), ghost)
  }
}
