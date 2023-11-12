import { defineComponent } from 'vue'
import { Input } from 'src/config/element'
import { NInput } from 'naive-ui'
import { useState } from 'src/core/state'

export default defineComponent({
  inheritAttrs: false,
  name: 'App',
  setup() {
    const { value, setValue } = useState()

    const item = {
      key: '',
      field: 'field',
      component: 'Input',
      label: '字段1',
      props: {
        placeholder: '请输入',
        defaultValue: '1',
      },
    }

    return {
      item,
      value,
      setValue,
    }
  },
  render() {
    return (
      <div class="p-10">
        {JSON.stringify(this.value)}
        <NInput value={this.value} onUpdateValue={this.setValue} />
      </div>
    )
  },
})
