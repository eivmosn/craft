import type {
  DecorationSet,
  EditorView,
  ViewUpdate,
} from '@codemirror/view'

import {
  Decoration,
  MatchDecorator,
  ViewPlugin,
} from '@codemirror/view'

export function keywordsPlugin(keywords: string[] = []) {
  const regexp = new RegExp(keywords.join('|'), 'g')

  const keywordsMatcher = new MatchDecorator({
    regexp,
    decoration: (match) => {
      const [matchText] = match
      if (matchText) {
        return Decoration.mark({
          class: 'keyword-bold',
        })
      }
      return Decoration.mark({})
    },
  })

  return ViewPlugin.fromClass(
    class {
      keywords: DecorationSet
      constructor(view: EditorView) {
        this.keywords = keywordsMatcher.createDeco(view)
      }

      update(update: ViewUpdate) {
        this.keywords = keywordsMatcher.updateDeco(
          update,
          this.keywords,
        )
      }
    },
    {
      decorations: (instance: any) => {
        return instance.keywords
      },
    },
  )
}
