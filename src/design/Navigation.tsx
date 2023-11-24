import {
  defineComponent,
} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'Navigation',
  setup() {

  },
  render() {
    return (
      <div class="min-w-48px w-48px text-#606266 b-right b-[var(--base-border-color)] fc flex-col justify-start gap-22px b-right py-20px">
        {/* <div class="fc">
          <svg width="25" height="25" viewBox="0 0 32 32">
            <path fill="currentColor" d="M16 24a.997.997 0 0 1-.474-.12l-13-7l.948-1.76L16 21.864l12.526-6.744l.948 1.76l-13 7A.997.997 0 0 1 16 24Z" />
            <path fill="currentColor" d="M16 30a.997.997 0 0 1-.474-.12l-13-7l.948-1.76L16 27.864l12.526-6.744l.948 1.76l-13 7A.997.997 0 0 1 16 30zm0-12a.997.997 0 0 1-.474-.12l-13-7a1 1 0 0 1 0-1.76l13-7a.998.998 0 0 1 .948 0l13 7a1 1 0 0 1 0 1.76l-13 7A.997.997 0 0 1 16 18zM5.11 10L16 15.864L26.89 10L16 4.136z" />
          </svg>
        </div> */}
        {/* <div class="fc">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32">
            <path fill="currentColor" d="M28 26H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2ZM4 10v14h24V10Z" />
            <path fill="currentColor" d="M10 20h11v2H10zm-4-8h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zM6 20h2v2H6zm0-4h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2zm8-4h4v2h-4zm0 4h4v2h-4zm-4 0h2v2h-2zm5 4h3v2h-3z" />
          </svg>
        </div> */}
        {/* <div class="fc">
          <svg width="25" height="25" viewBox="0 0 32 32">
            <path fill="currentColor" d="M27 16.76v-1.53l1.92-1.68A2 2 0 0 0 29.3 11l-2.36-4a2 2 0 0 0-1.73-1a2 2 0 0 0-.64.1l-2.43.82a11.35 11.35 0 0 0-1.31-.75l-.51-2.52a2 2 0 0 0-2-1.61h-4.68a2 2 0 0 0-2 1.61l-.51 2.52a11.48 11.48 0 0 0-1.32.75l-2.38-.86A2 2 0 0 0 6.79 6a2 2 0 0 0-1.73 1L2.7 11a2 2 0 0 0 .41 2.51L5 15.24v1.53l-1.89 1.68A2 2 0 0 0 2.7 21l2.36 4a2 2 0 0 0 1.73 1a2 2 0 0 0 .64-.1l2.43-.82a11.35 11.35 0 0 0 1.31.75l.51 2.52a2 2 0 0 0 2 1.61h4.72a2 2 0 0 0 2-1.61l.51-2.52a11.48 11.48 0 0 0 1.32-.75l2.42.82a2 2 0 0 0 .64.1a2 2 0 0 0 1.73-1l2.28-4a2 2 0 0 0-.41-2.51ZM25.21 24l-3.43-1.16a8.86 8.86 0 0 1-2.71 1.57L18.36 28h-4.72l-.71-3.55a9.36 9.36 0 0 1-2.7-1.57L6.79 24l-2.36-4l2.72-2.4a8.9 8.9 0 0 1 0-3.13L4.43 12l2.36-4l3.43 1.16a8.86 8.86 0 0 1 2.71-1.57L13.64 4h4.72l.71 3.55a9.36 9.36 0 0 1 2.7 1.57L25.21 8l2.36 4l-2.72 2.4a8.9 8.9 0 0 1 0 3.13L27.57 20Z" />
            <path fill="currentColor" d="M16 22a6 6 0 1 1 6-6a5.94 5.94 0 0 1-6 6Zm0-10a3.91 3.91 0 0 0-4 4a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4Z" />
          </svg>
        </div> */}
      </div>
    )
  },
})
