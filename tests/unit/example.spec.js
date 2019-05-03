import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/public/01.js'

describe('HelloWorld.vue', () => {
  it('test1', () => {
    wrapper = shallowMount(product, {
      propsData: {
        brand: 'Cisco'
      }
    });
    expect(wrapper.vm.brand).to.equal(this.brand)
  })
})
