import { defineComponent, onMounted, ref } from 'vue'
import { basicSetup } from 'codemirror'
import { EditorView, keymap } from '@codemirror/view'
import { EditorState } from '@codemirror/state'
import { defaultKeymap } from '@codemirror/commands'
import { NButton } from 'naive-ui'

export default defineComponent({
  inheritAttrs: false,
  name: 'CodeEditor',
  setup() {
    const domRef = ref<Element | DocumentFragment>()
    const editorRef = ref<EditorView>()
    const codeValue = ref<string>('')

    const theme = EditorView.theme({
      '& .cm-matchingBracket': {
        color: 'red',
      },
    })

    const codeState = EditorState.create({
      doc: codeValue.value,
      extensions: [
        basicSetup,
        theme,
        keymap.of(defaultKeymap),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            const value = update.state.doc.toString()
            console.log(value)
          }
        }),
      ],
    })

    onMounted(() => {
      editorRef.value = new EditorView({
        state: codeState,
        parent: domRef.value,
      })
    })

    const onInsert = () => {
      const functionName = 'GET_NAME()'
      const cursorIndex = functionName.length - 1
      editorRef.value.focus()
      const { from } = editorRef.value.state.selection.ranges[0]
      editorRef.value.dispatch(editorRef.value.state.replaceSelection(functionName))

      editorRef.value.dispatch({
        selection: {
          anchor: from + cursorIndex,
        },
      })

    //   editorRef.value.
    }

    return {
      domRef,
      codeState,
      onInsert,
    }
  },
  render() {
    return (<div>
      <NButton onClick={this.onInsert}>插入</NButton>
      <div ref="domRef "></div>
    </div>)
  },
})
