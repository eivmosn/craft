import { defineComponent } from 'vue'
import { NFormItem, NInput } from 'naive-ui'
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
    {
      id: '',
      type: 'select',
      label: '专业',
      field: 'comm',
      props: {},
    },
    {
      id: '',
      type: 'group',
      label: '分组一',
      field: 'group',
      props: {},
      children: [
        {
          id: '',
          type: 'input',
          label: '电话',
          field: 'phone',
          props: {},
        },
        {
          id: '',
          type: 'input',
          label: '地址',
          field: 'address',
          props: {},
        },
      ],
    },
  ],
}

export function renderWidget(widget: FC.Widget) {
  return widget.label
}

export function renderWidgets(widgets: FC.Widget[]) {
  return widgets.map(widget => renderWidget(widget))
}

export default defineComponent({
  inheritAttrs: false,
  name: 'FcMonitor',
  setup() {
    console.log(json)
  },
  render() {
    return (<div class="h-[calc(100%-48px)] bg-[var(--fc-background-deep)] p-4px">
      <Scrollview class="b bg-[var(--fc-background-light)] p-2px">
        {renderWidgets(json.children)}
      </Scrollview>
    </div>)
  },
})
