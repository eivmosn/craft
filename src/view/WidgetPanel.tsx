import { defineComponent, ref } from 'vue'
import { NInput, NScrollbar } from 'naive-ui'
import { useDraggable } from 'vue-draggable-plus'

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
import { createGhost } from '../state/dnd'

export default defineComponent({
  inheritAttrs: false,
  name: 'WidgetPanel',
  setup() {
    const dragRef = ref<HTMLElement | null>(null)

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

    useDraggable(dragRef, widgets, {
      group: {
        name: 'widget',
        pull: 'clone',
        put: false,
      },
      sort: false,
      forceFallback: true,
      fallbackOnBody: true,
      fallbackTolerance: 5,
      scrollSensitivity: 150,
      onStart: (event) => {
        const index = event.oldIndex as number
        const widget = widgets.value[index]
        createGhost((event as unknown as { originalEvent: MouseEvent }).originalEvent, widget)
      },
    })

    return {
      dragRef,
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
          <div class="grid grid-cols-2 gap-8px" ref="dragRef">
            {
              this.widgets.map((element, index) => (
                <div key={index} class="p-4px fs gap-10px px-8px b-rd-4px hover:bg-[var(--hover-color)]">
                  <div class="fc text-blue-5" v-html={element.icon} />
                  <div class="text-[var(--text-color-2)]">{element.label['zh-CN']}</div>
                </div>
              ))
            }
          </div>
        </NScrollbar>
      </div>
    )
  },
})
