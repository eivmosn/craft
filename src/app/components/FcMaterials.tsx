import { defineComponent } from 'vue'
import i18n from 'i18n'
import { NInput } from 'naive-ui'
import Collapse from '../misc/Collapse'
import config from '../dev.config'
import icon from '../icon.config'
import { Paneview } from './FcView'

export default defineComponent({
  inheritAttrs: false,
  name: 'FCMaterials',
  setup() {

  },
  render() {
    return (<div class="min-w-258px w-258px b-right">
      <Paneview v-slots={{
        title: () => (<div class="w-full px-4px">
          <NInput placeholder="Search components" clearable />
        </div>),
        default: () => Object.keys(config).map((name) => {
          const components = config[name].components || []
          if (components.length) {
            return (<Collapse title={i18n.en[name]}>
              {
                config[name].components.map(component => (<div
                  key={component.type}
                  class="min-h-77px fc flex-col select-none gap-6px b bg-[var(--fc-background-light)] hover:b-blue"
                >
                  {
                    icon[component.type]
                      ? <div class="fc text-#666" v-html={icon[component.type]} />
                      : <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="none" stroke="#666" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 14v4.4a.6.6 0 0 0 .6.6H10m9-5v4.4a.6.6 0 0 1-.6.6H14m0-14h4.4a.6.6 0 0 1 .6.6V10M4 10V5.6a.6.6 0 0 1 .6-.6H10m4 14v1a2 2 0 1 1-4 0v-1m-6-9h1a2 2 0 1 1 0 4H4m15-4h1a2 2 0 1 1 0 4h-1m-5-9V4a2 2 0 1 0-4 0v1" /></svg>
                  }
                  <div class="w-full fc truncate px-2px text-12px">
                    <div class="max-w-94px truncate">{i18n.en[component.type]}</div>
                  </div>
                </div>))
              }
            </Collapse>)
          }
          return null
        }),
      }}
      />
    </div>)
  },
})
