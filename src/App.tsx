import { defineComponent, ref } from 'vue'
import Menubar from '@/view/Menubar'
import Monitor from '@/view/Monitor'
import Toolbar from '@/view/Toolbar'
import WidgetPanel from '@/view/WidgetPanel'
import SettingPanel from '@/view/SettingPanel'
import { Provider as ThemeProvider } from '@/state/theme'

export default defineComponent({
  inheritAttrs: false,
  name: 'FormCook',
  setup() {
    const size = ref<'mobile' | 'laptop' | 'tablet'>('laptop')
    return {
      size,
    }
  },
  render() {
    return (
      <ThemeProvider>
        <div class="flex flex-col h-full">
          <Toolbar onChangeSize={type => this.size = type} />
          <div class="flex-1 flex h-[calc(100%-48px)]">
            <Menubar />
            <WidgetPanel />
            <Monitor size={this.size} />
            <SettingPanel />
          </div>
        </div>
      </ThemeProvider>
    )
  },
})
