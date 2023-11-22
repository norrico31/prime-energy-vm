import {
  __toESM,
  require_react
} from "./chunk-L7APZED3.js";

// node_modules/@restart/hooks/esm/useCallbackRef.js
var import_react = __toESM(require_react());
function useCallbackRef() {
  return (0, import_react.useState)(null);
}

// node_modules/@restart/hooks/esm/useIsomorphicEffect.js
var import_react2 = __toESM(require_react());
var isReactNative = typeof global !== "undefined" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative";
var isDOM = typeof document !== "undefined";
var useIsomorphicEffect_default = isDOM || isReactNative ? import_react2.useLayoutEffect : import_react2.useEffect;

export {
  useCallbackRef,
  useIsomorphicEffect_default
};
//# sourceMappingURL=chunk-VDKKCB63.js.map
