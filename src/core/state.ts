import { ref } from 'vue'

export function useState() {
  const value = ref()

  const setValue = (val: string) => {
    value.value = val
  }

  return {
    value,
    setValue,
  }
}
