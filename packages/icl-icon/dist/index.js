(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(".icl-icon{display:flex;transform:scale(1);stroke-width:0;stroke:currentColor;fill:currentColor}.icl-icon.default{width:24px;height:24px}.icl-icon.small{width:18px;height:18px}.icl-icon.medium{width:32px;height:32px}.icl-icon.large{width:40px;height:40px}.icl-icon.xlarge{width:60px;height:60px}.icl-icon.big{width:96px;height:96px}.icl-icon--is-primary{color:var(--primary)}.icl-icon--is-secondary{color:var(--secondary)}.icl-icon--is-grey{color:var(--grey)}.icl-icon--is-info{color:var(--info)}.icl-icon--is-success{color:var(--success)}.icl-icon--is-warning{color:var(--warning)}.icl-icon--is-error{color:var(--error)}.icl-icon--is-clear{color:var(--clear)}.icl-icon--is-white{color:var(--white)}.icl-icon.disabled{opacity:.4;cursor:initial}.icl-icon.cursor-pointer:not(.disabled){cursor:pointer}.icl-icon.cursor-default{cursor:default}")),document.head.appendChild(i)}}catch(c){console.error("vite-plugin-css-injected-by-js",c)}})();
import { openBlock as c, createElementBlock as n, normalizeClass as o, createBlock as r, resolveDynamicComponent as s } from "vue";
const a = {
  name: "IclIcon"
}, m = /* @__PURE__ */ Object.assign(a, {
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
  setup(e, { emit: t }) {
    const l = e, i = () => {
      l.disabled || t("click");
    };
    return (u, d) => (c(), n("div", {
      class: o(["icl-icon", {
        [`icl-icon--is-${e.color} ${e.size} cursor-${e.cursor}`]: !0,
        disabled: e.disabled
      }]),
      onClick: i
    }, [
      (c(), r(s(e.icon)))
    ], 2));
  }
});
export {
  m as IclIcon
};
