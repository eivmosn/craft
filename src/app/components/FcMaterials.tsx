import { defineComponent } from 'vue'
import Collapse from '../misc/Collapse'
import { Paneview } from './FcView'

export default defineComponent({
  inheritAttrs: false,
  name: 'FCMaterials',
  setup() {

  },
  render() {
    return (<div class="min-w-270px w-270px b-right">
      <Paneview title="组件">
        <Collapse />
        <Collapse />
        <Collapse />
      </Paneview>
    </div>)
  },
})
