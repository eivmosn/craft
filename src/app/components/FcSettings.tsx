import { defineComponent } from 'vue'
import { Paneview } from './FcView'

export default defineComponent({
  inheritAttrs: false,
  name: 'FCSettings',
  setup() {

  },
  render() {
    return (<div class="min-w-300px w-300px b-left">
      <Paneview title="属性配置">

      </Paneview>
    </div>)
  },
})
