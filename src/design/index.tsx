import Draggable from 'vuedraggable'
import {
  onDragStart,
} from 'src/shared/drag'
import ResizePanel from './ResizePanel'
import Ghost from './Ghost'

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
                list={this.list}
                class="grid grid-cols-1 gap-10px"
                itemKey="id"
                forceFallback={true}
                fallbackOnBody={true}
                fallbackTolerance={5}
                fallbackClass="ghost"
                onStart={event => onDragStart(event, <Ghost widget={{
                  label: '组件名称',
                }}
                                                     />)}
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
