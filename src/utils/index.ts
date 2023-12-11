export type CustomSlots<S extends string> = {
  [key in S]?: () => JSX.Element | number | null | string
}

export function excludeProps<P>(keys: Array<keyof P>, props: P) {
  const finalProps = {} as P
  for (const key in props) {
    if (!keys.includes(key))
      finalProps[key] = props[key]
  }
  return finalProps
}
