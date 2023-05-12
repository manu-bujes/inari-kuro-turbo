import { mount } from '@vue/test-utils';
import IclTooltip from './icl-tooltip.vue';

describe('icl-tooltip.vue', () => {
  const getWrapper = (params) => mount(IclTooltip, params);

  test('mount component', async () => {
    expect(IclTooltip).toBeTruthy();
    const wrapper = getWrapper();
    expect(wrapper).toBeTruthy();
  });
});
