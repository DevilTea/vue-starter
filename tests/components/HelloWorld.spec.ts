import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

test('shallowMount component', async () => {
  expect(HelloWorld).toBeTruthy()

  const wrapper = shallowMount(HelloWorld, {
    props: {
      msg: 'Welcome to Your Vue.js + TypeScript App',
    },
  })

  expect(wrapper.text()).toContain('Welcome to Your Vue.js + TypeScript App')
  expect(wrapper.html()).toMatchSnapshot()
})
