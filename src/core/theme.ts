import { type GlobalThemeOverrides, darkTheme, lightTheme } from 'naive-ui'
import { computed } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { Color } from './enums'

export function useDarkMode() {
  const dark = useDark()
  const toggle = useToggle(dark)

  const theme = computed(() => {
    return dark.value ? darkTheme : lightTheme
  })

  return {
    dark,
    theme,
    toggle,
  }
}

export const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColorHover: Color.PRIMARY,
    primaryColorSuppl: Color.PRIMARY,
    primaryColor: Color.PRIMARY,
    primaryColorPressed: Color.PRIMARY,
  },
}
