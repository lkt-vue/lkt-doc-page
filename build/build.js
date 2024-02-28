import { defineComponent as k, computed as d, openBlock as a, createElementBlock as s, normalizeClass as p, Fragment as v, toDisplayString as u, createCommentVNode as n, createElementVNode as c, renderSlot as g, unref as h } from "vue";
let f = 0;
const _ = () => (++f, f), y = ["id"], P = {
  key: 1,
  class: "lkt-doc-page-img"
}, b = ["src", "alt"], N = { class: "lkt-page-bottom" }, z = { class: "lkt-page-footer" }, B = {
  key: 0,
  class: "lkt-page-number"
}, C = /* @__PURE__ */ k({
  __name: "LktDocPage",
  props: {
    skipPageNumber: { type: Boolean, default: !1 },
    frontPage: { type: Boolean, default: !1 },
    size: { default: "a4" },
    title: { default: "" },
    img: { default: "" },
    icon: { default: "" },
    id: { default: "" },
    palette: { default: "" }
  },
  setup(o) {
    const t = o;
    let l = 0, i = !1;
    t.skipPageNumber || (l = _(), i = l % 2 === 0);
    const r = d(() => {
      let e = [];
      return i && e.push("is-even"), t.frontPage && e.push("is-front-page"), t.size && e.push("is-" + t.size), t.palette && e.push("palette-" + t.palette), e.join(" ");
    }), m = d(() => t.img !== "" || t.icon !== "");
    return (e, I) => (a(), s("div", {
      class: p(["lkt-doc-page lkt-break-page", r.value])
    }, [
      e.frontPage ? (a(), s(v, { key: 0 }, [
        e.title ? (a(), s("h1", {
          key: 0,
          id: e.id
        }, u(e.title), 9, y)) : n("", !0),
        m.value ? (a(), s("div", P, [
          e.icon ? (a(), s("i", {
            key: 0,
            class: p(e.icon)
          }, null, 2)) : n("", !0),
          e.img ? (a(), s("img", {
            key: 1,
            src: e.icon,
            alt: e.title
          }, null, 8, b)) : n("", !0)
        ])) : n("", !0),
        c("div", N, [
          g(e.$slots, "page-bottom", {}, void 0, !0)
        ])
      ], 64)) : g(e.$slots, "default", { key: 1 }, void 0, !0),
      c("div", z, [
        e.skipPageNumber ? n("", !0) : (a(), s("div", B, u(h(l)), 1))
      ])
    ], 2));
  }
}), D = (o, t) => {
  const l = o.__vccOpts || o;
  for (const [i, r] of t)
    l[i] = r;
  return l;
}, E = /* @__PURE__ */ D(C, [["__scopeId", "data-v-f4a7ca35"]]), S = {
  install: (o) => {
    o.component("lkt-doc-page") === void 0 && o.component("lkt-doc-page", E);
  }
};
export {
  S as default
};
