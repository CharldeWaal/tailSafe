"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/generated/generatedTailSafeInterface.ts
var generatedTailSafeInterface_exports = {};
var init_generatedTailSafeInterface = __esm({
  "src/generated/generatedTailSafeInterface.ts"() {
    "use strict";
  }
});

// src/generated/generatedTailSafeMap.ts
var generatedTailSafeMap_exports = {};
__export(generatedTailSafeMap_exports, {
  tailSafeMap: () => tailSafeMap
});
var tailSafeMap;
var init_generatedTailSafeMap = __esm({
  "src/generated/generatedTailSafeMap.ts"() {
    "use strict";
    tailSafeMap = {
      "absolute": (v) => v === true ? "absolute" : v,
      "accent": (v) => v,
      "antialiased": (v) => v === true ? "antialiased" : v,
      "auto": (v) => v,
      "backdrop": (v) => v,
      "bg": (v) => v,
      "block": (v) => v === true ? "block" : v,
      "blur": (v) => v === true ? "blur" : v,
      "border": (v) => v === true ? "border" : v,
      "caret": (v) => v,
      "col": (v) => v,
      "cursor": (v) => v === true ? "cursor" : v,
      "decoration": (v) => v,
      "divide": (v) => v,
      "drop": (v) => v === true ? "drop" : v,
      "duration": (v) => v,
      "ease": (v) => v,
      "fill": (v) => v,
      "filter": (v) => v === true ? "filter" : v,
      "fixed": (v) => v === true ? "fixed" : v,
      "flex": (v) => v === true ? "flex" : v,
      "flex-col": (v) => v === true ? "flex flex-col" : v,
      "flex-row": (v) => v === true ? "flex flex-row" : v,
      "flow": (v) => v === true ? "flow" : v,
      "font": (v) => v,
      "gap": (v) => v,
      "grayscale": (v) => v === true ? "grayscale" : v,
      "grid": (v) => v === true ? "grid" : v,
      "h": (v) => v,
      "hidden": (v) => v === true ? "hidden" : v,
      "inline": (v) => v === true ? "inline" : v,
      "invert": (v) => v === true ? "invert" : v,
      "italic": (v) => v === true ? "italic" : v,
      "items": (v) => v,
      "justify": (v) => v === true ? "justify-center" : v,
      "leading": (v) => v,
      "left": (v) => v === true ? "left" : v,
      "max": (v) => v,
      "mb": (v) => v,
      "min": (v) => v === true ? "min" : v,
      "mt": (v) => v,
      "mx": (v) => v,
      "my": (v) => v === true ? "my" : v,
      "object": (v) => v,
      "opacity": (v) => v,
      "outline": (v) => v === true ? "outline" : v,
      "overflow": (v) => v,
      "p": (v) => v,
      "pl": (v) => v === true ? "pl" : v,
      "place": (v) => v,
      "pointer": (v) => v === true ? "pointer" : v,
      "pr": (v) => v === true ? "pr" : v,
      "pt": (v) => v,
      "px": (v) => v,
      "py": (v) => v,
      "relative": (v) => v === true ? "relative" : v,
      "resize": (v) => v === true ? "resize" : v,
      "right": (v) => v,
      "ring": (v) => v === true ? "ring" : v,
      "rounded": (v) => v === true ? "rounded" : v,
      "row": (v) => v,
      "sepia": (v) => v === true ? "sepia" : v,
      "shadow": (v) => v === true ? "shadow" : v,
      "space": (v) => v,
      "sr": (v) => v === true ? "sr" : v,
      "static": (v) => v === true ? "static" : v,
      "sticky": (v) => v === true ? "sticky" : v,
      "stroke": (v) => v,
      "table": (v) => v === true ? "table" : v,
      "text": (v) => v,
      "top": (v) => v,
      "tracking": (v) => v,
      "transform": (v) => v === true ? "transform" : v,
      "transition": (v) => v === true ? "transition" : v,
      "translate": (v) => v,
      "underline": (v) => v === true ? "underline" : v,
      "uppercase": (v) => v === true ? "uppercase" : v,
      "w": (v) => v,
      "z": (v) => v
    };
  }
});

