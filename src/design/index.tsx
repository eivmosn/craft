import Tools from './Tools'
import Navigation from './Navigation'
import ResizePanel from './ResizePanel'
import Component from './Component'
import Workbench from './Workbench'

export interface DesignState {
  draging: Ref<boolean>
  targetList: Ref<[]>
  background: ComputedRef<string>
}

export function useDesignState() {
  const draging = ref(false)
  const targetList = ref([])

  const background = computed(() => {
    return (draging.value && targetList.value.length === 0) && 'bg-blue-100'
  })

  return {
    draging,
    background,
    targetList,
  }
}

export default defineComponent({
  inheritAttrs: false,
  setup() {
    provide('design', useDesignState())
  },
  render() {
    return (
      <ResizePanel>
        {{
          navigation: () => <Navigation />,
          component: () => <Component />,
          default: () => (
            <div class="h-full">
              <Tools />
              <Workbench />
            </div>
          ),
        }}
      </ResizePanel>
    )
  },
})
