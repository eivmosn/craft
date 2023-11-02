import { defineComponent, ref } from 'vue'
import { NTooltip } from 'naive-ui'
import i18n from 'i18n'
import icon from '../icon.config'

const navs = [
  {
    name: 'components',
    icon: icon.puzzle,
  },
  {
    name: 'layers',
    icon: icon.layers,
  },
  {
    name: 'schema',
    icon: icon.code,
  },
  {
    name: 'setting',
    icon: icon.setting,
  },
]

export default defineComponent({
  inheritAttrs: false,
  name: 'FcNav',
  setup() {
    const active = ref(0)
    return {
      active,
    }
  },
  render() {
    return (
      <div class="min-w-48px w-48px fc flex-col justify-start gap-22px b-right py-20px text-#666">
        {
          navs.map((nav, index) => {
            return (
              <NTooltip
                placement="right"
                v-slots={{
                  trigger: () => (
                    <div
                      v-html={nav.icon}
                      onClick={() => this.active = index}
                      class={['relative fc', this.active === index && 'after:(absolute h-12px w-3px b-rd-full bg-blue content-empty -left-7px)']}
                    />
                  ),
                }}
              >
                {i18n.en[nav.name]}
              </NTooltip>
            )
          })
        }
      </div>
    )
  },
})
