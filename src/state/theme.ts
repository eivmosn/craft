import { computed, defineComponent, h } from 'vue'
import type {
  GlobalThemeOverrides,
} from 'naive-ui'
import {
  NConfigProvider,
  NDialogProvider,
  NEl,
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
  darkTheme,
  lightTheme,
  useDialog,
  useLoadingBar,
  useMessage,
  useNotification,
} from 'naive-ui'
import { useDark, useToggle } from '@vueuse/core'

export const dark = useDark()

export const toggle = useToggle(dark)

export const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColorHover: '#1989FA',
    primaryColorSuppl: '#1989FA',
    primaryColor: '#1989FA',
    primaryColorPressed: '#1989FA',
  },
}

export const GlobalInject = defineComponent({
  name: 'GlobalInject',
  setup() {
    window.$dialog = useDialog()
    window.$message = useMessage()
    window.$loading = useLoadingBar()
    window.$notification = useNotification()
  },
  render() {
    return this.$slots.default?.()
  },
})

export const Provider = defineComponent({
  name: 'ThemeProvider',
  inheritAttrs: false,
  setup() {
    const theme = computed(() => dark.value ? darkTheme : lightTheme)
    toggle()
    return {
      theme,
    }
  },
  render() {
    return h(
      NConfigProvider,
      {
        themeOverrides,
        theme: this.theme,
        inlineThemeDisabled: true,
      },
      () => [
        h(NDialogProvider, () => [
          h(NNotificationProvider, () => [
            h(NMessageProvider, () => [
              h(NLoadingBarProvider, () => [
                h(GlobalInject, () => [
                  h(NEl, {
                    class: 'fc-container',
                  }, () => this.$slots.default?.()),
                ]),
              ]),
            ]),
          ]),
        ]),
      ],
    )
  },
})
