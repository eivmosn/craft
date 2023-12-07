import {
  NBadge,
  NButton,
} from 'naive-ui'
import { computed, defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'Ghost',
  props: {
    widget: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const badgeRef = ref<InstanceType<typeof NBadge>>()

    const ghostName = computed(() => props.widget.label['zh-CN'])
    const multipleSelect = computed(() => props.widget.length)

    const removeParentStyle = () => {
      if (badgeRef.value && badgeRef.value.$el) {
        const element = badgeRef.value.$el.parentElement as HTMLElement
        element.style.opacity = '1'
        element.style.border = 'none'
      }
    }

    onMounted(removeParentStyle)

    return {
      badgeRef,
      ghostName,
      multipleSelect,
    }
  },
  render() {
    return (
      <NBadge ref="badgeRef" value={this.multipleSelect}>
        <NButton type="info" size="small">
          {this.ghostName}
        </NButton>
      </NBadge>
    )
  },
})
