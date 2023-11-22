import {
  type VNode,
  render,
} from 'vue'
import {
  setStyles,
} from './utils'

export function onDragStart(event: MouseEvent, element: VNode) {
  const ghost = document.querySelector<HTMLElement>('.ghost')
  const pageX = event.originalEvent.pageX
  const pageY = event.originalEvent.pageY
  if (ghost) {
    /** remove clone node child */
    ghost.innerHTML = ''
    /** clean up clone node css */
    setStyles(ghost, {
      opacity: '1',
      width: 'unset',
      border: 'unset',
      height: 'unset',
      top: `${pageY - 10}px`,
      left: `${pageX - 10}px`,
      background: 'unset',
    })
    /** append custom node */
    const host = document.createElement('div')
    render(element, host)
    ghost.appendChild(host)
  }
}
