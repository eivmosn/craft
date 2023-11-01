import { type GlobalThemeOverrides, darkTheme, lightTheme } from 'naive-ui'
import { computed } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { THEME_COLOR } from './constants'

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
    primaryColorHover: THEME_COLOR,
    primaryColorSuppl: THEME_COLOR,
    primaryColor: THEME_COLOR,
    primaryColorPressed: THEME_COLOR,
  },
}
