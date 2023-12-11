import { defineComponent } from 'vue'
import type { ControllerSlot } from '../Controller'
import Controller, { Action } from '../Controller'

export default defineComponent({
  inheritAttrs: false,
  name: 'Grid',
  setup() {

  },
  render() {
    return (
      <Controller
        active
        v-slots={{
          default: () => (
            <div class="w-full p-2px grid grid-cols-[repeat(24,minmax(0px,1fr))] grid-content-start gap-4px">
              <div
                class="b min-h-40px"
                style={{
                  gridColumn: 'span 12 / span 12',
                }}
              >
              </div>
            </div>
          ),
          button: () => (
            <Action
              label="添加"
              value="add"
              icon={() => (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                  <g fill="currentColor">
                    <path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Z" opacity=".2" />
                    <path d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z" />
                  </g>
                </svg>
              )}
            />
          ),
        } as ControllerSlot}
      />
    )
  },
})
