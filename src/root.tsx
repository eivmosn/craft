import {
  NConfigProvider,
  NDialogProvider,
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
  useDialog,
  useLoadingBar,
  useMessage,
  useNotification,
} from 'naive-ui'
import { defineComponent } from 'vue'
import FormCook from './app/components/FormCook'
import { useDarkMode } from './core/theme'

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

export default defineComponent({
  name: 'NConfigProvider',
  inheritAttrs: false,
  setup() {
    const { toggle, theme } = useDarkMode()
    toggle()
    return {
      theme,
    }
  },
  render() {
    return (<NConfigProvider theme={this.theme}>
      <NDialogProvider>
        <NNotificationProvider>
          <NMessageProvider>
            <NLoadingBarProvider >
              <GlobalInject>
                <FormCook />
              </GlobalInject>
            </NLoadingBarProvider>
          </NMessageProvider>
        </NNotificationProvider>
      </NDialogProvider>
    </NConfigProvider>)
  },
})
