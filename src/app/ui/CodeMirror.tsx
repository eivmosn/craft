import { NScrollbar } from 'naive-ui'
import { defineComponent } from 'vue'
import { EditorState, type Extension } from '@codemirror/state'
import { drawSelection, dropCursor, highlightActiveLineGutter, highlightSpecialChars, lineNumbers } from '@codemirror/view'
import { history } from '@codemirror/commands'

export function mirrorExtensions(extensions?: Extension[]) {
  return [
    lineNumbers(),
    highlightActiveLineGutter(),
    highlightSpecialChars(),
    history(),
    drawSelection(),
    dropCursor(),
    EditorState.allowMultipleSelections.of(true),
    ...extensions,
  ]
}

export default defineComponent({
  inheritAttrs: false,
  name: 'CodeMirror',
  setup() {

  },
  render() {
    return (
      <NScrollbar xScrollable class="b">
        <div>CodeMirror</div>
      </NScrollbar>
    )
  },
})
