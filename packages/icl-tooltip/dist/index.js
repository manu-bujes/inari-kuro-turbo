(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('.icl-tooltip{--icl-tooltip-offset: var(--82f0bbe6);position:relative;display:inline-block}.icl-tooltip .tooltip{display:flex;justify-content:center;align-items:center;padding:4px 8px;border-radius:4px;font-size:12px;color:var(--white);opacity:0;transition:opacity 1s;position:absolute;z-index:1}.icl-tooltip .tooltip:after{content:"";position:absolute;border-style:solid;border-color:transparent}.icl-tooltip .tooltip.no-padding{padding:0}.icl-tooltip .tooltip.top{bottom:calc(100% + var(--icl-tooltip-offset));left:50%;transform:translate(-50%)}.icl-tooltip .tooltip.top:after{top:100%;left:50%;margin-left:-5px;border-width:5px;border-top-color:var(--icl-tooltip-bg)}.icl-tooltip .tooltip.bottom{top:calc(100% + var(--icl-tooltip-offset));left:50%;transform:translate(-50%)}.icl-tooltip .tooltip.bottom:after{bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-bottom-color:var(--icl-tooltip-bg)}.icl-tooltip .tooltip.right{left:calc(100% + var(--icl-tooltip-offset));top:50%;transform:translateY(-50%)}.icl-tooltip .tooltip.right:after{right:100%;top:calc(50% - 5px);margin-left:-5px;border-width:5px;border-right-color:var(--icl-tooltip-bg)}.icl-tooltip .tooltip.left{right:calc(100% + var(--icl-tooltip-offset));top:50%;transform:translateY(-50%)}.icl-tooltip .tooltip.left:after{left:100%;top:calc(50% - 5px);margin-right:-5px;border-width:5px;border-left-color:var(--icl-tooltip-bg)}.icl-tooltip .tooltip.visible{opacity:1}.icl-tooltip .tooltip.primary{--icl-tooltip-bg: var(--primary-500);background:var(--icl-tooltip-bg)}.icl-tooltip .tooltip.success{--icl-tooltip-bg: var(--success-500);background:var(--icl-tooltip-bg)}.icl-tooltip .tooltip.info{--icl-tooltip-bg: var(--info-500);background:var(--icl-tooltip-bg)}.icl-tooltip .tooltip.error{--icl-tooltip-bg: var(--error-500);background:var(--icl-tooltip-bg)}.icl-tooltip .tooltip.warning{--icl-tooltip-bg: var(--warning-500);background:var(--icl-tooltip-bg)}')),document.head.appendChild(t)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import { unref as P, getCurrentScope as T, onScopeDispose as N, watch as B, useCssVars as Q, ref as v, computed as W, openBlock as L, createElementBlock as M, renderSlot as O, createElementVNode as V, normalizeClass as $, normalizeStyle as j, createTextVNode as F, toDisplayString as R } from "vue";
var h;
const k = typeof window < "u", U = (e) => typeof e == "string", x = () => {
}, z = k && ((h = window == null ? void 0 : window.navigator) == null ? void 0 : h.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function C(e) {
  return typeof e == "function" ? e() : P(e);
}
function D(e) {
  return e;
}
function G(e) {
  return T() ? (N(e), !0) : !1;
}
function g(e) {
  var n;
  const t = C(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const A = k ? window : void 0;
function y(...e) {
  let n, t, r, s;
  if (U(e[0]) || Array.isArray(e[0]) ? ([t, r, s] = e, n = A) : [n, t, r, s] = e, !n)
    return x;
  Array.isArray(t) || (t = [t]), Array.isArray(r) || (r = [r]);
  const c = [], f = () => {
    c.forEach((a) => a()), c.length = 0;
  }, u = (a, m, o, i) => (a.addEventListener(m, o, i), () => a.removeEventListener(m, o, i)), p = B(() => [g(n), C(s)], ([a, m]) => {
    f(), a && c.push(...t.flatMap((o) => r.map((i) => u(a, o, i, m))));
  }, { immediate: !0, flush: "post" }), d = () => {
    p(), f();
  };
  return G(d), d;
}
let b = !1;
function H(e, n, t = {}) {
  const { window: r = A, ignore: s = [], capture: c = !0, detectIframe: f = !1 } = t;
  if (!r)
    return;
  z && !b && (b = !0, Array.from(r.document.body.children).forEach((o) => o.addEventListener("click", x)));
  let u = !0;
  const p = (o) => s.some((i) => {
    if (typeof i == "string")
      return Array.from(r.document.querySelectorAll(i)).some((l) => l === o.target || o.composedPath().includes(l));
    {
      const l = g(i);
      return l && (o.target === l || o.composedPath().includes(l));
    }
  }), a = [
    y(r, "click", (o) => {
      const i = g(e);
      if (!(!i || i === o.target || o.composedPath().includes(i))) {
        if (o.detail === 0 && (u = !p(o)), !u) {
          u = !0;
          return;
        }
        n(o);
      }
    }, { passive: !0, capture: c }),
    y(r, "pointerdown", (o) => {
      const i = g(e);
      i && (u = !o.composedPath().includes(i) && !p(o));
    }, { passive: !0 }),
    f && y(r, "blur", (o) => {
      var i;
      const l = g(e);
      ((i = r.document.activeElement) == null ? void 0 : i.tagName) === "IFRAME" && !(l != null && l.contains(r.document.activeElement)) && n(o);
    })
  ].filter(Boolean);
  return () => a.forEach((o) => o());
}
const I = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _ = "__vueuse_ssr_handlers__";
I[_] = I[_] || {};
var w;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(w || (w = {}));
var q = Object.defineProperty, E = Object.getOwnPropertySymbols, K = Object.prototype.hasOwnProperty, J = Object.prototype.propertyIsEnumerable, S = (e, n, t) => n in e ? q(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, X = (e, n) => {
  for (var t in n || (n = {}))
    K.call(n, t) && S(e, t, n[t]);
  if (E)
    for (var t of E(n))
      J.call(n, t) && S(e, t, n[t]);
  return e;
};
const Y = {
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
X({
  linear: D
}, Y);
const Z = {
  name: "IclTooltip"
}, te = /* @__PURE__ */ Object.assign(Z, {
  props: {
    /**
     * Visible property when manual trigger is selected.
     */
    visible: {
      type: Boolean,
      default: !1
    },
    /**
     * Disabled tooltip.
     */
    disabled: {
      type: Boolean,
      default: !1
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
      value: !1
    }
  },
  emits: ["click-outside"],
  setup(e, { emit: n }) {
    const t = e;
    Q((d) => ({
      "82f0bbe6": e.offset
    }));
    const r = v(null), s = v(!1);
    H(r, () => {
      t.disabled || (s.value = !1, n("click-outside"));
    });
    const c = W(() => t.trigger === "manual" ? t.visible : s.value), f = () => {
      t.disabled || t.trigger !== "hover" || (s.value = !0);
    }, u = () => {
      t.disabled || t.trigger !== "hover" || (s.value = !1);
    }, p = () => {
      t.disabled || t.trigger !== "click" || (s.value = !0);
    };
    return (d, a) => (L(), M("div", {
      ref_key: "target",
      ref: r,
      class: "icl-tooltip",
      onMouseover: f,
      onMouseleave: u,
      onClick: p
    }, [
      O(d.$slots, "default"),
      V("div", {
        class: $(["tooltip", { [`${e.color} ${e.position}`]: !0, visible: P(c), "no-padding": e.noPadding }]),
        style: j({
          "min-width": e.minWidth,
          "max-width": e.maxWidth
        })
      }, [
        O(d.$slots, "tooltip", {}, () => [
          F(R(e.text), 1)
        ])
      ], 6)
    ], 544));
  }
});
export {
  te as IclTooltip
};
