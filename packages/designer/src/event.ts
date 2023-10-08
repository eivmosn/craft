import { computed } from "vue"
import { useDark, useToggle } from "@vueuse/core"
import { darkTheme, lightTheme } from "naive-ui"

export const dark = useDark()

export const toggle = useToggle(dark)

export const theme = computed(() => {
    return dark.value ? darkTheme : lightTheme
})