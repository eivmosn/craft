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
import { indentMore } from '@codemirror/commands'
import { json } from '@codemirror/lang-json'
import { defaultHighlightStyle, foldGutter, syntaxHighlighting } from '@codemirror/language'

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
        {
          key: 'Tab',
          run: ({ state, dispatch }) => {
            if (state.selection.ranges.some(range => !range.empty))
              return indentMore({ state, dispatch })
            dispatch(state.update(state.replaceSelection(' '), { scrollIntoView: true, userEvent: 'input' }))
            return true
          },
        },
      ]),
      highlightActiveLineGutter(),
      EditorView.theme({
        '.cm-activeLineGutter': {
          color: '#333',
          backgroundColor: 'unset',
        },
        '.cm-gutterElement': {
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
        },
      }),
      foldGutter({
        markerDOM: () => {
          const icon = document.createElement('div')
          icon.style.cssText = 'display: flex; align-items: center; justify-content: center;'
          const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
          svg.setAttribute('width', '20')
          svg.setAttribute('height', '20')
          svg.setAttribute('viewBox', '0 0 24 24')
          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
          path.setAttribute('fill', 'currentColor')
          path.setAttribute('d', 'M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41')
          svg.appendChild(path)
          icon.appendChild(svg)
          return icon
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
    return <div class="b" id="editor"></div>
  },
})
