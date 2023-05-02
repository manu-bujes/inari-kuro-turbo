(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode(".icl-button {\n  box-sizing: border-box;\n  transition: all 0.2s ease;\n  border-radius: 4px;\n  text-align: center;\n  position: relative;\n  display: flex;\n  cursor: pointer;\n}\n.icl-button .icl-icon.prepend-icon {\n  vertical-align: middle;\n  margin-right: 10px;\n}\n.icl-button .icl-icon.append-icon {\n  vertical-align: middle;\n  margin-left: 10px;\n}\n.icl-button .content {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.icl-button .actions-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-left: 1px solid var(--white);\n  height: 100%;\n  padding: 0 10px;\n}\n.icl-button .actions-button > .icl-icon {\n  width: 10px;\n  height: 7px;\n}\n.icl-button .actions-button .actions-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n.icl-button .actions-button .actions-wrapper .action-item {\n  display: flex;\n  height: 30px;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  border-bottom: 1px solid var(--white);\n}\n.icl-button .actions-button .actions-wrapper .action-item .icl-icon {\n  color: var(--white);\n  margin-right: 5px;\n}\n.icl-button.disabled {\n  cursor: default;\n}\n.icl-button.primary {\n  background: var(--primary);\n  color: var(--white);\n  border: solid 1px var(--primary);\n}\n.icl-button.primary.disabled {\n  background: var(--primary-200);\n  border: solid 1px var(--primary-200);\n}\n.icl-button.primary:hover:not(.disabled) {\n  background: var(--primary-600);\n  border: solid 1px var(--primary-600);\n}\n.icl-button.primary .icl-icon {\n  color: var(--white);\n}\n.icl-button.secondary {\n  background: var(--white);\n  color: var(--primary);\n  border: solid 1px var(--primary);\n}\n.icl-button.secondary .actions-button {\n  border-left: solid 1px var(--primary);\n}\n.icl-button.secondary.disabled {\n  color: var(--primary-300);\n  border: solid 1px var(--primary-300);\n}\n.icl-button.secondary.disabled .icl-icon {\n  color: var(--primary-300);\n}\n.icl-button.secondary:hover:not(.disabled) {\n  background: var(--secondary-300);\n  border: solid 1px var(--primary);\n}\n.icl-button.secondary .icl-icon {\n  color: var(--primary);\n}\n.icl-button.success {\n  background: var(--success);\n  color: var(--white);\n  border: solid 1px var(--success);\n}\n.icl-button.success.disabled {\n  background: var(--success-200);\n  border: solid 1px var(--success-200);\n}\n.icl-button.success:hover:not(.disabled) {\n  background: var(--success-600);\n  border: solid 1px var(--success-600);\n}\n.icl-button.success .icl-icon {\n  color: var(--white);\n}\n.icl-button.error {\n  background: var(--error);\n  color: var(--white);\n  border: solid 1px var(--error);\n}\n.icl-button.error.disabled {\n  background: var(--error-200);\n  border: solid 1px var(--error-200);\n}\n.icl-button.error:hover:not(.disabled) {\n  background: var(--error-600);\n  border: solid 1px var(--error-600);\n}\n.icl-button.error .icl-icon {\n  color: var(--white);\n}\n.icl-button.warning {\n  background: var(--warning);\n  color: var(--white);\n  border: solid 1px var(--warning);\n}\n.icl-button.warning.disabled {\n  background: var(--warning-200);\n  border: solid 1px var(--warning-200);\n}\n.icl-button.warning:hover:not(.disabled) {\n  background: var(--warning-600);\n  border: solid 1px var(--warning-600);\n}\n.icl-button.warning .icl-icon {\n  color: var(--white);\n}\n.icl-button.grey {\n  background: var(--grey-500);\n  color: var(--white);\n  border: solid 1px var(--grey-500);\n}\n.icl-button.grey.disabled {\n  background: var(--grey-200);\n  border: solid 1px var(--grey-200);\n  color: var(--primary-300);\n}\n.icl-button.grey.disabled .icl-icon {\n  color: var(--primary-300);\n}\n.icl-button.grey:hover:not(.disabled) {\n  background: var(--grey-600);\n  border: solid 1px var(--grey-600);\n}\n.icl-button.grey .icl-icon {\n  color: var(--white);\n}\n.icl-button.small {\n  height: 24px;\n  font-size: 12px;\n  font-weight: 400;\n}\n.icl-button.small .content {\n  padding: 0 16px;\n}\n.icl-button.small .content .icl-icon {\n  height: 13px;\n  width: 13px;\n}\n.icl-button.small.has-actions {\n  padding-right: 0px;\n}\n.icl-button.medium {\n  height: 32px;\n  font-size: 14px;\n  font-weight: 400;\n}\n.icl-button.medium .content {\n  padding: 0 16px;\n}\n.icl-button.medium .content .icl-icon {\n  height: 16px;\n  width: 16px;\n}\n.icl-button.medium.has-actions {\n  padding-right: 0px;\n}\n.icl-button.large {\n  height: 40px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.icl-button.large .content {\n  padding: 0 16px;\n}\n.icl-button.large .content .icl-icon {\n  height: 19px;\n  width: 19px;\n}\n.icl-button.large.has-actions {\n  padding-right: 0px;\n}\n.icl-button.full-width {\n  width: 100%;\n}\n.icl-button.uppercase {\n  text-transform: uppercase;\n}"));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
import { openBlock, createElementBlock, normalizeClass, createBlock, resolveDynamicComponent, useCssVars, ref, computed, renderSlot, createElementVNode, unref, normalizeStyle, createTextVNode, toDisplayString, watch, getCurrentScope, onScopeDispose, createCommentVNode, withCtx, Fragment, renderList, createVNode } from "vue";
(function() {
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
const __default__$2 = {
  name: "IclIcon"
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__$2, {
  props: {
    /**
     * Icon component displayed..
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
(function() {
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode('.icl-tooltip {\n  --icl-tooltip-offset: var(--82f0bbe6);\n  position: relative;\n  display: inline-block;\n}\n.icl-tooltip .tooltip {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  color: var(--white);\n  opacity: 0;\n  transition: opacity 1s;\n  position: absolute;\n  z-index: 1;\n}\n.icl-tooltip .tooltip::after {\n  content: "";\n  position: absolute;\n  border-style: solid;\n  border-color: transparent;\n}\n.icl-tooltip .tooltip.no-padding {\n  padding: 0px;\n}\n.icl-tooltip .tooltip.top {\n  bottom: calc(100% + var(--icl-tooltip-offset));\n  left: 50%;\n  transform: translateX(-50%);\n}\n.icl-tooltip .tooltip.top::after {\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-top-color: var(--icl-tooltip-bg);\n}\n.icl-tooltip .tooltip.bottom {\n  top: calc(100% + var(--icl-tooltip-offset));\n  left: 50%;\n  transform: translateX(-50%);\n}\n.icl-tooltip .tooltip.bottom::after {\n  bottom: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-bottom-color: var(--icl-tooltip-bg);\n}\n.icl-tooltip .tooltip.right {\n  left: calc(100% + var(--icl-tooltip-offset));\n  top: 50%;\n  transform: translateY(-50%);\n}\n.icl-tooltip .tooltip.right::after {\n  right: 100%;\n  top: calc(50% - 5px);\n  margin-left: -5px;\n  border-width: 5px;\n  border-right-color: var(--icl-tooltip-bg);\n}\n.icl-tooltip .tooltip.left {\n  right: calc(100% + var(--icl-tooltip-offset));\n  top: 50%;\n  transform: translateY(-50%);\n}\n.icl-tooltip .tooltip.left::after {\n  left: 100%;\n  top: calc(50% - 5px);\n  margin-right: -5px;\n  border-width: 5px;\n  border-left-color: var(--icl-tooltip-bg);\n}\n.icl-tooltip .tooltip.visible {\n  opacity: 1;\n}\n.icl-tooltip .tooltip.primary {\n  --icl-tooltip-bg: var(--primary-500);\n  background: var(--icl-tooltip-bg);\n}\n.icl-tooltip .tooltip.success {\n  --icl-tooltip-bg: var(--success-500);\n  background: var(--icl-tooltip-bg);\n}\n.icl-tooltip .tooltip.info {\n  --icl-tooltip-bg: var(--info-500);\n  background: var(--icl-tooltip-bg);\n}\n.icl-tooltip .tooltip.error {\n  --icl-tooltip-bg: var(--error-500);\n  background: var(--icl-tooltip-bg);\n}\n.icl-tooltip .tooltip.warning {\n  --icl-tooltip-bg: var(--warning-500);\n  background: var(--icl-tooltip-bg);\n}'));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
var _a;
const isClient = typeof window !== "undefined";
const isString = (val) => typeof val === "string";
const noop = () => {
};
const isIOS = isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function identity(arg) {
  return arg;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function unrefElement(elRef) {
  var _a2;
  const plain = resolveUnref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (isString(args[0]) || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(() => [unrefElement(target), resolveUnref(options)], ([el, options2]) => {
    cleanup();
    if (!el)
      return;
    cleanups.push(...events.flatMap((event) => {
      return listeners.map((listener) => register(el, event, listener, options2));
    }));
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
let _iOSWorkaround = false;
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
  if (!window2)
    return;
  if (isIOS && !_iOSWorkaround) {
    _iOSWorkaround = true;
    Array.from(window2.document.body.children).forEach((el) => el.addEventListener("click", noop));
  }
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return ignore.some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  const listener = (event) => {
    const el = unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window2, "click", listener, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      if (el)
        shouldListen = !e.composedPath().includes(el) && !shouldIgnore(e);
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      var _a2;
      const el = unrefElement(target);
      if (((_a2 = window2.document.activeElement) == null ? void 0 : _a2.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement)))
        handler(event);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues({
  linear: identity
}, _TransitionPresets);
const __default__$1 = {
  name: "IclTooltip"
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  props: {
    /**
     * Visible property when manual trigger is selected.
     */
    visible: {
      type: Boolean,
      default: false
    },
    /**
     * Disabled tooltip.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Text of the tooltip.
     */
    text: {
      type: String,
      default: ""
    },
    /**
     * Color of the tooltip.
     * @values primary, success, error, warning, info
     */
    color: {
      type: String,
      default: "primary"
    },
    /**
     * Position of the tooltip.
     * @values top, bottom, left, right
     */
    position: {
      type: String,
      default: "bottom"
    },
    /**
     * Trigger when tooltip is visible.
     * @values hover, click, manual
     */
    trigger: {
      type: String,
      default: "hover"
    },
    /**
     * Min width of the tooltip.
     */
    minWidth: {
      type: String,
      default: "max-content"
    },
    /**
     * Max width of the tooltip.
     */
    maxWidth: {
      type: String,
      default: "auto"
    },
    /**
     * Tooltip offset.
     */
    offset: {
      type: String,
      default: "10px"
    },
    /**
     * Remove tooltip padding.
     */
    noPadding: {
      type: Boolean,
      value: false
    }
  },
  emits: ["click-outside"],
  setup(__props, { emit }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "82f0bbe6": __props.offset
    }));
    const target = ref(null);
    const internalVisible = ref(false);
    onClickOutside(target, () => {
      if (props.disabled)
        return;
      internalVisible.value = false;
      emit("click-outside");
    });
    const isVisible = computed(() => props.trigger === "manual" ? props.visible : internalVisible.value);
    const onMouseOver = () => {
      if (props.disabled || props.trigger !== "hover")
        return;
      internalVisible.value = true;
    };
    const onMouseLeave = () => {
      if (props.disabled || props.trigger !== "hover")
        return;
      internalVisible.value = false;
    };
    const onClick = () => {
      if (props.disabled || props.trigger !== "click")
        return;
      internalVisible.value = true;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "target",
        ref: target,
        class: "icl-tooltip",
        onMouseover: onMouseOver,
        onMouseleave: onMouseLeave,
        onClick
      }, [
        renderSlot(_ctx.$slots, "default"),
        createElementVNode("div", {
          class: normalizeClass(["tooltip", { [`${__props.color} ${__props.position}`]: true, visible: unref(isVisible), "no-padding": __props.noPadding }]),
          style: normalizeStyle({
            "min-width": __props.minWidth,
            "max-width": __props.maxWidth
          })
        }, [
          renderSlot(_ctx.$slots, "tooltip", {}, () => [
            createTextVNode(toDisplayString(__props.text), 1)
          ])
        ], 6)
      ], 544);
    };
  }
});
const ArrowDownIcon = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAgNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuMTc1IDAuNTMzMzI1TDUgNC4zNDk5OUw4LjgyNSAwLjUzMzMyNUwxMCAxLjcwODMzTDUgNi43MDgzMkwwIDEuNzA4MzNMMS4xNzUgMC41MzMzMjVaIiAvPgo8L3N2Zz4K";
const iclButton_scss_vue_type_style_index_0_src_true_lang = "";
const _hoisted_1 = ["id", "type", "value", "disabled", "position"];
const _hoisted_2 = { class: "actions-wrapper" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = ["size", "href", "target"];
const _hoisted_5 = ["position", "size", "disabled"];
const _hoisted_6 = /* @__PURE__ */ createElementVNode("input", {
  id: "file_uploads",
  type: "file",
  multiple: ""
}, null, -1);
const __default__ = {
  name: "IclButton"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  props: {
    /**
     * ID attribute.
     */
    id: {
      type: String,
      default: ""
    },
    /**
     * Button type.
     * @values button, link, file
     */
    type: {
      type: String,
      default: "button"
    },
    /**
     * Color of the button.
     * @values primary, secondary, success, error, warning, grey
     */
    color: {
      type: String,
      default: "primary"
    },
    /**
     * Size of the button.
     * @values small, medium, large
     */
    size: {
      type: String,
      default: "medium"
    },
    /**
     * Value attribute.
     */
    value: {
      type: String,
      default: ""
    },
    /**
     * Icon before button text.
     */
    prependIcon: {
      type: Object,
      default: () => void 0
    },
    /**
     * Icon after button text.
     */
    appendIcon: {
      type: Object,
      default: () => void 0
    },
    /**
     * Actions of the button.
     */
    actions: {
      type: Array,
      default: () => []
    },
    /**
     * Disabled button.
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Fullwidth button.
     */
    fullWidth: {
      type: Boolean,
      default: false
    },
    /**
     * Uppercase text.
     */
    uppercase: {
      type: Boolean,
      default: false
    },
    /**
     * Button positioning.
     */
    position: {
      type: String,
      default: ""
    },
    /**
     * URL of the link.
     */
    href: {
      type: String,
      default: "#"
    },
    /**
     * Target of the link.
     */
    target: {
      type: String,
      default: "_self"
    }
  },
  emits: ["click", "click-action"],
  setup(__props) {
    const props = __props;
    const actionsTooltipColor = computed(() => {
      let color = "primary";
      if (["success", "warning", "error"].includes(props.color)) {
        color = props.color;
      }
      return color;
    });
    return (_ctx, _cache) => {
      return __props.type === "button" ? (openBlock(), createElementBlock("button", {
        key: 0,
        id: __props.id,
        class: normalizeClass(["icl-button", {
          [`${__props.size} ${__props.color}`]: true,
          "has-actions": __props.actions.length,
          "full-width": __props.fullWidth,
          disabled: __props.disabled,
          uppercase: __props.uppercase
        }]),
        type: __props.type,
        value: __props.value,
        disabled: __props.disabled,
        position: __props.position
      }, [
        createElementVNode("div", {
          class: "content",
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
        }, [
          __props.prependIcon ? (openBlock(), createBlock(unref(_sfc_main$2), {
            key: 0,
            icon: __props.prependIcon,
            class: "prepend-icon"
          }, null, 8, ["icon"])) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "default"),
          __props.appendIcon ? (openBlock(), createBlock(unref(_sfc_main$2), {
            key: 1,
            icon: __props.appendIcon,
            class: "append-icon"
          }, null, 8, ["icon"])) : createCommentVNode("", true)
        ]),
        __props.actions.length ? (openBlock(), createBlock(unref(_sfc_main$1), {
          key: 0,
          color: unref(actionsTooltipColor),
          "no-padding": "",
          class: "actions-button"
        }, {
          tooltip: withCtx(() => [
            createElementVNode("div", _hoisted_2, [
              renderSlot(_ctx.$slots, "actions", { value: __props.actions }, () => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.actions, (action, i) => {
                  return openBlock(), createElementBlock("div", {
                    key: i,
                    class: "action-item",
                    onClick: ($event) => _ctx.$emit("click-action", action.action)
                  }, [
                    action.icon ? (openBlock(), createBlock(unref(_sfc_main$2), {
                      key: 0,
                      icon: action.icon,
                      size: "small"
                    }, null, 8, ["icon"])) : createCommentVNode("", true),
                    createTextVNode(toDisplayString(action.text), 1)
                  ], 8, _hoisted_3);
                }), 128))
              ])
            ])
          ]),
          default: withCtx(() => [
            createVNode(unref(_sfc_main$2), {
              icon: unref(ArrowDownIcon),
              size: "small"
            }, null, 8, ["icon"])
          ]),
          _: 3
        }, 8, ["color"])) : createCommentVNode("", true)
      ], 10, _hoisted_1)) : __props.type === "link" ? (openBlock(), createElementBlock("a", {
        key: 1,
        type: "button",
        size: __props.size,
        href: __props.href,
        target: __props.target,
        class: normalizeClass([[__props.color, _ctx.extraClass], "icl-button"])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_4)) : __props.type === "file" ? (openBlock(), createElementBlock("label", {
        key: 2,
        class: normalizeClass(["icl-button upload-file-button-label", __props.color]),
        position: __props.position,
        size: __props.size,
        disabled: __props.disabled
      }, [
        renderSlot(_ctx.$slots, "default"),
        _hoisted_6
      ], 10, _hoisted_5)) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as IclButton
};
