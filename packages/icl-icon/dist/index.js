(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode(".icl-icon {\n  display: flex;\n  transform: scale(1);\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n}\n.icl-icon.default {\n  width: 24px;\n  height: 24px;\n}\n.icl-icon.small {\n  width: 18px;\n  height: 18px;\n}\n.icl-icon.medium {\n  width: 32px;\n  height: 32px;\n}\n.icl-icon.large {\n  width: 40px;\n  height: 40px;\n}\n.icl-icon.xlarge {\n  width: 60px;\n  height: 60px;\n}\n.icl-icon.big {\n  width: 96px;\n  height: 96px;\n}\n.icl-icon--is-primary {\n  color: var(--primary);\n}\n.icl-icon--is-secondary {\n  color: var(--secondary);\n}\n.icl-icon--is-grey {\n  color: var(--grey);\n}\n.icl-icon--is-info {\n  color: var(--info);\n}\n.icl-icon--is-success {\n  color: var(--success);\n}\n.icl-icon--is-warning {\n  color: var(--warning);\n}\n.icl-icon--is-error {\n  color: var(--error);\n}\n.icl-icon--is-clear {\n  color: var(--clear);\n}\n.icl-icon--is-white {\n  color: var(--white);\n}\n.icl-icon.disabled {\n  opacity: 0.4;\n  cursor: initial;\n}\n.icl-icon.cursor-pointer:not(.disabled) {\n  cursor: pointer;\n}\n.icl-icon.cursor-default {\n  cursor: default;\n}"));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
import { openBlock, createElementBlock, normalizeClass, createBlock, resolveDynamicComponent } from "vue";
const iclIcon_scss_vue_type_style_index_0_src_true_lang = "";
const __default__ = {
  name: "IclIcon"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  props: {
    /**
     * Icon component used.
     */
    icon: {
      required: true,
      type: Object,
      default: () => {
      }
    },
    /**
     * Color of the icon.
     * @values primary, secondary, grey, info, success, warning, error, clear, white
     */
    color: {
      type: String,
      default: "primary"
    },
    /**
     * Size of the icon.
     * @values default, small, medium, large, xlarge, big
     */
    size: {
      type: String,
      default: "default"
    },
    /**
     * Cursor on hover.
     * @values default, pointer
     */
    cursor: {
      type: String,
      default: "default"
    },
    /**
     * Icon disabled.
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const clickEvent = () => {
      if (props.disabled)
        return;
      emit("click");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["icl-icon", {
          [`icl-icon--is-${__props.color} ${__props.size} cursor-${__props.cursor}`]: true,
          disabled: __props.disabled
        }]),
        onClick: clickEvent
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(__props.icon)))
      ], 2);
    };
  }
});
export {
  _sfc_main as IclIcon
};
