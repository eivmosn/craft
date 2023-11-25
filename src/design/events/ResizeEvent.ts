import { Css, createElement } from '../../dist'

interface ResizerOption {
  className: string
  maxWidth: number
  minWidth: number
  position: 'left' | 'right'
}

function createResizer(container: HTMLElement, option: Partial<ResizerOption>) {
  const {
    position = 'right',
    className = 'fc-resizer',
  } = option

  const resizer = createElement('div', {
    className,
    style: {
      top: '0',
      width: '5px',
      height: '100%',
      opacity: '0.5',
      [position]: '-3px',
      position: 'absolute',
      transition: 'background-color .3s',
    },
  })

  hover(resizer, '#0079fe')

  resizer.addEventListener('mousedown', event => onMousedown(event, container, option))

  Css.setStyle(container, {
    position: 'relative',
  })

  if (!container.querySelector(className))
    container.appendChild(resizer)
}

function hover(resizer: HTMLElement, background: string) {
  resizer.addEventListener('mouseenter', () => Css.setStyle(resizer, {
    background,
  }))

  resizer.addEventListener('mouseleave', () => Css.setStyle(resizer, {
    background: '',
  }))
}

function onMousedown(evt: MouseEvent, container: HTMLElement, option: Partial<ResizerOption>) {
  const { position, maxWidth, minWidth } = option

  const onMousemove = (event: MouseEvent) => {
    if (evt.target instanceof HTMLElement) {
      const offsetWidth = container.offsetWidth
      const clientRect = evt.target.getBoundingClientRect()
      const offset = clientRect.left - offsetWidth
      let width = position === 'right' ? event.clientX - offset : window.innerWidth - event.clientX
      if (maxWidth && width > maxWidth)
        width = maxWidth
      if (minWidth && width < minWidth)
        width = minWidth
      container.style.width = `${width}px`
    }
  }

  document.addEventListener('mousemove', onMousemove)

  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', onMousemove)
  })
}

export { createResizer }
