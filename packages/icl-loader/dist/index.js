(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(".icl-loader{text-align:center;height:55px}.icl-loader .loading{display:inline-block;margin:0 auto}.icl-loader .loading .loading-bar{display:inline-block;width:4px;height:18px;border-radius:4px;animation:loading 1s ease-in-out infinite;margin:2px;background:var(--icl-loader-bg, var(--primary))}.icl-loader .loading .loading-bar:nth-child(1){animation-delay:0}.icl-loader .loading .loading-bar:nth-child(2){animation-delay:.09s}.icl-loader .loading .loading-bar:nth-child(3){animation-delay:.18s}.icl-loader .loading .loading-bar:nth-child(4){animation-delay:.27s}@keyframes loading{0%{transform:scale(1)}20%{transform:scaleY(2.2)}40%{transform:scale(1)}}")),document.head.appendChild(a)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
import { openBlock as a, createElementBlock as d, createStaticVNode as i } from "vue";
const r = (o, c) => {
  const s = o.__vccOpts || o;
  for (const [e, t] of c)
    s[e] = t;
  return s;
}, n = {
  name: "IclLoader"
}, _ = { class: "icl-loader" }, l = /* @__PURE__ */ i('<div class="loading"><div class="loading-bar"></div><div class="loading-bar"></div><div class="loading-bar"></div><div class="loading-bar"></div></div>', 1), v = [
  l
];
function p(o, c, s, e, t, g) {
  return a(), d("div", _, v);
}
const u = /* @__PURE__ */ r(n, [["render", p]]);
export {
  u as IclLoader
};
