import {
  NForm,
} from 'naive-ui'
import type {
  PropType,
} from 'vue'
import RenderGrid from './RenderGrid'

export default defineComponent({
  inheritAttrs: false,
  name: 'RenderForm',
  props: {
    option: {
      type: Object as PropType<FC.Form>,
      default: () => ({
        data: {},
        items: [],
        config: {},
      }),
      required: true,
    },
  },
  setup(props) {
    const { option } = props
    const gap = computed(() => {
      return {
        x: option.config?.gapX || 10,
        y: option.config?.gapY || 10,
      }
    })
    return {
      gap,
      config: option.config,
    }
  },
  render() {
    return (
      <NForm
        showFeedback={false}
        requireMarkPlacement="left"
        labelWidth={this.config.labelWidth || 100}
        labelAlign={this.config.labelAlign || 'left'}
        labelPlacement={this.config.labelPlacement || 'left'}
      >
        <RenderGrid gap={this.gap} />
      </NForm>
    )
  },
})
