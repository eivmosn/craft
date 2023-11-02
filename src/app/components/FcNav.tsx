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
        <div v-html={icon.puzzle} class="relative fc after:(absolute left-5px right-0 h-3px w-18px b-rd-full bg-blue content-empty -bottom-7px)"></div>
        <div v-html={icon.layout} class="relative fc after:(absolute left-5px right-0 h-3px w-18px b-rd-full bg-red content-empty -bottom-7px)"></div>
        <div v-html={icon.setting} class="relative fc after:(absolute left-5px right-0 h-3px w-18px b-rd-full bg-green content-empty -bottom-7px)"></div>
        <div v-html={icon.puzzle} class="relative fc after:(absolute left-5px right-0 h-3px w-18px b-rd-full bg-green content-empty -bottom-7px)"></div>
        <div v-html={icon.setting} class="relative fc after:(absolute left-5px right-0 h-3px w-18px b-rd-full bg-green content-empty -bottom-7px)"></div>
      </div>
    )
  },
})
