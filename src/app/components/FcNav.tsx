import { defineComponent } from 'vue'
import { NTooltip } from 'naive-ui'
import icon from '../icon.config'

const navs = [
  {
    name: 'Components',
    icon: icon.puzzle,
  },
  {
    name: 'Layers',
    icon: icon.layers,
  },
  {
    name: 'Schema',
    icon: icon.code,
  },
  {
    name: 'Settings',
    icon: icon.setting,
  },
]

export default defineComponent({
  inheritAttrs: false,
  name: 'FcNav',
  render() {
    return (
      <div class="min-w-48px w-48px fc flex-col justify-start gap-22px b-right py-20px text-#666">
        {
          navs.map(nav => (
            <NTooltip
              placement="right"
              v-slots={{
                trigger: () => <div v-html={nav.icon} class="relative fc hover:after:(absolute h-12px w-3px b-rd-full bg-blue content-empty -left-7px)" />,
              }}
            >
              {nav.name}
            </NTooltip>
          ))
        }
      </div>
    )
  },
})
