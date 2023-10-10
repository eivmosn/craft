import { defineComponent } from 'vue'
import { ConfigProvider, DndPanel, Navbar, SettingsPanel, Toolbar, Workspace } from 'components/index'

export default defineComponent({
  setup() {

  },
  render() {
    return (<ConfigProvider>
      <div class="h-full flex">
        <Navbar />
        <DndPanel />
        <Workspace v-slots={{
          toolbar: () => <Toolbar />,
        }}
        />
        <SettingsPanel />
      </div>
    </ConfigProvider>)
  },
})
