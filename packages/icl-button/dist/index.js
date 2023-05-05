(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(".icl-button{box-sizing:border-box;transition:all .2s ease;border-radius:4px;text-align:center;position:relative;display:flex;cursor:pointer}.icl-button .icl-icon.prepend-icon{vertical-align:middle;margin-right:10px}.icl-button .icl-icon.append-icon{vertical-align:middle;margin-left:10px}.icl-button .content{display:flex;align-items:center;height:100%}.icl-button .actions-button{display:flex;justify-content:center;align-items:center;border-left:1px solid var(--white);height:100%;padding:0 10px}.icl-button .actions-button>.icl-icon{width:10px;height:7px}.icl-button .actions-button .actions-wrapper{display:flex;flex-direction:column}.icl-button .actions-button .actions-wrapper .action-item{display:flex;height:30px;justify-content:space-between;align-items:center;padding:0 20px;border-bottom:1px solid var(--white)}.icl-button .actions-button .actions-wrapper .action-item .icl-icon{color:var(--white);margin-right:5px}.icl-button.disabled{cursor:default}.icl-button.primary{background:var(--primary);color:var(--white);border:solid 1px var(--primary)}.icl-button.primary.disabled{background:var(--primary-200);border:solid 1px var(--primary-200)}.icl-button.primary:hover:not(.disabled){background:var(--primary-600);border:solid 1px var(--primary-600)}.icl-button.primary .icl-icon{color:var(--white)}.icl-button.secondary{background:var(--white);color:var(--primary);border:solid 1px var(--primary)}.icl-button.secondary .actions-button{border-left:solid 1px var(--primary)}.icl-button.secondary.disabled{color:var(--primary-300);border:solid 1px var(--primary-300)}.icl-button.secondary.disabled .icl-icon{color:var(--primary-300)}.icl-button.secondary:hover:not(.disabled){background:var(--secondary-300);border:solid 1px var(--primary)}.icl-button.secondary .icl-icon{color:var(--primary)}.icl-button.success{background:var(--success);color:var(--white);border:solid 1px var(--success)}.icl-button.success.disabled{background:var(--success-200);border:solid 1px var(--success-200)}.icl-button.success:hover:not(.disabled){background:var(--success-600);border:solid 1px var(--success-600)}.icl-button.success .icl-icon{color:var(--white)}.icl-button.error{background:var(--error);color:var(--white);border:solid 1px var(--error)}.icl-button.error.disabled{background:var(--error-200);border:solid 1px var(--error-200)}.icl-button.error:hover:not(.disabled){background:var(--error-600);border:solid 1px var(--error-600)}.icl-button.error .icl-icon{color:var(--white)}.icl-button.warning{background:var(--warning);color:var(--white);border:solid 1px var(--warning)}.icl-button.warning.disabled{background:var(--warning-200);border:solid 1px var(--warning-200)}.icl-button.warning:hover:not(.disabled){background:var(--warning-600);border:solid 1px var(--warning-600)}.icl-button.warning .icl-icon{color:var(--white)}.icl-button.grey{background:var(--grey-500);color:var(--white);border:solid 1px var(--grey-500)}.icl-button.grey.disabled{background:var(--grey-200);border:solid 1px var(--grey-200);color:var(--primary-300)}.icl-button.grey.disabled .icl-icon{color:var(--primary-300)}.icl-button.grey:hover:not(.disabled){background:var(--grey-600);border:solid 1px var(--grey-600)}.icl-button.grey .icl-icon{color:var(--white)}.icl-button.small{height:24px;font-size:12px;font-weight:400}.icl-button.small .content{padding:0 16px}.icl-button.small .content .icl-icon{height:13px;width:13px}.icl-button.small.has-actions{padding-right:0}.icl-button.medium{height:32px;font-size:14px;font-weight:400}.icl-button.medium .content{padding:0 16px}.icl-button.medium .content .icl-icon{height:16px;width:16px}.icl-button.medium.has-actions{padding-right:0}.icl-button.large{height:40px;font-size:14px;font-weight:600}.icl-button.large .content{padding:0 16px}.icl-button.large .content .icl-icon{height:19px;width:19px}.icl-button.large.has-actions{padding-right:0}.icl-button.full-width{width:100%}.icl-button.uppercase{text-transform:uppercase}")),document.head.appendChild(r)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
import { openBlock as s, createElementBlock as g, normalizeClass as w, createBlock as v, resolveDynamicComponent as W, useCssVars as V, ref as z, computed as T, renderSlot as b, createElementVNode as k, unref as u, normalizeStyle as H, createTextVNode as D, toDisplayString as $, watch as G, getCurrentScope as Z, onScopeDispose as F, createCommentVNode as m, withCtx as S, Fragment as q, renderList as K, createVNode as R } from "vue";
(function() {
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode(".icl-icon{display:flex;transform:scale(1);stroke-width:0;stroke:currentColor;fill:currentColor}.icl-icon.default{width:24px;height:24px}.icl-icon.small{width:18px;height:18px}.icl-icon.medium{width:32px;height:32px}.icl-icon.large{width:40px;height:40px}.icl-icon.xlarge{width:60px;height:60px}.icl-icon.big{width:96px;height:96px}.icl-icon--is-primary{color:var(--primary)}.icl-icon--is-secondary{color:var(--secondary)}.icl-icon--is-grey{color:var(--grey)}.icl-icon--is-info{color:var(--info)}.icl-icon--is-success{color:var(--success)}.icl-icon--is-warning{color:var(--warning)}.icl-icon--is-error{color:var(--error)}.icl-icon--is-clear{color:var(--clear)}.icl-icon--is-white{color:var(--white)}.icl-icon.disabled{opacity:.4;cursor:initial}.icl-icon.cursor-pointer:not(.disabled){cursor:pointer}.icl-icon.cursor-default{cursor:default}")), document.head.appendChild(t);
    }
  } catch (o) {
    console.error("vite-plugin-css-injected-by-js", o);
  }
})();
const Y = {
  name: "IclIcon"
}, I = /* @__PURE__ */ Object.assign(Y, {
  props: {
    /**
     * Icon component displayed..
     */
    icon: {
      required: !0,
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
      default: !1
    }
  },
  emits: ["click"],
  setup(t, { emit: o }) {
    const e = t, i = () => {
      e.disabled || o("click");
    };
    return (r, a) => (s(), g("div", {
      class: w(["icl-icon", {
        [`icl-icon--is-${t.color} ${t.size} cursor-${t.cursor}`]: !0,
        disabled: t.disabled
      }]),
      onClick: i
    }, [
      (s(), v(W(t.icon)))
    ], 2));
  }
});
(function() {
  try {
    if (typeof document < "u") {
      var t = document.createElement("style");
      t.appendChild(document.createTextNode('.icl-tooltip{--icl-tooltip-offset: var(--82f0bbe6);position:relative;display:inline-block}.icl-tooltip .tooltip{display:flex;justify-content:center;align-items:center;padding:4px 8px;border-radius:4px;font-size:12px;color:var(--white);opacity:0;transition:opacity 1s;position:absolute;z-index:1}.icl-tooltip .tooltip:after{content:"";position:absolute;border-style:solid;border-color:transparent}.icl-tooltip .tooltip.no-padding{padding:0}.icl-tooltip .tooltip.top{bottom:calc(100% + var(--icl-tooltip-offset));left:50%;transform:translate(-50%)}.icl-tooltip .tooltip.top:after{top:100%;left:50%;margin-left:-5px;border-width:5px;border-top-color:var(--icl-tooltip-bg)}.icl-tooltip .tooltip.bottom{top:calc(100% + var(--icl-tooltip-offset));left:50%;transform:translate(-50%)}.icl-tooltip .tooltip.bottom:after{bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-bottom-color:var(--icl-tooltip-bg)}.icl-tooltip .tooltip.right{left:calc(100% + var(--icl-tooltip-offset));top:50%;transform:translateY(-50%)}.icl-tooltip .tooltip.right:after{right:100%;top:calc(50% - 5px);margin-left:-5px;border-width:5px;border-right-color:var(--icl-tooltip-bg)}.icl-tooltip .tooltip.left{right:calc(100% + var(--icl-tooltip-offset));top:50%;transform:translateY(-50%)}.icl-tooltip .tooltip.left:after{left:100%;top:calc(50% - 5px);margin-right:-5px;border-width:5px;border-left-color:var(--icl-tooltip-bg)}.icl-tooltip .tooltip.visible{opacity:1}.icl-tooltip .tooltip.primary{--icl-tooltip-bg: var(--primary-500);background:var(--icl-tooltip-bg)}.icl-tooltip .tooltip.success{--icl-tooltip-bg: var(--success-500);background:var(--icl-tooltip-bg)}.icl-tooltip .tooltip.info{--icl-tooltip-bg: var(--info-500);background:var(--icl-tooltip-bg)}.icl-tooltip .tooltip.error{--icl-tooltip-bg: var(--error-500);background:var(--icl-tooltip-bg)}.icl-tooltip .tooltip.warning{--icl-tooltip-bg: var(--warning-500);background:var(--icl-tooltip-bg)}')), document.head.appendChild(t);
    }
  } catch (o) {
    console.error("vite-plugin-css-injected-by-js", o);
  }
})();
var C;
const P = typeof window < "u", J = (t) => typeof t == "string", L = () => {
}, X = P && ((C = window == null ? void 0 : window.navigator) == null ? void 0 : C.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Q(t) {
  return typeof t == "function" ? t() : u(t);
}
function _(t) {
  return t;
}
function tt(t) {
  return Z() ? (F(t), !0) : !1;
}
function h(t) {
  var o;
  const e = Q(t);
  return (o = e == null ? void 0 : e.$el) != null ? o : e;
}
const U = P ? window : void 0;
function O(...t) {
  let o, e, i, r;
  if (J(t[0]) || Array.isArray(t[0]) ? ([e, i, r] = t, o = U) : [o, e, i, r] = t, !o)
    return L;
  Array.isArray(e) || (e = [e]), Array.isArray(i) || (i = [i]);
  const a = [], p = () => {
    a.forEach((l) => l()), a.length = 0;
  }, d = (l, n, c, x) => (l.addEventListener(n, c, x), () => l.removeEventListener(n, c, x)), y = G(() => [h(o), Q(r)], ([l, n]) => {
    p(), l && a.push(...e.flatMap((c) => i.map((x) => d(l, c, x, n))));
  }, { immediate: !0, flush: "post" }), f = () => {
    y(), p();
  };
  return tt(f), f;
}
let N = !1;
function et(t, o, e = {}) {
  const { window: i = U, ignore: r = [], capture: a = !0, detectIframe: p = !1 } = e;
  if (!i)
    return;
  X && !N && (N = !0, Array.from(i.document.body.children).forEach((l) => l.addEventListener("click", L)));
  let d = !0;
  const y = (l) => r.some((n) => {
    if (typeof n == "string")
      return Array.from(i.document.querySelectorAll(n)).some((c) => c === l.target || l.composedPath().includes(c));
    {
      const c = h(n);
      return c && (l.target === c || l.composedPath().includes(c));
    }
  }), f = [
    O(i, "click", (l) => {
      const n = h(t);
      if (!(!n || n === l.target || l.composedPath().includes(n))) {
        if (l.detail === 0 && (d = !y(l)), !d) {
          d = !0;
          return;
        }
        o(l);
      }
    }, { passive: !0, capture: a }),
    O(i, "pointerdown", (l) => {
      const n = h(t);
      n && (d = !l.composedPath().includes(n) && !y(l));
    }, { passive: !0 }),
    p && O(i, "blur", (l) => {
      var n;
      const c = h(t);
      ((n = i.document.activeElement) == null ? void 0 : n.tagName) === "IFRAME" && !(c != null && c.contains(i.document.activeElement)) && o(l);
    })
  ].filter(Boolean);
  return () => f.forEach((l) => l());
}
const A = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, E = "__vueuse_ssr_handlers__";
A[E] = A[E] || {};
var M;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(M || (M = {}));
var ot = Object.defineProperty, j = Object.getOwnPropertySymbols, it = Object.prototype.hasOwnProperty, lt = Object.prototype.propertyIsEnumerable, B = (t, o, e) => o in t ? ot(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e, nt = (t, o) => {
  for (var e in o || (o = {}))
    it.call(o, e) && B(t, e, o[e]);
  if (j)
    for (var e of j(o))
      lt.call(o, e) && B(t, e, o[e]);
  return t;
};
const rt = {
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
nt({
  linear: _
}, rt);
const at = {
  name: "IclTooltip"
}, ct = /* @__PURE__ */ Object.assign(at, {
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
  setup(t, { emit: o }) {
    const e = t;
    V((f) => ({
      "82f0bbe6": t.offset
    }));
    const i = z(null), r = z(!1);
    et(i, () => {
      e.disabled || (r.value = !1, o("click-outside"));
    });
    const a = T(() => e.trigger === "manual" ? e.visible : r.value), p = () => {
      e.disabled || e.trigger !== "hover" || (r.value = !0);
    }, d = () => {
      e.disabled || e.trigger !== "hover" || (r.value = !1);
    }, y = () => {
      e.disabled || e.trigger !== "click" || (r.value = !0);
    };
    return (f, l) => (s(), g("div", {
      ref_key: "target",
      ref: i,
      class: "icl-tooltip",
      onMouseover: p,
      onMouseleave: d,
      onClick: y
    }, [
      b(f.$slots, "default"),
      k("div", {
        class: w(["tooltip", { [`${t.color} ${t.position}`]: !0, visible: u(a), "no-padding": t.noPadding }]),
        style: H({
          "min-width": t.minWidth,
          "max-width": t.maxWidth
        })
      }, [
        b(f.$slots, "tooltip", {}, () => [
          D($(t.text), 1)
        ])
      ], 6)
    ], 544));
  }
}), st = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAgNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuMTc1IDAuNTMzMzI1TDUgNC4zNDk5OUw4LjgyNSAwLjUzMzMyNUwxMCAxLjcwODMzTDUgNi43MDgzMkwwIDEuNzA4MzNMMS4xNzUgMC41MzMzMjVaIiAvPgo8L3N2Zz4K";
const dt = ["id", "type", "value", "disabled", "position"], ut = { class: "actions-wrapper" }, pt = ["onClick"], ft = ["size", "href", "target"], gt = ["position", "size", "disabled"], yt = /* @__PURE__ */ k("input", {
  id: "file_uploads",
  type: "file",
  multiple: ""
}, null, -1), bt = {
  name: "IclButton"
}, vt = /* @__PURE__ */ Object.assign(bt, {
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
      default: () => {
      }
    },
    /**
     * Icon after button text.
     */
    appendIcon: {
      type: Object,
      default: () => {
      }
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
      default: !1
    },
    /**
     * Fullwidth button.
     */
    fullWidth: {
      type: Boolean,
      default: !1
    },
    /**
     * Uppercase text.
     */
    uppercase: {
      type: Boolean,
      default: !1
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
  setup(t) {
    const o = t, e = T(() => {
      let i = "primary";
      return ["success", "warning", "error"].includes(o.color) && (i = o.color), i;
    });
    return (i, r) => t.type === "button" ? (s(), g("button", {
      key: 0,
      id: t.id,
      class: w(["icl-button", {
        [`${t.size} ${t.color}`]: !0,
        "has-actions": t.actions.length,
        "full-width": t.fullWidth,
        disabled: t.disabled,
        uppercase: t.uppercase
      }]),
      type: t.type,
      value: t.value,
      disabled: t.disabled,
      position: t.position
    }, [
      k("div", {
        class: "content",
        onClick: r[0] || (r[0] = (a) => i.$emit("click", a))
      }, [
        t.prependIcon ? (s(), v(u(I), {
          key: 0,
          icon: t.prependIcon,
          class: "prepend-icon"
        }, null, 8, ["icon"])) : m("", !0),
        b(i.$slots, "default"),
        t.appendIcon ? (s(), v(u(I), {
          key: 1,
          icon: t.appendIcon,
          class: "append-icon"
        }, null, 8, ["icon"])) : m("", !0)
      ]),
      t.actions.length ? (s(), v(u(ct), {
        key: 0,
        color: u(e),
        "no-padding": "",
        class: "actions-button"
      }, {
        tooltip: S(() => [
          k("div", ut, [
            b(i.$slots, "actions", { value: t.actions }, () => [
              (s(!0), g(q, null, K(t.actions, (a, p) => (s(), g("div", {
                key: p,
                class: "action-item",
                onClick: (d) => i.$emit("click-action", a.action)
              }, [
                a.icon ? (s(), v(u(I), {
                  key: 0,
                  icon: a.icon,
                  size: "small"
                }, null, 8, ["icon"])) : m("", !0),
                D($(a.text), 1)
              ], 8, pt))), 128))
            ])
          ])
        ]),
        default: S(() => [
          R(u(I), {
            icon: u(st),
            size: "small"
          }, null, 8, ["icon"])
        ]),
        _: 3
      }, 8, ["color"])) : m("", !0)
    ], 10, dt)) : t.type === "link" ? (s(), g("a", {
      key: 1,
      type: "button",
      size: t.size,
      href: t.href,
      target: t.target,
      class: w([[t.color, i.extraClass], "icl-button"])
    }, [
      b(i.$slots, "default")
    ], 10, ft)) : t.type === "file" ? (s(), g("label", {
      key: 2,
      class: w(["icl-button upload-file-button-label", t.color]),
      position: t.position,
      size: t.size,
      disabled: t.disabled
    }, [
      b(i.$slots, "default"),
      yt
    ], 10, gt)) : m("", !0);
  }
});
export {
  vt as IclButton
};