// src/config/tailSafe.config.ts
var tailSafe_config_exports = {};
__export(tailSafe_config_exports, {
  default: () => tailSafe_config_default
});
var tailSafeConfig, tailSafe_config_default;
var init_tailSafe_config = __esm({
  "src/config/tailSafe.config.ts"() {
    "use strict";
    tailSafeConfig = {
      // For flex, we want 'flex-row' and 'flex-col' to generate both 'flex' and the direction
      aliases: {
        "flex-row": ["flex", "flex-row"],
        "flex-col": ["flex", "flex-col"],
        "justify": ["justify-center"]
        // Add more grouped/alias props as needed
      },
      theme: {}
    };
    tailSafe_config_default = tailSafeConfig;
  }
});

// src/generated/generatedAllProps.ts
var generatedAllProps_exports = {};
__export(generatedAllProps_exports, {
  allTailSafeProps: () => allTailSafeProps
});
var allTailSafeProps;
var init_generatedAllProps = __esm({
  "src/generated/generatedAllProps.ts"() {
    "use strict";
    allTailSafeProps = [
      "absolute",
      "accent",
      "antialiased",
      "auto",
      "backdrop",
      "bg",
      "block",
      "blur",
      "border",
      "caret",
      "className",
      "col",
      "cursor",
      "decoration",
      "divide",
      "drop",
      "duration",
      "ease",
      "fill",
      "filter",
      "fixed",
      "flex",
      "flex-col",
      "flex-row",
      "flow",
      "font",
      "gap",
      "grayscale",
      "grid",
      "h",
      "hidden",
      "inline",
      "invert",
      "italic",
      "items",
      "justify",
      "leading",
      "left",
      "max",
      "mb",
      "min",
      "mt",
      "mx",
      "my",
      "object",
      "opacity",
      "outline",
      "overflow",
      "p",
      "pl",
      "place",
      "pointer",
      "pr",
      "pt",
      "px",
      "py",
      "relative",
      "resize",
      "right",
      "ring",
      "rounded",
      "row",
      "sepia",
      "shadow",
      "space",
      "sr",
      "static",
      "sticky",
      "stroke",
      "table",
      "text",
      "top",
      "tracking",
      "transform",
      "transition",
      "translate",
      "underline",
      "uppercase",
      "w",
      "z"
    ];
  }
});

// src/index.ts
var index_exports = {};
__export(index_exports, {
  A: () => A,
  Abbr: () => Abbr,
  Address: () => Address,
  Area: () => Area,
  Article: () => Article,
  Aside: () => Aside,
  Audio: () => Audio,
  AutoTailSafeProvider: () => AutoTailSafeProvider,
  B: () => B,
  Base: () => Base,
  Bdi: () => Bdi,
  Bdo: () => Bdo,
  Big: () => Big,
  Blockquote: () => Blockquote,
  Body: () => Body,
  Br: () => Br,
  Button: () => Button,
  Canvas: () => Canvas,
  Caption: () => Caption,
  Cite: () => Cite,
  Code: () => Code,
  Col: () => Col,
  Colgroup: () => Colgroup,
  Data: () => Data,
  Datalist: () => Datalist,
  Dd: () => Dd,
  Del: () => Del,
  Details: () => Details,
  Dfn: () => Dfn,
  Dialog: () => Dialog,
  Div: () => Div,
  Dl: () => Dl,
  Dt: () => Dt,
  Em: () => Em,
  Embed: () => Embed,
  Fieldset: () => Fieldset,
  Figcaption: () => Figcaption,
  Figure: () => Figure,
  Footer: () => Footer,
  Form: () => Form,
  H1: () => H1,
  H2: () => H2,
  H3: () => H3,
  H4: () => H4,
  H5: () => H5,
  H6: () => H6,
  Head: () => Head,
  Header: () => Header,
  Hgroup: () => Hgroup,
  Hr: () => Hr,
  Html: () => Html,
  I: () => I,
  Iframe: () => Iframe,
  Img: () => Img,
  Input: () => Input,
  Ins: () => Ins,
  Kbd: () => Kbd,
  Keygen: () => Keygen,
  Label: () => Label,
  Legend: () => Legend,
  Li: () => Li,
  Link: () => Link,
  Main: () => Main,
  Map: () => Map,
  Mark: () => Mark,
  Menu: () => Menu,
  Menuitem: () => Menuitem,
  Meta: () => Meta,
  Meter: () => Meter,
  Nav: () => Nav,
  Noscript: () => Noscript,
  Object: () => Object2,
  Ol: () => Ol,
  Optgroup: () => Optgroup,
  Option: () => Option,
  Output: () => Output,
  P: () => P,
  Param: () => Param,
  Picture: () => Picture,
  Pre: () => Pre,
  Progress: () => Progress,
  Q: () => Q,
  Rp: () => Rp,
  Rt: () => Rt,
  Ruby: () => Ruby,
  S: () => S,
  Samp: () => Samp,
  Script: () => Script,
  Section: () => Section,
  Select: () => Select,
  Small: () => Small,
  Source: () => Source,
  Span: () => Span,
  Strong: () => Strong,
  Style: () => Style,
  Sub: () => Sub,
  Summary: () => Summary,
  Sup: () => Sup,
  Table: () => Table,
  Tbody: () => Tbody,
  Td: () => Td,
  Textarea: () => Textarea,
  Tfoot: () => Tfoot,
  Th: () => Th,
  Thead: () => Thead,
  Time: () => Time,
  Title: () => Title,
  Tr: () => Tr,
  Track: () => Track,
  U: () => U,
  Ul: () => Ul,
  Var: () => Var,
  Video: () => Video,
  Wbr: () => Wbr,
  withTailSafe: () => withTailSafe
});
module.exports = __toCommonJS(index_exports);

