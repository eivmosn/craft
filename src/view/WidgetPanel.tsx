import { defineComponent } from 'vue'
import { Checkbox, ColorPicker, Date, HTML, IconPicker, Image, Input, InputNumber, Link, Password, QRCode, Radio, Rate, Select, TextArea, Time } from '../element'

export default defineComponent({
  inheritAttrs: false,
  name: 'WidgetPanel',
  setup() {

  },
  render() {
    return (
      <div class="w-263px select-none b-right b-[var(--border-color)] bg-[var(--card-color)] p-8px">
        <div class="grid grid-cols-1 gap-8px">
          {
            [
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
            ].map(widget => (
              <div class="p-4px fs gap-10px px-8px b-rd-3px hover:bg-[var(--hover-color)]">
                <div class="fc text-blue-5" v-html={widget.icon} />
                <div class="text-[var(--text-color-2)]">{widget.label['zh-CN']}</div>
              </div>
            ))
          }
        </div>
      </div>
    )
  },
})
