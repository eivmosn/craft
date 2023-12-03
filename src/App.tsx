import { defineComponent } from 'vue'
import Menubar from '@/view/Menubar'
import Monitor from '@/view/Monitor'
import Toolbar from '@/view/Toolbar'
import WidgetPanel from '@/view/WidgetPanel'
import SettingPanel from '@/view/SettingPanel'
import { Provider as ThemeProvider } from '@/state/theme'

export default defineComponent({
  inheritAttrs: false,
  name: 'FormCook',
  render() {
    return (
      <ThemeProvider>
        <div class="flex flex-col h-full">
          <Toolbar />
          <div class="flex-1 flex">
            <Menubar />
            <WidgetPanel />
            <Monitor />
            <SettingPanel />
          </div>
        </div>
      </ThemeProvider>
    )
  },
})
