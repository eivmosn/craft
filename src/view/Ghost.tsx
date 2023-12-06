import {
  NBadge,
  NButton,
} from 'naive-ui'
import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'Ghost',
  props: {
    widget: {
      type: Object,
      default: () => ({}),
    },
  },
  render() {
    return (
      <NBadge value={this.widget.length}>
        <NButton type="info" size="small">
          {this.widget.label['zh-CN']}
        </NButton>
      </NBadge>
    )
  },
})