// src/types/tailSafe.types.ts
var GeneratedTailSafe = {};
try {
  const generated = (init_generatedTailSafeInterface(), __toCommonJS(generatedTailSafeInterface_exports));
  GeneratedTailSafe = generated.TailSafe || {};
} catch (error) {
  console.warn("TailSafe: Generated interface not found, using minimal fallback");
  GeneratedTailSafe = {};
}

// src/components/HtmlElements/htmlElement.tsx
var import_react5 = __toESM(require("react"));

// src/hooks/useTailSafe/useTailSafe.ts
var import_react3 = require("react");

// src/provider/AutoTailSafeProvider.tsx
var import_react2 = require("react");

// src/provider/TailSafeProvider.tsx
var import_react = require("react");

// src/utils/tailSafe.utils.ts
var baseTailSafeMap = {};
try {
  const { tailSafeMap: tailSafeMap2 } = (init_generatedTailSafeMap(), __toCommonJS(generatedTailSafeMap_exports));
  baseTailSafeMap = tailSafeMap2 || {};
} catch (error) {
  console.warn("TailSafe: Base map not found, falling back to user-aliases-only");
  baseTailSafeMap = {};
}
var runtimeMapCache = null;
var lastConfigHash = null;
var loadUserConfig = () => {
  try {
    if (typeof window !== "undefined") {
      return {};
    }
    const configPath = process.cwd() + "/tailSafe.config.js";
    delete require.cache[require.resolve(configPath)];
    const userConfig = require(configPath);
    return userConfig.default || userConfig;
  } catch (error) {
    return {};
  }
};
var createUserAliasMap = (aliases) => {
  const aliasMap = {};
  for (const [aliasKey, classNames] of Object.entries(aliases)) {
    const classString = Array.isArray(classNames) ? classNames.join(" ") : String(classNames);
    aliasMap[aliasKey] = (v) => v === true ? classString : v;
  }
  return aliasMap;
};
var createTailwindFallback = (key, value) => {
  if (value === false || value === void 0 || value === null) return null;
  if (typeof value === "string") {
    if (value.startsWith(key + "-")) {
      return value;
    } else if (value.includes(key)) {
      return value;
    } else {
      return `${key}-${value}`;
    }
  }
  return Array.isArray(value) ? value.join(" ") : String(value);
};
var createRuntimeMap = (userAliases) => {
  const userConfig = userAliases || loadUserConfig().aliases || {};
  const configHash = JSON.stringify(userConfig);
  if (runtimeMapCache && lastConfigHash === configHash) {
    return runtimeMapCache;
  }
  const runtimeMap = __spreadValues(__spreadValues({}, baseTailSafeMap), createUserAliasMap(userConfig));
  runtimeMapCache = runtimeMap;
  lastConfigHash = configHash;
  return runtimeMap;
};
var construct = (props, userAliases) => {
  const runtimeMap = createRuntimeMap(userAliases);
  const totalKnownPropsLength = Object.keys(baseTailSafeMap).length + Object.keys(userAliases || {}).length;
  const useFallbackMode = totalKnownPropsLength < 20;
  const classNames = [];
  for (const [key, value] of Object.entries(props)) {
    if (value === void 0 || key === "className" || key === "children") continue;
    const processor = runtimeMap[key];
    if (processor) {
      const result = processor(value);
      if (result) classNames.push(String(result));
    } else if (useFallbackMode) {
      const fallbackClass = createTailwindFallback(key, value);
      if (fallbackClass) {
        classNames.push(fallbackClass);
        if (process.env.NODE_ENV === "development") {
          console.warn(`TailSafe: Fallback mode - converting "${key}=${value}" to "${fallbackClass}"`);
        }
      }
    } else if (process.env.NODE_ENV === "development") {
      console.warn(`TailSafe: Unknown prop "${key}" with value "${value}". Add it to your aliases or check for typos.`);
    }
  }
  return classNames.filter(Boolean).join(" ");
};

