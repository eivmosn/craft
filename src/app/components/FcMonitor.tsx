import { defineComponent } from 'vue'
import { NFormItem, NInput } from 'naive-ui'
import FcGroup from '../containers/FcGroup'
import FcOption from '../containers/FcOption'
import { Scrollview } from './FcView'

const json: FC.Widget = {
  id: '',
  type: 'form',
  field: 'form',
  label: 'form',
  props: {

  },
  children: [
    {
      id: '',
      type: 'input',
      label: '名字',
      field: 'name',
      props: {},
    },
  ],
}

export function renderWidget(widget: FC.Widget) {
  return (<FcOption >
    {
      widget.type === 'group'
        ? <FcGroup widget={widget}>
          {widget.children?.map(item => renderWidget(item))}
        </FcGroup>
        : <NFormItem showFeedback={false} label="测试:" labelPlacement="left" class="w-full">
          <NInput />
        </NFormItem>
    }
  </FcOption>)
}

export default defineComponent({
  inheritAttrs: false,
  name: 'FcMonitor',
  setup() {

  },
  render() {
    return (<div class="h-[calc(100%-48px)] bg-[var(--fc-background-deep)] p-4px">
      {/* <Scrollview class="b bg-[var(--fc-background-light)] p-2px">
      </Scrollview> */}
      {json.children.map(widget => renderWidget(widget))}

    </div>)
  },
})
