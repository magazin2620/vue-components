import { shallowMount } from '@vue/test-utils';
import Filter from '@/views/Filter.vue';

describe('Filter.vue', () => {
  let wrapper;
  const createComponent = () => {
    wrapper = shallowMount(Filter);
  };

  it('renders a select', () => {
    createComponent();
    expect(wrapper.find('select').isVisible()).toBe(true);
  });

  it('renders disabled option', () => {
    createComponent();
    expect(wrapper.find('option').attributes('disabled')).toBe('');
  });
});
