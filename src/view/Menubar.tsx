import { NTooltip } from 'naive-ui'
import type { FunctionalComponent } from 'vue'
import { defineComponent } from 'vue'

export const MenuItem: FunctionalComponent<{
  text: string
  active?: boolean
  placement?: InstanceType<typeof NTooltip>['placement']
}> = (props, { slots }) => {
  return (
    <NTooltip
      showArrow
      arrowPointToCenter
      placement={props.placement || 'right'}
    >
      {{
        default: () => props.text,
        trigger: () => (
          <div class={['fc b-rd-4px p-4px text-[var(--text-color-2)] hover:bg-[var(--hover-color)]', props.active && 'bg-[var(--hover-color)]']}>
            {slots.default?.()}
          </div>
        ),
      }}
    </NTooltip>
  )
}

export default defineComponent({
  inheritAttrs: false,
  name: 'Menubar',
  render() {
    return (
      <div class="fc flex-col justify-start py-10px gap-10px w-48px b-right b-[var(--border-color)] bg-[var(--card-color)]">
        <MenuItem text="组件">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32">
            <path fill="currentColor" d="M20 21h-8a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2Zm-8-4v2h8v-2Z" />
            <path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v16a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-2 24H6V12h20Zm2-18H4V6h24v4Z" />
          </svg>
        </MenuItem>
        <MenuItem text="层级">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32">
            <path fill="currentColor" d="M16 24a.997.997 0 0 1-.474-.12l-13-7l.948-1.76L16 21.864l12.526-6.744l.948 1.76l-13 7A.997.997 0 0 1 16 24Z" />
            <path fill="currentColor" d="M16 30a.997.997 0 0 1-.474-.12l-13-7l.948-1.76L16 27.864l12.526-6.744l.948 1.76l-13 7A.997.997 0 0 1 16 30zm0-12a.997.997 0 0 1-.474-.12l-13-7a1 1 0 0 1 0-1.76l13-7a.998.998 0 0 1 .948 0l13 7a1 1 0 0 1 0 1.76l-13 7A.997.997 0 0 1 16 18zM5.11 10L16 15.864L26.89 10L16 4.136z" />
          </svg>
        </MenuItem>
        <MenuItem text="代码">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32">
            <path fill="currentColor" d="m31 16l-7 7l-1.41-1.41L28.17 16l-5.58-5.59L24 9l7 7zM1 16l7-7l1.41 1.41L3.83 16l5.58 5.59L8 23l-7-7zm11.42 9.484L17.64 6l1.932.517L14.352 26z" />
          </svg>
        </MenuItem>
      </div>
    )
  },
})
