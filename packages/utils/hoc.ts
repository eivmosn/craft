import { type DefineComponent, defineComponent, h, ref, useAttrs } from 'vue'

export function createComponent(component: DefineComponent) {
  return defineComponent({
    setup() {
      const value = ref('')
      const attrs = useAttrs()
      const onUpdateValue = (val: string) => {
        value.value = val
      }
      console.log(attrs)
      return {
        value,
        onUpdateValue,
      }
    },
    render() {
      return h(component, {
        value: this.value,
        onUpdateValue: this.onUpdateValue,
      })
    },
  })
}
