import { defineComponent, onMounted } from 'vue'
import {
  EditorView,
  placeholder as editorplaceholder,
  highlightActiveLine,
  highlightActiveLineGutter,
  keymap,
  lineNumbers,
} from '@codemirror/view'
import { EditorState } from '@codemirror/state'
import { defaultKeymap, indentMore } from '@codemirror/commands'
import { json } from '@codemirror/lang-json'
import { defaultHighlightStyle, foldGutter, syntaxHighlighting } from '@codemirror/language'
import { searchKeymap } from '@codemirror/search'

interface PathAttributes {
  [key: string]: string
}

interface SVGOptions {
  width: string
  height: string
  viewBox: string
  pathAttributes: PathAttributes
}

function createSVGPath(options: SVGOptions): SVGElement {
  const { width, height, viewBox, pathAttributes } = options
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('width', width)
  svg.setAttribute('height', height)
  svg.setAttribute('viewBox', viewBox)
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  for (const [key, value] of Object.entries(pathAttributes))
    path.setAttribute(key, value)
  svg.appendChild(path)
  return svg
}

export function useEditor(options: {
  container: HTMLElement
  lineNumbers?: boolean
  placeholder?: string
}) {
  const { placeholder = '请输入..', container } = options

  const state = EditorState.create({
    doc: '',
    extensions: [
      lineNumbers(),
      highlightActiveLine(),
      editorplaceholder(placeholder),
      keymap.of([
        ...defaultKeymap,
        {
          key: 'Tab',
          run: ({ state, dispatch }) => {
            if (state.selection.ranges.some(range => !range.empty))
              return indentMore({ state, dispatch })
            dispatch(state.update(state.replaceSelection(' '), { scrollIntoView: true, userEvent: 'input' }))
            return true
          },
        },
        {
          key: 'Mod-f',
          run: () => {
            const editor = container.querySelector('.cm-editor')
            const existingPanel = editor && editor.querySelector('.cm-search-panel')
            if (editor && !existingPanel) {
              const div = document.createElement('div')
              div.className = 'cm-search-panel'
              editor.appendChild(div)
            }
            return true
          },
        },
      ]),
      highlightActiveLineGutter(),
      EditorView.theme({
        '.cm-scroller': {
          overflow: 'auto',
          maxHeight: '200px',
        },
        '.cm-content, .cm-gutter': {
          minHeight: '150px',
        },
        '.cm-activeLineGutter': {
          color: '#333',
          backgroundColor: 'unset',
        },
        '.cm-gutterElement': {
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
        },
        '.cm-gutterElement .collapse-icon': {
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
          paddingRight: '3px',
        },
        '.cm-search-panel': {
          position: 'absolute',
          right: '30px',
          top: '5px',
          width: '320px',
          height: '30px',
          border: '1px solid #000',
          backgroundColor: '#fff',
        },
      }),
      foldGutter({
        markerDOM: (open) => {
          const icon = document.createElement('div')
          const icon2 = document.createElement('div')
          icon2.className = 'collapse-icon'
          icon.className = 'collapse-icon'
          const svgRight = createSVGPath({
            width: '15',
            height: '15',
            viewBox: '0 0 24 24',
            pathAttributes: {
              'fill': 'none',
              'stroke': 'currentColor',
              'stroke-linecap': 'round',
              'stroke-linejoin': 'round',
              'stroke-width': '1.5',
              'd': 'm9 5l6 7l-6 7',
            },
          })
          const svgDown = createSVGPath({
            width: '15',
            height: '15',
            viewBox: '0 0 24 24',
            pathAttributes: {
              'fill': 'currentColor',
              'fill-rule': 'evenodd',
              'd': 'M4.43 8.512a.75.75 0 0 1 1.058-.081L12 14.012l6.512-5.581a.75.75 0 0 1 .976 1.138l-7 6a.75.75 0 0 1-.976 0l-7-6a.75.75 0 0 1-.081-1.057Z',
              'clip-rule': 'evenodd',
            },
          })
          icon.appendChild(svgDown)
          icon2.appendChild(svgRight)
          return open ? icon : icon2
        },
      }),
      syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
      json(),
    ],
  })

  const view = new EditorView({
    parent: container,
    state,
  })

  return {
    state,
    view,
  }
}
export default defineComponent({
  inheritAttrs: false,
  name: 'App',
  setup() {
    onMounted(() => {
      useEditor({
        container: document.getElementById('editor'),
        lineNumbers: true,
      })
    })
  },
  render() {
    return <div class="relative b" id="editor"></div>
  },
})
