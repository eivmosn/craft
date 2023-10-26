import { reactive, readonly } from 'vue'
import { set } from '@eivmosn/utils'

const state = reactive({

})

export function setState<T>(path: string, val: T) {
  set(state, path, val)
}

export function useState() {
  return {
    state: readonly(state),
    setState,
  }
}
