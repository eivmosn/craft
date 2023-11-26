import { Css, createElement } from '../../dist'

interface ResizerOption {
  className: string
  maxWidth: number
  minWidth: number
  position: 'left' | 'right'
}

const resizerColor = '#007fd4'

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
      opacity: '0.7',
      [position]: '-3px',
      position: 'absolute',
      transition: 'background-color .3s',
    },
  })

  hover(resizer)

  resizer.addEventListener('mousedown', event => onMousedown(event, container, option))

  Css.setStyle(container, {
    position: 'relative',
  })

  if (!container.querySelector(className))
    container.appendChild(resizer)
}

function hover(resizer: HTMLElement) {
  resizer.addEventListener('mouseenter', () => Css.setStyle(resizer, {
    background: resizerColor,
  }))

  resizer.addEventListener('mouseleave', () => Css.setStyle(resizer, {
    background: '',
  }))
}

function onMousedown(evt: MouseEvent, container: HTMLElement, option: Partial<ResizerOption>) {
  const { position, maxWidth, minWidth } = option
  const resizer = evt.target as HTMLElement

  const onMousemove = (event: MouseEvent) => {
    Css.setStyle(resizer, { background: resizerColor })
    const offsetWidth = container.offsetWidth
    const clientRect = resizer.getBoundingClientRect()
    const offset = clientRect.left - offsetWidth
    let width = position === 'right' ? event.clientX - offset : window.innerWidth - event.clientX
    if (maxWidth && width > maxWidth)
      width = maxWidth
    if (minWidth && width < minWidth)
      width = minWidth
    container.style.width = `${width}px`
  }

  document.addEventListener('mousemove', onMousemove)

  document.addEventListener('mouseup', () => {
    Css.setStyle(resizer, { background: '' })
    document.removeEventListener('mousemove', onMousemove)
  })
}

export { createResizer }
