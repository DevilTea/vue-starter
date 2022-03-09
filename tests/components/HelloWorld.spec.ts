import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import { createI18n } from 'vue-i18n'

test('shallowMount component', async () => {
  expect(HelloWorld).toBeTruthy()

  const wrapper = shallowMount(HelloWorld, {
    global: {
      plugins: [createI18n({})],
    },
    props: {
      msg: 'Welcome to Your Vue.js + TypeScript App',
    },
  })
  expect(wrapper.text()).toContain('Welcome to Your Vue.js + TypeScript App')
  expect(wrapper.html()).toMatchSnapshot()
})
