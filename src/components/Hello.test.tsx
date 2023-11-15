import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Hello from './Hello'

describe('hello.tsx', () => {
  it('render test', () => {
    const wrapper = mount(() => <Hello />)
    expect(wrapper.text()).toBe('Hello')
  })
})
