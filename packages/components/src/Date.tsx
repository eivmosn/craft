import { NDatePicker, datePickerProps } from 'naive-ui'
import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'
import { excludeProps, toDateNumber } from '@form-cook/utils'

export const extendDatePickerProps = {
  ...datePickerProps,
  value: {
    type: [String, Number] as PropType<string | number>,
  },
}

export const Date = defineComponent({
  name: 'Date',
  inheritAttrs: false,
  props: extendDatePickerProps,
  setup(props) {
    const value = computed(() => {
      if (!props.value)
        return null
      if (typeof props.value === 'string')
        return toDateNumber(props.value)
      else if (typeof props.value === 'number')
        return props.value
      return null
    })
    return {
      value,
    }
  },
  render() {
    const props = excludeProps(['value'], this.$props)
    return (
      <NDatePicker
        {...props}
        value={this.value}
      />
    )
  },
})
