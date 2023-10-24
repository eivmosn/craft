import type { InjectionKey } from 'vue'

export * from './theme'

export const FormCook: InjectionKey<FC.State> = Symbol('$form-cook')
