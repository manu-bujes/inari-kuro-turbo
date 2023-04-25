(function() {
  "use strict";
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
import { unref, getCurrentScope, onScopeDispose, watch, useCssVars, ref, computed, openBlock, createElementBlock, renderSlot, createElementVNode, normalizeClass, normalizeStyle, createTextVNode, toDisplayString } from "vue";
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
const iclTooltip_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  name: "IclTooltip"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
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
export {
  _sfc_main as IclTooltip
};
