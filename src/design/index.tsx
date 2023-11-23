// import Draggable from 'vuedraggable'
// import {
//   onDragStart,
// } from '../shared/drag'
import ResizePanel from './ResizePanel'

export default defineComponent({
  inheritAttrs: false,
  name: 'index',
  setup() {
    const list = ref([
      {
        name: 'Joao',
        id: 12,
        label: '组件01',
      },
      {
        name: 'Joao',
        id: 13,
        label: '组件02',
      },
      {
        name: 'Joao',
        id: 1,
        label: '组件03',
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
              {/* <Draggable
                itemKey="id"
                forceFallback
                fallbackOnBody
                list={this.list}
                animation={120}
                fallbackClass="ghost"
                onStart={onDragStart}
                fallbackTolerance={5}
                class="grid grid-cols-1 gap-10px"
              >
                {{
                  item: ({ element }: { element: any }) => <div class="h-50px b bg-indigo">{element.id}</div>,
                }}
              </Draggable> */}
            </div>
          ),
          default: () => <div></div>,
          right: () => <div></div>,
        }}
      </ResizePanel>
    )
  },
})
