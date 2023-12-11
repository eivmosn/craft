import type { SelectOption } from 'naive-ui'
import { NSelect, NText, selectProps } from 'naive-ui'
import { defineComponent } from 'vue'

export const extendsSelectProps = {
  ...selectProps,
}

export interface ExtendsSelectOption extends SelectOption {
  _label: string
  _value: string
  _description: string
}

export default defineComponent({
  inheritAttrs: false,
  name: 'LaptopSelect',
  props: extendsSelectProps,
  setup() {

  },
  render() {
    const renderLabel = (option: ExtendsSelectOption) => {
      console.log(option)
      return (
        <div class="py-2px">
          <span>{option._label}</span>
          {option._description && (
            <NText depth={3} class="block text-13px">
              {option._description}
            </NText>
          )}
        </div>
      )
    }

    return (
      <NSelect
        options={[
          {
            _label: 'MacBookPro-2023-M2Max',
            _value: 'mac',
            _description: '苹果电脑苹果电脑苹果电脑',
          },
        ]}
        // show
        labelField="_label"
        valueField="_value"
        renderLabel={renderLabel}
      />
    )
  },
})
