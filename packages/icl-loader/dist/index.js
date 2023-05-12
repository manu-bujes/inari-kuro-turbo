(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.id = "@inari/icl-loader";
      elementStyle.appendChild(document.createTextNode(".icl-loader {\n  text-align: center;\n  height: 55px;\n}\n.icl-loader .loading {\n  display: inline-block;\n  margin: 0 auto;\n}\n.icl-loader .loading .loading-bar {\n  display: inline-block;\n  width: 4px;\n  height: 18px;\n  border-radius: 4px;\n  animation: loading 1s ease-in-out infinite;\n  margin: 2px;\n  background: var(--icl-loader-bg, var(--primary));\n}\n.icl-loader .loading .loading-bar:nth-child(1) {\n  animation-delay: 0;\n}\n.icl-loader .loading .loading-bar:nth-child(2) {\n  animation-delay: 0.09s;\n}\n.icl-loader .loading .loading-bar:nth-child(3) {\n  animation-delay: 0.18s;\n}\n.icl-loader .loading .loading-bar:nth-child(4) {\n  animation-delay: 0.27s;\n}\n@keyframes loading {\n0% {\n    transform: scale(1);\n}\n20% {\n    transform: scale(1, 2.2);\n}\n40% {\n    transform: scale(1);\n}\n}"));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
import { openBlock, createElementBlock, createStaticVNode } from "vue";
const iclLoader_scss_vue_type_style_index_0_src_true_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  name: "IclLoader"
};
const _hoisted_1 = { class: "icl-loader" };
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<div class="loading"><div class="loading-bar"></div><div class="loading-bar"></div><div class="loading-bar"></div><div class="loading-bar"></div></div>', 1);
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, _hoisted_3);
}
const iclLoader = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  iclLoader as IclLoader
};
