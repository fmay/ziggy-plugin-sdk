import { jsx as o, jsxs as x } from "react/jsx-runtime";
import { useState as C, useEffect as S } from "react";
import P from "react-select";
import $ from "react-select/creatable";
var U = /* @__PURE__ */ ((e) => (e.Core = "Core", e.Utility = "Utility", e.Collection = "Collection", e.Custom = "Custom", e))(U || {}), _ = /* @__PURE__ */ ((e) => (e.standard = "STANDARD", e))(_ || {}), V = /* @__PURE__ */ ((e) => (e.Receiver = "RECEIVER", e.Terminator = "TERMINATOR", e))(V || {}), W = /* @__PURE__ */ ((e) => (e.DEV = "DEV", e.PROD = "PROD", e))(W || {}), L = /* @__PURE__ */ ((e) => (e.UseDefault = "USE_DEFAULT", e.TimeLimitedErroredWithData = "TIME_LIMITED_ERRORED_WITH_DATA", e.TimeLimitedAllWithData = "TIME_LIMITED_ALL_WITH_DATA", e.ErroredFullWithData = "ERRORED_WITH_DATA", e.ErroredNoData = "ERRORED_NO_DATA", e.All = "ALL", e))(L || {}), k = /* @__PURE__ */ ((e) => (e.OK = "OK", e.ERROR = "ERROR", e.TERMINATED = "TERMINATED", e))(k || {});
function G(e, t, a) {
  e.formulateFatalError(t, a);
}
function j(e, t, a = 0) {
  return e.getInputEdgeData(t, a);
}
function ee(e, t, a, n, u, s) {
  return e.outgoingEdgeAssignment(t, a, n, u, s);
}
function E(e) {
  if (e === null || typeof e != "object") return e;
  if (e instanceof Date) return new Date(e.getTime());
  if (e instanceof Array) return e.map((t) => E(t));
  if (e instanceof Object) {
    const t = {};
    for (const a in e)
      e.hasOwnProperty(a) && (t[a] = E(e[a]));
    return t;
  }
  return e;
}
function te(e, t) {
  const a = t.filter((n) => !(n in e));
  if (a.length > 0)
    throw new Error(`Missing required configuration: ${a.join(", ")}`);
}
function ae(e, t) {
  try {
    return JSON.parse(e);
  } catch {
    return t;
  }
}
function ne(e, t, a, n = "info") {
  e.logMessage(t, a, n);
}
async function re(e, t, a) {
  return await e.safeWaitForInputEdgeData(t, a);
}
async function ie(e, t) {
  return await e.safeWaitForAllInputEdgeData(t);
}
function oe(e, t) {
  return e.getBatchStackItem(t);
}
function z(e, t) {
  e.terminateBatch(t);
}
function le(e, t, a, n, u, s) {
  e.logTime(e, t, a, n, u, s);
}
function ue(e, t, a) {
  const n = a && t.iterations >= a;
  return t.noMoreData || n ? (z(e, t), !0) : !1;
}
const F = {
  control: (e) => ({
    ...e,
    minHeight: "32px",
    borderColor: "#d1d5db",
    "&:hover": {
      borderColor: "#9ca3af"
    }
  }),
  valueContainer: (e) => ({
    ...e,
    padding: "2px 8px"
  }),
  input: (e) => ({
    ...e,
    margin: 0,
    padding: 0
  }),
  indicatorsContainer: (e) => ({
    ...e,
    height: "32px"
  }),
  menu: (e) => ({
    ...e,
    zIndex: 9999
  }),
  menuPortal: (e) => ({
    ...e,
    zIndex: 9999
  })
}, J = ({
  items: e,
  selectedItem: t,
  onSelect: a,
  placeholder: n = "Select...",
  clearable: u = !0,
  creatable: s = !1,
  multiSelect: p = !1,
  width: c,
  isDisabled: f = !1,
  noOptionsMessage: m = "No options",
  className: h = ""
}) => {
  const [g, A] = C(
    Array.isArray(t) ? "" : (t == null ? void 0 : t.id) || ""
  ), N = e.map((l) => ({
    label: l.label,
    value: l.id,
    extraData: l.extraData ?? null
  })), r = Array.isArray(t) ? t.map((l) => ({
    label: l.label,
    value: l.id,
    extraData: l.extraData ?? null
  })) : t ? {
    label: t.label,
    value: t.id,
    extraData: t.extraData ?? null
  } : null, y = (l) => {
    if (!l) {
      a(null);
      return;
    }
    if (Array.isArray(l)) {
      const w = l.map((R) => ({
        id: R.value,
        label: R.label,
        extraData: R.extraData
      }));
      a(w);
    } else {
      const w = {
        id: l.value,
        label: l.label,
        extraData: l.extraData
      };
      a(w);
    }
  }, d = (l) => {
    A(l);
  }, D = {
    styles: F,
    options: N,
    onChange: y,
    placeholder: n,
    value: r,
    noOptionsMessage: () => m,
    isClearable: u,
    menuPortalTarget: typeof document < "u" ? document.body : null,
    isDisabled: f,
    isMulti: p
  }, M = c ? { width: `${c}px` } : {};
  return /* @__PURE__ */ o("div", { className: `w-full ${h}`, style: M, children: s ? /* @__PURE__ */ o(
    $,
    {
      ...D,
      inputValue: g,
      onInputChange: d
    }
  ) : /* @__PURE__ */ o(P, { ...D }) });
}, se = ({
  connections: e,
  selectedUuid: t,
  onSelect: a,
  types: n = [],
  exclude: u = [],
  placeholder: s = "Select a connection...",
  width: p,
  isDisabled: c = !1
}) => {
  const [f, m] = C([]), [h, g] = C([]);
  S(() => {
    let r = e;
    n.length > 0 && (r = r.filter((d) => n.includes(d.type))), u.length > 0 && (r = r.filter((d) => !u.includes(d.uuid))), m(r);
    const y = r.map((d) => ({
      id: d.uuid,
      label: d.name,
      extraData: { type: d.type }
    }));
    g(y), !t && r.length === 1 && a(r[0].uuid, r[0].type);
  }, [e, n, u, t, a]);
  const A = (r) => {
    if (!r || Array.isArray(r))
      return;
    const y = r, d = f.find((D) => D.uuid === y.id);
    d && a(d.uuid, d.type);
  };
  return /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o(
    J,
    {
      items: h,
      selectedItem: (() => {
        if (t)
          return h.find((r) => r.id === t);
      })(),
      onSelect: A,
      placeholder: s,
      clearable: !1,
      width: p,
      isDisabled: c
    }
  ) });
}, O = ({ text: e }) => {
  const [t, a] = C(!1);
  return /* @__PURE__ */ x("div", { className: "relative inline-block", children: [
    /* @__PURE__ */ o(
      "div",
      {
        className: "text-blue-500 cursor-pointer hover:text-blue-700 inline-flex items-center justify-center w-5 h-5 rounded-full border border-blue-500 text-xs font-bold",
        onClick: () => a(!t),
        onMouseEnter: () => a(!0),
        onMouseLeave: () => a(!1),
        children: "?"
      }
    ),
    t && /* @__PURE__ */ o(
      "div",
      {
        className: "absolute z-50 left-0 top-6 bg-white border border-gray-300 rounded-md shadow-lg p-3 min-w-[200px] max-w-[400px] text-sm",
        onClick: (n) => n.stopPropagation(),
        children: /* @__PURE__ */ o("div", { className: "whitespace-pre-wrap", children: e })
      }
    )
  ] });
}, ce = ({
  label: e,
  size: t = 25,
  className: a,
  checkboxClassName: n,
  checked: u,
  onChange: s,
  popupHelp: p,
  disabled: c = !1
}) => /* @__PURE__ */ x(
  "div",
  {
    className: `flex flex-row place-items-center gap-2 ${c ? "cursor-not-allowed opacity-50" : "cursor-pointer"} ${a || ""}`,
    onClick: c ? void 0 : s,
    children: [
      /* @__PURE__ */ o(
        "input",
        {
          "aria-label": e,
          type: "checkbox",
          autoComplete: "new-password",
          checked: u,
          disabled: c,
          className: `ml-1 bg-hsMidGrayBg text-gray-700 p-0 ring-0 rounded-sm
        border-none outline-none ring-0 focus:ring-0 focus:outline-[0px] focus:border-transparent
        active:ring-0 active:outline-none active:border-transparent ${c ? "cursor-not-allowed" : "cursor-pointer"}
        ${n || ""}`,
          style: { width: `${t}px`, height: `${t}px` },
          onChange: () => {
          }
        }
      ),
      /* @__PURE__ */ x("div", { className: "ml-[3px] flex flex-row gap-1", children: [
        /* @__PURE__ */ o("div", { className: "leading-[1.1]", children: e }),
        p && /* @__PURE__ */ o(O, { text: p })
      ] })
    ]
  }
);
var i = [];
for (var T = 0; T < 256; ++T)
  i.push((T + 256).toString(16).slice(1));
