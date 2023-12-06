import { defineComponent, ref } from 'vue'
import { NInput, NScrollbar } from 'naive-ui'
import {
  Checkbox,
  ColorPicker,
  Date,
  HTML,
  IconPicker,
  Image,
  Input,
  InputNumber,
  Link,
  Password,
  QRCode,
  Radio,
  Rate,
  Select,
  TextArea,
  Time,
} from '../element'
import { Container } from '../state/dnd'

export default defineComponent({
  inheritAttrs: false,
  name: 'WidgetPanel',
  setup() {
    const widgets = ref([
      Input,
      TextArea,
      InputNumber,
      Password,
      Select,
      Date,
      Time,
      Rate,
      Image,
      IconPicker,
      Checkbox,
      Radio,
      QRCode,
      HTML,
      Link,
      ColorPicker,
    ])
    return {
      widgets,
    }
  },
  render() {
    return (
      <div class="w-263px h-full select-none b-right b-[var(--border-color)] bg-[var(--card-color)] flex flex-col">
        <div class="p-8px">
          <NInput clearable placeholder="Search..." class="bg-[var(--action-color)]" />
        </div>
        <NScrollbar class="flex-1 p-8px">
          <Container widgets={this.widgets} class="grid grid-cols-2 gap-8px">
            {{
              default: ({ element, index }: any) => (
                <div key={index} class="p-4px fs gap-10px px-8px b-rd-4px hover:bg-[var(--hover-color)]">
                  <div class="fc text-blue-5" v-html={element.icon} />
                  <div class="text-[var(--text-color-2)]">{element.label['zh-CN']}</div>
                </div>
              ),
            }}
          </Container>
        </NScrollbar>
      </div>
    )
  },
})
