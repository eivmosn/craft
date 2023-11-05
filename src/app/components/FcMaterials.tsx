import { defineComponent } from 'vue'
import i18n from 'i18n'
import { NInput } from 'naive-ui'
import { VueDraggable } from 'vue-draggable-plus'
import Collapse from '../misc/Collapse'
import { materials } from '../fc.config'
import { useComponentSearch } from '../core/hooks'
import { Paneview } from './FcView'

export default defineComponent({
  inheritAttrs: false,
  name: 'FCMaterials',
  setup() {
    const { onSearch, getChildren } = useComponentSearch()
    return {
      onSearch,
      getChildren,
    }
  },
  render() {
    return (
      <div class="min-w-258px w-258px b-right">
        <Paneview v-slots={{
          title: () => (
            <div class="w-full px-4px">
              <NInput
                clearable
                placeholder="Search components"
                onUpdateValue={this.onSearch}
                v-slots={{
                  prefix: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 17l4 4M3 11a8 8 0 1 0 16 0a8 8 0 0 0-16 0Z" /></svg>,
                }}
              />
            </div>
          ),
          default: () => materials.map(({ label, children }) => {
            return (
              <Collapse title={i18n.en[label]}>
                <VueDraggable
                  key={label}
                  sort={false}
                  forceFallback
                  fallbackOnBody
                  fallbackTolerance={5}
                  modelValue={children}
                  group={{
                    pull: 'clone',
                    put: false,
                    name: 'group',
                  }}
                  class="fc-collapse-item grid grid-cols-3 gap-4px p-4px"
                >
                  {
                    this.getChildren(label, children)
                      .map(({ type, icon, label }) => {
                        return (
                          <div
                            key={type}
                            class="min-h-77px fc flex-col select-none gap-6px b bg-[var(--fc-background-light)] hover:b-blue"
                          >
                            <div class="fc text-#666" v-html={icon} />
                            <div class="w-full fc truncate px-2px text-12px">
                              <div class="max-w-94px truncate">{i18n.en[label]}</div>
                            </div>
                          </div>
                        )
                      })
                  }
                </VueDraggable>
              </Collapse>
            )
          }),
        }}
        />
      </div>
    )
  },
})
