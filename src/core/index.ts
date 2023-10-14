import type { InjectionKey, Ref } from 'vue'

export * from './theme'
export * from './hooks'

export const FormCook: InjectionKey<FC.State> = Symbol('$form-cook')
