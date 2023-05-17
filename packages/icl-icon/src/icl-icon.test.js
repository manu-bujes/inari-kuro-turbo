import { mount } from '@vue/test-utils';
import IclIcon from './icl-icon.vue';

describe('icl-icon.vue', () => {
  const icon = {
    el: '<svg />',
  };

  const getWrapper = (params) => mount(IclIcon, params);

  test('mount component prueba commits', async () => {
    expect(IclIcon).toBeTruthy();
    const wrapper = getWrapper({ props: { icon } });

    expect(wrapper.findComponent(icon).exists()).toBeTruthy();
  });
  describe('state', () => {
    describe('size', () => {
      test('should have default size by default', async () => {
        const wrapper = getWrapper({ props: { icon } });
        expect(wrapper.props().size).toEqual('default');
        expect(wrapper.classes()).toContain('default');
      });
      test('should apply size correctly', async () => {
        const wrapper = getWrapper({ props: { icon, size: 'big' } });
        expect(wrapper.props().size).toEqual('big');
        expect(wrapper.classes()).toContain('big');
      });
    });
    describe('color', () => {
      test('should have primary color by default', async () => {
        const wrapper = getWrapper({ props: { icon } });
        expect(wrapper.props().color).toEqual('primary');
        expect(wrapper.classes()).toContain('icl-icon--is-primary');
      });
      test('should apply color correctly', async () => {
        const wrapper = getWrapper({ props: { icon, color: 'success' } });
        expect(wrapper.props().color).toEqual('success');
        expect(wrapper.classes()).toContain('icl-icon--is-success');
      });
    });
    describe('disabled', () => {
      test('should not be disabled by default', async () => {
        const wrapper = getWrapper({ props: { icon } });
        expect(wrapper.props().disabled).not.toBeTruthy();
        expect(wrapper.classes()).not.toContain('disabled');
      });
      test('should apply disabled correctly', async () => {
        const wrapper = getWrapper({ props: { icon, disabled: true } });
        expect(wrapper.props().disabled).toBeTruthy();
        expect(wrapper.classes()).toContain('disabled');
      });
    });
    describe('cursor', () => {
      test('should have default cursor by default', async () => {
        const wrapper = getWrapper({ props: { icon } });
        expect(wrapper.props().cursor).toEqual('default');
        expect(wrapper.classes()).toContain('cursor-default');
      });
      test('should apply cursor correctly', async () => {
        const wrapper = getWrapper({ props: { icon, cursor: 'pointer' } });
        expect(wrapper.props().cursor).toEqual('pointer');
        expect(wrapper.classes()).toContain('cursor-pointer');
      });
    });
  });
  describe('events', () => {
    test('should emit click on click', async () => {
      const wrapper = getWrapper({ props: { icon } });
      await wrapper.trigger('click');
      expect(wrapper.emitted()).toHaveProperty('click');
    });
    test('should not emit click on disabled', async () => {
      const wrapper = getWrapper({ props: { icon, disabled: true } });
      await wrapper.trigger('click');
      expect(wrapper.emitted()).not.toHaveProperty('click');
    });
  });
});
