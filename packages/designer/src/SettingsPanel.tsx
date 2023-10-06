import { defineComponent, inject, ref } from 'vue'
import TitlePanel from "./container/TitlePanel";
import { NScrollbar, NTabPane, NTabs } from 'naive-ui';
import { settings } from "./config";

export default defineComponent({
  name: 'DndPanel',
  setup() {
    const designer = inject<{}>('designer')
    const tabValue = ref(settings.defaultValue)
    return {
      ...designer,
      tabValue
    }
  },
  render() {
    return <TitlePanel title='Property Settings'>
      <div class='fc p-4px relative before:(content-empty absolute left-0 right-0 h-1px bg-[var(--x-border)] top-48px)'>
        <NTabs paneStyle={{
          paddingTop: '6px',
        }} 
        v-model:value={this.tabValue}
        type='segment'>
          {
            settings.children.map((setting, index) => {
              return <NTabPane displayDirective='show' name={setting.name} tab={setting.label}>
                <div class='h-[calc(100vh-102px)]'>
                  <NScrollbar class='fit-edge'>
                    
                  </NScrollbar>
                </div>
              </NTabPane>
            })
          }
        </NTabs>
      </div>
    </TitlePanel>
  },
})
