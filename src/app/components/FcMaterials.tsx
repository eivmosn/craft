import { defineComponent } from 'vue'
import i18n from 'i18n'
import Collapse from '../misc/Collapse'
import config from '../dev.config'
import { Paneview } from './FcView'

export default defineComponent({
  inheritAttrs: false,
  name: 'FCMaterials',
  setup() {

  },
  render() {
    return (<div class="min-w-258px w-258px b-right">
      <Paneview title={i18n.en.widgets}>
        {
          Object.keys(config).map((name) => {
            const components = config[name].components || []
            if (components.length) {
              return (<Collapse title={i18n.en[name]}>
                {
                  config[name].components.map(component => (<div
                    key={component.type}
                    class="min-h-77px fc flex-col select-none gap-6px b bg-[var(--fc-background-light)]"
                  >
                    <div class="fc">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="none" stroke="#666" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 3H5a2 2 0 0 0-2 2v2m14-4h2a2 2 0 0 1 2 2v2m-5 1v2M8 8v2m1 6s1 1 3 1s3-1 3-1m-3-8v5h-1m-4 8H5a2 2 0 0 1-2-2v-2m14 4h2a2 2 0 0 0 2-2v-2" /></svg>
                    </div>
                    <div class="w-full fc truncate px-2px text-12px">
                      <div class="max-w-94px truncate">{i18n.en[component.type]}</div>
                    </div>
                  </div>))
                }
              </Collapse>)
            }
            return null
          })
        }
      </Paneview>
    </div>)
  },
})
