import { defineComponent, inject } from 'vue'
import TitlePanel from "./container/TitlePanel";
import { NTab, NTabs } from 'naive-ui';

export default defineComponent({
  name: 'DndPanel',
  setup() {
    const designer = inject<{}>('designer')
    return {
      ...designer
    }
  },
  render() {
    return <TitlePanel title='Property Settings'>
      <div class='fc p-4px b-bottom b-[var(--x-border)]'>
        <NTabs type='segment' defaultValue='Basics'>
          <NTab name='Basics' />
          <NTab name='Styles' />
          <NTab name='Events' />
        </NTabs>
      </div>
      <div class='h-[calc(100%-96px)] p-4px'>
          new version 
      </div>
    </TitlePanel>
  },
})
