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

import { autocompletion, completeFromList, ifNotIn } from '@codemirror/autocomplete'

// import { json } from '@codemirror/lang-json'
import { defaultHighlightStyle, foldGutter, syntaxHighlighting } from '@codemirror/language'
import { SearchQuery, findNext, findPrevious, replaceNext, search, searchKeymap, setSearchQuery } from '@codemirror/search'
import { javascript, javascriptLanguage, scopeCompletionSource } from '@codemirror/lang-javascript'

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
      autocompletion(),
      javascript({
        jsx: true,
        typescript: true,
      }),
      javascriptLanguage.data.of({
        autocomplete: ifNotIn([
          '__VUE__',
          '__VUE_PROD_DEVTOOLS__',
        ], scopeCompletionSource(globalThis)),
      }),
      javascriptLanguage.data.of({
        autocomplete: completeFromList([
          { label: 'option', type: 'keyword', info: '表单配置' },
          { label: 'params', type: 'keyword', info: '全局变量' },
          { label: 'form', type: 'keyword', info: '表单值' },
          { label: 'parent', type: 'keyword', info: '父级表单(option,form 等)' },
          { label: 'cache', type: 'keyword', info: '表单缓存对象' },
          { label: 'page', type: 'keyword', info: '表单分页对象' },
          { label: 'sys', type: 'keyword', info: '表单其他参数' },
          { label: 'rowData', type: 'keyword', info: '表格行数据' },
          { label: 'result', type: 'keyword', info: '接口返回值' },
          { label: 'select', type: 'keyword', info: '下拉选中值(对象)' },
          { label: 'value', type: 'keyword', info: '当前组件值' },
        ]),
      }),
      editorplaceholder(placeholder),
      keymap.of([
        ...defaultKeymap,
        ...searchKeymap,
        {
          key: 'Tab',
          run: ({ state, dispatch }) => {
            if (state.selection.ranges.some(range => !range.empty))
              return indentMore({ state, dispatch })
            dispatch(state.update(state.replaceSelection(' '), { scrollIntoView: true, userEvent: 'input' }))
            return true
          },
        },
        // {
        //   key: 'Mod-f',
        //   run: () => {
        //     const editor = container.querySelector('.cm-editor')
        //     const existingPanel = editor && editor.querySelector('.cm-search-panel')
        //     if (editor && !existingPanel) {
        //       const div = document.createElement('div')
        //       div.className = 'cm-search-panel'
        //       div.innerHTML = `
        //         <div class='cm-search-row'>
        //           <input type="text" placeholder="Find" />
        //           <button>Next</button>
        //           <button>Prev</button>
        //         </div>
        //         <div class='cm-search-row'>
        //           <input type="text" placeholder="Replace" />
        //           <button>Replace</button>
        //           <button>Replace All</button>
        //         </div>
        //       `
        //       editor.appendChild(div)
        //     }
        //     return true
        //   },
        // },
        {
          key: 'Escape',
          run: () => {
            const editor = container.querySelector('.cm-editor')
            const search = editor.querySelector('.cm-search-panel')
            if (search)
              search.parentElement.removeChild(search)
            return true
          },
        },
      ]),
      highlightActiveLineGutter(),
      EditorView.theme({
        '&.cm-editor': {
          border: '1px solid #ddd',
        },
        '&.cm-focused': {
          outline: 'none',
        },
        '.cm-scroller': {
          overflow: 'auto',
          // maxHeight: '200px',
        },
        '.cm-gutters': {
          background: 'unset',
          border: 'unset',
          userSelect: 'none',
        },
        '.cm-content, .cm-gutter': {
          minHeight: '150px',
        },
        '.cm-activeLineGutter': {
          color: '#333',
          backgroundColor: 'unset',
        },
        '.cm-gutterElement, .cm-gutterIcon': {
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
        },
        '.cm-gutterIcon': {
          paddingRight: '3px',
        },
        '.cm-panels': {
          position: 'fixed',
          right: '30px',
          top: '5px',
          border: '1px solid #000',
          backgroundColor: '#fff',
          padding: '3px',
          display: 'flex',
          flexDirection: 'column',
          gap: '3px',
          bottom: 'unset !important',
          left: 'unset !important',
        },
        '.cm-gutters:hover .cm-gutterIcon.open': {
          opacity: 1,
          transition: 'opacity 0.2s ease-in',
        },
        '.cm-gutterIcon.open': {
          opacity: 0,
          transition: 'opacity 0.2s ease-out',
        },
      }),
      EditorView.baseTheme({
        '.cm-completionIcon-keyword': {
          '&:after': { content: '\'$\' !important' },
        },
        '.cm-completionIcon-variable': {
          '&:after': { content: '\'*\' !important' },
        },
      }),
      foldGutter({
        markerDOM: (open) => {
          const icon = document.createElement('div')
          const icon2 = document.createElement('div')
          icon2.className = 'cm-gutterIcon close'
          icon.className = 'cm-gutterIcon open'
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
      search({
        createPanel(view) {
          const dom = document.createElement('div')
          const search = document.createElement('button')
          const next = document.createElement('button')
          const prev = document.createElement('button')
          const replace = document.createElement('button')

          next.innerHTML = '下一个'
          prev.innerHTML = '上一个'
          search.innerHTML = '测试'
          replace.innerHTML = '替换'

          search.addEventListener('click', () => {
            const query = new SearchQuery({
              search: 'p',
              replace: '操场',
            })
            view.dispatch({ effects: setSearchQuery.of(query) })
          })

          next.addEventListener('click', () => {
            findNext(view)
          })

          prev.addEventListener('click', () => {
            findPrevious(view)
          })

          replace.addEventListener('click', () => {
            replaceNext(view)
          })

          dom.appendChild(search)
          dom.appendChild(next)
          dom.appendChild(prev)
          dom.appendChild(replace)

          return {
            dom,
          }
        },
      }),
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
    return <div class="relative" id="editor"></div>
  },
})
