import {
  useButtonProps
} from "./chunk-LDGXC5XK.js";
import {
  useEventCallback
} from "./chunk-6QMAFHJ4.js";
import {
  require_jsx_runtime,
  useBootstrapPrefix
} from "./chunk-VXCM3U3K.js";
import {
  require_classnames
} from "./chunk-B6ABXX3R.js";
import {
  __toESM,
  require_react
} from "./chunk-L7APZED3.js";

// node_modules/react-bootstrap/esm/Pagination.js
var import_classnames2 = __toESM(require_classnames());
var React3 = __toESM(require_react());

// node_modules/react-bootstrap/esm/PageItem.js
var import_classnames = __toESM(require_classnames());
var React2 = __toESM(require_react());

// node_modules/@restart/ui/esm/Anchor.js
var React = __toESM(require_react());

// node_modules/@restart/hooks/esm/useEventListener.js
var import_react = __toESM(require_react());
function useEventListener(eventTarget, event, listener, capture = false) {
  const handler = useEventCallback(listener);
  (0, import_react.useEffect)(() => {
    const target = typeof eventTarget === "function" ? eventTarget() : eventTarget;
    target.addEventListener(event, handler, capture);
    return () => target.removeEventListener(event, handler, capture);
  }, [eventTarget]);
}

// node_modules/@restart/hooks/esm/useGlobalListener.js
var import_react2 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useInterval.js
var import_react3 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useRafInterval.js
var import_react4 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useMergeState.js
var import_react5 = __toESM(require_react());

// node_modules/@restart/hooks/esm/usePrevious.js
var import_react6 = __toESM(require_react());
function usePrevious(value) {
  const ref = (0, import_react6.useRef)(null);
  (0, import_react6.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
}

// node_modules/@restart/hooks/esm/useImage.js
var import_react7 = __toESM(require_react());

// node_modules/@restart/hooks/esm/useResizeObserver.js
var import_react8 = __toESM(require_react());

// node_modules/@restart/ui/esm/Anchor.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["onKeyDown"];
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function isTrivialHref(href) {
  return !href || href.trim() === "#";
}
var Anchor = React.forwardRef((_ref, ref) => {
  let {
    onKeyDown
  } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
  const [buttonProps] = useButtonProps(Object.assign({
    tagName: "a"
  }, props));
  const handleKeyDown = useEventCallback((e) => {
    buttonProps.onKeyDown(e);
    onKeyDown == null ? void 0 : onKeyDown(e);
  });
  if (isTrivialHref(props.href) || props.role === "button") {
    return (0, import_jsx_runtime.jsx)("a", Object.assign({
      ref
    }, props, buttonProps, {
      onKeyDown: handleKeyDown
    }));
  }
  return (0, import_jsx_runtime.jsx)("a", Object.assign({
    ref
  }, props, {
    onKeyDown
  }));
});
Anchor.displayName = "Anchor";
var Anchor_default = Anchor;

// node_modules/react-bootstrap/esm/PageItem.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var PageItem = React2.forwardRef(({
  active = false,
  disabled = false,
  className,
  style,
  activeLabel = "(current)",
  children,
  linkStyle,
  linkClassName,
  ...props
}, ref) => {
  const Component = active || disabled ? "span" : Anchor_default;
  return (0, import_jsx_runtime2.jsx)("li", {
    ref,
    style,
    className: (0, import_classnames.default)(className, "page-item", {
      active,
      disabled
    }),
    children: (0, import_jsx_runtime3.jsxs)(Component, {
      className: (0, import_classnames.default)("page-link", linkClassName),
      style: linkStyle,
      ...props,
      children: [children, active && activeLabel && (0, import_jsx_runtime2.jsx)("span", {
        className: "visually-hidden",
        children: activeLabel
      })]
    })
  });
});
PageItem.displayName = "PageItem";
var PageItem_default = PageItem;
function createButton(name, defaultValue, label = name) {
  const Button = React2.forwardRef(({
    children,
    ...props
  }, ref) => (0, import_jsx_runtime3.jsxs)(PageItem, {
    ...props,
    ref,
    children: [(0, import_jsx_runtime2.jsx)("span", {
      "aria-hidden": "true",
      children: children || defaultValue
    }), (0, import_jsx_runtime2.jsx)("span", {
      className: "visually-hidden",
      children: label
    })]
  }));
  Button.displayName = name;
  return Button;
}
var First = createButton("First", "«");
var Prev = createButton("Prev", "‹", "Previous");
var Ellipsis = createButton("Ellipsis", "…", "More");
var Next = createButton("Next", "›");
var Last = createButton("Last", "»");

// node_modules/react-bootstrap/esm/Pagination.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var Pagination = React3.forwardRef(({
  bsPrefix,
  className,
  size,
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, "pagination");
  return (0, import_jsx_runtime4.jsx)("ul", {
    ref,
    ...props,
    className: (0, import_classnames2.default)(className, decoratedBsPrefix, size && `${decoratedBsPrefix}-${size}`)
  });
});
Pagination.displayName = "Pagination";
var Pagination_default = Object.assign(Pagination, {
  First,
  Prev,
  Ellipsis,
  Item: PageItem_default,
  Next,
  Last
});

export {
  useEventListener,
  usePrevious,
  Anchor_default,
  PageItem_default,
  Pagination_default
};
//# sourceMappingURL=chunk-EZT563RA.js.map
