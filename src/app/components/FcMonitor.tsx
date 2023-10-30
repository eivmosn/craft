import { defineComponent, ref } from 'vue'
import { NFormItem, NInput } from 'naive-ui'
import { VueDraggable } from 'vue-draggable-plus'
import FcGroup from '../containers/FcGroup'
import FcOption from '../containers/FcOption'
import { Scrollview } from './FcView'

// const json: FC.Widget = {
//   id: '',
//   type: 'form',
//   field: 'form',
//   label: 'form',
//   props: {

//   },
//   children: [
//     {
//       id: '',
//       type: 'input',
//       label: 'Input',
//       field: 'name',
//       props: {},
//     },
//     {
//       id: '',
//       type: 'input',
//       label: 'Number',
//       field: 'name',
//       props: {},
//     },
//     {
//       id: '',
//       type: 'select',
//       label: 'Select',
//       field: 'name',
//       props: {},
//     },
//   ],
// }

export function renderWidget(widget: FC.Widget) {
  return (
    <FcOption active={widget.label === '数字'}>
      {
        widget.type === 'group'
          ? (
            <FcGroup widget={widget}>
              {widget.children?.map(item => renderWidget(item))}
            </FcGroup>
            )
          : (
            <NFormItem labelWidth={70} showFeedback={false} label={widget.label} labelPlacement="left" class="w-full">
              <NInput />
            </NFormItem>
            )
      }
    </FcOption>
  )
}

export default defineComponent({
  inheritAttrs: false,
  name: 'FcMonitor',
  setup() {
    const list = ref([])
    return {
      list,
    }
  },
  render() {
    return (
      <div class="h-[calc(100%-48px)] bg-[var(--fc-background-deep)] p-4px">
        <Scrollview class="b bg-[var(--fc-background-light)]">
          <VueDraggable
            animation={120}
            group={{
              name: 'group',
            }}
            modelValue={this.list}
            style={{
              alignContent: 'baseline',
            }}
            fallbackOnBody
            forceFallback
            scrollSensitivity={150}
            fallbackTolerance={5}
            class="grid grid-cols-1 h-[calc(100vh-58px)] gap-4px p-2px"
          >
            {this.list.map(item => renderWidget(item))}
          </VueDraggable>
        </Scrollview>
        {/* <div class="grid grid-cols-1 gap-4px p-2px">
          {json.children.map(widget => renderWidget(widget))}
        </div> */}
      </div>
    )
  },
})
