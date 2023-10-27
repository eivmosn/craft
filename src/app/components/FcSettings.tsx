import { defineComponent } from 'vue'
import i18n from 'i18n'
import { NButton, NFormItem, NSlider } from 'naive-ui'
import { Paneview } from './FcView'

export default defineComponent({
  inheritAttrs: false,
  name: 'FCSettings',
  setup() {

  },
  render() {
    return (<div class="min-w-300px w-300px b-left">
      <Paneview v-slots={{
        title: () => (<div class="w-full px-10px">
          {i18n.en.settings}
        </div>),
      }}
      >
        <div class="p-10px">
          {/* <NFormItem showFeedback={false} label="栅格:" labelPlacement="left">
            <NSlider
              tooltip={false}
              value={12}
              max={24} min={4} v-slots={{
                thumb: () => <NButton type="primary" circle size="tiny">12</NButton>,
              }}
            />
          </NFormItem> */}
        </div>
      </Paneview>
    </div>)
  },
})
