import { defineComponent } from 'vue'
import icon from '../icon.config'

export default defineComponent({
  inheritAttrs: false,
  name: 'FcNav',
  setup() {

  },
  render() {
    return (
      <div class="min-w-48px w-48px fc flex-col justify-start gap-22px b-right py-20px text-#333">
        <div v-html={icon.puzzle} class="fc"></div>
        <div v-html={icon.layout} class="fc"></div>
        <div v-html={icon.setting} class="fc"></div>
      </div>
    )
  },
})
