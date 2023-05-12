import { mount } from '@vue/test-utils';
import IclButton from './icl-button.vue';

describe('icl-button.vue', () => {
  const getWrapper = (params) => mount(IclButton, params);

  test('mount component', async () => {
    expect(IclButton).toBeTruthy();
    const wrapper = getWrapper();
    expect(wrapper).toBeTruthy();
  });
});
