import {
  __toESM,
  require_react
} from "./chunk-L7APZED3.js";

// node_modules/@restart/hooks/esm/useMounted.js
var import_react = __toESM(require_react());
function useMounted() {
  const mounted = (0, import_react.useRef)(true);
  const isMounted = (0, import_react.useRef)(() => mounted.current);
  (0, import_react.useEffect)(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

// node_modules/@restart/hooks/esm/useCommittedRef.js
var import_react2 = __toESM(require_react());
function useCommittedRef(value) {
  const ref = (0, import_react2.useRef)(value);
  (0, import_react2.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref;
}
var useCommittedRef_default = useCommittedRef;

// node_modules/@restart/hooks/esm/useEventCallback.js
var import_react3 = __toESM(require_react());
function useEventCallback(fn) {
  const ref = useCommittedRef_default(fn);
  return (0, import_react3.useCallback)(function(...args) {
    return ref.current && ref.current(...args);
  }, [ref]);
}

export {
  useMounted,
  useCommittedRef_default,
  useEventCallback
};
//# sourceMappingURL=chunk-6QMAFHJ4.js.map
