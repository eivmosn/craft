import type {
  SelectFilter,
  SelectOption,
  SelectRenderLabel,
  SelectRenderTag,
} from 'naive-ui'
import { NSelect, NText, selectProps } from 'naive-ui'
import { defineComponent } from 'vue'

export interface ExtendsSelectOption extends SelectOption {
  _label: string
  _value: string
  _description: string
}

export const extendsSelectProps = {
  ...selectProps,
}

export const renderLabel: SelectRenderLabel = (option) => {
  const { _label, _description, _value } = option as ExtendsSelectOption
  return (
    <div class="py-2px text-truncate">
      <span>{_label}</span>
      {_description && (
        <NText depth={3} class="block text-13px text-truncate">
          {_description}
        </NText>
      )}
    </div>
  )
}

export const renderTag: SelectRenderTag = ({ option }) => {
  const { _label } = option as ExtendsSelectOption
  return (
    <div>
      {_label}
    </div>
  )
}

export const onFilter: SelectFilter = (pattern, option) => {
  const keyWord = pattern.toUpperCase()
  const propertiesToCheck = ['_description', '_label', '_value']
  return propertiesToCheck.some((property) => {
    const value = (option[property] as string).toUpperCase()
    return value?.includes(keyWord)
  }) || false
}

export default defineComponent({
  inheritAttrs: false,
  name: 'LaptopSelect',
  props: extendsSelectProps,
  render() {
    return (
      <NSelect
        {...this.$props}
        clearable
        options={[]}
        filterable
        labelField="_label"
        valueField="_value"
        filter={onFilter}
        renderTag={renderTag}
        renderLabel={renderLabel}
      />
    )
  },
})
