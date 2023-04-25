<script>
export default {
  name: 'IclButton',
};
</script>

<script setup>
import { computed } from 'vue';
import { IclIcon } from '@inari/icl-icon';
import { IclTooltip } from '@inari/icl-tooltip';
import ArrowDownIcon from '@inari/assets/dist/icons/ial-arrow-down.svg';

defineEmits(['click', 'click-action']);
const props = defineProps({
  /**
   * ID attribute.
   */
  id: {
    type: String,
    default: '',
  },
  /**
   * Button type.
   * @values button, link, file
   */
  type: {
    type: String,
    default: 'button',
  },
  /**
   * Color of the button.
   * @values primary, secondary, success, error, warning, grey
   */
  color: {
    type: String,
    default: 'primary',
  },
  /**
   * Size of the button.
   * @values small, medium, large
   */
  size: {
    type: String,
    default: 'medium',
  },
  /**
   * Value attribute.
   */
  value: {
    type: String,
    default: '',
  },
  /**
   * Icon before button text.
   */
  prependIcon: {
    type: Object,
    default: () => undefined,
  },
  /**
   * Icon after button text.
   */
  appendIcon: {
    type: Object,
    default: () => undefined,
  },
  /**
   * Actions of the button.
   */
  actions: {
    type: Array,
    default: () => [],
  },
  /**
   * Disabled button.
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * Fullwidth button.
   */
  fullWidth: {
    type: Boolean,
    default: false,
  },
  /**
   * Uppercase text.
   */
  uppercase: {
    type: Boolean,
    default: false,
  },
  /**
   * Button positioning.
   */
  position: {
    type: String,
    default: '',
  },
  /**
   * URL of the link.
   */
  href: {
    type: String,
    default: '#',
  },
  /**
   * Target of the link.
   */
  target: {
    type: String,
    default: '_self',
  },
});

const actionsTooltipColor = computed(() => {
  let color = 'primary';
  if (['success', 'warning', 'error'].includes(props.color)) {
    color = props.color;
  }
  return color;
});
</script>

<template>
  <button
    v-if="type === 'button'"
    :id="id"
    class="icl-button"
    :type="type"
    :class="{
      [`${size} ${color}`]: true,
      'has-actions': actions.length,
      'full-width': fullWidth,
      disabled,
      uppercase,
    }"
    :value="value"
    :disabled="disabled"
    :position="position"
  >
    <div class="content" @click="$emit('click', $event)">
      <icl-icon v-if="prependIcon" :icon="prependIcon" class="prepend-icon" />
      <!-- @slot Slot for the button. -->
      <slot />
      <icl-icon v-if="appendIcon" :icon="appendIcon" class="append-icon" />
    </div>
    <icl-tooltip v-if="actions.length" :color="actionsTooltipColor" no-padding class="actions-button">
      <icl-icon :icon="ArrowDownIcon" size="small"></icl-icon>
      <template #tooltip>
        <div class="actions-wrapper">
          <!--
            @slot Slot for the actions
            @binding {array} actions of the button
          -->
          <slot name="actions" :value="actions">
            <div
              v-for="(action, i) of actions"
              :key="i"
              class="action-item"
              @click="$emit('click-action', action.action)"
            >
              <icl-icon v-if="action.icon" :icon="action.icon" size="small"></icl-icon>{{ action.text }}
            </div>
          </slot>
        </div>
      </template>
    </icl-tooltip>
  </button>

  <a
    v-else-if="type === 'link'"
    type="button"
    :size="size"
    :href="href"
    :target="target"
    :class="[color, extraClass]"
    class="icl-button"
  >
    <!-- @slot Slot for the button. -->
    <slot />
  </a>

  <label
    v-else-if="type === 'file'"
    class="icl-button upload-file-button-label"
    :position="position"
    :class="color"
    :size="size"
    :disabled="disabled"
  >
    <!-- @slot Slot for the button. -->
    <slot />
    <input id="file_uploads" type="file" multiple />
  </label>
</template>

<style src="./icl-button.scss" lang="scss"></style>