// src/provider/TailSafeProvider.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var TailSafeContext = (0, import_react.createContext)({});
var TailSafeProvider = ({
  children,
  userAliases = {},
  debug = false
}) => {
  const transformProps = (0, import_react.useCallback)((props) => {
    const _a = props, { className: originalClassName } = _a, tailSafeProps = __objRest(_a, ["className"]);
    const tailSafeClassName = construct(tailSafeProps, userAliases);
    const mergedClassName = [originalClassName, tailSafeClassName].filter(Boolean).join(" ");
    if (debug) {
      console.log("TailSafe transformed props:", {
        original: props,
        result: __spreadProps(__spreadValues({}, props), { className: mergedClassName }),
        userAliases
      });
    }
    return __spreadProps(__spreadValues({}, props), {
      className: mergedClassName
    });
  }, [userAliases, debug]);
  const contextValue = {
    debug,
    userAliases,
    transformProps
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TailSafeContext.Provider, { value: contextValue, children });
};

// src/provider/AutoTailSafeProvider.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var tailSafeConfig2 = { aliases: {} };
try {
  tailSafeConfig2 = (init_tailSafe_config(), __toCommonJS(tailSafe_config_exports));
} catch (error) {
  console.warn("TailSafe: Config loading error:", error.message);
}
var AutoTailSafeProvider = (_a) => {
  var _b = _a, {
    children,
    userAliases
  } = _b, props = __objRest(_b, [
    "children",
    "userAliases"
  ]);
  const finalAliases = (0, import_react2.useMemo)(() => __spreadValues(__spreadValues({}, tailSafeConfig2.aliases), userAliases), [userAliases]);
  if (props.debug) {
    console.log("\u{1F41B} AutoProvider:", {
      internal: Object.keys(tailSafeConfig2.aliases),
      user: Object.keys(userAliases || {}),
      final: Object.keys(finalAliases),
      userConfigPath: process.cwd() + "tailSafe.config.mjs"
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TailSafeProvider, __spreadProps(__spreadValues({}, props), { userAliases: finalAliases, children }));
};

// src/hooks/useTailSafe/useTailSafe.ts
var useTailSafe = () => (0, import_react3.useContext)(TailSafeContext);

// src/hooks/useConfig/useConfig.ts
var import_react4 = require("react");

// src/components/HtmlElements/htmlElement.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var TAILSAFE_PROPS = /* @__PURE__ */ new Set();
try {
  const { allTailSafeProps: allTailSafeProps2 } = (init_generatedAllProps(), __toCommonJS(generatedAllProps_exports));
  TAILSAFE_PROPS = new Set(allTailSafeProps2 || []);
} catch (error) {
  console.warn("TailSafe: Generated props not found, relying on user aliases for filtering");
  TAILSAFE_PROPS = /* @__PURE__ */ new Set();
}
function filterDomProps(props, userAliases = {}) {
  const domProps = {};
  const userAliasKeys = userAliases ? globalThis.Object.keys(userAliases) : [];
  const propsToFilter = /* @__PURE__ */ new Set([
    ...TAILSAFE_PROPS,
    // Generated TailSafe props (may be empty if codegen failed)
    ...userAliasKeys
    // User-defined aliases (always preserved)
  ]);
  for (const key in props) {
    if (!propsToFilter.has(key)) {
      domProps[key] = props[key];
    }
  }
  return domProps;
}
var createTailSafeHtmlElement = (element) => {
  const Component = import_react5.default.forwardRef((props, ref) => {
    const { transformProps, userAliases = {} } = useTailSafe();
    const _a = transformProps(props), { className } = _a, rest = __objRest(_a, ["className"]);
    const domProps = filterDomProps(rest, userAliases);
    const Element = element;
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Element, __spreadProps(__spreadValues({ ref }, domProps), { className, children: props.children }));
  });
  Component.displayName = `TailSafe${element.charAt(0).toUpperCase() + element.slice(1)}`;
  return Component;
};
var Button = createTailSafeHtmlElement("button");
var Div = createTailSafeHtmlElement("div");
var Span = createTailSafeHtmlElement("span");
var A = createTailSafeHtmlElement("a");
var Abbr = createTailSafeHtmlElement("abbr");
var Address = createTailSafeHtmlElement("address");
var Area = createTailSafeHtmlElement("area");
var Article = createTailSafeHtmlElement("article");
var Aside = createTailSafeHtmlElement("aside");
var Audio = createTailSafeHtmlElement("audio");
var B = createTailSafeHtmlElement("b");
var Base = createTailSafeHtmlElement("base");
var Bdi = createTailSafeHtmlElement("bdi");
var Bdo = createTailSafeHtmlElement("bdo");
var Big = createTailSafeHtmlElement("big");
var Blockquote = createTailSafeHtmlElement("blockquote");
var Body = createTailSafeHtmlElement("body");
var Br = createTailSafeHtmlElement("br");
var Canvas = createTailSafeHtmlElement("canvas");
var Caption = createTailSafeHtmlElement("caption");
var Cite = createTailSafeHtmlElement("cite");
var Code = createTailSafeHtmlElement("code");
var Col = createTailSafeHtmlElement("col");
var Colgroup = createTailSafeHtmlElement("colgroup");
var Data = createTailSafeHtmlElement("data");
var Datalist = createTailSafeHtmlElement("datalist");
var Dd = createTailSafeHtmlElement("dd");
var Del = createTailSafeHtmlElement("del");
var Details = createTailSafeHtmlElement("details");
var Dfn = createTailSafeHtmlElement("dfn");
var Dialog = createTailSafeHtmlElement("dialog");
var Dl = createTailSafeHtmlElement("dl");
var Dt = createTailSafeHtmlElement("dt");
var Em = createTailSafeHtmlElement("em");
var Embed = createTailSafeHtmlElement("embed");
var Fieldset = createTailSafeHtmlElement("fieldset");
var Figcaption = createTailSafeHtmlElement("figcaption");
var Figure = createTailSafeHtmlElement("figure");
var Footer = createTailSafeHtmlElement("footer");
var Form = createTailSafeHtmlElement("form");
var H1 = createTailSafeHtmlElement("h1");
var H2 = createTailSafeHtmlElement("h2");
var H3 = createTailSafeHtmlElement("h3");
var H4 = createTailSafeHtmlElement("h4");
var H5 = createTailSafeHtmlElement("h5");
var H6 = createTailSafeHtmlElement("h6");
var Head = createTailSafeHtmlElement("head");
var Header = createTailSafeHtmlElement("header");
var Hgroup = createTailSafeHtmlElement("hgroup");
var Hr = createTailSafeHtmlElement("hr");
var Html = createTailSafeHtmlElement("html");
var I = createTailSafeHtmlElement("i");
var Iframe = createTailSafeHtmlElement("iframe");
var Img = createTailSafeHtmlElement("img");
var Input = createTailSafeHtmlElement("input");
var Ins = createTailSafeHtmlElement("ins");
var Kbd = createTailSafeHtmlElement("kbd");
var Keygen = createTailSafeHtmlElement("keygen");
var Label = createTailSafeHtmlElement("label");
var Legend = createTailSafeHtmlElement("legend");
var Li = createTailSafeHtmlElement("li");
var Link = createTailSafeHtmlElement("link");
var Main = createTailSafeHtmlElement("main");
var Map = createTailSafeHtmlElement("map");
var Mark = createTailSafeHtmlElement("mark");
var Menu = createTailSafeHtmlElement("menu");
var Menuitem = createTailSafeHtmlElement("menuitem");
var Meta = createTailSafeHtmlElement("meta");
var Meter = createTailSafeHtmlElement("meter");
var Nav = createTailSafeHtmlElement("nav");
var Noscript = createTailSafeHtmlElement("noscript");
var Object2 = createTailSafeHtmlElement("object");
var Ol = createTailSafeHtmlElement("ol");
var Optgroup = createTailSafeHtmlElement("optgroup");
var Option = createTailSafeHtmlElement("option");
var Output = createTailSafeHtmlElement("output");
var P = createTailSafeHtmlElement("p");
var Param = createTailSafeHtmlElement("param");
var Picture = createTailSafeHtmlElement("picture");
var Pre = createTailSafeHtmlElement("pre");
var Progress = createTailSafeHtmlElement("progress");
var Q = createTailSafeHtmlElement("q");
var Rp = createTailSafeHtmlElement("rp");
var Rt = createTailSafeHtmlElement("rt");
var Ruby = createTailSafeHtmlElement("ruby");
var S = createTailSafeHtmlElement("s");
var Samp = createTailSafeHtmlElement("samp");
var Script = createTailSafeHtmlElement("script");
var Section = createTailSafeHtmlElement("section");
var Select = createTailSafeHtmlElement("select");
var Small = createTailSafeHtmlElement("small");
var Source = createTailSafeHtmlElement("source");
var Strong = createTailSafeHtmlElement("strong");
var Style = createTailSafeHtmlElement("style");
var Sub = createTailSafeHtmlElement("sub");
var Summary = createTailSafeHtmlElement("summary");
var Sup = createTailSafeHtmlElement("sup");
var Table = createTailSafeHtmlElement("table");
var Tbody = createTailSafeHtmlElement("tbody");
var Td = createTailSafeHtmlElement("td");
var Textarea = createTailSafeHtmlElement("textarea");
var Tfoot = createTailSafeHtmlElement("tfoot");
var Th = createTailSafeHtmlElement("th");
var Thead = createTailSafeHtmlElement("thead");
var Time = createTailSafeHtmlElement("time");
var Title = createTailSafeHtmlElement("title");
var Tr = createTailSafeHtmlElement("tr");
var Track = createTailSafeHtmlElement("track");
var U = createTailSafeHtmlElement("u");
var Ul = createTailSafeHtmlElement("ul");
var Var = createTailSafeHtmlElement("var");
var Video = createTailSafeHtmlElement("video");
var Wbr = createTailSafeHtmlElement("wbr");

// src/components/WithTailSafe/WithTailSafe.tsx
var import_react6 = __toESM(require("react"));
var import_jsx_runtime4 = require("react/jsx-runtime");
function withTailSafe(Component) {
  const Wrapped = import_react6.default.forwardRef((props, ref) => {
    const { transformProps } = useTailSafe();
    const transformedProps = transformProps(props);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Component, __spreadProps(__spreadValues({}, transformedProps), { ref }));
  });
  Wrapped.displayName = `withTailSafe(${Component.displayName || Component.name || "Component"})`;
  return Wrapped;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  A,
  Abbr,
  Address,
  Area,
  Article,
  Aside,
  Audio,
  AutoTailSafeProvider,
  B,
  Base,
  Bdi,
  Bdo,
  Big,
  Blockquote,
  Body,
  Br,
  Button,
  Canvas,
  Caption,
  Cite,
  Code,
  Col,
  Colgroup,
  Data,
  Datalist,
  Dd,
  Del,
  Details,
  Dfn,
  Dialog,
  Div,
  Dl,
  Dt,
  Em,
  Embed,
  Fieldset,
  Figcaption,
  Figure,
  Footer,
  Form,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Head,
  Header,
  Hgroup,
  Hr,
  Html,
  I,
  Iframe,
  Img,
  Input,
  Ins,
  Kbd,
  Keygen,
  Label,
  Legend,
  Li,
  Link,
  Main,
  Map,
  Mark,
  Menu,
  Menuitem,
  Meta,
  Meter,
  Nav,
  Noscript,
  Object,
  Ol,
  Optgroup,
  Option,
  Output,
  P,
  Param,
  Picture,
  Pre,
  Progress,
  Q,
  Rp,
  Rt,
  Ruby,
  S,
  Samp,
  Script,
  Section,
  Select,
  Small,
  Source,
  Span,
  Strong,
  Style,
  Sub,
  Summary,
  Sup,
  Table,
  Tbody,
  Td,
  Textarea,
  Tfoot,
  Th,
  Thead,
  Time,
  Title,
  Tr,
  Track,
  U,
  Ul,
  Var,
  Video,
  Wbr,
  withTailSafe
});
