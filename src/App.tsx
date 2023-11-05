import {
  NConfigProvider,
  NDialogProvider,
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
import { computed, defineComponent } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import FormCook from './app/components/FormCook'

const GlobalInject = defineComponent({
  name: 'GlobalInject',
  inheritAttrs: false,
  setup() {
    const dialog = useDialog()
    const message = useMessage()
    const loadingBar = useLoadingBar()
    const notification = useNotification()

    window.$dialog = dialog
    window.$message = message
    window.$loading = loadingBar
    window.$notification = notification
  },
  render() {
    return this.$slots.default?.()
  },
})

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

export default defineComponent({
  name: 'NConfigProvider',
  inheritAttrs: false,
  setup() {

  },
  render() {
    return (
      <NConfigProvider>
        <NDialogProvider>
          <NNotificationProvider>
            <NMessageProvider>
              <NLoadingBarProvider>
                <GlobalInject>
                  <FormCook />
                </GlobalInject>
              </NLoadingBarProvider>
            </NMessageProvider>
          </NNotificationProvider>
        </NDialogProvider>
      </NConfigProvider>
    )
  },
})
