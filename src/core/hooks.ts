import { ref } from 'vue'

export function useFormCook() {
  const schema = ref({
    name: '',
    description: '',
  })
  return {
    schema,
  }
}
