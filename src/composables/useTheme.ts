import { useDark, useToggle } from '@vueuse/core'

export function useTheme() {
  const dark = useDark()
  const toggle = useToggle(dark)
  return {
    dark,
    toggle,
  }
}
