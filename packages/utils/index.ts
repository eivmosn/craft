import dayjs from 'dayjs'
import type { JSX } from 'vue/jsx-runtime'

export { createComponent } from './hoc'

export type CustomSlots<S extends string> = {
  [key in S]?: () => JSX.Element | number | null | string
}

export function excludeProps<P>(keys: Array<keyof P>, props: P) {
  const illegalProps = {} as P
  for (const key in props) {
    if (!keys.includes(key))
      illegalProps[key] = props[key]
  }
  return illegalProps
}

export function createSlots<P extends Record<'suffix' | 'prefix', string>>(_props: P) {
  const slots: CustomSlots<'suffix' | 'prefix'> = {}

  if (_props.suffix)
    slots.suffix = () => _props.suffix
  if (_props.prefix)
    slots.prefix = () => _props.prefix

  return {
    slots,
  }
}

export function toDateNumber(time: string) {
  return dayjs(time).valueOf()
}
