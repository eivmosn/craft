import { useDark, useToggle } from '@vueuse/core'
import { darkTheme, lightTheme } from 'naive-ui'
import { computed } from 'vue'

export function useTheme() {
  const dark = useDark()
  const toggle = useToggle(dark)

  const theme = computed(() => dark.value ? darkTheme : lightTheme)

  return {
    dark,
    theme,
    toggle,
  }
}
