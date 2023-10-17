import type {
  DecorationSet,
  ViewUpdate,
} from '@codemirror/view'
import {
  Decoration,
  EditorView,
  MatchDecorator,
  ViewPlugin,
  WidgetType,
} from '@codemirror/view'

export interface PlaceholderThemesType {
  [K: string]: CommonPlaceholderTheme
}

export interface CommonPlaceholderTheme {
  textColor: string
  backgroudColor: string
  borderColor: string
}

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

export function placeholdersPlugin(themes: PlaceholderThemesType, mode: string = 'name') {
  class PlaceholderWidget extends WidgetType {
    curFlag: string
    text: string
    constructor(text: string) {
      super()
      if (text) {
        const [curFlag, ...texts] = text.split('.')
        if (curFlag && texts.length) {
          this.text = texts.map(t => t.split(':')[mode === 'code' ? 1 : 0]).join('.')
          this.curFlag = curFlag
        }
      }
    }

    eq(other: PlaceholderWidget) {
      return this.text === other.text
    }

    toDOM() {
      const elt = document.createElement('span')
      if (!this.text)
        return elt

      const { backgroudColor, borderColor, textColor } = themes[this.curFlag]
      elt.style.cssText = `
      border: 1px solid ${borderColor};
      border-radius: 4px;
      line-height: 20px;
      background: ${backgroudColor};
      color: ${textColor};
      font-size: 12px;
      padding: 2px 7px;
      user-select: none;
      `
      elt.textContent = this.text
      return elt
    }

    ignoreEvent() {
      return true
    }
  }

  const placeholderMatcher = new MatchDecorator({
    regexp: /\[\[(.+?)\]\]/g,
    decoration: (match) => {
      return Decoration.replace({
        widget: new PlaceholderWidget(match[1]),
      })
    },
  })

  return ViewPlugin.fromClass(
    class {
      placeholders: DecorationSet
      constructor(view: EditorView) {
        this.placeholders = placeholderMatcher.createDeco(view)
      }

      update(update: ViewUpdate) {
        this.placeholders = placeholderMatcher.updateDeco(
          update,
          this.placeholders,
        )
      }
    },
    {
      decorations: (instance: any) => {
        return instance.placeholders
      },
      provide: (plugin: any) =>
        EditorView.atomicRanges.of((view: any) => {
          return view.plugin(plugin)?.placeholders || Decoration.none
        }),
    },
  )
}
