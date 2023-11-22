import Draggable from 'vuedraggable'

import ResizePanel from './ResizePanel'

export default defineComponent({
  inheritAttrs: false,
  name: 'index',
  setup() {
    const list = ref([
      {
        name: 'Joao',
        id: 12,
      },
      {
        name: 'Joao',
        id: 13,
      },
      {
        name: 'Joao',
        id: 1,
      },
    ])

    return {
      list,
    }
  },
  render() {
    return (
      <ResizePanel>
        {{
          nav: () => <div class="w-50px b-right b-[var(--base-border-color)]"></div>,
          left: () => (
            <div class="p-5">
              <Draggable
                itemKey="id"
                forceFallback
                fallbackOnBody
                list={this.list}
                fallbackTolerance={5}
                fallbackClass="ghost"
                class="grid grid-cols-1 gap-10px"
              >
                {{
                  item: ({ element }: { element: any }) => <div class="h-50px b">{element.id}</div>,
                }}
              </Draggable>
            </div>
          ),
          default: () => <div></div>,
          right: () => <div></div>,
        }}
      </ResizePanel>
    )
  },
})
