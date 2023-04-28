<script>
export default {
  name: 'IclIcon',
};
</script>

<script setup>
const props = defineProps({
  /**
   * Icon component displayed..
   */
  icon: {
    required: true,
    type: Object,
    default: () => {},
  },
  /**
   * Color of the icon.
   * @values primary, secondary, grey, info, success, warning, error, clear, white
   */
  color: {
    type: String,
    default: 'primary',
  },
  /**
   * Size of the icon.
   * @values default, small, medium, large, xlarge, big
   */
  size: {
    type: String,
    default: 'default',
  },
  /**
   * Cursor on hover.
   * @values default, pointer
   */
  cursor: {
    type: String,
    default: 'default',
  },
  /**
   * Icon disabled.
   */
  disabled: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['click']);

const clickEvent = () => {
  if (props.disabled) return;
  emit('click');
};
</script>

<template>
  <div
    class="icl-icon"
    :class="{
      [`icl-icon--is-${color} ${size} cursor-${cursor}`]: true,
      disabled,
    }"
    @click="clickEvent"
  >
    <component :is="icon" />
  </div>
</template>

<style src="./icl-icon.scss" lang="scss"></style>
