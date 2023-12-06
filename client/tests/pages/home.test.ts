import { Home } from '../../src/pages/Home.vue'
import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'

test('Home.vue', () => {
  const wrapper = mount(Home)
  expect(wrapper.text()).toBe('TU')
})
