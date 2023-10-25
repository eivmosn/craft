import { defineComponent } from 'vue'
import i18n from 'i18n'
import { Paneview } from './FcView'

export default defineComponent({
  inheritAttrs: false,
  name: 'FCSettings',
  setup() {

  },
  render() {
    return (<div class="min-w-300px w-300px b-left">
      <Paneview title={i18n.en.settings}>

      </Paneview>
    </div>)
  },
})
