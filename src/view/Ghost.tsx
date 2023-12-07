import {
  NBadge,
  NButton,
} from 'naive-ui'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'Ghost',
  props: {
    widget: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    const badgeRef = ref<InstanceType<typeof NBadge>>()

    const removeParentStyle = () => {
      if (badgeRef.value && badgeRef.value.$el) {
        const element = badgeRef.value.$el.parentElement as HTMLElement
        element.style.opacity = '1'
        element.style.border = 'none'
      }
    }

    onMounted(() => removeParentStyle())

    return {
      badgeRef,
    }
  },
  render() {
    return (
      <NBadge ref="badgeRef" value={this.widget.length}>
        <NButton type="info" size="small">
          {this.widget.label['zh-CN']}
        </NButton>
      </NBadge>
    )
  },
})
