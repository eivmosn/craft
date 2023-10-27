import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'FcNav',
  setup() {

  },
  render() {
    return (<div class="min-w-48px w-48px fc flex-col justify-end gap-22px b-right py-20px">
      {/* <div v-html={icon.alert} class="fc"></div> */}
    </div>)
  },
})