function K(e, t = 0) {
  return (i[e[t + 0]] + i[e[t + 1]] + i[e[t + 2]] + i[e[t + 3]] + "-" + i[e[t + 4]] + i[e[t + 5]] + "-" + i[e[t + 6]] + i[e[t + 7]] + "-" + i[e[t + 8]] + i[e[t + 9]] + "-" + i[e[t + 10]] + i[e[t + 11]] + i[e[t + 12]] + i[e[t + 13]] + i[e[t + 14]] + i[e[t + 15]]).toLowerCase();
}
var v, q = new Uint8Array(16);
function H() {
  if (!v && (v = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !v))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return v(q);
}
var B = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const I = {
  randomUUID: B
};
function b(e, t, a) {
  if (I.randomUUID && !e)
    return I.randomUUID();
  e = e || {};
  var n = e.random || (e.rng || H)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, K(n);
}
const de = ({
  className: e = "",
  value: t,
  width: a,
  onChange: n,
  placeholder: u = "",
  type: s = "text",
  readonly: p = !1
}) => {
  const c = (f) => {
    n(f.currentTarget.value);
  };
  return /* @__PURE__ */ o(
    "input",
    {
      id: b(),
      name: b(),
      style: { width: a || "100%" },
      className: `border-[1px] border-gray-300 rounded-md p-1 focus:ring-gray-400 ${e}`,
      autoComplete: "new-password",
      placeholder: u,
      onChange: c,
      "aria-label": "input",
      value: t,
      type: s,
      readOnly: p
    }
  );
}, pe = ({
  label: e,
  className: t = "",
  children: a
}) => /* @__PURE__ */ x("div", { className: "flex flex-col w-full", children: [
  /* @__PURE__ */ o("div", { className: `w-full mb-[2px] ${t}`, children: e }),
  a
] }), fe = ({
  label: e,
  className: t = "",
  inputClassName: a = "",
  labelClassName: n = "",
  value: u,
  onChange: s,
  placeholder: p = "",
  type: c = "text",
  width: f,
  popupHelp: m
}) => {
  const h = (g) => {
    s(g.currentTarget.value);
  };
  return /* @__PURE__ */ x("div", { className: `flex flex-row gap-2 place-items-center ${t}`, children: [
    /* @__PURE__ */ x("div", { className: "ml-[3px] flex flex-row gap-1 place-items-center", children: [
      /* @__PURE__ */ o("div", { className: `${n}`, children: e }),
      m && /* @__PURE__ */ o(O, { text: m })
    ] }),
    /* @__PURE__ */ o("form", { autoComplete: "off", children: /* @__PURE__ */ o(
      "input",
      {
        style: { width: f || "100%" },
        id: b(),
        name: b(),
        className: `border-[1px] border-gray-300 rounded-md p-1 focus:ring-gray-400 ${a}`,
        placeholder: p,
        autoComplete: "off",
        autoCorrect: "off",
        autoCapitalize: "off",
        spellCheck: !1,
        onChange: h,
        onDoubleClick: (g) => g.stopPropagation(),
        "aria-label": "input",
        value: u,
        type: c
      }
    ) })
  ] });
};
export {
  k as BlockExecutionStatusEnum,
  U as BlockGroupEnum,
  V as BlockTypeSpecialEnum,
  ce as CheckboxWithLabel,
  se as ConnectionChooser,
  W as ExecutionEnvironmentModeEnum,
  L as IFlowExecutionHistoryLevelEnum,
  de as InputSimple,
  fe as LabelInputPairHorizontal,
  pe as LabelValuePairVertical,
  O as PopupHelp,
  J as SelectItems,
  _ as StyleTypeEnum,
  E as deepCopy,
  G as formulateFatalError,
  oe as getBatchStackItem,
  j as getInputEdgeData,
  ne as logMessage,
  le as logTime,
  ee as outgoingEdgeAssignment,
  ae as safeJsonParse,
  ie as safeWaitForAllInputEdgeData,
  re as safeWaitForInputEdgeData,
  ue as shouldTerminateBatchHelper,
  z as terminateBatch,
  te as validateConfig
};
