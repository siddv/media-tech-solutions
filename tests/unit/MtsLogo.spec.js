import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import MtsLogo from '@/components/MtsLogo.vue';

describe('MtsLogo.vue', () => {
  it('renders an image', () => {
    const wrapper = shallowMount(MtsLogo);
    expect(wrapper.contains('img')).to.equal(true);
  });
});
