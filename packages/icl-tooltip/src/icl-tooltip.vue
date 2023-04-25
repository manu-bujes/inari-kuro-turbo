<script>
export default {
  name: 'IclTooltip',
};
</script>

<script setup>
import { ref, computed } from 'vue';
import { onClickOutside } from '@vueuse/core';

const emit = defineEmits(['click-outside']);
const props = defineProps({
  /**
   * Visible property when manual trigger is selected.
   */
  visible: {
    type: Boolean,
    default: false,
  },
  /**
   * Disabled tooltip.
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * Text of the tooltip.
   */
  text: {
    type: String,
    default: '',
  },
  /**
   * Color of the tooltip.
   * @values primary, success, error, warning, info
   */
  color: {
    type: String,
    default: 'primary',
  },
  /**
   * Position of the tooltip.
   * @values top, bottom, left, right
   */
  position: {
    type: String,
    default: 'bottom',
  },
  /**
   * Trigger when tooltip is visible.
   * @values hover, click, manual
   */
  trigger: {
    type: String,
    default: 'hover',
  },
  /**
   * Min width of the tooltip.
   */
  minWidth: {
    type: String,
    default: 'max-content',
  },
  /**
   * Max width of the tooltip.
   */
  maxWidth: {
    type: String,
    default: 'auto',
  },
  /**
   * Tooltip offset.
   */
  offset: {
    type: String,
    default: '10px',
  },
  /**
   * Remove tooltip padding.
   */
  noPadding: {
    type: Boolean,
    value: false,
  },
});

const target = ref(null);

const internalVisible = ref(false);

onClickOutside(target, () => {
  if (props.disabled) return;
  internalVisible.value = false;
  emit('click-outside');
});

const isVisible = computed(() => (props.trigger === 'manual' ? props.visible : internalVisible.value));

const onMouseOver = () => {
  if (props.disabled || props.trigger !== 'hover') return;
  internalVisible.value = true;
};

const onMouseLeave = () => {
  if (props.disabled || props.trigger !== 'hover') return;
  internalVisible.value = false;
};

const onClick = () => {
  if (props.disabled || props.trigger !== 'click') return;
  internalVisible.value = true;
};
</script>

<template>
  <div ref="target" class="icl-tooltip" @mouseover="onMouseOver" @mouseleave="onMouseLeave" @click="onClick">
    <!--
      @slot Slot for the trigger component
    -->
    <slot></slot>
    <div
      class="tooltip"
      :class="{ [`${color} ${position}`]: true, visible: isVisible, 'no-padding': noPadding }"
      :style="{
        'min-width': minWidth,
        'max-width': maxWidth,
      }"
    >
      <!--
        @slot Slot for the tooltip content
      -->
      <slot name="tooltip">{{ text }}</slot>
    </div>
  </div>
</template>

<style lang="scss">
.icl-tooltip {
  --icl-tooltip-offset: v-bind(offset);
  position: relative;
  display: inline-block;

  .tooltip {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    border-radius: 4px;

    font-size: 12px;
    color: var(--white);

    opacity: 0;
    transition: opacity 1s;

    position: absolute;
    z-index: 1;

    &::after {
      content: '';
      position: absolute;
      border-style: solid;
      border-color: transparent;
    }

    &.no-padding {
      padding: 0px;
    }

    &.top {
      bottom: calc(100% + var(--icl-tooltip-offset));
      left: 50%;
      transform: translateX(-50%);
      &::after {
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-top-color: var(--icl-tooltip-bg);
      }
    }

    &.bottom {
      top: calc(100% + var(--icl-tooltip-offset));
      left: 50%;
      transform: translateX(-50%);
      &::after {
        bottom: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-bottom-color: var(--icl-tooltip-bg);
      }
    }

    &.right {
      left: calc(100% + var(--icl-tooltip-offset));
      top: 50%;
      transform: translateY(-50%);
      &::after {
        right: 100%;
        top: calc(50% - 5px);
        margin-left: -5px;
        border-width: 5px;
        border-right-color: var(--icl-tooltip-bg);
      }
    }

    &.left {
      right: calc(100% + var(--icl-tooltip-offset));
      top: 50%;
      transform: translateY(-50%);
      &::after {
        left: 100%;
        top: calc(50% - 5px);
        margin-right: -5px;
        border-width: 5px;
        border-left-color: var(--icl-tooltip-bg);
      }
    }

    &.visible {
      opacity: 1;
    }

    &.primary {
      --icl-tooltip-bg: var(--primary-500);
      background: var(--icl-tooltip-bg);
    }

    &.success {
      --icl-tooltip-bg: var(--success-500);
      background: var(--icl-tooltip-bg);
    }

    &.info {
      --icl-tooltip-bg: var(--info-500);
      background: var(--icl-tooltip-bg);
    }

    &.error {
      --icl-tooltip-bg: var(--error-500);
      background: var(--icl-tooltip-bg);
    }

    &.warning {
      --icl-tooltip-bg: var(--warning-500);
      background: var(--icl-tooltip-bg);
    }
  }
}
</style>
