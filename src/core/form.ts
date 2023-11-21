import type {
  FormItemRule,
} from 'naive-ui'

export function formLabel(label: string, suffix: string): string {
  return (suffix && label) ? `${label}${suffix}` : label
}

export function showLabel(): boolean {
  return true
}

export function formRule(): FormItemRule {
  return {
    trigger: [''],
    required: true,
    type: 'string',
  }
}

export function errorMessage(): string {
  return ''
}

export function placeholder(): string {
  return ''
}
