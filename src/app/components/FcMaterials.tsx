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
        <Collapse>
          {
            Array.from({ length: 13 }).map(() => <div class="min-h-89.66px bg-[var(--fc-background-light)]"></div>)
          }
          <div
            style={{
              minHeight: '89.66px',
              gridColumnStart: 'span 2',
              background: 'var(--fc-background-light)',
            }}
          />
        </Collapse>
        <Collapse>
          {
            Array.from({ length: 13 }).map(() => <div class="min-h-89.66px bg-[var(--fc-background-light)]"></div>)
          }
          <div
            style={{
              minHeight: '89.66px',
              gridColumnStart: 'span 2',
              background: 'var(--fc-background-light)',
            }}
          />
        </Collapse>
        <Collapse>
          {
            Array.from({ length: 3 }).map(() => <div class="min-h-89.66px bg-[var(--fc-background-light)]"></div>)
          }
          <div
            style={{
              minHeight: '89.66px',
              gridColumnStart: 'span 3',
              background: 'var(--fc-background-light)',
            }}
          />
        </Collapse>
      </Paneview>
    </div>)
  },
})
