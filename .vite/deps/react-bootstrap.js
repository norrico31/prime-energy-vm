import {
  Anchor_default,
  PageItem_default,
  Pagination_default,
  useEventListener,
  usePrevious
} from "./chunk-EZT563RA.js";
import {
  Table_default
} from "./chunk-723LAS7J.js";
import {
  CloseButton_default,
  ToastBody_default,
  ToastHeader_default,
  Toast_default
} from "./chunk-N3XHINCG.js";
import {
  ToastContainer_default
} from "./chunk-VNN4YX7Y.js";
import {
  Button_default as Button_default2
} from "./chunk-2ZDI7UPZ.js";
import {
  Button_default
} from "./chunk-LDGXC5XK.js";
import {
  Spinner_default
} from "./chunk-DIDLDQXW.js";
import {
  NoopTransition_default,
  OverlayTrigger_default,
  Overlay_default,
  PopoverBody_default,
  PopoverHeader_default,
  Popover_default,
  contains,
  hasClass,
  isEscKey,
  mergeOptionsWithPopperConfig,
  renderTransition,
  require_browser,
  require_warning,
  useClickOutside_default,
  usePopper_default,
  useUncontrolled,
  useWaitForDOMRef,
  useWindow
} from "./chunk-DCWINQ2E.js";
import {
  useCallbackRef,
  useIsomorphicEffect_default
} from "./chunk-VDKKCB63.js";
import "./chunk-PQEZCWQY.js";
import {
  ENTERED,
  ENTERING,
  EXITED,
  EXITING,
  Fade_default,
  TransitionWrapper_default,
  addEventListener_default,
  canUseDOM_default,
  css_default,
  listen_default,
  ownerDocument,
  removeEventListener_default,
  require_prop_types,
  transitionEnd,
  transitionEndListener,
  triggerBrowserReflow,
  useMergedRefs_default,
  useTimeout,
  useWillUnmount
} from "./chunk-UL46FFXH.js";
import {
  useCommittedRef_default,
  useEventCallback,
  useMounted
} from "./chunk-6QMAFHJ4.js";
import "./chunk-KM5JISHU.js";
import "./chunk-PSGUSLG5.js";
import {
  require_react_dom
} from "./chunk-MDIHFEFG.js";
import {
  Tooltip_default
} from "./chunk-CHHDSQMJ.js";
import {
  DEFAULT_BREAKPOINTS,
  DEFAULT_MIN_BREAKPOINT,
  ThemeProvider_default,
  require_jsx_runtime,
  useBootstrapBreakpoints,
  useBootstrapMinBreakpoint,
  useBootstrapPrefix,
  useIsRTL
} from "./chunk-VXCM3U3K.js";
import {
  require_classnames
} from "./chunk-B6ABXX3R.js";
import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-L7APZED3.js";

// node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js
var require_createChainableTypeChecker = __commonJS({
  "node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = createChainableTypeChecker;
    function createChainableTypeChecker(validate) {
      function checkType(isRequired, props, propName, componentName, location, propFullName) {
        var componentNameSafe = componentName || "<<anonymous>>";
        var propFullNameSafe = propFullName || propName;
        if (props[propName] == null) {
          if (isRequired) {
            return new Error("Required " + location + " `" + propFullNameSafe + "` was not specified " + ("in `" + componentNameSafe + "`."));
          }
          return null;
        }
        for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
          args[_key - 6] = arguments[_key];
        }
        return validate.apply(void 0, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
      }
      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
      return chainedCheckType;
    }
    module.exports = exports["default"];
  }
});

// node_modules/prop-types-extra/lib/all.js
var require_all = __commonJS({
  "node_modules/prop-types-extra/lib/all.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = all2;
    var _createChainableTypeChecker = require_createChainableTypeChecker();
    var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function all2() {
      for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
        validators[_key] = arguments[_key];
      }
      function allPropTypes() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        var error = null;
        validators.forEach(function(validator) {
          if (error != null) {
            return;
          }
          var result = validator.apply(void 0, args);
          if (result != null) {
            error = result;
          }
        });
        return error;
      }
      return (0, _createChainableTypeChecker2.default)(allPropTypes);
    }
    module.exports = exports["default"];
  }
});

// node_modules/react-bootstrap/esm/Accordion.js
var import_classnames7 = __toESM(require_classnames());
var React9 = __toESM(require_react());
var import_react6 = __toESM(require_react());

// node_modules/react-bootstrap/esm/AccordionBody.js
var import_classnames3 = __toESM(require_classnames());
var React5 = __toESM(require_react());
var import_react3 = __toESM(require_react());

// node_modules/react-bootstrap/esm/AccordionCollapse.js
var import_classnames2 = __toESM(require_classnames());
var React3 = __toESM(require_react());
var import_react2 = __toESM(require_react());

// node_modules/react-bootstrap/esm/Collapse.js
var import_classnames = __toESM(require_classnames());
var import_react = __toESM(require_react());

// node_modules/react-bootstrap/esm/createChainedFunction.js
function createChainedFunction(...funcs) {
  return funcs.filter((f) => f != null).reduce((acc, f) => {
    if (typeof f !== "function") {
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    }
    if (acc === null)
      return f;
    return function chainedFunction(...args) {
      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}
var createChainedFunction_default = createChainedFunction;

// node_modules/react-bootstrap/esm/Collapse.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var MARGINS = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"]
};
function getDefaultDimensionValue(dimension, elem) {
  const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}`;
  const value = elem[offset];
  const margins = MARGINS[dimension];
  return value + // @ts-ignore
  parseInt(css_default(elem, margins[0]), 10) + // @ts-ignore
  parseInt(css_default(elem, margins[1]), 10);
}
var collapseStyles = {
  [EXITED]: "collapse",
  [EXITING]: "collapsing",
  [ENTERING]: "collapsing",
  [ENTERED]: "collapse show"
};
var Collapse = import_react.default.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  className,
  children,
  dimension = "height",
  in: inProp = false,
  timeout = 300,
  mountOnEnter = false,
  unmountOnExit = false,
  appear = false,
  getDimensionValue = getDefaultDimensionValue,
  ...props
}, ref) => {
  const computedDimension = typeof dimension === "function" ? dimension() : dimension;
  const handleEnter = (0, import_react.useMemo)(() => createChainedFunction_default((elem) => {
    elem.style[computedDimension] = "0";
  }, onEnter), [computedDimension, onEnter]);
  const handleEntering = (0, import_react.useMemo)(() => createChainedFunction_default((elem) => {
    const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(1)}`;
    elem.style[computedDimension] = `${elem[scroll]}px`;
  }, onEntering), [computedDimension, onEntering]);
  const handleEntered = (0, import_react.useMemo)(() => createChainedFunction_default((elem) => {
    elem.style[computedDimension] = null;
  }, onEntered), [computedDimension, onEntered]);
  const handleExit = (0, import_react.useMemo)(() => createChainedFunction_default((elem) => {
    elem.style[computedDimension] = `${getDimensionValue(computedDimension, elem)}px`;
    triggerBrowserReflow(elem);
  }, onExit), [onExit, getDimensionValue, computedDimension]);
  const handleExiting = (0, import_react.useMemo)(() => createChainedFunction_default((elem) => {
    elem.style[computedDimension] = null;
  }, onExiting), [computedDimension, onExiting]);
  return (0, import_jsx_runtime.jsx)(TransitionWrapper_default, {
    ref,
    addEndListener: transitionEndListener,
    ...props,
    "aria-expanded": props.role ? inProp : null,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExit: handleExit,
    onExiting: handleExiting,
    childRef: children.ref,
    in: inProp,
    timeout,
    mountOnEnter,
    unmountOnExit,
    appear,
    children: (state, innerProps) => import_react.default.cloneElement(children, {
      ...innerProps,
      className: (0, import_classnames.default)(className, children.props.className, collapseStyles[state], computedDimension === "width" && "collapse-horizontal")
    })
  });
});
var Collapse_default = Collapse;

// node_modules/react-bootstrap/esm/AccordionContext.js
var React2 = __toESM(require_react());
function isAccordionItemSelected(activeEventKey, eventKey) {
  return Array.isArray(activeEventKey) ? activeEventKey.includes(eventKey) : activeEventKey === eventKey;
}
var context = React2.createContext({});
context.displayName = "AccordionContext";
var AccordionContext_default = context;

// node_modules/react-bootstrap/esm/AccordionCollapse.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var AccordionCollapse = React3.forwardRef(({
  as: Component = "div",
  bsPrefix,
  className,
  children,
  eventKey,
  ...props
}, ref) => {
  const {
    activeEventKey
  } = (0, import_react2.useContext)(AccordionContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-collapse");
  return (0, import_jsx_runtime2.jsx)(Collapse_default, {
    ref,
    in: isAccordionItemSelected(activeEventKey, eventKey),
    ...props,
    className: (0, import_classnames2.default)(className, bsPrefix),
    children: (0, import_jsx_runtime2.jsx)(Component, {
      children: React3.Children.only(children)
    })
  });
});
AccordionCollapse.displayName = "AccordionCollapse";
var AccordionCollapse_default = AccordionCollapse;

// node_modules/react-bootstrap/esm/AccordionItemContext.js
var React4 = __toESM(require_react());
var context2 = React4.createContext({
  eventKey: ""
});
context2.displayName = "AccordionItemContext";
var AccordionItemContext_default = context2;

// node_modules/react-bootstrap/esm/AccordionBody.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var AccordionBody = React5.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  bsPrefix,
  className,
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-body");
  const {
    eventKey
  } = (0, import_react3.useContext)(AccordionItemContext_default);
  return (0, import_jsx_runtime3.jsx)(AccordionCollapse_default, {
    eventKey,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    children: (0, import_jsx_runtime3.jsx)(Component, {
      ref,
      ...props,
      className: (0, import_classnames3.default)(className, bsPrefix)
    })
  });
});
AccordionBody.displayName = "AccordionBody";
var AccordionBody_default = AccordionBody;

// node_modules/react-bootstrap/esm/AccordionButton.js
var React6 = __toESM(require_react());
var import_react4 = __toESM(require_react());
var import_classnames4 = __toESM(require_classnames());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
function useAccordionButton(eventKey, onClick) {
  const {
    activeEventKey,
    onSelect,
    alwaysOpen
  } = (0, import_react4.useContext)(AccordionContext_default);
  return (e) => {
    let eventKeyPassed = eventKey === activeEventKey ? null : eventKey;
    if (alwaysOpen) {
      if (Array.isArray(activeEventKey)) {
        if (activeEventKey.includes(eventKey)) {
          eventKeyPassed = activeEventKey.filter((k) => k !== eventKey);
        } else {
          eventKeyPassed = [...activeEventKey, eventKey];
        }
      } else {
        eventKeyPassed = [eventKey];
      }
    }
    onSelect == null ? void 0 : onSelect(eventKeyPassed, e);
    onClick == null ? void 0 : onClick(e);
  };
}
var AccordionButton = React6.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "button",
  bsPrefix,
  className,
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-button");
  const {
    eventKey
  } = (0, import_react4.useContext)(AccordionItemContext_default);
  const accordionOnClick = useAccordionButton(eventKey, onClick);
  const {
    activeEventKey
  } = (0, import_react4.useContext)(AccordionContext_default);
  if (Component === "button") {
    props.type = "button";
  }
  return (0, import_jsx_runtime4.jsx)(Component, {
    ref,
    onClick: accordionOnClick,
    ...props,
    "aria-expanded": Array.isArray(activeEventKey) ? activeEventKey.includes(eventKey) : eventKey === activeEventKey,
    className: (0, import_classnames4.default)(className, bsPrefix, !isAccordionItemSelected(activeEventKey, eventKey) && "collapsed")
  });
});
AccordionButton.displayName = "AccordionButton";
var AccordionButton_default = AccordionButton;

// node_modules/react-bootstrap/esm/AccordionHeader.js
var import_classnames5 = __toESM(require_classnames());
var React7 = __toESM(require_react());
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var AccordionHeader = React7.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "h2",
  bsPrefix,
  className,
  children,
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-header");
  return (0, import_jsx_runtime5.jsx)(Component, {
    ref,
    ...props,
    className: (0, import_classnames5.default)(className, bsPrefix),
    children: (0, import_jsx_runtime5.jsx)(AccordionButton_default, {
      onClick,
      children
    })
  });
});
AccordionHeader.displayName = "AccordionHeader";
var AccordionHeader_default = AccordionHeader;

// node_modules/react-bootstrap/esm/AccordionItem.js
var import_classnames6 = __toESM(require_classnames());
var React8 = __toESM(require_react());
var import_react5 = __toESM(require_react());
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var AccordionItem = React8.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  bsPrefix,
  className,
  eventKey,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-item");
  const contextValue = (0, import_react5.useMemo)(() => ({
    eventKey
  }), [eventKey]);
  return (0, import_jsx_runtime6.jsx)(AccordionItemContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime6.jsx)(Component, {
      ref,
      ...props,
      className: (0, import_classnames6.default)(className, bsPrefix)
    })
  });
});
AccordionItem.displayName = "AccordionItem";
var AccordionItem_default = AccordionItem;

// node_modules/react-bootstrap/esm/Accordion.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var Accordion = React9.forwardRef((props, ref) => {
  const {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = "div",
    activeKey,
    bsPrefix,
    className,
    onSelect,
    flush,
    alwaysOpen,
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: "onSelect"
  });
  const prefix = useBootstrapPrefix(bsPrefix, "accordion");
  const contextValue = (0, import_react6.useMemo)(() => ({
    activeEventKey: activeKey,
    onSelect,
    alwaysOpen
  }), [activeKey, onSelect, alwaysOpen]);
  return (0, import_jsx_runtime7.jsx)(AccordionContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime7.jsx)(Component, {
      ref,
      ...controlledProps,
      className: (0, import_classnames7.default)(className, prefix, flush && `${prefix}-flush`)
    })
  });
});
Accordion.displayName = "Accordion";
var Accordion_default = Object.assign(Accordion, {
  Button: AccordionButton_default,
  Collapse: AccordionCollapse_default,
  Item: AccordionItem_default,
  Header: AccordionHeader_default,
  Body: AccordionBody_default
});

// node_modules/react-bootstrap/esm/Alert.js
var import_classnames11 = __toESM(require_classnames());
var React13 = __toESM(require_react());

// node_modules/react-bootstrap/esm/AlertHeading.js
var React11 = __toESM(require_react());
var import_classnames9 = __toESM(require_classnames());

// node_modules/react-bootstrap/esm/divWithClassName.js
var React10 = __toESM(require_react());
var import_classnames8 = __toESM(require_classnames());
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var divWithClassName_default = (className) => React10.forwardRef((p, ref) => (0, import_jsx_runtime8.jsx)("div", {
  ...p,
  ref,
  className: (0, import_classnames8.default)(p.className, className)
}));

// node_modules/react-bootstrap/esm/AlertHeading.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var DivStyledAsH4 = divWithClassName_default("h4");
DivStyledAsH4.displayName = "DivStyledAsH4";
var AlertHeading = React11.forwardRef(({
  className,
  bsPrefix,
  as: Component = DivStyledAsH4,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "alert-heading");
  return (0, import_jsx_runtime9.jsx)(Component, {
    ref,
    className: (0, import_classnames9.default)(className, bsPrefix),
    ...props
  });
});
AlertHeading.displayName = "AlertHeading";
var AlertHeading_default = AlertHeading;

// node_modules/react-bootstrap/esm/AlertLink.js
var React12 = __toESM(require_react());
var import_classnames10 = __toESM(require_classnames());
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var AlertLink = React12.forwardRef(({
  className,
  bsPrefix,
  as: Component = Anchor_default,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "alert-link");
  return (0, import_jsx_runtime10.jsx)(Component, {
    ref,
    className: (0, import_classnames10.default)(className, bsPrefix),
    ...props
  });
});
AlertLink.displayName = "AlertLink";
var AlertLink_default = AlertLink;

// node_modules/react-bootstrap/esm/Alert.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var Alert = React13.forwardRef((uncontrolledProps, ref) => {
  const {
    bsPrefix,
    show = true,
    closeLabel = "Close alert",
    closeVariant,
    className,
    children,
    variant = "primary",
    onClose,
    dismissible,
    transition = Fade_default,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    show: "onClose"
  });
  const prefix = useBootstrapPrefix(bsPrefix, "alert");
  const handleClose = useEventCallback((e) => {
    if (onClose) {
      onClose(false, e);
    }
  });
  const Transition = transition === true ? Fade_default : transition;
  const alert = (0, import_jsx_runtime12.jsxs)("div", {
    role: "alert",
    ...!Transition ? props : void 0,
    ref,
    className: (0, import_classnames11.default)(className, prefix, variant && `${prefix}-${variant}`, dismissible && `${prefix}-dismissible`),
    children: [dismissible && (0, import_jsx_runtime11.jsx)(CloseButton_default, {
      onClick: handleClose,
      "aria-label": closeLabel,
      variant: closeVariant
    }), children]
  });
  if (!Transition)
    return show ? alert : null;
  return (0, import_jsx_runtime11.jsx)(Transition, {
    unmountOnExit: true,
    ...props,
    ref: void 0,
    in: show,
    children: alert
  });
});
Alert.displayName = "Alert";
var Alert_default = Object.assign(Alert, {
  Link: AlertLink_default,
  Heading: AlertHeading_default
});

// node_modules/react-bootstrap/esm/Anchor.js
var Anchor_default2 = Anchor_default;

// node_modules/react-bootstrap/esm/Badge.js
var import_classnames12 = __toESM(require_classnames());
var React14 = __toESM(require_react());
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var Badge = React14.forwardRef(({
  bsPrefix,
  bg = "primary",
  pill = false,
  text,
  className,
  as: Component = "span",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "badge");
  return (0, import_jsx_runtime13.jsx)(Component, {
    ref,
    ...props,
    className: (0, import_classnames12.default)(className, prefix, pill && `rounded-pill`, text && `text-${text}`, bg && `bg-${bg}`)
  });
});
Badge.displayName = "Badge";
var Badge_default = Badge;

// node_modules/react-bootstrap/esm/Breadcrumb.js
var import_classnames14 = __toESM(require_classnames());
var React16 = __toESM(require_react());

// node_modules/react-bootstrap/esm/BreadcrumbItem.js
var import_classnames13 = __toESM(require_classnames());
var React15 = __toESM(require_react());
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var BreadcrumbItem = React15.forwardRef(({
  bsPrefix,
  active = false,
  children,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "li",
  linkAs: LinkComponent = Anchor_default,
  linkProps = {},
  href,
  title,
  target,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "breadcrumb-item");
  return (0, import_jsx_runtime14.jsx)(Component, {
    ref,
    ...props,
    className: (0, import_classnames13.default)(prefix, className, {
      active
    }),
    "aria-current": active ? "page" : void 0,
    children: active ? children : (0, import_jsx_runtime14.jsx)(LinkComponent, {
      ...linkProps,
      href,
      title,
      target,
      children
    })
  });
});
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbItem_default = BreadcrumbItem;

// node_modules/react-bootstrap/esm/Breadcrumb.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var Breadcrumb = React16.forwardRef(({
  bsPrefix,
  className,
  listProps = {},
  children,
  label = "breadcrumb",
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "nav",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "breadcrumb");
  return (0, import_jsx_runtime15.jsx)(Component, {
    "aria-label": label,
    className,
    ref,
    ...props,
    children: (0, import_jsx_runtime15.jsx)("ol", {
      ...listProps,
      className: (0, import_classnames14.default)(prefix, listProps == null ? void 0 : listProps.className),
      children
    })
  });
});
Breadcrumb.displayName = "Breadcrumb";
var Breadcrumb_default = Object.assign(Breadcrumb, {
  Item: BreadcrumbItem_default
});

// node_modules/react-bootstrap/esm/ButtonGroup.js
var import_classnames15 = __toESM(require_classnames());
var React17 = __toESM(require_react());
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var ButtonGroup = React17.forwardRef(({
  bsPrefix,
  size: size2,
  vertical = false,
  className,
  role = "group",
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  ...rest
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "btn-group");
  let baseClass = prefix;
  if (vertical)
    baseClass = `${prefix}-vertical`;
  return (0, import_jsx_runtime16.jsx)(Component, {
    ...rest,
    ref,
    role,
    className: (0, import_classnames15.default)(className, baseClass, size2 && `${prefix}-${size2}`)
  });
});
ButtonGroup.displayName = "ButtonGroup";
var ButtonGroup_default = ButtonGroup;

// node_modules/react-bootstrap/esm/ButtonToolbar.js
var import_classnames16 = __toESM(require_classnames());
var React18 = __toESM(require_react());
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var ButtonToolbar = React18.forwardRef(({
  bsPrefix,
  className,
  role = "toolbar",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "btn-toolbar");
  return (0, import_jsx_runtime17.jsx)("div", {
    ...props,
    ref,
    className: (0, import_classnames16.default)(className, prefix),
    role
  });
});
ButtonToolbar.displayName = "ButtonToolbar";
var ButtonToolbar_default = ButtonToolbar;

// node_modules/react-bootstrap/esm/Card.js
var import_classnames26 = __toESM(require_classnames());
var React29 = __toESM(require_react());

// node_modules/react-bootstrap/esm/CardBody.js
var React19 = __toESM(require_react());
var import_classnames17 = __toESM(require_classnames());
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var CardBody = React19.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "card-body");
  return (0, import_jsx_runtime18.jsx)(Component, {
    ref,
    className: (0, import_classnames17.default)(className, bsPrefix),
    ...props
  });
});
CardBody.displayName = "CardBody";
var CardBody_default = CardBody;

// node_modules/react-bootstrap/esm/CardFooter.js
var React20 = __toESM(require_react());
var import_classnames18 = __toESM(require_classnames());
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var CardFooter = React20.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "card-footer");
  return (0, import_jsx_runtime19.jsx)(Component, {
    ref,
    className: (0, import_classnames18.default)(className, bsPrefix),
    ...props
  });
});
CardFooter.displayName = "CardFooter";
var CardFooter_default = CardFooter;

// node_modules/react-bootstrap/esm/CardHeader.js
var import_classnames19 = __toESM(require_classnames());
var React22 = __toESM(require_react());
var import_react7 = __toESM(require_react());

// node_modules/react-bootstrap/esm/CardHeaderContext.js
var React21 = __toESM(require_react());
var context3 = React21.createContext(null);
context3.displayName = "CardHeaderContext";
var CardHeaderContext_default = context3;

// node_modules/react-bootstrap/esm/CardHeader.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
var CardHeader = React22.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "card-header");
  const contextValue = (0, import_react7.useMemo)(() => ({
    cardHeaderBsPrefix: prefix
  }), [prefix]);
  return (0, import_jsx_runtime20.jsx)(CardHeaderContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime20.jsx)(Component, {
      ref,
      ...props,
      className: (0, import_classnames19.default)(className, prefix)
    })
  });
});
CardHeader.displayName = "CardHeader";
var CardHeader_default = CardHeader;

// node_modules/react-bootstrap/esm/CardImg.js
var import_classnames20 = __toESM(require_classnames());
var React23 = __toESM(require_react());
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
var CardImg = React23.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix,
    className,
    variant,
    as: Component = "img",
    ...props
  }, ref) => {
    const prefix = useBootstrapPrefix(bsPrefix, "card-img");
    return (0, import_jsx_runtime21.jsx)(Component, {
      ref,
      className: (0, import_classnames20.default)(variant ? `${prefix}-${variant}` : prefix, className),
      ...props
    });
  }
);
CardImg.displayName = "CardImg";
var CardImg_default = CardImg;

// node_modules/react-bootstrap/esm/CardImgOverlay.js
var React24 = __toESM(require_react());
var import_classnames21 = __toESM(require_classnames());
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
var CardImgOverlay = React24.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "card-img-overlay");
  return (0, import_jsx_runtime22.jsx)(Component, {
    ref,
    className: (0, import_classnames21.default)(className, bsPrefix),
    ...props
  });
});
CardImgOverlay.displayName = "CardImgOverlay";
var CardImgOverlay_default = CardImgOverlay;

// node_modules/react-bootstrap/esm/CardLink.js
var React25 = __toESM(require_react());
var import_classnames22 = __toESM(require_classnames());
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
var CardLink = React25.forwardRef(({
  className,
  bsPrefix,
  as: Component = "a",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "card-link");
  return (0, import_jsx_runtime23.jsx)(Component, {
    ref,
    className: (0, import_classnames22.default)(className, bsPrefix),
    ...props
  });
});
CardLink.displayName = "CardLink";
var CardLink_default = CardLink;

// node_modules/react-bootstrap/esm/CardSubtitle.js
var React26 = __toESM(require_react());
var import_classnames23 = __toESM(require_classnames());
var import_jsx_runtime24 = __toESM(require_jsx_runtime());
var DivStyledAsH6 = divWithClassName_default("h6");
var CardSubtitle = React26.forwardRef(({
  className,
  bsPrefix,
  as: Component = DivStyledAsH6,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "card-subtitle");
  return (0, import_jsx_runtime24.jsx)(Component, {
    ref,
    className: (0, import_classnames23.default)(className, bsPrefix),
    ...props
  });
});
CardSubtitle.displayName = "CardSubtitle";
var CardSubtitle_default = CardSubtitle;

// node_modules/react-bootstrap/esm/CardText.js
var React27 = __toESM(require_react());
var import_classnames24 = __toESM(require_classnames());
var import_jsx_runtime25 = __toESM(require_jsx_runtime());
var CardText = React27.forwardRef(({
  className,
  bsPrefix,
  as: Component = "p",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "card-text");
  return (0, import_jsx_runtime25.jsx)(Component, {
    ref,
    className: (0, import_classnames24.default)(className, bsPrefix),
    ...props
  });
});
CardText.displayName = "CardText";
var CardText_default = CardText;

// node_modules/react-bootstrap/esm/CardTitle.js
var React28 = __toESM(require_react());
var import_classnames25 = __toESM(require_classnames());
var import_jsx_runtime26 = __toESM(require_jsx_runtime());
var DivStyledAsH5 = divWithClassName_default("h5");
var CardTitle = React28.forwardRef(({
  className,
  bsPrefix,
  as: Component = DivStyledAsH5,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "card-title");
  return (0, import_jsx_runtime26.jsx)(Component, {
    ref,
    className: (0, import_classnames25.default)(className, bsPrefix),
    ...props
  });
});
CardTitle.displayName = "CardTitle";
var CardTitle_default = CardTitle;

// node_modules/react-bootstrap/esm/Card.js
var import_jsx_runtime27 = __toESM(require_jsx_runtime());
var Card = React29.forwardRef(({
  bsPrefix,
  className,
  bg,
  text,
  border,
  body = false,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "card");
  return (0, import_jsx_runtime27.jsx)(Component, {
    ref,
    ...props,
    className: (0, import_classnames26.default)(className, prefix, bg && `bg-${bg}`, text && `text-${text}`, border && `border-${border}`),
    children: body ? (0, import_jsx_runtime27.jsx)(CardBody_default, {
      children
    }) : children
  });
});
Card.displayName = "Card";
var Card_default = Object.assign(Card, {
  Img: CardImg_default,
  Title: CardTitle_default,
  Subtitle: CardSubtitle_default,
  Body: CardBody_default,
  Link: CardLink_default,
  Text: CardText_default,
  Header: CardHeader_default,
  Footer: CardFooter_default,
  ImgOverlay: CardImgOverlay_default
});

// node_modules/react-bootstrap/esm/CardGroup.js
var React30 = __toESM(require_react());
var import_classnames27 = __toESM(require_classnames());
var import_jsx_runtime28 = __toESM(require_jsx_runtime());
var CardGroup = React30.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "card-group");
  return (0, import_jsx_runtime28.jsx)(Component, {
    ref,
    className: (0, import_classnames27.default)(className, bsPrefix),
    ...props
  });
});
CardGroup.displayName = "CardGroup";
var CardGroup_default = CardGroup;

// node_modules/@restart/hooks/esm/useUpdateEffect.js
var import_react8 = __toESM(require_react());
function useUpdateEffect(fn, deps) {
  const isFirst = (0, import_react8.useRef)(true);
  (0, import_react8.useEffect)(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    return fn();
  }, deps);
}
var useUpdateEffect_default = useUpdateEffect;

// node_modules/react-bootstrap/esm/Carousel.js
var import_classnames30 = __toESM(require_classnames());
var React34 = __toESM(require_react());
var import_react9 = __toESM(require_react());

// node_modules/react-bootstrap/esm/CarouselCaption.js
var React31 = __toESM(require_react());
var import_classnames28 = __toESM(require_classnames());
var import_jsx_runtime29 = __toESM(require_jsx_runtime());
var CarouselCaption = React31.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "carousel-caption");
  return (0, import_jsx_runtime29.jsx)(Component, {
    ref,
    className: (0, import_classnames28.default)(className, bsPrefix),
    ...props
  });
});
CarouselCaption.displayName = "CarouselCaption";
var CarouselCaption_default = CarouselCaption;

// node_modules/react-bootstrap/esm/CarouselItem.js
var import_classnames29 = __toESM(require_classnames());
var React32 = __toESM(require_react());
var import_jsx_runtime30 = __toESM(require_jsx_runtime());
var CarouselItem = React32.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  bsPrefix,
  className,
  ...props
}, ref) => {
  const finalClassName = (0, import_classnames29.default)(className, useBootstrapPrefix(bsPrefix, "carousel-item"));
  return (0, import_jsx_runtime30.jsx)(Component, {
    ref,
    ...props,
    className: finalClassName
  });
});
CarouselItem.displayName = "CarouselItem";
var CarouselItem_default = CarouselItem;

// node_modules/react-bootstrap/esm/ElementChildren.js
var React33 = __toESM(require_react());
function map(children, func) {
  let index = 0;
  return React33.Children.map(children, (child) => React33.isValidElement(child) ? func(child, index++) : child);
}
function forEach(children, func) {
  let index = 0;
  React33.Children.forEach(children, (child) => {
    if (React33.isValidElement(child))
      func(child, index++);
  });
}
function hasChildOfType(children, type) {
  return React33.Children.toArray(children).some((child) => React33.isValidElement(child) && child.type === type);
}

// node_modules/react-bootstrap/esm/Carousel.js
var import_jsx_runtime31 = __toESM(require_jsx_runtime());
var import_jsx_runtime32 = __toESM(require_jsx_runtime());
var import_jsx_runtime33 = __toESM(require_jsx_runtime());
var SWIPE_THRESHOLD = 40;
function isVisible(element) {
  if (!element || !element.style || !element.parentNode || !element.parentNode.style) {
    return false;
  }
  const elementStyle = getComputedStyle(element);
  return elementStyle.display !== "none" && elementStyle.visibility !== "hidden" && getComputedStyle(element.parentNode).display !== "none";
}
var Carousel = React34.forwardRef(({
  defaultActiveIndex = 0,
  ...uncontrolledProps
}, ref) => {
  const {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = "div",
    bsPrefix,
    slide = true,
    fade = false,
    controls = true,
    indicators = true,
    indicatorLabels = [],
    activeIndex,
    onSelect,
    onSlide,
    onSlid,
    interval = 5e3,
    keyboard = true,
    onKeyDown,
    pause = "hover",
    onMouseOver,
    onMouseOut,
    wrap = true,
    touch = true,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    prevIcon = (0, import_jsx_runtime31.jsx)("span", {
      "aria-hidden": "true",
      className: "carousel-control-prev-icon"
    }),
    prevLabel = "Previous",
    nextIcon = (0, import_jsx_runtime31.jsx)("span", {
      "aria-hidden": "true",
      className: "carousel-control-next-icon"
    }),
    nextLabel = "Next",
    variant,
    className,
    children,
    ...props
  } = useUncontrolled({
    defaultActiveIndex,
    ...uncontrolledProps
  }, {
    activeIndex: "onSelect"
  });
  const prefix = useBootstrapPrefix(bsPrefix, "carousel");
  const isRTL = useIsRTL();
  const nextDirectionRef = (0, import_react9.useRef)(null);
  const [direction, setDirection] = (0, import_react9.useState)("next");
  const [paused, setPaused] = (0, import_react9.useState)(false);
  const [isSliding, setIsSliding] = (0, import_react9.useState)(false);
  const [renderedActiveIndex, setRenderedActiveIndex] = (0, import_react9.useState)(activeIndex || 0);
  (0, import_react9.useEffect)(() => {
    if (!isSliding && activeIndex !== renderedActiveIndex) {
      if (nextDirectionRef.current) {
        setDirection(nextDirectionRef.current);
      } else {
        setDirection((activeIndex || 0) > renderedActiveIndex ? "next" : "prev");
      }
      if (slide) {
        setIsSliding(true);
      }
      setRenderedActiveIndex(activeIndex || 0);
    }
  }, [activeIndex, isSliding, renderedActiveIndex, slide]);
  (0, import_react9.useEffect)(() => {
    if (nextDirectionRef.current) {
      nextDirectionRef.current = null;
    }
  });
  let numChildren = 0;
  let activeChildInterval;
  forEach(children, (child, index) => {
    ++numChildren;
    if (index === activeIndex) {
      activeChildInterval = child.props.interval;
    }
  });
  const activeChildIntervalRef = useCommittedRef_default(activeChildInterval);
  const prev = (0, import_react9.useCallback)((event) => {
    if (isSliding) {
      return;
    }
    let nextActiveIndex = renderedActiveIndex - 1;
    if (nextActiveIndex < 0) {
      if (!wrap) {
        return;
      }
      nextActiveIndex = numChildren - 1;
    }
    nextDirectionRef.current = "prev";
    onSelect == null ? void 0 : onSelect(nextActiveIndex, event);
  }, [isSliding, renderedActiveIndex, onSelect, wrap, numChildren]);
  const next = useEventCallback((event) => {
    if (isSliding) {
      return;
    }
    let nextActiveIndex = renderedActiveIndex + 1;
    if (nextActiveIndex >= numChildren) {
      if (!wrap) {
        return;
      }
      nextActiveIndex = 0;
    }
    nextDirectionRef.current = "next";
    onSelect == null ? void 0 : onSelect(nextActiveIndex, event);
  });
  const elementRef = (0, import_react9.useRef)();
  (0, import_react9.useImperativeHandle)(ref, () => ({
    element: elementRef.current,
    prev,
    next
  }));
  const nextWhenVisible = useEventCallback(() => {
    if (!document.hidden && isVisible(elementRef.current)) {
      if (isRTL) {
        prev();
      } else {
        next();
      }
    }
  });
  const slideDirection = direction === "next" ? "start" : "end";
  useUpdateEffect_default(() => {
    if (slide) {
      return;
    }
    onSlide == null ? void 0 : onSlide(renderedActiveIndex, slideDirection);
    onSlid == null ? void 0 : onSlid(renderedActiveIndex, slideDirection);
  }, [renderedActiveIndex]);
  const orderClassName = `${prefix}-item-${direction}`;
  const directionalClassName = `${prefix}-item-${slideDirection}`;
  const handleEnter = (0, import_react9.useCallback)((node) => {
    triggerBrowserReflow(node);
    onSlide == null ? void 0 : onSlide(renderedActiveIndex, slideDirection);
  }, [onSlide, renderedActiveIndex, slideDirection]);
  const handleEntered = (0, import_react9.useCallback)(() => {
    setIsSliding(false);
    onSlid == null ? void 0 : onSlid(renderedActiveIndex, slideDirection);
  }, [onSlid, renderedActiveIndex, slideDirection]);
  const handleKeyDown = (0, import_react9.useCallback)((event) => {
    if (keyboard && !/input|textarea/i.test(event.target.tagName)) {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          if (isRTL) {
            next(event);
          } else {
            prev(event);
          }
          return;
        case "ArrowRight":
          event.preventDefault();
          if (isRTL) {
            prev(event);
          } else {
            next(event);
          }
          return;
        default:
      }
    }
    onKeyDown == null ? void 0 : onKeyDown(event);
  }, [keyboard, onKeyDown, prev, next, isRTL]);
  const handleMouseOver = (0, import_react9.useCallback)((event) => {
    if (pause === "hover") {
      setPaused(true);
    }
    onMouseOver == null ? void 0 : onMouseOver(event);
  }, [pause, onMouseOver]);
  const handleMouseOut = (0, import_react9.useCallback)((event) => {
    setPaused(false);
    onMouseOut == null ? void 0 : onMouseOut(event);
  }, [onMouseOut]);
  const touchStartXRef = (0, import_react9.useRef)(0);
  const touchDeltaXRef = (0, import_react9.useRef)(0);
  const touchUnpauseTimeout = useTimeout();
  const handleTouchStart = (0, import_react9.useCallback)((event) => {
    touchStartXRef.current = event.touches[0].clientX;
    touchDeltaXRef.current = 0;
    if (pause === "hover") {
      setPaused(true);
    }
    onTouchStart == null ? void 0 : onTouchStart(event);
  }, [pause, onTouchStart]);
  const handleTouchMove = (0, import_react9.useCallback)((event) => {
    if (event.touches && event.touches.length > 1) {
      touchDeltaXRef.current = 0;
    } else {
      touchDeltaXRef.current = event.touches[0].clientX - touchStartXRef.current;
    }
    onTouchMove == null ? void 0 : onTouchMove(event);
  }, [onTouchMove]);
  const handleTouchEnd = (0, import_react9.useCallback)((event) => {
    if (touch) {
      const touchDeltaX = touchDeltaXRef.current;
      if (Math.abs(touchDeltaX) > SWIPE_THRESHOLD) {
        if (touchDeltaX > 0) {
          prev(event);
        } else {
          next(event);
        }
      }
    }
    if (pause === "hover") {
      touchUnpauseTimeout.set(() => {
        setPaused(false);
      }, interval || void 0);
    }
    onTouchEnd == null ? void 0 : onTouchEnd(event);
  }, [touch, pause, prev, next, touchUnpauseTimeout, interval, onTouchEnd]);
  const shouldPlay = interval != null && !paused && !isSliding;
  const intervalHandleRef = (0, import_react9.useRef)();
  (0, import_react9.useEffect)(() => {
    var _ref, _activeChildIntervalR;
    if (!shouldPlay) {
      return void 0;
    }
    const nextFunc = isRTL ? prev : next;
    intervalHandleRef.current = window.setInterval(document.visibilityState ? nextWhenVisible : nextFunc, (_ref = (_activeChildIntervalR = activeChildIntervalRef.current) != null ? _activeChildIntervalR : interval) != null ? _ref : void 0);
    return () => {
      if (intervalHandleRef.current !== null) {
        clearInterval(intervalHandleRef.current);
      }
    };
  }, [shouldPlay, prev, next, activeChildIntervalRef, interval, nextWhenVisible, isRTL]);
  const indicatorOnClicks = (0, import_react9.useMemo)(() => indicators && Array.from({
    length: numChildren
  }, (_, index) => (event) => {
    onSelect == null ? void 0 : onSelect(index, event);
  }), [indicators, numChildren, onSelect]);
  return (0, import_jsx_runtime32.jsxs)(Component, {
    ref: elementRef,
    ...props,
    onKeyDown: handleKeyDown,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    className: (0, import_classnames30.default)(className, prefix, slide && "slide", fade && `${prefix}-fade`, variant && `${prefix}-${variant}`),
    children: [indicators && (0, import_jsx_runtime31.jsx)("div", {
      className: `${prefix}-indicators`,
      children: map(children, (_, index) => (0, import_jsx_runtime31.jsx)("button", {
        type: "button",
        "data-bs-target": "",
        "aria-label": indicatorLabels != null && indicatorLabels.length ? indicatorLabels[index] : `Slide ${index + 1}`,
        className: index === renderedActiveIndex ? "active" : void 0,
        onClick: indicatorOnClicks ? indicatorOnClicks[index] : void 0,
        "aria-current": index === renderedActiveIndex
      }, index))
    }), (0, import_jsx_runtime31.jsx)("div", {
      className: `${prefix}-inner`,
      children: map(children, (child, index) => {
        const isActive = index === renderedActiveIndex;
        return slide ? (0, import_jsx_runtime31.jsx)(TransitionWrapper_default, {
          in: isActive,
          onEnter: isActive ? handleEnter : void 0,
          onEntered: isActive ? handleEntered : void 0,
          addEndListener: transitionEndListener,
          children: (status, innerProps) => React34.cloneElement(child, {
            ...innerProps,
            className: (0, import_classnames30.default)(child.props.className, isActive && status !== "entered" && orderClassName, (status === "entered" || status === "exiting") && "active", (status === "entering" || status === "exiting") && directionalClassName)
          })
        }) : React34.cloneElement(child, {
          className: (0, import_classnames30.default)(child.props.className, isActive && "active")
        });
      })
    }), controls && (0, import_jsx_runtime32.jsxs)(import_jsx_runtime33.Fragment, {
      children: [(wrap || activeIndex !== 0) && (0, import_jsx_runtime32.jsxs)(Anchor_default, {
        className: `${prefix}-control-prev`,
        onClick: prev,
        children: [prevIcon, prevLabel && (0, import_jsx_runtime31.jsx)("span", {
          className: "visually-hidden",
          children: prevLabel
        })]
      }), (wrap || activeIndex !== numChildren - 1) && (0, import_jsx_runtime32.jsxs)(Anchor_default, {
        className: `${prefix}-control-next`,
        onClick: next,
        children: [nextIcon, nextLabel && (0, import_jsx_runtime31.jsx)("span", {
          className: "visually-hidden",
          children: nextLabel
        })]
      })]
    })]
  });
});
Carousel.displayName = "Carousel";
var Carousel_default = Object.assign(Carousel, {
  Caption: CarouselCaption_default,
  Item: CarouselItem_default
});

// node_modules/react-bootstrap/esm/Col.js
var import_classnames31 = __toESM(require_classnames());
var React35 = __toESM(require_react());
var import_jsx_runtime34 = __toESM(require_jsx_runtime());
function useCol({
  as,
  bsPrefix,
  className,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, "col");
  const breakpoints = useBootstrapBreakpoints();
  const minBreakpoint = useBootstrapMinBreakpoint();
  const spans = [];
  const classes = [];
  breakpoints.forEach((brkPoint) => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let span;
    let offset;
    let order;
    if (typeof propValue === "object" && propValue != null) {
      ({
        span,
        offset,
        order
      } = propValue);
    } else {
      span = propValue;
    }
    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : "";
    if (span)
      spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
    if (order != null)
      classes.push(`order${infix}-${order}`);
    if (offset != null)
      classes.push(`offset${infix}-${offset}`);
  });
  return [{
    ...props,
    className: (0, import_classnames31.default)(className, ...spans, ...classes)
  }, {
    as,
    bsPrefix,
    spans
  }];
}
var Col = React35.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  (props, ref) => {
    const [{
      className,
      ...colProps
    }, {
      as: Component = "div",
      bsPrefix,
      spans
    }] = useCol(props);
    return (0, import_jsx_runtime34.jsx)(Component, {
      ...colProps,
      ref,
      className: (0, import_classnames31.default)(className, !spans.length && bsPrefix)
    });
  }
);
Col.displayName = "Col";
var Col_default = Col;

// node_modules/react-bootstrap/esm/Container.js
var import_classnames32 = __toESM(require_classnames());
var React36 = __toESM(require_react());
var import_jsx_runtime35 = __toESM(require_jsx_runtime());
var Container = React36.forwardRef(({
  bsPrefix,
  fluid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "container");
  const suffix = typeof fluid === "string" ? `-${fluid}` : "-fluid";
  return (0, import_jsx_runtime35.jsx)(Component, {
    ref,
    ...props,
    className: (0, import_classnames32.default)(className, fluid ? `${prefix}${suffix}` : prefix)
  });
});
Container.displayName = "Container";
var Container_default = Container;

// node_modules/react-bootstrap/esm/Dropdown.js
var import_classnames39 = __toESM(require_classnames());
var React53 = __toESM(require_react());
var import_react20 = __toESM(require_react());

// node_modules/dom-helpers/esm/querySelectorAll.js
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}

// node_modules/@restart/ui/esm/Dropdown.js
var import_react16 = __toESM(require_react());
var React43 = __toESM(require_react());

// node_modules/@restart/ui/node_modules/uncontrollable/lib/esm/index.js
var import_react10 = __toESM(require_react());
function useUncontrolledProp(propValue, defaultValue, handler) {
  const wasPropRef = (0, import_react10.useRef)(propValue !== void 0);
  const [stateValue, setState] = (0, import_react10.useState)(defaultValue);
  const isProp = propValue !== void 0;
  const wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }
  return [isProp ? propValue : stateValue, (0, import_react10.useCallback)((...args) => {
    const [value, ...rest] = args;
    let returnValue = handler == null ? void 0 : handler(value, ...rest);
    setState(value);
    return returnValue;
  }, [handler])];
}

// node_modules/@restart/hooks/esm/useForceUpdate.js
var import_react11 = __toESM(require_react());
function useForceUpdate() {
  const [, dispatch] = (0, import_react11.useReducer)((state) => !state, false);
  return dispatch;
}

// node_modules/@restart/ui/esm/DropdownContext.js
var React37 = __toESM(require_react());
var DropdownContext = React37.createContext(null);
var DropdownContext_default = DropdownContext;

// node_modules/@restart/ui/esm/DropdownMenu.js
var import_react12 = __toESM(require_react());
var React38 = __toESM(require_react());
var import_jsx_runtime36 = __toESM(require_jsx_runtime());
var import_jsx_runtime37 = __toESM(require_jsx_runtime());
var _excluded = ["children"];
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
var noop = () => {
};
function useDropdownMenu(options = {}) {
  const context6 = (0, import_react12.useContext)(DropdownContext_default);
  const [arrowElement, attachArrowRef] = useCallbackRef();
  const hasShownRef = (0, import_react12.useRef)(false);
  const {
    flip,
    offset,
    rootCloseEvent,
    fixed = false,
    placement: placementOverride,
    popperConfig = {},
    enableEventListeners = true,
    usePopper: shouldUsePopper = !!context6
  } = options;
  const show = (context6 == null ? void 0 : context6.show) == null ? !!options.show : context6.show;
  if (show && !hasShownRef.current) {
    hasShownRef.current = true;
  }
  const handleClose = (e) => {
    context6 == null ? void 0 : context6.toggle(false, e);
  };
  const {
    placement,
    setMenu,
    menuElement,
    toggleElement
  } = context6 || {};
  const popper = usePopper_default(toggleElement, menuElement, mergeOptionsWithPopperConfig({
    placement: placementOverride || placement || "bottom-start",
    enabled: shouldUsePopper,
    enableEvents: enableEventListeners == null ? show : enableEventListeners,
    offset,
    flip,
    fixed,
    arrowElement,
    popperConfig
  }));
  const menuProps = Object.assign({
    ref: setMenu || noop,
    "aria-labelledby": toggleElement == null ? void 0 : toggleElement.id
  }, popper.attributes.popper, {
    style: popper.styles.popper
  });
  const metadata = {
    show,
    placement,
    hasShown: hasShownRef.current,
    toggle: context6 == null ? void 0 : context6.toggle,
    popper: shouldUsePopper ? popper : null,
    arrowProps: shouldUsePopper ? Object.assign({
      ref: attachArrowRef
    }, popper.attributes.arrow, {
      style: popper.styles.arrow
    }) : {}
  };
  useClickOutside_default(menuElement, handleClose, {
    clickTrigger: rootCloseEvent,
    disabled: !show
  });
  return [menuProps, metadata];
}
var defaultProps = {
  usePopper: true
};
function DropdownMenu(_ref) {
  let {
    children
  } = _ref, options = _objectWithoutPropertiesLoose(_ref, _excluded);
  const [props, meta] = useDropdownMenu(options);
  return (0, import_jsx_runtime37.jsx)(import_jsx_runtime36.Fragment, {
    children: children(props, meta)
  });
}
DropdownMenu.displayName = "DropdownMenu";
DropdownMenu.defaultProps = defaultProps;
var DropdownMenu_default = DropdownMenu;

// node_modules/@restart/ui/esm/DropdownToggle.js
var import_react14 = __toESM(require_react());
var React39 = __toESM(require_react());

// node_modules/@react-aria/ssr/dist/import.mjs
var import_react13 = __toESM(require_react(), 1);
var $b5e257d569688ac6$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
};
var $b5e257d569688ac6$var$SSRContext = (0, import_react13.default).createContext($b5e257d569688ac6$var$defaultContext);
var $b5e257d569688ac6$var$IsSSRContext = (0, import_react13.default).createContext(false);
function $b5e257d569688ac6$var$LegacySSRProvider(props) {
  let cur = (0, import_react13.useContext)($b5e257d569688ac6$var$SSRContext);
  let counter = $b5e257d569688ac6$var$useCounter(cur === $b5e257d569688ac6$var$defaultContext);
  let [isSSR, setIsSSR] = (0, import_react13.useState)(true);
  let value = (0, import_react13.useMemo)(() => ({
    // If this is the first SSRProvider, start with an empty string prefix, otherwise
    // append and increment the counter.
    prefix: cur === $b5e257d569688ac6$var$defaultContext ? "" : `${cur.prefix}-${counter}`,
    current: 0
  }), [
    cur,
    counter
  ]);
  if (typeof document !== "undefined")
    (0, import_react13.useLayoutEffect)(() => {
      setIsSSR(false);
    }, []);
  return (0, import_react13.default).createElement($b5e257d569688ac6$var$SSRContext.Provider, {
    value
  }, (0, import_react13.default).createElement($b5e257d569688ac6$var$IsSSRContext.Provider, {
    value: isSSR
  }, props.children));
}
var $b5e257d569688ac6$var$warnedAboutSSRProvider = false;
function $b5e257d569688ac6$export$9f8ac96af4b1b2ae(props) {
  if (typeof (0, import_react13.default)["useId"] === "function") {
    if (!$b5e257d569688ac6$var$warnedAboutSSRProvider) {
      console.warn("In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.");
      $b5e257d569688ac6$var$warnedAboutSSRProvider = true;
    }
    return (0, import_react13.default).createElement((0, import_react13.default).Fragment, null, props.children);
  }
  return (0, import_react13.default).createElement($b5e257d569688ac6$var$LegacySSRProvider, props);
}
var $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $b5e257d569688ac6$var$componentIds = /* @__PURE__ */ new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled = false) {
  let ctx = (0, import_react13.useContext)($b5e257d569688ac6$var$SSRContext);
  let ref = (0, import_react13.useRef)(null);
  if (ref.current === null && !isDisabled) {
    var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner;
    let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = (0, import_react13.default).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
    if (currentOwner) {
      let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
      if (prevComponentValue == null)
        $b5e257d569688ac6$var$componentIds.set(currentOwner, {
          id: ctx.current,
          state: currentOwner.memoizedState
        });
      else if (currentOwner.memoizedState !== prevComponentValue.state) {
        ctx.current = prevComponentValue.id;
        $b5e257d569688ac6$var$componentIds.delete(currentOwner);
      }
    }
    ref.current = ++ctx.current;
  }
  return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
  let ctx = (0, import_react13.useContext)($b5e257d569688ac6$var$SSRContext);
  if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM)
    console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
  let prefix = ctx === $b5e257d569688ac6$var$defaultContext && false ? "react-aria" : `react-aria${ctx.prefix}`;
  return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
  let id = (0, import_react13.default).useId();
  let [didSSR] = (0, import_react13.useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
  let prefix = didSSR || false ? "react-aria" : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
  return defaultId || `${prefix}-${id}`;
}
var $b5e257d569688ac6$export$619500959fc48b26 = typeof (0, import_react13.default)["useId"] === "function" ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
  return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
  return true;
}
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
  return () => {
  };
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
  if (typeof (0, import_react13.default)["useSyncExternalStore"] === "function")
    return (0, import_react13.default)["useSyncExternalStore"]($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
  return (0, import_react13.useContext)($b5e257d569688ac6$var$IsSSRContext);
}

// node_modules/@restart/ui/esm/DropdownToggle.js
var import_jsx_runtime38 = __toESM(require_jsx_runtime());
var import_jsx_runtime39 = __toESM(require_jsx_runtime());
var isRoleMenu = (el) => {
  var _el$getAttribute;
  return ((_el$getAttribute = el.getAttribute("role")) == null ? void 0 : _el$getAttribute.toLowerCase()) === "menu";
};
var noop2 = () => {
};
function useDropdownToggle() {
  const id = $b5e257d569688ac6$export$619500959fc48b26();
  const {
    show = false,
    toggle = noop2,
    setToggle,
    menuElement
  } = (0, import_react14.useContext)(DropdownContext_default) || {};
  const handleClick = (0, import_react14.useCallback)((e) => {
    toggle(!show, e);
  }, [show, toggle]);
  const props = {
    id,
    ref: setToggle || noop2,
    onClick: handleClick,
    "aria-expanded": !!show
  };
  if (menuElement && isRoleMenu(menuElement)) {
    props["aria-haspopup"] = true;
  }
  return [props, {
    show,
    toggle
  }];
}
function DropdownToggle({
  children
}) {
  const [props, meta] = useDropdownToggle();
  return (0, import_jsx_runtime39.jsx)(import_jsx_runtime38.Fragment, {
    children: children(props, meta)
  });
}
DropdownToggle.displayName = "DropdownToggle";
var DropdownToggle_default = DropdownToggle;

// node_modules/@restart/ui/esm/DropdownItem.js
var React42 = __toESM(require_react());
var import_react15 = __toESM(require_react());

// node_modules/@restart/ui/esm/SelectableContext.js
var React40 = __toESM(require_react());
var SelectableContext = React40.createContext(null);
var makeEventKey = (eventKey, href = null) => {
  if (eventKey != null)
    return String(eventKey);
  return href || null;
};
var SelectableContext_default = SelectableContext;

// node_modules/@restart/ui/esm/NavContext.js
var React41 = __toESM(require_react());
var NavContext = React41.createContext(null);
NavContext.displayName = "NavContext";
var NavContext_default = NavContext;

// node_modules/@restart/ui/esm/DataKey.js
var ATTRIBUTE_PREFIX = `data-rr-ui-`;
var PROPERTY_PREFIX = `rrUi`;
function dataAttr(property) {
  return `${ATTRIBUTE_PREFIX}${property}`;
}
function dataProp(property) {
  return `${PROPERTY_PREFIX}${property}`;
}

// node_modules/@restart/ui/esm/DropdownItem.js
var import_jsx_runtime40 = __toESM(require_jsx_runtime());
var _excluded2 = ["eventKey", "disabled", "onClick", "active", "as"];
function _objectWithoutPropertiesLoose2(source, excluded) {
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
function useDropdownItem({
  key,
  href,
  active,
  disabled,
  onClick
}) {
  const onSelectCtx = (0, import_react15.useContext)(SelectableContext_default);
  const navContext = (0, import_react15.useContext)(NavContext_default);
  const {
    activeKey
  } = navContext || {};
  const eventKey = makeEventKey(key, href);
  const isActive = active == null && key != null ? makeEventKey(activeKey) === eventKey : active;
  const handleClick = useEventCallback((event) => {
    if (disabled)
      return;
    onClick == null ? void 0 : onClick(event);
    if (onSelectCtx && !event.isPropagationStopped()) {
      onSelectCtx(eventKey, event);
    }
  });
  return [{
    onClick: handleClick,
    "aria-disabled": disabled || void 0,
    "aria-selected": isActive,
    [dataAttr("dropdown-item")]: ""
  }, {
    isActive
  }];
}
var DropdownItem = React42.forwardRef((_ref, ref) => {
  let {
    eventKey,
    disabled,
    onClick,
    active,
    as: Component = Button_default
  } = _ref, props = _objectWithoutPropertiesLoose2(_ref, _excluded2);
  const [dropdownItemProps] = useDropdownItem({
    key: eventKey,
    href: props.href,
    disabled,
    onClick,
    active
  });
  return (0, import_jsx_runtime40.jsx)(Component, Object.assign({}, props, {
    ref
  }, dropdownItemProps));
});
DropdownItem.displayName = "DropdownItem";
var DropdownItem_default = DropdownItem;

// node_modules/@restart/ui/esm/Dropdown.js
var import_jsx_runtime41 = __toESM(require_jsx_runtime());
function useRefWithUpdate() {
  const forceUpdate = useForceUpdate();
  const ref = (0, import_react16.useRef)(null);
  const attachRef = (0, import_react16.useCallback)((element) => {
    ref.current = element;
    forceUpdate();
  }, [forceUpdate]);
  return [ref, attachRef];
}
function Dropdown({
  defaultShow,
  show: rawShow,
  onSelect,
  onToggle: rawOnToggle,
  itemSelector = `* [${dataAttr("dropdown-item")}]`,
  focusFirstItemOnShow,
  placement = "bottom-start",
  children
}) {
  const window2 = useWindow();
  const [show, onToggle] = useUncontrolledProp(rawShow, defaultShow, rawOnToggle);
  const [menuRef, setMenu] = useRefWithUpdate();
  const menuElement = menuRef.current;
  const [toggleRef, setToggle] = useRefWithUpdate();
  const toggleElement = toggleRef.current;
  const lastShow = usePrevious(show);
  const lastSourceEvent = (0, import_react16.useRef)(null);
  const focusInDropdown = (0, import_react16.useRef)(false);
  const onSelectCtx = (0, import_react16.useContext)(SelectableContext_default);
  const toggle = (0, import_react16.useCallback)((nextShow, event, source = event == null ? void 0 : event.type) => {
    onToggle(nextShow, {
      originalEvent: event,
      source
    });
  }, [onToggle]);
  const handleSelect = useEventCallback((key, event) => {
    onSelect == null ? void 0 : onSelect(key, event);
    toggle(false, event, "select");
    if (!event.isPropagationStopped()) {
      onSelectCtx == null ? void 0 : onSelectCtx(key, event);
    }
  });
  const context6 = (0, import_react16.useMemo)(() => ({
    toggle,
    placement,
    show,
    menuElement,
    toggleElement,
    setMenu,
    setToggle
  }), [toggle, placement, show, menuElement, toggleElement, setMenu, setToggle]);
  if (menuElement && lastShow && !show) {
    focusInDropdown.current = menuElement.contains(menuElement.ownerDocument.activeElement);
  }
  const focusToggle = useEventCallback(() => {
    if (toggleElement && toggleElement.focus) {
      toggleElement.focus();
    }
  });
  const maybeFocusFirst = useEventCallback(() => {
    const type = lastSourceEvent.current;
    let focusType = focusFirstItemOnShow;
    if (focusType == null) {
      focusType = menuRef.current && isRoleMenu(menuRef.current) ? "keyboard" : false;
    }
    if (focusType === false || focusType === "keyboard" && !/^key.+$/.test(type)) {
      return;
    }
    const first = qsa(menuRef.current, itemSelector)[0];
    if (first && first.focus)
      first.focus();
  });
  (0, import_react16.useEffect)(() => {
    if (show)
      maybeFocusFirst();
    else if (focusInDropdown.current) {
      focusInDropdown.current = false;
      focusToggle();
    }
  }, [show, focusInDropdown, focusToggle, maybeFocusFirst]);
  (0, import_react16.useEffect)(() => {
    lastSourceEvent.current = null;
  });
  const getNextFocusedChild = (current, offset) => {
    if (!menuRef.current)
      return null;
    const items = qsa(menuRef.current, itemSelector);
    let index = items.indexOf(current) + offset;
    index = Math.max(0, Math.min(index, items.length));
    return items[index];
  };
  useEventListener((0, import_react16.useCallback)(() => window2.document, [window2]), "keydown", (event) => {
    var _menuRef$current, _toggleRef$current;
    const {
      key
    } = event;
    const target = event.target;
    const fromMenu = (_menuRef$current = menuRef.current) == null ? void 0 : _menuRef$current.contains(target);
    const fromToggle = (_toggleRef$current = toggleRef.current) == null ? void 0 : _toggleRef$current.contains(target);
    const isInput = /input|textarea/i.test(target.tagName);
    if (isInput && (key === " " || key !== "Escape" && fromMenu || key === "Escape" && target.type === "search")) {
      return;
    }
    if (!fromMenu && !fromToggle) {
      return;
    }
    if (key === "Tab" && (!menuRef.current || !show)) {
      return;
    }
    lastSourceEvent.current = event.type;
    const meta = {
      originalEvent: event,
      source: event.type
    };
    switch (key) {
      case "ArrowUp": {
        const next = getNextFocusedChild(target, -1);
        if (next && next.focus)
          next.focus();
        event.preventDefault();
        return;
      }
      case "ArrowDown":
        event.preventDefault();
        if (!show) {
          onToggle(true, meta);
        } else {
          const next = getNextFocusedChild(target, 1);
          if (next && next.focus)
            next.focus();
        }
        return;
      case "Tab":
        addEventListener_default(target.ownerDocument, "keyup", (e) => {
          var _menuRef$current2;
          if (e.key === "Tab" && !e.target || !((_menuRef$current2 = menuRef.current) != null && _menuRef$current2.contains(e.target))) {
            onToggle(false, meta);
          }
        }, {
          once: true
        });
        break;
      case "Escape":
        if (key === "Escape") {
          event.preventDefault();
          event.stopPropagation();
        }
        onToggle(false, meta);
        break;
      default:
    }
  });
  return (0, import_jsx_runtime41.jsx)(SelectableContext_default.Provider, {
    value: handleSelect,
    children: (0, import_jsx_runtime41.jsx)(DropdownContext_default.Provider, {
      value: context6,
      children
    })
  });
}
Dropdown.displayName = "Dropdown";
Dropdown.Menu = DropdownMenu_default;
Dropdown.Toggle = DropdownToggle_default;
Dropdown.Item = DropdownItem_default;
var Dropdown_default = Dropdown;

// node_modules/react-bootstrap/esm/DropdownContext.js
var React44 = __toESM(require_react());
var DropdownContext2 = React44.createContext({});
DropdownContext2.displayName = "DropdownContext";
var DropdownContext_default2 = DropdownContext2;

// node_modules/react-bootstrap/esm/DropdownDivider.js
var React45 = __toESM(require_react());
var import_classnames33 = __toESM(require_classnames());
var import_jsx_runtime42 = __toESM(require_jsx_runtime());
var DropdownDivider = React45.forwardRef(({
  className,
  bsPrefix,
  as: Component = "hr",
  role = "separator",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "dropdown-divider");
  return (0, import_jsx_runtime42.jsx)(Component, {
    ref,
    className: (0, import_classnames33.default)(className, bsPrefix),
    role,
    ...props
  });
});
DropdownDivider.displayName = "DropdownDivider";
var DropdownDivider_default = DropdownDivider;

// node_modules/react-bootstrap/esm/DropdownHeader.js
var React46 = __toESM(require_react());
var import_classnames34 = __toESM(require_classnames());
var import_jsx_runtime43 = __toESM(require_jsx_runtime());
var DropdownHeader = React46.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  role = "heading",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "dropdown-header");
  return (0, import_jsx_runtime43.jsx)(Component, {
    ref,
    className: (0, import_classnames34.default)(className, bsPrefix),
    role,
    ...props
  });
});
DropdownHeader.displayName = "DropdownHeader";
var DropdownHeader_default = DropdownHeader;

// node_modules/react-bootstrap/esm/DropdownItem.js
var import_classnames35 = __toESM(require_classnames());
var React47 = __toESM(require_react());
var import_jsx_runtime44 = __toESM(require_jsx_runtime());
var DropdownItem2 = React47.forwardRef(({
  bsPrefix,
  className,
  eventKey,
  disabled = false,
  onClick,
  active,
  as: Component = Anchor_default,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "dropdown-item");
  const [dropdownItemProps, meta] = useDropdownItem({
    key: eventKey,
    href: props.href,
    disabled,
    onClick,
    active
  });
  return (0, import_jsx_runtime44.jsx)(Component, {
    ...props,
    ...dropdownItemProps,
    ref,
    className: (0, import_classnames35.default)(className, prefix, meta.isActive && "active", disabled && "disabled")
  });
});
DropdownItem2.displayName = "DropdownItem";
var DropdownItem_default2 = DropdownItem2;

// node_modules/react-bootstrap/esm/DropdownItemText.js
var React48 = __toESM(require_react());
var import_classnames36 = __toESM(require_classnames());
var import_jsx_runtime45 = __toESM(require_jsx_runtime());
var DropdownItemText = React48.forwardRef(({
  className,
  bsPrefix,
  as: Component = "span",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "dropdown-item-text");
  return (0, import_jsx_runtime45.jsx)(Component, {
    ref,
    className: (0, import_classnames36.default)(className, bsPrefix),
    ...props
  });
});
DropdownItemText.displayName = "DropdownItemText";
var DropdownItemText_default = DropdownItemText;

// node_modules/react-bootstrap/esm/DropdownMenu.js
var import_classnames37 = __toESM(require_classnames());
var React51 = __toESM(require_react());
var import_react18 = __toESM(require_react());
var import_warning = __toESM(require_warning());

// node_modules/react-bootstrap/esm/InputGroupContext.js
var React49 = __toESM(require_react());
var context4 = React49.createContext(null);
context4.displayName = "InputGroupContext";
var InputGroupContext_default = context4;

// node_modules/react-bootstrap/esm/NavbarContext.js
var React50 = __toESM(require_react());
var context5 = React50.createContext(null);
context5.displayName = "NavbarContext";
var NavbarContext_default = context5;

// node_modules/react-bootstrap/esm/useWrappedRefWithWarning.js
var import_invariant = __toESM(require_browser());
var import_react17 = __toESM(require_react());
function useWrappedRefWithWarning(ref, componentName) {
  if (false)
    return ref;
  const warningRef = (0, import_react17.useCallback)((refValue) => {
    !(refValue == null || !refValue.isReactComponent) ? true ? (0, import_invariant.default)(false, `${componentName} injected a ref to a provided \`as\` component that resolved to a component instance instead of a DOM element. Use \`React.forwardRef\` to provide the injected ref to the class component as a prop in order to pass it directly to a DOM element`) : (0, import_invariant.default)(false) : void 0;
  }, [componentName]);
  return useMergedRefs_default(warningRef, ref);
}

// node_modules/react-bootstrap/esm/types.js
var import_prop_types = __toESM(require_prop_types());
var alignDirection = import_prop_types.default.oneOf(["start", "end"]);
var alignPropType = import_prop_types.default.oneOfType([alignDirection, import_prop_types.default.shape({
  sm: alignDirection
}), import_prop_types.default.shape({
  md: alignDirection
}), import_prop_types.default.shape({
  lg: alignDirection
}), import_prop_types.default.shape({
  xl: alignDirection
}), import_prop_types.default.shape({
  xxl: alignDirection
}), import_prop_types.default.object]);

// node_modules/react-bootstrap/esm/DropdownMenu.js
var import_jsx_runtime46 = __toESM(require_jsx_runtime());
function getDropdownMenuPlacement(alignEnd, dropDirection, isRTL) {
  const topStart = isRTL ? "top-end" : "top-start";
  const topEnd = isRTL ? "top-start" : "top-end";
  const bottomStart = isRTL ? "bottom-end" : "bottom-start";
  const bottomEnd = isRTL ? "bottom-start" : "bottom-end";
  const leftStart = isRTL ? "right-start" : "left-start";
  const leftEnd = isRTL ? "right-end" : "left-end";
  const rightStart = isRTL ? "left-start" : "right-start";
  const rightEnd = isRTL ? "left-end" : "right-end";
  let placement = alignEnd ? bottomEnd : bottomStart;
  if (dropDirection === "up")
    placement = alignEnd ? topEnd : topStart;
  else if (dropDirection === "end")
    placement = alignEnd ? rightEnd : rightStart;
  else if (dropDirection === "start")
    placement = alignEnd ? leftEnd : leftStart;
  else if (dropDirection === "down-centered")
    placement = "bottom";
  else if (dropDirection === "up-centered")
    placement = "top";
  return placement;
}
var DropdownMenu2 = React51.forwardRef(({
  bsPrefix,
  className,
  align,
  rootCloseEvent,
  flip = true,
  show: showProps,
  renderOnMount,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  popperConfig,
  variant,
  ...props
}, ref) => {
  let alignEnd = false;
  const isNavbar = (0, import_react18.useContext)(NavbarContext_default);
  const prefix = useBootstrapPrefix(bsPrefix, "dropdown-menu");
  const {
    align: contextAlign,
    drop,
    isRTL
  } = (0, import_react18.useContext)(DropdownContext_default2);
  align = align || contextAlign;
  const isInputGroup = (0, import_react18.useContext)(InputGroupContext_default);
  const alignClasses = [];
  if (align) {
    if (typeof align === "object") {
      const keys = Object.keys(align);
      true ? (0, import_warning.default)(keys.length === 1, "There should only be 1 breakpoint when passing an object to `align`") : void 0;
      if (keys.length) {
        const brkPoint = keys[0];
        const direction = align[brkPoint];
        alignEnd = direction === "start";
        alignClasses.push(`${prefix}-${brkPoint}-${direction}`);
      }
    } else if (align === "end") {
      alignEnd = true;
    }
  }
  const placement = getDropdownMenuPlacement(alignEnd, drop, isRTL);
  const [menuProps, {
    hasShown,
    popper,
    show,
    toggle
  }] = useDropdownMenu({
    flip,
    rootCloseEvent,
    show: showProps,
    usePopper: !isNavbar && alignClasses.length === 0,
    offset: [0, 2],
    popperConfig,
    placement
  });
  menuProps.ref = useMergedRefs_default(useWrappedRefWithWarning(ref, "DropdownMenu"), menuProps.ref);
  useIsomorphicEffect_default(() => {
    if (show)
      popper == null ? void 0 : popper.update();
  }, [show]);
  if (!hasShown && !renderOnMount && !isInputGroup)
    return null;
  if (typeof Component !== "string") {
    menuProps.show = show;
    menuProps.close = () => toggle == null ? void 0 : toggle(false);
    menuProps.align = align;
  }
  let style = props.style;
  if (popper != null && popper.placement) {
    style = {
      ...props.style,
      ...menuProps.style
    };
    props["x-placement"] = popper.placement;
  }
  return (0, import_jsx_runtime46.jsx)(Component, {
    ...props,
    ...menuProps,
    style,
    ...(alignClasses.length || isNavbar) && {
      "data-bs-popper": "static"
    },
    className: (0, import_classnames37.default)(className, prefix, show && "show", alignEnd && `${prefix}-end`, variant && `${prefix}-${variant}`, ...alignClasses)
  });
});
DropdownMenu2.displayName = "DropdownMenu";
var DropdownMenu_default2 = DropdownMenu2;

// node_modules/react-bootstrap/esm/DropdownToggle.js
var import_classnames38 = __toESM(require_classnames());
var React52 = __toESM(require_react());
var import_react19 = __toESM(require_react());
var import_jsx_runtime47 = __toESM(require_jsx_runtime());
var DropdownToggle2 = React52.forwardRef(({
  bsPrefix,
  split,
  className,
  childBsPrefix,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = Button_default2,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "dropdown-toggle");
  const dropdownContext = (0, import_react19.useContext)(DropdownContext_default);
  if (childBsPrefix !== void 0) {
    props.bsPrefix = childBsPrefix;
  }
  const [toggleProps] = useDropdownToggle();
  toggleProps.ref = useMergedRefs_default(toggleProps.ref, useWrappedRefWithWarning(ref, "DropdownToggle"));
  return (0, import_jsx_runtime47.jsx)(Component, {
    className: (0, import_classnames38.default)(className, prefix, split && `${prefix}-split`, (dropdownContext == null ? void 0 : dropdownContext.show) && "show"),
    ...toggleProps,
    ...props
  });
});
DropdownToggle2.displayName = "DropdownToggle";
var DropdownToggle_default2 = DropdownToggle2;

// node_modules/react-bootstrap/esm/Dropdown.js
var import_jsx_runtime48 = __toESM(require_jsx_runtime());
var Dropdown2 = React53.forwardRef((pProps, ref) => {
  const {
    bsPrefix,
    drop = "down",
    show,
    className,
    align = "start",
    onSelect,
    onToggle,
    focusFirstItemOnShow,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = "div",
    navbar: _4,
    autoClose = true,
    ...props
  } = useUncontrolled(pProps, {
    show: "onToggle"
  });
  const isInputGroup = (0, import_react20.useContext)(InputGroupContext_default);
  const prefix = useBootstrapPrefix(bsPrefix, "dropdown");
  const isRTL = useIsRTL();
  const isClosingPermitted = (source) => {
    if (autoClose === false)
      return source === "click";
    if (autoClose === "inside")
      return source !== "rootClose";
    if (autoClose === "outside")
      return source !== "select";
    return true;
  };
  const handleToggle = useEventCallback((nextShow, meta) => {
    if (meta.originalEvent.currentTarget === document && (meta.source !== "keydown" || meta.originalEvent.key === "Escape"))
      meta.source = "rootClose";
    if (isClosingPermitted(meta.source))
      onToggle == null ? void 0 : onToggle(nextShow, meta);
  });
  const alignEnd = align === "end";
  const placement = getDropdownMenuPlacement(alignEnd, drop, isRTL);
  const contextValue = (0, import_react20.useMemo)(() => ({
    align,
    drop,
    isRTL
  }), [align, drop, isRTL]);
  const directionClasses = {
    down: prefix,
    "down-centered": `${prefix}-center`,
    up: "dropup",
    "up-centered": "dropup-center dropup",
    end: "dropend",
    start: "dropstart"
  };
  return (0, import_jsx_runtime48.jsx)(DropdownContext_default2.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime48.jsx)(Dropdown_default, {
      placement,
      show,
      onSelect,
      onToggle: handleToggle,
      focusFirstItemOnShow,
      itemSelector: `.${prefix}-item:not(.disabled):not(:disabled)`,
      children: isInputGroup ? props.children : (0, import_jsx_runtime48.jsx)(Component, {
        ...props,
        ref,
        className: (0, import_classnames39.default)(className, show && "show", directionClasses[drop])
      })
    })
  });
});
Dropdown2.displayName = "Dropdown";
var Dropdown_default2 = Object.assign(Dropdown2, {
  Toggle: DropdownToggle_default2,
  Menu: DropdownMenu_default2,
  Item: DropdownItem_default2,
  ItemText: DropdownItemText_default,
  Divider: DropdownDivider_default,
  Header: DropdownHeader_default
});

// node_modules/react-bootstrap/esm/DropdownButton.js
var React54 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
var import_jsx_runtime49 = __toESM(require_jsx_runtime());
var import_jsx_runtime50 = __toESM(require_jsx_runtime());
var propTypes = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string}
   */
  id: import_prop_types2.default.string,
  /** An `href` passed to the Toggle component */
  href: import_prop_types2.default.string,
  /** An `onClick` handler passed to the Toggle component */
  onClick: import_prop_types2.default.func,
  /** The content of the non-toggle Button.  */
  title: import_prop_types2.default.node.isRequired,
  /** Disables both Buttons  */
  disabled: import_prop_types2.default.bool,
  /**
   * Aligns the dropdown menu.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   *
   * @type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} }
   */
  align: alignPropType,
  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: import_prop_types2.default.string,
  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: import_prop_types2.default.bool,
  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   */
  rootCloseEvent: import_prop_types2.default.string,
  /**
   * Menu color variant.
   *
   * Omitting this will use the default light color.
   */
  menuVariant: import_prop_types2.default.oneOf(["dark"]),
  /**
   * Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer to
   * Popper.js's flip [docs](https://popper.js.org/docs/v2/modifiers/flip/).
   *
   */
  flip: import_prop_types2.default.bool,
  /** @ignore */
  bsPrefix: import_prop_types2.default.string,
  /** @ignore */
  variant: import_prop_types2.default.string,
  /** @ignore */
  size: import_prop_types2.default.string
};
var DropdownButton = React54.forwardRef(({
  title,
  children,
  bsPrefix,
  rootCloseEvent,
  variant,
  size: size2,
  menuRole,
  renderMenuOnMount,
  disabled,
  href,
  id,
  menuVariant,
  flip,
  ...props
}, ref) => (0, import_jsx_runtime50.jsxs)(Dropdown_default2, {
  ref,
  ...props,
  children: [(0, import_jsx_runtime49.jsx)(DropdownToggle_default2, {
    id,
    href,
    size: size2,
    variant,
    disabled,
    childBsPrefix: bsPrefix,
    children: title
  }), (0, import_jsx_runtime49.jsx)(DropdownMenu_default2, {
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent,
    variant: menuVariant,
    flip,
    children
  })]
}));
DropdownButton.displayName = "DropdownButton";
DropdownButton.propTypes = propTypes;
var DropdownButton_default = DropdownButton;

// node_modules/react-bootstrap/esm/Figure.js
var React58 = __toESM(require_react());
var import_classnames43 = __toESM(require_classnames());

// node_modules/react-bootstrap/esm/FigureImage.js
var import_classnames41 = __toESM(require_classnames());
var React56 = __toESM(require_react());

// node_modules/react-bootstrap/esm/Image.js
var import_classnames40 = __toESM(require_classnames());
var React55 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());
var import_jsx_runtime51 = __toESM(require_jsx_runtime());
var propTypes2 = {
  /**
   * @default 'img'
   */
  bsPrefix: import_prop_types3.default.string,
  /**
   * Sets image as fluid image.
   */
  fluid: import_prop_types3.default.bool,
  /**
   * Sets image shape as rounded.
   */
  rounded: import_prop_types3.default.bool,
  /**
   * Sets image shape as circle.
   */
  roundedCircle: import_prop_types3.default.bool,
  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: import_prop_types3.default.bool
};
var Image = React55.forwardRef(({
  bsPrefix,
  className,
  fluid = false,
  rounded = false,
  roundedCircle = false,
  thumbnail = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "img");
  return (0, import_jsx_runtime51.jsx)("img", {
    // eslint-disable-line jsx-a11y/alt-text
    ref,
    ...props,
    className: (0, import_classnames40.default)(className, fluid && `${bsPrefix}-fluid`, rounded && `rounded`, roundedCircle && `rounded-circle`, thumbnail && `${bsPrefix}-thumbnail`)
  });
});
Image.displayName = "Image";
var Image_default = Image;

// node_modules/react-bootstrap/esm/FigureImage.js
var import_jsx_runtime52 = __toESM(require_jsx_runtime());
var FigureImage = React56.forwardRef(({
  className,
  fluid = true,
  ...props
}, ref) => (0, import_jsx_runtime52.jsx)(Image_default, {
  ref,
  ...props,
  fluid,
  className: (0, import_classnames41.default)(className, "figure-img")
}));
FigureImage.displayName = "FigureImage";
FigureImage.propTypes = propTypes2;
var FigureImage_default = FigureImage;

// node_modules/react-bootstrap/esm/FigureCaption.js
var React57 = __toESM(require_react());
var import_classnames42 = __toESM(require_classnames());
var import_jsx_runtime53 = __toESM(require_jsx_runtime());
var FigureCaption = React57.forwardRef(({
  className,
  bsPrefix,
  as: Component = "figcaption",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "figure-caption");
  return (0, import_jsx_runtime53.jsx)(Component, {
    ref,
    className: (0, import_classnames42.default)(className, bsPrefix),
    ...props
  });
});
FigureCaption.displayName = "FigureCaption";
var FigureCaption_default = FigureCaption;

// node_modules/react-bootstrap/esm/Figure.js
var import_jsx_runtime54 = __toESM(require_jsx_runtime());
var Figure = React58.forwardRef(({
  className,
  bsPrefix,
  as: Component = "figure",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "figure");
  return (0, import_jsx_runtime54.jsx)(Component, {
    ref,
    className: (0, import_classnames43.default)(className, bsPrefix),
    ...props
  });
});
Figure.displayName = "Figure";
var Figure_default = Object.assign(Figure, {
  Image: FigureImage_default,
  Caption: FigureCaption_default
});

// node_modules/react-bootstrap/esm/Form.js
var import_classnames55 = __toESM(require_classnames());
var import_prop_types5 = __toESM(require_prop_types());
var React73 = __toESM(require_react());

// node_modules/react-bootstrap/esm/FormCheck.js
var import_classnames47 = __toESM(require_classnames());
var React63 = __toESM(require_react());
var import_react23 = __toESM(require_react());

// node_modules/react-bootstrap/esm/Feedback.js
var import_classnames44 = __toESM(require_classnames());
var React59 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());
var import_jsx_runtime55 = __toESM(require_jsx_runtime());
var propTypes3 = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: import_prop_types4.default.string,
  /** Display feedback as a tooltip. */
  tooltip: import_prop_types4.default.bool,
  as: import_prop_types4.default.elementType
};
var Feedback = React59.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    as: Component = "div",
    className,
    type = "valid",
    tooltip = false,
    ...props
  }, ref) => (0, import_jsx_runtime55.jsx)(Component, {
    ...props,
    ref,
    className: (0, import_classnames44.default)(className, `${type}-${tooltip ? "tooltip" : "feedback"}`)
  })
);
Feedback.displayName = "Feedback";
Feedback.propTypes = propTypes3;
var Feedback_default = Feedback;

// node_modules/react-bootstrap/esm/FormCheckInput.js
var import_classnames45 = __toESM(require_classnames());
var React61 = __toESM(require_react());
var import_react21 = __toESM(require_react());

// node_modules/react-bootstrap/esm/FormContext.js
var React60 = __toESM(require_react());
var FormContext = React60.createContext({});
var FormContext_default = FormContext;

// node_modules/react-bootstrap/esm/FormCheckInput.js
var import_jsx_runtime56 = __toESM(require_jsx_runtime());
var FormCheckInput = React61.forwardRef(({
  id,
  bsPrefix,
  className,
  type = "checkbox",
  isValid = false,
  isInvalid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "input",
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react21.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-check-input");
  return (0, import_jsx_runtime56.jsx)(Component, {
    ...props,
    ref,
    type,
    id: id || controlId,
    className: (0, import_classnames45.default)(className, bsPrefix, isValid && "is-valid", isInvalid && "is-invalid")
  });
});
FormCheckInput.displayName = "FormCheckInput";
var FormCheckInput_default = FormCheckInput;

// node_modules/react-bootstrap/esm/FormCheckLabel.js
var import_classnames46 = __toESM(require_classnames());
var React62 = __toESM(require_react());
var import_react22 = __toESM(require_react());
var import_jsx_runtime57 = __toESM(require_jsx_runtime());
var FormCheckLabel = React62.forwardRef(({
  bsPrefix,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react22.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-check-label");
  return (0, import_jsx_runtime57.jsx)("label", {
    ...props,
    ref,
    htmlFor: htmlFor || controlId,
    className: (0, import_classnames46.default)(className, bsPrefix)
  });
});
FormCheckLabel.displayName = "FormCheckLabel";
var FormCheckLabel_default = FormCheckLabel;

// node_modules/react-bootstrap/esm/FormCheck.js
var import_jsx_runtime58 = __toESM(require_jsx_runtime());
var import_jsx_runtime59 = __toESM(require_jsx_runtime());
var import_jsx_runtime60 = __toESM(require_jsx_runtime());
var FormCheck = React63.forwardRef(({
  id,
  bsPrefix,
  bsSwitchPrefix,
  inline = false,
  reverse = false,
  disabled = false,
  isValid = false,
  isInvalid = false,
  feedbackTooltip = false,
  feedback,
  feedbackType,
  className,
  style,
  title = "",
  type = "checkbox",
  label,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as = "input",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-check");
  bsSwitchPrefix = useBootstrapPrefix(bsSwitchPrefix, "form-switch");
  const {
    controlId
  } = (0, import_react23.useContext)(FormContext_default);
  const innerFormContext = (0, import_react23.useMemo)(() => ({
    controlId: id || controlId
  }), [controlId, id]);
  const hasLabel = !children && label != null && label !== false || hasChildOfType(children, FormCheckLabel_default);
  const input = (0, import_jsx_runtime58.jsx)(FormCheckInput_default, {
    ...props,
    type: type === "switch" ? "checkbox" : type,
    ref,
    isValid,
    isInvalid,
    disabled,
    as
  });
  return (0, import_jsx_runtime58.jsx)(FormContext_default.Provider, {
    value: innerFormContext,
    children: (0, import_jsx_runtime58.jsx)("div", {
      style,
      className: (0, import_classnames47.default)(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === "switch" && bsSwitchPrefix),
      children: children || (0, import_jsx_runtime60.jsxs)(import_jsx_runtime59.Fragment, {
        children: [input, hasLabel && (0, import_jsx_runtime58.jsx)(FormCheckLabel_default, {
          title,
          children: label
        }), feedback && (0, import_jsx_runtime58.jsx)(Feedback_default, {
          type: feedbackType,
          tooltip: feedbackTooltip,
          children: feedback
        })]
      })
    })
  });
});
FormCheck.displayName = "FormCheck";
var FormCheck_default = Object.assign(FormCheck, {
  Input: FormCheckInput_default,
  Label: FormCheckLabel_default
});

// node_modules/react-bootstrap/esm/FormControl.js
var import_classnames48 = __toESM(require_classnames());
var React64 = __toESM(require_react());
var import_react24 = __toESM(require_react());
var import_warning2 = __toESM(require_warning());
var import_jsx_runtime61 = __toESM(require_jsx_runtime());
var FormControl = React64.forwardRef(({
  bsPrefix,
  type,
  size: size2,
  htmlSize,
  id,
  className,
  isValid = false,
  isInvalid = false,
  plaintext,
  readOnly,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "input",
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react24.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-control");
  true ? (0, import_warning2.default)(controlId == null || !id, "`controlId` is ignored on `<FormControl>` when `id` is specified.") : void 0;
  return (0, import_jsx_runtime61.jsx)(Component, {
    ...props,
    type,
    size: htmlSize,
    ref,
    readOnly,
    id: id || controlId,
    className: (0, import_classnames48.default)(className, plaintext ? `${bsPrefix}-plaintext` : bsPrefix, size2 && `${bsPrefix}-${size2}`, type === "color" && `${bsPrefix}-color`, isValid && "is-valid", isInvalid && "is-invalid")
  });
});
FormControl.displayName = "FormControl";
var FormControl_default = Object.assign(FormControl, {
  Feedback: Feedback_default
});

// node_modules/react-bootstrap/esm/FormFloating.js
var React65 = __toESM(require_react());
var import_classnames49 = __toESM(require_classnames());
var import_jsx_runtime62 = __toESM(require_jsx_runtime());
var FormFloating = React65.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-floating");
  return (0, import_jsx_runtime62.jsx)(Component, {
    ref,
    className: (0, import_classnames49.default)(className, bsPrefix),
    ...props
  });
});
FormFloating.displayName = "FormFloating";
var FormFloating_default = FormFloating;

// node_modules/react-bootstrap/esm/FormGroup.js
var React66 = __toESM(require_react());
var import_react25 = __toESM(require_react());
var import_jsx_runtime63 = __toESM(require_jsx_runtime());
var FormGroup = React66.forwardRef(({
  controlId,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  ...props
}, ref) => {
  const context6 = (0, import_react25.useMemo)(() => ({
    controlId
  }), [controlId]);
  return (0, import_jsx_runtime63.jsx)(FormContext_default.Provider, {
    value: context6,
    children: (0, import_jsx_runtime63.jsx)(Component, {
      ...props,
      ref
    })
  });
});
FormGroup.displayName = "FormGroup";
var FormGroup_default = FormGroup;

// node_modules/react-bootstrap/esm/FormLabel.js
var import_classnames50 = __toESM(require_classnames());
var React67 = __toESM(require_react());
var import_react26 = __toESM(require_react());
var import_warning3 = __toESM(require_warning());
var import_jsx_runtime64 = __toESM(require_jsx_runtime());
var FormLabel = React67.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "label",
  bsPrefix,
  column = false,
  visuallyHidden = false,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react26.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-label");
  let columnClass = "col-form-label";
  if (typeof column === "string")
    columnClass = `${columnClass} ${columnClass}-${column}`;
  const classes = (0, import_classnames50.default)(className, bsPrefix, visuallyHidden && "visually-hidden", column && columnClass);
  true ? (0, import_warning3.default)(controlId == null || !htmlFor, "`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.") : void 0;
  htmlFor = htmlFor || controlId;
  if (column)
    return (0, import_jsx_runtime64.jsx)(Col_default, {
      ref,
      as: "label",
      className: classes,
      htmlFor,
      ...props
    });
  return (
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    (0, import_jsx_runtime64.jsx)(Component, {
      ref,
      className: classes,
      htmlFor,
      ...props
    })
  );
});
FormLabel.displayName = "FormLabel";
var FormLabel_default = FormLabel;

// node_modules/react-bootstrap/esm/FormRange.js
var import_classnames51 = __toESM(require_classnames());
var React68 = __toESM(require_react());
var import_react27 = __toESM(require_react());
var import_jsx_runtime65 = __toESM(require_jsx_runtime());
var FormRange = React68.forwardRef(({
  bsPrefix,
  className,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react27.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-range");
  return (0, import_jsx_runtime65.jsx)("input", {
    ...props,
    type: "range",
    ref,
    className: (0, import_classnames51.default)(className, bsPrefix),
    id: id || controlId
  });
});
FormRange.displayName = "FormRange";
var FormRange_default = FormRange;

// node_modules/react-bootstrap/esm/FormSelect.js
var import_classnames52 = __toESM(require_classnames());
var React69 = __toESM(require_react());
var import_react28 = __toESM(require_react());
var import_jsx_runtime66 = __toESM(require_jsx_runtime());
var FormSelect = React69.forwardRef(({
  bsPrefix,
  size: size2,
  htmlSize,
  className,
  isValid = false,
  isInvalid = false,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = (0, import_react28.useContext)(FormContext_default);
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-select");
  return (0, import_jsx_runtime66.jsx)("select", {
    ...props,
    size: htmlSize,
    ref,
    className: (0, import_classnames52.default)(className, bsPrefix, size2 && `${bsPrefix}-${size2}`, isValid && `is-valid`, isInvalid && `is-invalid`),
    id: id || controlId
  });
});
FormSelect.displayName = "FormSelect";
var FormSelect_default = FormSelect;

// node_modules/react-bootstrap/esm/FormText.js
var import_classnames53 = __toESM(require_classnames());
var React70 = __toESM(require_react());
var import_jsx_runtime67 = __toESM(require_jsx_runtime());
var FormText = React70.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix,
    className,
    as: Component = "small",
    muted,
    ...props
  }, ref) => {
    bsPrefix = useBootstrapPrefix(bsPrefix, "form-text");
    return (0, import_jsx_runtime67.jsx)(Component, {
      ...props,
      ref,
      className: (0, import_classnames53.default)(className, bsPrefix, muted && "text-muted")
    });
  }
);
FormText.displayName = "FormText";
var FormText_default = FormText;

// node_modules/react-bootstrap/esm/Switch.js
var React71 = __toESM(require_react());
var import_jsx_runtime68 = __toESM(require_jsx_runtime());
var Switch = React71.forwardRef((props, ref) => (0, import_jsx_runtime68.jsx)(FormCheck_default, {
  ...props,
  ref,
  type: "switch"
}));
Switch.displayName = "Switch";
var Switch_default = Object.assign(Switch, {
  Input: FormCheck_default.Input,
  Label: FormCheck_default.Label
});

// node_modules/react-bootstrap/esm/FloatingLabel.js
var import_classnames54 = __toESM(require_classnames());
var React72 = __toESM(require_react());
var import_jsx_runtime69 = __toESM(require_jsx_runtime());
var import_jsx_runtime70 = __toESM(require_jsx_runtime());
var FloatingLabel = React72.forwardRef(({
  bsPrefix,
  className,
  children,
  controlId,
  label,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "form-floating");
  return (0, import_jsx_runtime70.jsxs)(FormGroup_default, {
    ref,
    className: (0, import_classnames54.default)(className, bsPrefix),
    controlId,
    ...props,
    children: [children, (0, import_jsx_runtime69.jsx)("label", {
      htmlFor: controlId,
      children: label
    })]
  });
});
FloatingLabel.displayName = "FloatingLabel";
var FloatingLabel_default = FloatingLabel;

// node_modules/react-bootstrap/esm/Form.js
var import_jsx_runtime71 = __toESM(require_jsx_runtime());
var propTypes4 = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: import_prop_types5.default.any,
  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: import_prop_types5.default.bool,
  as: import_prop_types5.default.elementType
};
var Form = React73.forwardRef(({
  className,
  validated,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "form",
  ...props
}, ref) => (0, import_jsx_runtime71.jsx)(Component, {
  ...props,
  ref,
  className: (0, import_classnames55.default)(className, validated && "was-validated")
}));
Form.displayName = "Form";
Form.propTypes = propTypes4;
var Form_default = Object.assign(Form, {
  Group: FormGroup_default,
  Control: FormControl_default,
  Floating: FormFloating_default,
  Check: FormCheck_default,
  Switch: Switch_default,
  Label: FormLabel_default,
  Text: FormText_default,
  Range: FormRange_default,
  Select: FormSelect_default,
  FloatingLabel: FloatingLabel_default
});

// node_modules/react-bootstrap/esm/InputGroup.js
var import_classnames57 = __toESM(require_classnames());
var React75 = __toESM(require_react());
var import_react29 = __toESM(require_react());

// node_modules/react-bootstrap/esm/InputGroupText.js
var React74 = __toESM(require_react());
var import_classnames56 = __toESM(require_classnames());
var import_jsx_runtime72 = __toESM(require_jsx_runtime());
var InputGroupText = React74.forwardRef(({
  className,
  bsPrefix,
  as: Component = "span",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "input-group-text");
  return (0, import_jsx_runtime72.jsx)(Component, {
    ref,
    className: (0, import_classnames56.default)(className, bsPrefix),
    ...props
  });
});
InputGroupText.displayName = "InputGroupText";
var InputGroupText_default = InputGroupText;

// node_modules/react-bootstrap/esm/InputGroup.js
var import_jsx_runtime73 = __toESM(require_jsx_runtime());
var InputGroupCheckbox = (props) => (0, import_jsx_runtime73.jsx)(InputGroupText_default, {
  children: (0, import_jsx_runtime73.jsx)(FormCheckInput_default, {
    type: "checkbox",
    ...props
  })
});
var InputGroupRadio = (props) => (0, import_jsx_runtime73.jsx)(InputGroupText_default, {
  children: (0, import_jsx_runtime73.jsx)(FormCheckInput_default, {
    type: "radio",
    ...props
  })
});
var InputGroup = React75.forwardRef(({
  bsPrefix,
  size: size2,
  hasValidation,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "input-group");
  const contextValue = (0, import_react29.useMemo)(() => ({}), []);
  return (0, import_jsx_runtime73.jsx)(InputGroupContext_default.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime73.jsx)(Component, {
      ref,
      ...props,
      className: (0, import_classnames57.default)(className, bsPrefix, size2 && `${bsPrefix}-${size2}`, hasValidation && "has-validation")
    })
  });
});
InputGroup.displayName = "InputGroup";
var InputGroup_default = Object.assign(InputGroup, {
  Text: InputGroupText_default,
  Radio: InputGroupRadio,
  Checkbox: InputGroupCheckbox
});

// node_modules/react-bootstrap/esm/ListGroup.js
var import_classnames59 = __toESM(require_classnames());
var React80 = __toESM(require_react());
var import_warning5 = __toESM(require_warning());

// node_modules/@restart/ui/esm/Nav.js
var React78 = __toESM(require_react());
var import_react31 = __toESM(require_react());

// node_modules/@restart/ui/esm/TabContext.js
var React76 = __toESM(require_react());
var TabContext = React76.createContext(null);
var TabContext_default = TabContext;

// node_modules/@restart/ui/esm/NavItem.js
var React77 = __toESM(require_react());
var import_react30 = __toESM(require_react());
var import_jsx_runtime74 = __toESM(require_jsx_runtime());
var _excluded3 = ["as", "active", "eventKey"];
function _objectWithoutPropertiesLoose3(source, excluded) {
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
function useNavItem({
  key,
  onClick,
  active,
  id,
  role,
  disabled
}) {
  const parentOnSelect = (0, import_react30.useContext)(SelectableContext_default);
  const navContext = (0, import_react30.useContext)(NavContext_default);
  const tabContext = (0, import_react30.useContext)(TabContext_default);
  let isActive = active;
  const props = {
    role
  };
  if (navContext) {
    if (!role && navContext.role === "tablist")
      props.role = "tab";
    const contextControllerId = navContext.getControllerId(key != null ? key : null);
    const contextControlledId = navContext.getControlledId(key != null ? key : null);
    props[dataAttr("event-key")] = key;
    props.id = contextControllerId || id;
    isActive = active == null && key != null ? navContext.activeKey === key : active;
    if (isActive || !(tabContext != null && tabContext.unmountOnExit) && !(tabContext != null && tabContext.mountOnEnter))
      props["aria-controls"] = contextControlledId;
  }
  if (props.role === "tab") {
    props["aria-selected"] = isActive;
    if (!isActive) {
      props.tabIndex = -1;
    }
    if (disabled) {
      props.tabIndex = -1;
      props["aria-disabled"] = true;
    }
  }
  props.onClick = useEventCallback((e) => {
    if (disabled)
      return;
    onClick == null ? void 0 : onClick(e);
    if (key == null) {
      return;
    }
    if (parentOnSelect && !e.isPropagationStopped()) {
      parentOnSelect(key, e);
    }
  });
  return [props, {
    isActive
  }];
}
var NavItem = React77.forwardRef((_ref, ref) => {
  let {
    as: Component = Button_default,
    active,
    eventKey
  } = _ref, options = _objectWithoutPropertiesLoose3(_ref, _excluded3);
  const [props, meta] = useNavItem(Object.assign({
    key: makeEventKey(eventKey, options.href),
    active
  }, options));
  props[dataAttr("active")] = meta.isActive;
  return (0, import_jsx_runtime74.jsx)(Component, Object.assign({}, options, props, {
    ref
  }));
});
NavItem.displayName = "NavItem";
var NavItem_default = NavItem;

// node_modules/@restart/ui/esm/Nav.js
var import_jsx_runtime75 = __toESM(require_jsx_runtime());
var _excluded4 = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function _objectWithoutPropertiesLoose4(source, excluded) {
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
var noop3 = () => {
};
var EVENT_KEY_ATTR = dataAttr("event-key");
var Nav = React78.forwardRef((_ref, ref) => {
  let {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = "div",
    onSelect,
    activeKey,
    role,
    onKeyDown
  } = _ref, props = _objectWithoutPropertiesLoose4(_ref, _excluded4);
  const forceUpdate = useForceUpdate();
  const needsRefocusRef = (0, import_react31.useRef)(false);
  const parentOnSelect = (0, import_react31.useContext)(SelectableContext_default);
  const tabContext = (0, import_react31.useContext)(TabContext_default);
  let getControlledId, getControllerId;
  if (tabContext) {
    role = role || "tablist";
    activeKey = tabContext.activeKey;
    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }
  const listNode = (0, import_react31.useRef)(null);
  const getNextActiveTab = (offset) => {
    const currentListNode = listNode.current;
    if (!currentListNode)
      return null;
    const items = qsa(currentListNode, `[${EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
    const activeChild = currentListNode.querySelector("[aria-selected=true]");
    if (!activeChild || activeChild !== document.activeElement)
      return null;
    const index = items.indexOf(activeChild);
    if (index === -1)
      return null;
    let nextIndex = index + offset;
    if (nextIndex >= items.length)
      nextIndex = 0;
    if (nextIndex < 0)
      nextIndex = items.length - 1;
    return items[nextIndex];
  };
  const handleSelect = (key, event) => {
    if (key == null)
      return;
    onSelect == null ? void 0 : onSelect(key, event);
    parentOnSelect == null ? void 0 : parentOnSelect(key, event);
  };
  const handleKeyDown = (event) => {
    onKeyDown == null ? void 0 : onKeyDown(event);
    if (!tabContext) {
      return;
    }
    let nextActiveChild;
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowUp":
        nextActiveChild = getNextActiveTab(-1);
        break;
      case "ArrowRight":
      case "ArrowDown":
        nextActiveChild = getNextActiveTab(1);
        break;
      default:
        return;
    }
    if (!nextActiveChild)
      return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset[dataProp("EventKey")] || null, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };
  (0, import_react31.useEffect)(() => {
    if (listNode.current && needsRefocusRef.current) {
      const activeChild = listNode.current.querySelector(`[${EVENT_KEY_ATTR}][aria-selected=true]`);
      activeChild == null ? void 0 : activeChild.focus();
    }
    needsRefocusRef.current = false;
  });
  const mergedRef = useMergedRefs_default(ref, listNode);
  return (0, import_jsx_runtime75.jsx)(SelectableContext_default.Provider, {
    value: handleSelect,
    children: (0, import_jsx_runtime75.jsx)(NavContext_default.Provider, {
      value: {
        role,
        // used by NavLink to determine it's role
        activeKey: makeEventKey(activeKey),
        getControlledId: getControlledId || noop3,
        getControllerId: getControllerId || noop3
      },
      children: (0, import_jsx_runtime75.jsx)(Component, Object.assign({}, props, {
        onKeyDown: handleKeyDown,
        ref: mergedRef,
        role
      }))
    })
  });
});
Nav.displayName = "Nav";
var Nav_default = Object.assign(Nav, {
  Item: NavItem_default
});

// node_modules/react-bootstrap/esm/ListGroupItem.js
var import_classnames58 = __toESM(require_classnames());
var React79 = __toESM(require_react());
var import_warning4 = __toESM(require_warning());
var import_jsx_runtime76 = __toESM(require_jsx_runtime());
var ListGroupItem = React79.forwardRef(({
  bsPrefix,
  active,
  disabled,
  eventKey,
  className,
  variant,
  action,
  as,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "list-group-item");
  const [navItemProps, meta] = useNavItem({
    key: makeEventKey(eventKey, props.href),
    active,
    ...props
  });
  const handleClick = useEventCallback((event) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    navItemProps.onClick(event);
  });
  if (disabled && props.tabIndex === void 0) {
    props.tabIndex = -1;
    props["aria-disabled"] = true;
  }
  const Component = as || (action ? props.href ? "a" : "button" : "div");
  true ? (0, import_warning4.default)(as || !(!action && props.href), "`action=false` and `href` should not be used together.") : void 0;
  return (0, import_jsx_runtime76.jsx)(Component, {
    ref,
    ...props,
    ...navItemProps,
    onClick: handleClick,
    className: (0, import_classnames58.default)(className, bsPrefix, meta.isActive && "active", disabled && "disabled", variant && `${bsPrefix}-${variant}`, action && `${bsPrefix}-action`)
  });
});
ListGroupItem.displayName = "ListGroupItem";
var ListGroupItem_default = ListGroupItem;

// node_modules/react-bootstrap/esm/ListGroup.js
var import_jsx_runtime77 = __toESM(require_jsx_runtime());
var ListGroup = React80.forwardRef((props, ref) => {
  const {
    className,
    bsPrefix: initialBsPrefix,
    variant,
    horizontal,
    numbered,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as = "div",
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: "onSelect"
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, "list-group");
  let horizontalVariant;
  if (horizontal) {
    horizontalVariant = horizontal === true ? "horizontal" : `horizontal-${horizontal}`;
  }
  true ? (0, import_warning5.default)(!(horizontal && variant === "flush"), '`variant="flush"` and `horizontal` should not be used together.') : void 0;
  return (0, import_jsx_runtime77.jsx)(Nav_default, {
    ref,
    ...controlledProps,
    as,
    className: (0, import_classnames59.default)(className, bsPrefix, variant && `${bsPrefix}-${variant}`, horizontalVariant && `${bsPrefix}-${horizontalVariant}`, numbered && `${bsPrefix}-numbered`)
  });
});
ListGroup.displayName = "ListGroup";
var ListGroup_default = Object.assign(ListGroup, {
  Item: ListGroupItem_default
});

// node_modules/react-bootstrap/esm/Modal.js
var import_classnames65 = __toESM(require_classnames());

// node_modules/dom-helpers/esm/scrollbarSize.js
var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (canUseDOM_default) {
      var scrollDiv = document.createElement("div");
      scrollDiv.style.position = "absolute";
      scrollDiv.style.top = "-9999px";
      scrollDiv.style.width = "50px";
      scrollDiv.style.height = "50px";
      scrollDiv.style.overflow = "scroll";
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }
  return size;
}

// node_modules/react-bootstrap/esm/Modal.js
var React89 = __toESM(require_react());
var import_react34 = __toESM(require_react());

// node_modules/dom-helpers/esm/activeElement.js
function activeElement(doc) {
  if (doc === void 0) {
    doc = ownerDocument();
  }
  try {
    var active = doc.activeElement;
    if (!active || !active.nodeName)
      return null;
    return active;
  } catch (e) {
    return doc.body;
  }
}

// node_modules/@restart/ui/esm/Modal.js
var import_react32 = __toESM(require_react());
var React81 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/@restart/ui/esm/getScrollbarWidth.js
function getBodyScrollbarWidth(ownerDocument2 = document) {
  const window2 = ownerDocument2.defaultView;
  return Math.abs(window2.innerWidth - ownerDocument2.documentElement.clientWidth);
}

// node_modules/@restart/ui/esm/ModalManager.js
var OPEN_DATA_ATTRIBUTE = dataAttr("modal-open");
var ModalManager = class {
  constructor({
    ownerDocument: ownerDocument2,
    handleContainerOverflow = true,
    isRTL = false
  } = {}) {
    this.handleContainerOverflow = handleContainerOverflow;
    this.isRTL = isRTL;
    this.modals = [];
    this.ownerDocument = ownerDocument2;
  }
  getScrollbarWidth() {
    return getBodyScrollbarWidth(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(_modal) {
  }
  removeModalAttributes(_modal) {
  }
  setContainerStyle(containerState) {
    const style = {
      overflow: "hidden"
    };
    const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
    const container = this.getElement();
    containerState.style = {
      overflow: container.style.overflow,
      [paddingProp]: container.style[paddingProp]
    };
    if (containerState.scrollBarWidth) {
      style[paddingProp] = `${parseInt(css_default(container, paddingProp) || "0", 10) + containerState.scrollBarWidth}px`;
    }
    container.setAttribute(OPEN_DATA_ATTRIBUTE, "");
    css_default(container, style);
  }
  reset() {
    [...this.modals].forEach((m) => this.remove(m));
  }
  removeContainerStyle(containerState) {
    const container = this.getElement();
    container.removeAttribute(OPEN_DATA_ATTRIBUTE);
    Object.assign(container.style, containerState.style);
  }
  add(modal) {
    let modalIdx = this.modals.indexOf(modal);
    if (modalIdx !== -1) {
      return modalIdx;
    }
    modalIdx = this.modals.length;
    this.modals.push(modal);
    this.setModalAttributes(modal);
    if (modalIdx !== 0) {
      return modalIdx;
    }
    this.state = {
      scrollBarWidth: this.getScrollbarWidth(),
      style: {}
    };
    if (this.handleContainerOverflow) {
      this.setContainerStyle(this.state);
    }
    return modalIdx;
  }
  remove(modal) {
    const modalIdx = this.modals.indexOf(modal);
    if (modalIdx === -1) {
      return;
    }
    this.modals.splice(modalIdx, 1);
    if (!this.modals.length && this.handleContainerOverflow) {
      this.removeContainerStyle(this.state);
    }
    this.removeModalAttributes(modal);
  }
  isTopModal(modal) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
  }
};
var ModalManager_default = ModalManager;

// node_modules/@restart/ui/esm/Modal.js
var import_jsx_runtime78 = __toESM(require_jsx_runtime());
var import_jsx_runtime79 = __toESM(require_jsx_runtime());
var import_jsx_runtime80 = __toESM(require_jsx_runtime());
var _excluded5 = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
function _objectWithoutPropertiesLoose5(source, excluded) {
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
var manager;
function getManager(window2) {
  if (!manager)
    manager = new ModalManager_default({
      ownerDocument: window2 == null ? void 0 : window2.document
    });
  return manager;
}
function useModalManager(provided) {
  const window2 = useWindow();
  const modalManager = provided || getManager(window2);
  const modal = (0, import_react32.useRef)({
    dialog: null,
    backdrop: null
  });
  return Object.assign(modal.current, {
    add: () => modalManager.add(modal.current),
    remove: () => modalManager.remove(modal.current),
    isTopModal: () => modalManager.isTopModal(modal.current),
    setDialogRef: (0, import_react32.useCallback)((ref) => {
      modal.current.dialog = ref;
    }, []),
    setBackdropRef: (0, import_react32.useCallback)((ref) => {
      modal.current.backdrop = ref;
    }, [])
  });
}
var Modal = (0, import_react32.forwardRef)((_ref, ref) => {
  let {
    show = false,
    role = "dialog",
    className,
    style,
    children,
    backdrop = true,
    keyboard = true,
    onBackdropClick,
    onEscapeKeyDown,
    transition,
    runTransition,
    backdropTransition,
    runBackdropTransition,
    autoFocus = true,
    enforceFocus = true,
    restoreFocus = true,
    restoreFocusOptions,
    renderDialog,
    renderBackdrop = (props) => (0, import_jsx_runtime78.jsx)("div", Object.assign({}, props)),
    manager: providedManager,
    container: containerRef,
    onShow,
    onHide = () => {
    },
    onExit,
    onExited,
    onExiting,
    onEnter,
    onEntering,
    onEntered
  } = _ref, rest = _objectWithoutPropertiesLoose5(_ref, _excluded5);
  const ownerWindow = useWindow();
  const container = useWaitForDOMRef(containerRef);
  const modal = useModalManager(providedManager);
  const isMounted = useMounted();
  const prevShow = usePrevious(show);
  const [exited, setExited] = (0, import_react32.useState)(!show);
  const lastFocusRef = (0, import_react32.useRef)(null);
  (0, import_react32.useImperativeHandle)(ref, () => modal, [modal]);
  if (canUseDOM_default && !prevShow && show) {
    lastFocusRef.current = activeElement(ownerWindow == null ? void 0 : ownerWindow.document);
  }
  if (show && exited) {
    setExited(false);
  }
  const handleShow = useEventCallback(() => {
    modal.add();
    removeKeydownListenerRef.current = listen_default(document, "keydown", handleDocumentKeyDown);
    removeFocusListenerRef.current = listen_default(
      document,
      "focus",
      // the timeout is necessary b/c this will run before the new modal is mounted
      // and so steals focus from it
      () => setTimeout(handleEnforceFocus),
      true
    );
    if (onShow) {
      onShow();
    }
    if (autoFocus) {
      var _modal$dialog$ownerDo, _modal$dialog;
      const currentActiveElement = activeElement((_modal$dialog$ownerDo = (_modal$dialog = modal.dialog) == null ? void 0 : _modal$dialog.ownerDocument) != null ? _modal$dialog$ownerDo : ownerWindow == null ? void 0 : ownerWindow.document);
      if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
        lastFocusRef.current = currentActiveElement;
        modal.dialog.focus();
      }
    }
  });
  const handleHide = useEventCallback(() => {
    modal.remove();
    removeKeydownListenerRef.current == null ? void 0 : removeKeydownListenerRef.current();
    removeFocusListenerRef.current == null ? void 0 : removeFocusListenerRef.current();
    if (restoreFocus) {
      var _lastFocusRef$current;
      (_lastFocusRef$current = lastFocusRef.current) == null ? void 0 : _lastFocusRef$current.focus == null ? void 0 : _lastFocusRef$current.focus(restoreFocusOptions);
      lastFocusRef.current = null;
    }
  });
  (0, import_react32.useEffect)(() => {
    if (!show || !container)
      return;
    handleShow();
  }, [
    show,
    container,
    /* should never change: */
    handleShow
  ]);
  (0, import_react32.useEffect)(() => {
    if (!exited)
      return;
    handleHide();
  }, [exited, handleHide]);
  useWillUnmount(() => {
    handleHide();
  });
  const handleEnforceFocus = useEventCallback(() => {
    if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
      return;
    }
    const currentActiveElement = activeElement(ownerWindow == null ? void 0 : ownerWindow.document);
    if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
      modal.dialog.focus();
    }
  });
  const handleBackdropClick = useEventCallback((e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    onBackdropClick == null ? void 0 : onBackdropClick(e);
    if (backdrop === true) {
      onHide();
    }
  });
  const handleDocumentKeyDown = useEventCallback((e) => {
    if (keyboard && isEscKey(e) && modal.isTopModal()) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);
      if (!e.defaultPrevented) {
        onHide();
      }
    }
  });
  const removeFocusListenerRef = (0, import_react32.useRef)();
  const removeKeydownListenerRef = (0, import_react32.useRef)();
  const handleHidden = (...args) => {
    setExited(true);
    onExited == null ? void 0 : onExited(...args);
  };
  if (!container) {
    return null;
  }
  const dialogProps = Object.assign({
    role,
    ref: modal.setDialogRef,
    // apparently only works on the dialog role element
    "aria-modal": role === "dialog" ? true : void 0
  }, rest, {
    style,
    className,
    tabIndex: -1
  });
  let dialog = renderDialog ? renderDialog(dialogProps) : (0, import_jsx_runtime78.jsx)("div", Object.assign({}, dialogProps, {
    children: React81.cloneElement(children, {
      role: "document"
    })
  }));
  dialog = renderTransition(transition, runTransition, {
    unmountOnExit: true,
    mountOnEnter: true,
    appear: true,
    in: !!show,
    onExit,
    onExiting,
    onExited: handleHidden,
    onEnter,
    onEntering,
    onEntered,
    children: dialog
  });
  let backdropElement = null;
  if (backdrop) {
    backdropElement = renderBackdrop({
      ref: modal.setBackdropRef,
      onClick: handleBackdropClick
    });
    backdropElement = renderTransition(backdropTransition, runBackdropTransition, {
      in: !!show,
      appear: true,
      mountOnEnter: true,
      unmountOnExit: true,
      children: backdropElement
    });
  }
  return (0, import_jsx_runtime78.jsx)(import_jsx_runtime79.Fragment, {
    children: import_react_dom.default.createPortal((0, import_jsx_runtime80.jsxs)(import_jsx_runtime79.Fragment, {
      children: [backdropElement, dialog]
    }), container)
  });
});
Modal.displayName = "Modal";
var Modal_default = Object.assign(Modal, {
  Manager: ModalManager_default
});

// node_modules/dom-helpers/esm/addClass.js
function addClass(element, className) {
  if (element.classList)
    element.classList.add(className);
  else if (!hasClass(element, className))
    if (typeof element.className === "string")
      element.className = element.className + " " + className;
    else
      element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}

// node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}

// node_modules/react-bootstrap/esm/BootstrapModalManager.js
var Selector = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler"
};
var BootstrapModalManager = class extends ModalManager_default {
  adjustAndStore(prop, element, adjust) {
    const actual = element.style[prop];
    element.dataset[prop] = actual;
    css_default(element, {
      [prop]: `${parseFloat(css_default(element, prop)) + adjust}px`
    });
  }
  restore(prop, element) {
    const value = element.dataset[prop];
    if (value !== void 0) {
      delete element.dataset[prop];
      css_default(element, {
        [prop]: value
      });
    }
  }
  setContainerStyle(containerState) {
    super.setContainerStyle(containerState);
    const container = this.getElement();
    addClass(container, "modal-open");
    if (!containerState.scrollBarWidth)
      return;
    const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
    const marginProp = this.isRTL ? "marginLeft" : "marginRight";
    qsa(container, Selector.FIXED_CONTENT).forEach((el) => this.adjustAndStore(paddingProp, el, containerState.scrollBarWidth));
    qsa(container, Selector.STICKY_CONTENT).forEach((el) => this.adjustAndStore(marginProp, el, -containerState.scrollBarWidth));
    qsa(container, Selector.NAVBAR_TOGGLER).forEach((el) => this.adjustAndStore(marginProp, el, containerState.scrollBarWidth));
  }
  removeContainerStyle(containerState) {
    super.removeContainerStyle(containerState);
    const container = this.getElement();
    removeClass(container, "modal-open");
    const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
    const marginProp = this.isRTL ? "marginLeft" : "marginRight";
    qsa(container, Selector.FIXED_CONTENT).forEach((el) => this.restore(paddingProp, el));
    qsa(container, Selector.STICKY_CONTENT).forEach((el) => this.restore(marginProp, el));
    qsa(container, Selector.NAVBAR_TOGGLER).forEach((el) => this.restore(marginProp, el));
  }
};
var sharedManager;
function getSharedManager(options) {
  if (!sharedManager)
    sharedManager = new BootstrapModalManager(options);
  return sharedManager;
}
var BootstrapModalManager_default = BootstrapModalManager;

// node_modules/react-bootstrap/esm/ModalBody.js
var React82 = __toESM(require_react());
var import_classnames60 = __toESM(require_classnames());
var import_jsx_runtime81 = __toESM(require_jsx_runtime());
var ModalBody = React82.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal-body");
  return (0, import_jsx_runtime81.jsx)(Component, {
    ref,
    className: (0, import_classnames60.default)(className, bsPrefix),
    ...props
  });
});
ModalBody.displayName = "ModalBody";
var ModalBody_default = ModalBody;

// node_modules/react-bootstrap/esm/ModalContext.js
var React83 = __toESM(require_react());
var ModalContext = React83.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide() {
  }
});
var ModalContext_default = ModalContext;

// node_modules/react-bootstrap/esm/ModalDialog.js
var import_classnames61 = __toESM(require_classnames());
var React84 = __toESM(require_react());
var import_jsx_runtime82 = __toESM(require_jsx_runtime());
var ModalDialog = React84.forwardRef(({
  bsPrefix,
  className,
  contentClassName,
  centered,
  size: size2,
  fullscreen,
  children,
  scrollable,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal");
  const dialogClass = `${bsPrefix}-dialog`;
  const fullScreenClass = typeof fullscreen === "string" ? `${bsPrefix}-fullscreen-${fullscreen}` : `${bsPrefix}-fullscreen`;
  return (0, import_jsx_runtime82.jsx)("div", {
    ...props,
    ref,
    className: (0, import_classnames61.default)(dialogClass, className, size2 && `${bsPrefix}-${size2}`, centered && `${dialogClass}-centered`, scrollable && `${dialogClass}-scrollable`, fullscreen && fullScreenClass),
    children: (0, import_jsx_runtime82.jsx)("div", {
      className: (0, import_classnames61.default)(`${bsPrefix}-content`, contentClassName),
      children
    })
  });
});
ModalDialog.displayName = "ModalDialog";
var ModalDialog_default = ModalDialog;

// node_modules/react-bootstrap/esm/ModalFooter.js
var React85 = __toESM(require_react());
var import_classnames62 = __toESM(require_classnames());
var import_jsx_runtime83 = __toESM(require_jsx_runtime());
var ModalFooter = React85.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal-footer");
  return (0, import_jsx_runtime83.jsx)(Component, {
    ref,
    className: (0, import_classnames62.default)(className, bsPrefix),
    ...props
  });
});
ModalFooter.displayName = "ModalFooter";
var ModalFooter_default = ModalFooter;

// node_modules/react-bootstrap/esm/ModalHeader.js
var import_classnames63 = __toESM(require_classnames());
var React87 = __toESM(require_react());

// node_modules/react-bootstrap/esm/AbstractModalHeader.js
var React86 = __toESM(require_react());
var import_react33 = __toESM(require_react());
var import_jsx_runtime84 = __toESM(require_jsx_runtime());
var import_jsx_runtime85 = __toESM(require_jsx_runtime());
var AbstractModalHeader = React86.forwardRef(({
  closeLabel = "Close",
  closeVariant,
  closeButton = false,
  onHide,
  children,
  ...props
}, ref) => {
  const context6 = (0, import_react33.useContext)(ModalContext_default);
  const handleClick = useEventCallback(() => {
    context6 == null ? void 0 : context6.onHide();
    onHide == null ? void 0 : onHide();
  });
  return (0, import_jsx_runtime85.jsxs)("div", {
    ref,
    ...props,
    children: [children, closeButton && (0, import_jsx_runtime84.jsx)(CloseButton_default, {
      "aria-label": closeLabel,
      variant: closeVariant,
      onClick: handleClick
    })]
  });
});
var AbstractModalHeader_default = AbstractModalHeader;

// node_modules/react-bootstrap/esm/ModalHeader.js
var import_jsx_runtime86 = __toESM(require_jsx_runtime());
var ModalHeader = React87.forwardRef(({
  bsPrefix,
  className,
  closeLabel = "Close",
  closeButton = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal-header");
  return (0, import_jsx_runtime86.jsx)(AbstractModalHeader_default, {
    ref,
    ...props,
    className: (0, import_classnames63.default)(className, bsPrefix),
    closeLabel,
    closeButton
  });
});
ModalHeader.displayName = "ModalHeader";
var ModalHeader_default = ModalHeader;

// node_modules/react-bootstrap/esm/ModalTitle.js
var React88 = __toESM(require_react());
var import_classnames64 = __toESM(require_classnames());
var import_jsx_runtime87 = __toESM(require_jsx_runtime());
var DivStyledAsH42 = divWithClassName_default("h4");
var ModalTitle = React88.forwardRef(({
  className,
  bsPrefix,
  as: Component = DivStyledAsH42,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal-title");
  return (0, import_jsx_runtime87.jsx)(Component, {
    ref,
    className: (0, import_classnames64.default)(className, bsPrefix),
    ...props
  });
});
ModalTitle.displayName = "ModalTitle";
var ModalTitle_default = ModalTitle;

// node_modules/react-bootstrap/esm/Modal.js
var import_jsx_runtime88 = __toESM(require_jsx_runtime());
function DialogTransition(props) {
  return (0, import_jsx_runtime88.jsx)(Fade_default, {
    ...props,
    timeout: null
  });
}
function BackdropTransition(props) {
  return (0, import_jsx_runtime88.jsx)(Fade_default, {
    ...props,
    timeout: null
  });
}
var Modal2 = React89.forwardRef(({
  bsPrefix,
  className,
  style,
  dialogClassName,
  contentClassName,
  children,
  dialogAs: Dialog = ModalDialog_default,
  "aria-labelledby": ariaLabelledby,
  "aria-describedby": ariaDescribedby,
  "aria-label": ariaLabel,
  /* BaseModal props */
  show = false,
  animation = true,
  backdrop = true,
  keyboard = true,
  onEscapeKeyDown,
  onShow,
  onHide,
  container,
  autoFocus = true,
  enforceFocus = true,
  restoreFocus = true,
  restoreFocusOptions,
  onEntered,
  onExit,
  onExiting,
  onEnter,
  onEntering,
  onExited,
  backdropClassName,
  manager: propsManager,
  ...props
}, ref) => {
  const [modalStyle, setStyle] = (0, import_react34.useState)({});
  const [animateStaticModal, setAnimateStaticModal] = (0, import_react34.useState)(false);
  const waitingForMouseUpRef = (0, import_react34.useRef)(false);
  const ignoreBackdropClickRef = (0, import_react34.useRef)(false);
  const removeStaticModalAnimationRef = (0, import_react34.useRef)(null);
  const [modal, setModalRef] = useCallbackRef();
  const mergedRef = useMergedRefs_default(ref, setModalRef);
  const handleHide = useEventCallback(onHide);
  const isRTL = useIsRTL();
  bsPrefix = useBootstrapPrefix(bsPrefix, "modal");
  const modalContext = (0, import_react34.useMemo)(() => ({
    onHide: handleHide
  }), [handleHide]);
  function getModalManager() {
    if (propsManager)
      return propsManager;
    return getSharedManager({
      isRTL
    });
  }
  function updateDialogStyle(node) {
    if (!canUseDOM_default)
      return;
    const containerIsOverflowing = getModalManager().getScrollbarWidth() > 0;
    const modalIsOverflowing = node.scrollHeight > ownerDocument(node).documentElement.clientHeight;
    setStyle({
      paddingRight: containerIsOverflowing && !modalIsOverflowing ? scrollbarSize() : void 0,
      paddingLeft: !containerIsOverflowing && modalIsOverflowing ? scrollbarSize() : void 0
    });
  }
  const handleWindowResize = useEventCallback(() => {
    if (modal) {
      updateDialogStyle(modal.dialog);
    }
  });
  useWillUnmount(() => {
    removeEventListener_default(window, "resize", handleWindowResize);
    removeStaticModalAnimationRef.current == null ? void 0 : removeStaticModalAnimationRef.current();
  });
  const handleDialogMouseDown = () => {
    waitingForMouseUpRef.current = true;
  };
  const handleMouseUp = (e) => {
    if (waitingForMouseUpRef.current && modal && e.target === modal.dialog) {
      ignoreBackdropClickRef.current = true;
    }
    waitingForMouseUpRef.current = false;
  };
  const handleStaticModalAnimation = () => {
    setAnimateStaticModal(true);
    removeStaticModalAnimationRef.current = transitionEnd(modal.dialog, () => {
      setAnimateStaticModal(false);
    });
  };
  const handleStaticBackdropClick = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    handleStaticModalAnimation();
  };
  const handleClick = (e) => {
    if (backdrop === "static") {
      handleStaticBackdropClick(e);
      return;
    }
    if (ignoreBackdropClickRef.current || e.target !== e.currentTarget) {
      ignoreBackdropClickRef.current = false;
      return;
    }
    onHide == null ? void 0 : onHide();
  };
  const handleEscapeKeyDown = (e) => {
    if (keyboard) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);
    } else {
      e.preventDefault();
      if (backdrop === "static") {
        handleStaticModalAnimation();
      }
    }
  };
  const handleEnter = (node, isAppearing) => {
    if (node) {
      updateDialogStyle(node);
    }
    onEnter == null ? void 0 : onEnter(node, isAppearing);
  };
  const handleExit = (node) => {
    removeStaticModalAnimationRef.current == null ? void 0 : removeStaticModalAnimationRef.current();
    onExit == null ? void 0 : onExit(node);
  };
  const handleEntering = (node, isAppearing) => {
    onEntering == null ? void 0 : onEntering(node, isAppearing);
    addEventListener_default(window, "resize", handleWindowResize);
  };
  const handleExited = (node) => {
    if (node)
      node.style.display = "";
    onExited == null ? void 0 : onExited(node);
    removeEventListener_default(window, "resize", handleWindowResize);
  };
  const renderBackdrop = (0, import_react34.useCallback)((backdropProps) => (0, import_jsx_runtime88.jsx)("div", {
    ...backdropProps,
    className: (0, import_classnames65.default)(`${bsPrefix}-backdrop`, backdropClassName, !animation && "show")
  }), [animation, backdropClassName, bsPrefix]);
  const baseModalStyle = {
    ...style,
    ...modalStyle
  };
  baseModalStyle.display = "block";
  const renderDialog = (dialogProps) => (0, import_jsx_runtime88.jsx)("div", {
    role: "dialog",
    ...dialogProps,
    style: baseModalStyle,
    className: (0, import_classnames65.default)(className, bsPrefix, animateStaticModal && `${bsPrefix}-static`, !animation && "show"),
    onClick: backdrop ? handleClick : void 0,
    onMouseUp: handleMouseUp,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    "aria-describedby": ariaDescribedby,
    children: (0, import_jsx_runtime88.jsx)(Dialog, {
      ...props,
      onMouseDown: handleDialogMouseDown,
      className: dialogClassName,
      contentClassName,
      children
    })
  });
  return (0, import_jsx_runtime88.jsx)(ModalContext_default.Provider, {
    value: modalContext,
    children: (0, import_jsx_runtime88.jsx)(Modal_default, {
      show,
      ref: mergedRef,
      backdrop,
      container,
      keyboard: true,
      autoFocus,
      enforceFocus,
      restoreFocus,
      restoreFocusOptions,
      onEscapeKeyDown: handleEscapeKeyDown,
      onShow,
      onHide,
      onEnter: handleEnter,
      onEntering: handleEntering,
      onEntered,
      onExit: handleExit,
      onExiting,
      onExited: handleExited,
      manager: getModalManager(),
      transition: animation ? DialogTransition : void 0,
      backdropTransition: animation ? BackdropTransition : void 0,
      renderBackdrop,
      renderDialog
    })
  });
});
Modal2.displayName = "Modal";
var Modal_default2 = Object.assign(Modal2, {
  Body: ModalBody_default,
  Header: ModalHeader_default,
  Title: ModalTitle_default,
  Footer: ModalFooter_default,
  Dialog: ModalDialog_default,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150
});

// node_modules/react-bootstrap/esm/Nav.js
var import_classnames68 = __toESM(require_classnames());
var import_all = __toESM(require_all());
var React92 = __toESM(require_react());
var import_react35 = __toESM(require_react());

// node_modules/react-bootstrap/esm/NavItem.js
var React90 = __toESM(require_react());
var import_classnames66 = __toESM(require_classnames());
var import_jsx_runtime89 = __toESM(require_jsx_runtime());
var NavItem2 = React90.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "nav-item");
  return (0, import_jsx_runtime89.jsx)(Component, {
    ref,
    className: (0, import_classnames66.default)(className, bsPrefix),
    ...props
  });
});
NavItem2.displayName = "NavItem";
var NavItem_default2 = NavItem2;

// node_modules/react-bootstrap/esm/NavLink.js
var import_classnames67 = __toESM(require_classnames());
var React91 = __toESM(require_react());
var import_jsx_runtime90 = __toESM(require_jsx_runtime());
var NavLink = React91.forwardRef(({
  bsPrefix,
  className,
  as: Component = Anchor_default,
  active,
  eventKey,
  disabled = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "nav-link");
  const [navItemProps, meta] = useNavItem({
    key: makeEventKey(eventKey, props.href),
    active,
    disabled,
    ...props
  });
  return (0, import_jsx_runtime90.jsx)(Component, {
    ...props,
    ...navItemProps,
    ref,
    disabled,
    className: (0, import_classnames67.default)(className, bsPrefix, disabled && "disabled", meta.isActive && "active")
  });
});
NavLink.displayName = "NavLink";
var NavLink_default = NavLink;

// node_modules/react-bootstrap/esm/Nav.js
var import_jsx_runtime91 = __toESM(require_jsx_runtime());
var Nav2 = React92.forwardRef((uncontrolledProps, ref) => {
  const {
    as = "div",
    bsPrefix: initialBsPrefix,
    variant,
    fill = false,
    justify = false,
    navbar,
    navbarScroll,
    className,
    activeKey,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    activeKey: "onSelect"
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, "nav");
  let navbarBsPrefix;
  let cardHeaderBsPrefix;
  let isNavbar = false;
  const navbarContext = (0, import_react35.useContext)(NavbarContext_default);
  const cardHeaderContext = (0, import_react35.useContext)(CardHeaderContext_default);
  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    isNavbar = navbar == null ? true : navbar;
  } else if (cardHeaderContext) {
    ({
      cardHeaderBsPrefix
    } = cardHeaderContext);
  }
  return (0, import_jsx_runtime91.jsx)(Nav_default, {
    as,
    ref,
    activeKey,
    className: (0, import_classnames68.default)(className, {
      [bsPrefix]: !isNavbar,
      [`${navbarBsPrefix}-nav`]: isNavbar,
      [`${navbarBsPrefix}-nav-scroll`]: isNavbar && navbarScroll,
      [`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
      [`${bsPrefix}-${variant}`]: !!variant,
      [`${bsPrefix}-fill`]: fill,
      [`${bsPrefix}-justified`]: justify
    }),
    ...props
  });
});
Nav2.displayName = "Nav";
var Nav_default2 = Object.assign(Nav2, {
  Item: NavItem_default2,
  Link: NavLink_default
});

// node_modules/react-bootstrap/esm/Navbar.js
var import_classnames77 = __toESM(require_classnames());
var React103 = __toESM(require_react());
var import_react42 = __toESM(require_react());

// node_modules/react-bootstrap/esm/NavbarBrand.js
var import_classnames69 = __toESM(require_classnames());
var React93 = __toESM(require_react());
var import_jsx_runtime92 = __toESM(require_jsx_runtime());
var NavbarBrand = React93.forwardRef(({
  bsPrefix,
  className,
  as,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-brand");
  const Component = as || (props.href ? "a" : "span");
  return (0, import_jsx_runtime92.jsx)(Component, {
    ...props,
    ref,
    className: (0, import_classnames69.default)(className, bsPrefix)
  });
});
NavbarBrand.displayName = "NavbarBrand";
var NavbarBrand_default = NavbarBrand;

// node_modules/react-bootstrap/esm/NavbarCollapse.js
var React94 = __toESM(require_react());
var import_react36 = __toESM(require_react());
var import_jsx_runtime93 = __toESM(require_jsx_runtime());
var NavbarCollapse = React94.forwardRef(({
  children,
  bsPrefix,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-collapse");
  const context6 = (0, import_react36.useContext)(NavbarContext_default);
  return (0, import_jsx_runtime93.jsx)(Collapse_default, {
    in: !!(context6 && context6.expanded),
    ...props,
    children: (0, import_jsx_runtime93.jsx)("div", {
      ref,
      className: bsPrefix,
      children
    })
  });
});
NavbarCollapse.displayName = "NavbarCollapse";
var NavbarCollapse_default = NavbarCollapse;

// node_modules/react-bootstrap/esm/NavbarToggle.js
var import_classnames70 = __toESM(require_classnames());
var React95 = __toESM(require_react());
var import_react37 = __toESM(require_react());
var import_jsx_runtime94 = __toESM(require_jsx_runtime());
var NavbarToggle = React95.forwardRef(({
  bsPrefix,
  className,
  children,
  label = "Toggle navigation",
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "button",
  onClick,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-toggler");
  const {
    onToggle,
    expanded
  } = (0, import_react37.useContext)(NavbarContext_default) || {};
  const handleClick = useEventCallback((e) => {
    if (onClick)
      onClick(e);
    if (onToggle)
      onToggle();
  });
  if (Component === "button") {
    props.type = "button";
  }
  return (0, import_jsx_runtime94.jsx)(Component, {
    ...props,
    ref,
    onClick: handleClick,
    "aria-label": label,
    className: (0, import_classnames70.default)(className, bsPrefix, !expanded && "collapsed"),
    children: children || (0, import_jsx_runtime94.jsx)("span", {
      className: `${bsPrefix}-icon`
    })
  });
});
NavbarToggle.displayName = "NavbarToggle";
var NavbarToggle_default = NavbarToggle;

// node_modules/react-bootstrap/esm/NavbarOffcanvas.js
var React101 = __toESM(require_react());
var import_react41 = __toESM(require_react());

// node_modules/react-bootstrap/esm/Offcanvas.js
var import_classnames75 = __toESM(require_classnames());

// node_modules/@restart/hooks/esm/useMediaQuery.js
var import_react38 = __toESM(require_react());
var matchersByWindow = /* @__PURE__ */ new WeakMap();
var getMatcher = (query, targetWindow) => {
  if (!query || !targetWindow)
    return void 0;
  const matchers = matchersByWindow.get(targetWindow) || /* @__PURE__ */ new Map();
  matchersByWindow.set(targetWindow, matchers);
  let mql = matchers.get(query);
  if (!mql) {
    mql = targetWindow.matchMedia(query);
    mql.refCount = 0;
    matchers.set(mql.media, mql);
  }
  return mql;
};
function useMediaQuery(query, targetWindow = typeof window === "undefined" ? void 0 : window) {
  const mql = getMatcher(query, targetWindow);
  const [matches, setMatches] = (0, import_react38.useState)(() => mql ? mql.matches : false);
  useIsomorphicEffect_default(() => {
    let mql2 = getMatcher(query, targetWindow);
    if (!mql2) {
      return setMatches(false);
    }
    let matchers = matchersByWindow.get(targetWindow);
    const handleChange = () => {
      setMatches(mql2.matches);
    };
    mql2.refCount++;
    mql2.addListener(handleChange);
    handleChange();
    return () => {
      mql2.removeListener(handleChange);
      mql2.refCount--;
      if (mql2.refCount <= 0) {
        matchers == null ? void 0 : matchers.delete(mql2.media);
      }
      mql2 = void 0;
    };
  }, [query]);
  return matches;
}

// node_modules/@restart/hooks/esm/useBreakpoint.js
var import_react39 = __toESM(require_react());
function createBreakpointHook(breakpointValues) {
  const names = Object.keys(breakpointValues);
  function and(query, next) {
    if (query === next) {
      return next;
    }
    return query ? `${query} and ${next}` : next;
  }
  function getNext(breakpoint) {
    return names[Math.min(names.indexOf(breakpoint) + 1, names.length - 1)];
  }
  function getMaxQuery(breakpoint) {
    const next = getNext(breakpoint);
    let value = breakpointValues[next];
    if (typeof value === "number")
      value = `${value - 0.2}px`;
    else
      value = `calc(${value} - 0.2px)`;
    return `(max-width: ${value})`;
  }
  function getMinQuery(breakpoint) {
    let value = breakpointValues[breakpoint];
    if (typeof value === "number") {
      value = `${value}px`;
    }
    return `(min-width: ${value})`;
  }
  function useBreakpoint2(breakpointOrMap, direction, window2) {
    let breakpointMap;
    if (typeof breakpointOrMap === "object") {
      breakpointMap = breakpointOrMap;
      window2 = direction;
      direction = true;
    } else {
      direction = direction || true;
      breakpointMap = {
        [breakpointOrMap]: direction
      };
    }
    let query = (0, import_react39.useMemo)(() => Object.entries(breakpointMap).reduce((query2, [key, direction2]) => {
      if (direction2 === "up" || direction2 === true) {
        query2 = and(query2, getMinQuery(key));
      }
      if (direction2 === "down" || direction2 === true) {
        query2 = and(query2, getMaxQuery(key));
      }
      return query2;
    }, ""), [JSON.stringify(breakpointMap)]);
    return useMediaQuery(query, window2);
  }
  return useBreakpoint2;
}
var useBreakpoint = createBreakpointHook({
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
});
var useBreakpoint_default = useBreakpoint;

// node_modules/react-bootstrap/esm/Offcanvas.js
var React100 = __toESM(require_react());
var import_react40 = __toESM(require_react());

// node_modules/react-bootstrap/esm/OffcanvasBody.js
var React96 = __toESM(require_react());
var import_classnames71 = __toESM(require_classnames());
var import_jsx_runtime95 = __toESM(require_jsx_runtime());
var OffcanvasBody = React96.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas-body");
  return (0, import_jsx_runtime95.jsx)(Component, {
    ref,
    className: (0, import_classnames71.default)(className, bsPrefix),
    ...props
  });
});
OffcanvasBody.displayName = "OffcanvasBody";
var OffcanvasBody_default = OffcanvasBody;

// node_modules/react-bootstrap/esm/OffcanvasToggling.js
var import_classnames72 = __toESM(require_classnames());
var React97 = __toESM(require_react());
var import_jsx_runtime96 = __toESM(require_jsx_runtime());
var transitionStyles = {
  [ENTERING]: "show",
  [ENTERED]: "show"
};
var OffcanvasToggling = React97.forwardRef(({
  bsPrefix,
  className,
  children,
  in: inProp = false,
  mountOnEnter = false,
  unmountOnExit = false,
  appear = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas");
  return (0, import_jsx_runtime96.jsx)(TransitionWrapper_default, {
    ref,
    addEndListener: transitionEndListener,
    in: inProp,
    mountOnEnter,
    unmountOnExit,
    appear,
    ...props,
    childRef: children.ref,
    children: (status, innerProps) => React97.cloneElement(children, {
      ...innerProps,
      className: (0, import_classnames72.default)(className, children.props.className, (status === ENTERING || status === EXITING) && `${bsPrefix}-toggling`, transitionStyles[status])
    })
  });
});
OffcanvasToggling.displayName = "OffcanvasToggling";
var OffcanvasToggling_default = OffcanvasToggling;

// node_modules/react-bootstrap/esm/OffcanvasHeader.js
var import_classnames73 = __toESM(require_classnames());
var React98 = __toESM(require_react());
var import_jsx_runtime97 = __toESM(require_jsx_runtime());
var OffcanvasHeader = React98.forwardRef(({
  bsPrefix,
  className,
  closeLabel = "Close",
  closeButton = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas-header");
  return (0, import_jsx_runtime97.jsx)(AbstractModalHeader_default, {
    ref,
    ...props,
    className: (0, import_classnames73.default)(className, bsPrefix),
    closeLabel,
    closeButton
  });
});
OffcanvasHeader.displayName = "OffcanvasHeader";
var OffcanvasHeader_default = OffcanvasHeader;

// node_modules/react-bootstrap/esm/OffcanvasTitle.js
var React99 = __toESM(require_react());
var import_classnames74 = __toESM(require_classnames());
var import_jsx_runtime98 = __toESM(require_jsx_runtime());
var DivStyledAsH52 = divWithClassName_default("h5");
var OffcanvasTitle = React99.forwardRef(({
  className,
  bsPrefix,
  as: Component = DivStyledAsH52,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas-title");
  return (0, import_jsx_runtime98.jsx)(Component, {
    ref,
    className: (0, import_classnames74.default)(className, bsPrefix),
    ...props
  });
});
OffcanvasTitle.displayName = "OffcanvasTitle";
var OffcanvasTitle_default = OffcanvasTitle;

// node_modules/react-bootstrap/esm/Offcanvas.js
var import_jsx_runtime99 = __toESM(require_jsx_runtime());
var import_jsx_runtime100 = __toESM(require_jsx_runtime());
var import_jsx_runtime101 = __toESM(require_jsx_runtime());
function DialogTransition2(props) {
  return (0, import_jsx_runtime99.jsx)(OffcanvasToggling_default, {
    ...props
  });
}
function BackdropTransition2(props) {
  return (0, import_jsx_runtime99.jsx)(Fade_default, {
    ...props
  });
}
var Offcanvas = React100.forwardRef(({
  bsPrefix,
  className,
  children,
  "aria-labelledby": ariaLabelledby,
  placement = "start",
  responsive,
  /* BaseModal props */
  show = false,
  backdrop = true,
  keyboard = true,
  scroll = false,
  onEscapeKeyDown,
  onShow,
  onHide,
  container,
  autoFocus = true,
  enforceFocus = true,
  restoreFocus = true,
  restoreFocusOptions,
  onEntered,
  onExit,
  onExiting,
  onEnter,
  onEntering,
  onExited,
  backdropClassName,
  manager: propsManager,
  renderStaticNode = false,
  ...props
}, ref) => {
  const modalManager = (0, import_react40.useRef)();
  bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas");
  const {
    onToggle
  } = (0, import_react40.useContext)(NavbarContext_default) || {};
  const [showOffcanvas, setShowOffcanvas] = (0, import_react40.useState)(false);
  const hideResponsiveOffcanvas = useBreakpoint_default(responsive || "xs", "up");
  (0, import_react40.useEffect)(() => {
    setShowOffcanvas(responsive ? show && !hideResponsiveOffcanvas : show);
  }, [show, responsive, hideResponsiveOffcanvas]);
  const handleHide = useEventCallback(() => {
    onToggle == null ? void 0 : onToggle();
    onHide == null ? void 0 : onHide();
  });
  const modalContext = (0, import_react40.useMemo)(() => ({
    onHide: handleHide
  }), [handleHide]);
  function getModalManager() {
    if (propsManager)
      return propsManager;
    if (scroll) {
      if (!modalManager.current)
        modalManager.current = new BootstrapModalManager_default({
          handleContainerOverflow: false
        });
      return modalManager.current;
    }
    return getSharedManager();
  }
  const handleEnter = (node, ...args) => {
    if (node)
      node.style.visibility = "visible";
    onEnter == null ? void 0 : onEnter(node, ...args);
  };
  const handleExited = (node, ...args) => {
    if (node)
      node.style.visibility = "";
    onExited == null ? void 0 : onExited(...args);
  };
  const renderBackdrop = (0, import_react40.useCallback)((backdropProps) => (0, import_jsx_runtime99.jsx)("div", {
    ...backdropProps,
    className: (0, import_classnames75.default)(`${bsPrefix}-backdrop`, backdropClassName)
  }), [backdropClassName, bsPrefix]);
  const renderDialog = (dialogProps) => (0, import_jsx_runtime99.jsx)("div", {
    ...dialogProps,
    ...props,
    className: (0, import_classnames75.default)(className, responsive ? `${bsPrefix}-${responsive}` : bsPrefix, `${bsPrefix}-${placement}`),
    "aria-labelledby": ariaLabelledby,
    children
  });
  return (0, import_jsx_runtime101.jsxs)(import_jsx_runtime100.Fragment, {
    children: [!showOffcanvas && (responsive || renderStaticNode) && renderDialog({}), (0, import_jsx_runtime99.jsx)(ModalContext_default.Provider, {
      value: modalContext,
      children: (0, import_jsx_runtime99.jsx)(Modal_default, {
        show: showOffcanvas,
        ref,
        backdrop,
        container,
        keyboard,
        autoFocus,
        enforceFocus: enforceFocus && !scroll,
        restoreFocus,
        restoreFocusOptions,
        onEscapeKeyDown,
        onShow,
        onHide: handleHide,
        onEnter: handleEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited: handleExited,
        manager: getModalManager(),
        transition: DialogTransition2,
        backdropTransition: BackdropTransition2,
        renderBackdrop,
        renderDialog
      })
    })]
  });
});
Offcanvas.displayName = "Offcanvas";
var Offcanvas_default = Object.assign(Offcanvas, {
  Body: OffcanvasBody_default,
  Header: OffcanvasHeader_default,
  Title: OffcanvasTitle_default
});

// node_modules/react-bootstrap/esm/NavbarOffcanvas.js
var import_jsx_runtime102 = __toESM(require_jsx_runtime());
var NavbarOffcanvas = React101.forwardRef((props, ref) => {
  const context6 = (0, import_react41.useContext)(NavbarContext_default);
  return (0, import_jsx_runtime102.jsx)(Offcanvas_default, {
    ref,
    show: !!(context6 != null && context6.expanded),
    ...props,
    renderStaticNode: true
  });
});
NavbarOffcanvas.displayName = "NavbarOffcanvas";
var NavbarOffcanvas_default = NavbarOffcanvas;

// node_modules/react-bootstrap/esm/NavbarText.js
var React102 = __toESM(require_react());
var import_classnames76 = __toESM(require_classnames());
var import_jsx_runtime103 = __toESM(require_jsx_runtime());
var NavbarText = React102.forwardRef(({
  className,
  bsPrefix,
  as: Component = "span",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-text");
  return (0, import_jsx_runtime103.jsx)(Component, {
    ref,
    className: (0, import_classnames76.default)(className, bsPrefix),
    ...props
  });
});
NavbarText.displayName = "NavbarText";
var NavbarText_default = NavbarText;

// node_modules/react-bootstrap/esm/Navbar.js
var import_jsx_runtime104 = __toESM(require_jsx_runtime());
var Navbar = React103.forwardRef((props, ref) => {
  const {
    bsPrefix: initialBsPrefix,
    expand = true,
    variant = "light",
    bg,
    fixed,
    sticky,
    className,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = "nav",
    expanded,
    onToggle,
    onSelect,
    collapseOnSelect = false,
    ...controlledProps
  } = useUncontrolled(props, {
    expanded: "onToggle"
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, "navbar");
  const handleCollapse = (0, import_react42.useCallback)((...args) => {
    onSelect == null ? void 0 : onSelect(...args);
    if (collapseOnSelect && expanded) {
      onToggle == null ? void 0 : onToggle(false);
    }
  }, [onSelect, collapseOnSelect, expanded, onToggle]);
  if (controlledProps.role === void 0 && Component !== "nav") {
    controlledProps.role = "navigation";
  }
  let expandClass = `${bsPrefix}-expand`;
  if (typeof expand === "string")
    expandClass = `${expandClass}-${expand}`;
  const navbarContext = (0, import_react42.useMemo)(() => ({
    onToggle: () => onToggle == null ? void 0 : onToggle(!expanded),
    bsPrefix,
    expanded: !!expanded,
    expand
  }), [bsPrefix, expanded, expand, onToggle]);
  return (0, import_jsx_runtime104.jsx)(NavbarContext_default.Provider, {
    value: navbarContext,
    children: (0, import_jsx_runtime104.jsx)(SelectableContext_default.Provider, {
      value: handleCollapse,
      children: (0, import_jsx_runtime104.jsx)(Component, {
        ref,
        ...controlledProps,
        className: (0, import_classnames77.default)(className, bsPrefix, expand && expandClass, variant && `${bsPrefix}-${variant}`, bg && `bg-${bg}`, sticky && `sticky-${sticky}`, fixed && `fixed-${fixed}`)
      })
    })
  });
});
Navbar.displayName = "Navbar";
var Navbar_default = Object.assign(Navbar, {
  Brand: NavbarBrand_default,
  Collapse: NavbarCollapse_default,
  Offcanvas: NavbarOffcanvas_default,
  Text: NavbarText_default,
  Toggle: NavbarToggle_default
});

// node_modules/react-bootstrap/esm/NavDropdown.js
var import_classnames78 = __toESM(require_classnames());
var React104 = __toESM(require_react());
var import_jsx_runtime105 = __toESM(require_jsx_runtime());
var import_jsx_runtime106 = __toESM(require_jsx_runtime());
var NavDropdown = React104.forwardRef(({
  id,
  title,
  children,
  bsPrefix,
  className,
  rootCloseEvent,
  menuRole,
  disabled,
  active,
  renderMenuOnMount,
  menuVariant,
  ...props
}, ref) => {
  const navItemPrefix = useBootstrapPrefix(void 0, "nav-item");
  return (0, import_jsx_runtime106.jsxs)(Dropdown_default2, {
    ref,
    ...props,
    className: (0, import_classnames78.default)(className, navItemPrefix),
    children: [(0, import_jsx_runtime105.jsx)(Dropdown_default2.Toggle, {
      id,
      eventKey: null,
      active,
      disabled,
      childBsPrefix: bsPrefix,
      as: NavLink_default,
      children: title
    }), (0, import_jsx_runtime105.jsx)(Dropdown_default2.Menu, {
      role: menuRole,
      renderOnMount: renderMenuOnMount,
      rootCloseEvent,
      variant: menuVariant,
      children
    })]
  });
});
NavDropdown.displayName = "NavDropdown";
var NavDropdown_default = Object.assign(NavDropdown, {
  Item: Dropdown_default2.Item,
  ItemText: Dropdown_default2.ItemText,
  Divider: Dropdown_default2.Divider,
  Header: Dropdown_default2.Header
});

// node_modules/react-bootstrap/esm/Placeholder.js
var React106 = __toESM(require_react());

// node_modules/react-bootstrap/esm/usePlaceholder.js
var import_classnames79 = __toESM(require_classnames());
function usePlaceholder({
  animation,
  bg,
  bsPrefix,
  size: size2,
  ...props
}) {
  bsPrefix = useBootstrapPrefix(bsPrefix, "placeholder");
  const [{
    className,
    ...colProps
  }] = useCol(props);
  return {
    ...colProps,
    className: (0, import_classnames79.default)(className, animation ? `${bsPrefix}-${animation}` : bsPrefix, size2 && `${bsPrefix}-${size2}`, bg && `bg-${bg}`)
  };
}

// node_modules/react-bootstrap/esm/PlaceholderButton.js
var React105 = __toESM(require_react());
var import_jsx_runtime107 = __toESM(require_jsx_runtime());
var PlaceholderButton = React105.forwardRef((props, ref) => {
  const placeholderProps = usePlaceholder(props);
  return (0, import_jsx_runtime107.jsx)(Button_default2, {
    ...placeholderProps,
    ref,
    disabled: true,
    tabIndex: -1
  });
});
PlaceholderButton.displayName = "PlaceholderButton";
var PlaceholderButton_default = PlaceholderButton;

// node_modules/react-bootstrap/esm/Placeholder.js
var import_jsx_runtime108 = __toESM(require_jsx_runtime());
var Placeholder = React106.forwardRef(({
  as: Component = "span",
  ...props
}, ref) => {
  const placeholderProps = usePlaceholder(props);
  return (0, import_jsx_runtime108.jsx)(Component, {
    ...placeholderProps,
    ref
  });
});
Placeholder.displayName = "Placeholder";
var Placeholder_default = Object.assign(Placeholder, {
  Button: PlaceholderButton_default
});

// node_modules/react-bootstrap/esm/ProgressBar.js
var import_classnames80 = __toESM(require_classnames());
var React107 = __toESM(require_react());
var import_react43 = __toESM(require_react());
var import_jsx_runtime109 = __toESM(require_jsx_runtime());
var ROUND_PRECISION = 1e3;
function getPercentage(now, min, max) {
  const percentage = (now - min) / (max - min) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}
function renderProgressBar({
  min,
  now,
  max,
  label,
  visuallyHidden,
  striped,
  animated,
  className,
  style,
  variant,
  bsPrefix,
  ...props
}, ref) {
  return (0, import_jsx_runtime109.jsx)("div", {
    ref,
    ...props,
    role: "progressbar",
    className: (0, import_classnames80.default)(className, `${bsPrefix}-bar`, {
      [`bg-${variant}`]: variant,
      [`${bsPrefix}-bar-animated`]: animated,
      [`${bsPrefix}-bar-striped`]: animated || striped
    }),
    style: {
      width: `${getPercentage(now, min, max)}%`,
      ...style
    },
    "aria-valuenow": now,
    "aria-valuemin": min,
    "aria-valuemax": max,
    children: visuallyHidden ? (0, import_jsx_runtime109.jsx)("span", {
      className: "visually-hidden",
      children: label
    }) : label
  });
}
var ProgressBar = React107.forwardRef(({
  isChild = false,
  ...rest
}, ref) => {
  const props = {
    min: 0,
    max: 100,
    animated: false,
    visuallyHidden: false,
    striped: false,
    ...rest
  };
  props.bsPrefix = useBootstrapPrefix(props.bsPrefix, "progress");
  if (isChild) {
    return renderProgressBar(props, ref);
  }
  const {
    min,
    now,
    max,
    label,
    visuallyHidden,
    striped,
    animated,
    bsPrefix,
    variant,
    className,
    children,
    ...wrapperProps
  } = props;
  return (0, import_jsx_runtime109.jsx)("div", {
    ref,
    ...wrapperProps,
    className: (0, import_classnames80.default)(className, bsPrefix),
    children: children ? map(children, (child) => (0, import_react43.cloneElement)(child, {
      isChild: true
    })) : renderProgressBar({
      min,
      now,
      max,
      label,
      visuallyHidden,
      striped,
      animated,
      bsPrefix,
      variant
    }, ref)
  });
});
ProgressBar.displayName = "ProgressBar";
var ProgressBar_default = ProgressBar;

// node_modules/react-bootstrap/esm/Ratio.js
var import_classnames81 = __toESM(require_classnames());
var React108 = __toESM(require_react());
var import_jsx_runtime110 = __toESM(require_jsx_runtime());
function toPercent(num) {
  if (num <= 0)
    return "100%";
  if (num < 1)
    return `${num * 100}%`;
  return `${num}%`;
}
var Ratio = React108.forwardRef(({
  bsPrefix,
  className,
  children,
  aspectRatio = "1x1",
  style,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "ratio");
  const isCustomRatio = typeof aspectRatio === "number";
  return (0, import_jsx_runtime110.jsx)("div", {
    ref,
    ...props,
    style: {
      ...style,
      ...isCustomRatio && {
        "--bs-aspect-ratio": toPercent(aspectRatio)
      }
    },
    className: (0, import_classnames81.default)(bsPrefix, className, !isCustomRatio && `${bsPrefix}-${aspectRatio}`),
    children: React108.Children.only(children)
  });
});
var Ratio_default = Ratio;

// node_modules/react-bootstrap/esm/Row.js
var import_classnames82 = __toESM(require_classnames());
var React109 = __toESM(require_react());
var import_jsx_runtime111 = __toESM(require_jsx_runtime());
var Row = React109.forwardRef(({
  bsPrefix,
  className,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = "div",
  ...props
}, ref) => {
  const decoratedBsPrefix = useBootstrapPrefix(bsPrefix, "row");
  const breakpoints = useBootstrapBreakpoints();
  const minBreakpoint = useBootstrapMinBreakpoint();
  const sizePrefix = `${decoratedBsPrefix}-cols`;
  const classes = [];
  breakpoints.forEach((brkPoint) => {
    const propValue = props[brkPoint];
    delete props[brkPoint];
    let cols;
    if (propValue != null && typeof propValue === "object") {
      ({
        cols
      } = propValue);
    } else {
      cols = propValue;
    }
    const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : "";
    if (cols != null)
      classes.push(`${sizePrefix}${infix}-${cols}`);
  });
  return (0, import_jsx_runtime111.jsx)(Component, {
    ref,
    ...props,
    className: (0, import_classnames82.default)(className, decoratedBsPrefix, ...classes)
  });
});
Row.displayName = "Row";
var Row_default = Row;

// node_modules/react-bootstrap/esm/SplitButton.js
var React110 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());
var import_jsx_runtime112 = __toESM(require_jsx_runtime());
var import_jsx_runtime113 = __toESM(require_jsx_runtime());
var propTypes5 = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string}
   * @required
   */
  id: import_prop_types6.default.string,
  /**
   * Accessible label for the toggle; the value of `title` if not specified.
   */
  toggleLabel: import_prop_types6.default.string,
  /** An `href` passed to the non-toggle Button */
  href: import_prop_types6.default.string,
  /** An anchor `target` passed to the non-toggle Button */
  target: import_prop_types6.default.string,
  /** An `onClick` handler passed to the non-toggle Button */
  onClick: import_prop_types6.default.func,
  /** The content of the non-toggle Button.  */
  title: import_prop_types6.default.node.isRequired,
  /** A `type` passed to the non-toggle Button */
  type: import_prop_types6.default.string,
  /** Disables both Buttons  */
  disabled: import_prop_types6.default.bool,
  /**
   * Aligns the dropdown menu.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   *
   * @type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} }
   */
  align: alignPropType,
  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: import_prop_types6.default.string,
  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: import_prop_types6.default.bool,
  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   */
  rootCloseEvent: import_prop_types6.default.string,
  /**
   * Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer to
   * Popper.js's flip [docs](https://popper.js.org/docs/v2/modifiers/flip/).
   *
   */
  flip: import_prop_types6.default.bool,
  /** @ignore */
  bsPrefix: import_prop_types6.default.string,
  /** @ignore */
  variant: import_prop_types6.default.string,
  /** @ignore */
  size: import_prop_types6.default.string
};
var SplitButton = React110.forwardRef(({
  id,
  bsPrefix,
  size: size2,
  variant,
  title,
  type = "button",
  toggleLabel = "Toggle dropdown",
  children,
  onClick,
  href,
  target,
  menuRole,
  renderMenuOnMount,
  rootCloseEvent,
  flip,
  ...props
}, ref) => (0, import_jsx_runtime113.jsxs)(Dropdown_default2, {
  ref,
  ...props,
  as: ButtonGroup_default,
  children: [(0, import_jsx_runtime112.jsx)(Button_default2, {
    size: size2,
    variant,
    disabled: props.disabled,
    bsPrefix,
    href,
    target,
    onClick,
    type,
    children: title
  }), (0, import_jsx_runtime112.jsx)(Dropdown_default2.Toggle, {
    split: true,
    id,
    size: size2,
    variant,
    disabled: props.disabled,
    childBsPrefix: bsPrefix,
    children: (0, import_jsx_runtime112.jsx)("span", {
      className: "visually-hidden",
      children: toggleLabel
    })
  }), (0, import_jsx_runtime112.jsx)(Dropdown_default2.Menu, {
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent,
    flip,
    children
  })]
}));
SplitButton.propTypes = propTypes5;
SplitButton.displayName = "SplitButton";
var SplitButton_default = SplitButton;

// node_modules/react-bootstrap/esm/SSRProvider.js
var SSRProvider_default = $b5e257d569688ac6$export$9f8ac96af4b1b2ae;

// node_modules/react-bootstrap/esm/Stack.js
var import_classnames83 = __toESM(require_classnames());
var React111 = __toESM(require_react());

// node_modules/react-bootstrap/esm/createUtilityClasses.js
var import_prop_types7 = __toESM(require_prop_types());
function createUtilityClassName(utilityValues, breakpoints = DEFAULT_BREAKPOINTS, minBreakpoint = DEFAULT_MIN_BREAKPOINT) {
  const classes = [];
  Object.entries(utilityValues).forEach(([utilName, utilValue]) => {
    if (utilValue != null) {
      if (typeof utilValue === "object") {
        breakpoints.forEach((brkPoint) => {
          const bpValue = utilValue[brkPoint];
          if (bpValue != null) {
            const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : "";
            classes.push(`${utilName}${infix}-${bpValue}`);
          }
        });
      } else {
        classes.push(`${utilName}-${utilValue}`);
      }
    }
  });
  return classes;
}

// node_modules/react-bootstrap/esm/Stack.js
var import_jsx_runtime114 = __toESM(require_jsx_runtime());
var Stack = React111.forwardRef(({
  as: Component = "div",
  bsPrefix,
  className,
  direction,
  gap,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, direction === "horizontal" ? "hstack" : "vstack");
  const breakpoints = useBootstrapBreakpoints();
  const minBreakpoint = useBootstrapMinBreakpoint();
  return (0, import_jsx_runtime114.jsx)(Component, {
    ...props,
    ref,
    className: (0, import_classnames83.default)(className, bsPrefix, ...createUtilityClassName({
      gap
    }, breakpoints, minBreakpoint))
  });
});
Stack.displayName = "Stack";
var Stack_default = Stack;

// node_modules/react-bootstrap/esm/Tab.js
var import_prop_types8 = __toESM(require_prop_types());

// node_modules/react-bootstrap/esm/TabContainer.js
var React114 = __toESM(require_react());

// node_modules/@restart/ui/esm/Tabs.js
var React113 = __toESM(require_react());
var import_react45 = __toESM(require_react());

// node_modules/@restart/ui/esm/TabPanel.js
var React112 = __toESM(require_react());
var import_react44 = __toESM(require_react());
var import_jsx_runtime115 = __toESM(require_jsx_runtime());
var _excluded6 = ["active", "eventKey", "mountOnEnter", "transition", "unmountOnExit", "role", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"];
var _excluded22 = ["activeKey", "getControlledId", "getControllerId"];
var _excluded32 = ["as"];
function _objectWithoutPropertiesLoose6(source, excluded) {
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
function useTabPanel(_ref) {
  let {
    active,
    eventKey,
    mountOnEnter,
    transition,
    unmountOnExit,
    role = "tabpanel",
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  } = _ref, props = _objectWithoutPropertiesLoose6(_ref, _excluded6);
  const context6 = (0, import_react44.useContext)(TabContext_default);
  if (!context6)
    return [Object.assign({}, props, {
      role
    }), {
      eventKey,
      isActive: active,
      mountOnEnter,
      transition,
      unmountOnExit,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited
    }];
  const {
    activeKey,
    getControlledId,
    getControllerId
  } = context6, rest = _objectWithoutPropertiesLoose6(context6, _excluded22);
  const key = makeEventKey(eventKey);
  return [Object.assign({}, props, {
    role,
    id: getControlledId(eventKey),
    "aria-labelledby": getControllerId(eventKey)
  }), {
    eventKey,
    isActive: active == null && key != null ? makeEventKey(activeKey) === key : active,
    transition: transition || rest.transition,
    mountOnEnter: mountOnEnter != null ? mountOnEnter : rest.mountOnEnter,
    unmountOnExit: unmountOnExit != null ? unmountOnExit : rest.unmountOnExit,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  }];
}
var TabPanel = React112.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  (_ref2, ref) => {
    let {
      as: Component = "div"
    } = _ref2, props = _objectWithoutPropertiesLoose6(_ref2, _excluded32);
    const [tabPanelProps, {
      isActive,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited,
      mountOnEnter,
      unmountOnExit,
      transition: Transition = NoopTransition_default
    }] = useTabPanel(props);
    return (0, import_jsx_runtime115.jsx)(TabContext_default.Provider, {
      value: null,
      children: (0, import_jsx_runtime115.jsx)(SelectableContext_default.Provider, {
        value: null,
        children: (0, import_jsx_runtime115.jsx)(Transition, {
          in: isActive,
          onEnter,
          onEntering,
          onEntered,
          onExit,
          onExiting,
          onExited,
          mountOnEnter,
          unmountOnExit,
          children: (0, import_jsx_runtime115.jsx)(Component, Object.assign({}, tabPanelProps, {
            ref,
            hidden: !isActive,
            "aria-hidden": !isActive
          }))
        })
      })
    });
  }
);
TabPanel.displayName = "TabPanel";
var TabPanel_default = TabPanel;

// node_modules/@restart/ui/esm/Tabs.js
var import_jsx_runtime116 = __toESM(require_jsx_runtime());
var Tabs = (props) => {
  const {
    id: userId,
    generateChildId: generateCustomChildId,
    onSelect: propsOnSelect,
    activeKey: propsActiveKey,
    defaultActiveKey,
    transition,
    mountOnEnter,
    unmountOnExit,
    children
  } = props;
  const [activeKey, onSelect] = useUncontrolledProp(propsActiveKey, defaultActiveKey, propsOnSelect);
  const id = $b5e257d569688ac6$export$619500959fc48b26(userId);
  const generateChildId = (0, import_react45.useMemo)(() => generateCustomChildId || ((key, type) => id ? `${id}-${type}-${key}` : null), [id, generateCustomChildId]);
  const tabContext = (0, import_react45.useMemo)(() => ({
    onSelect,
    activeKey,
    transition,
    mountOnEnter: mountOnEnter || false,
    unmountOnExit: unmountOnExit || false,
    getControlledId: (key) => generateChildId(key, "tabpane"),
    getControllerId: (key) => generateChildId(key, "tab")
  }), [onSelect, activeKey, transition, mountOnEnter, unmountOnExit, generateChildId]);
  return (0, import_jsx_runtime116.jsx)(TabContext_default.Provider, {
    value: tabContext,
    children: (0, import_jsx_runtime116.jsx)(SelectableContext_default.Provider, {
      value: onSelect || null,
      children
    })
  });
};
Tabs.Panel = TabPanel_default;
var Tabs_default = Tabs;

// node_modules/react-bootstrap/esm/getTabTransitionComponent.js
function getTabTransitionComponent(transition) {
  if (typeof transition === "boolean") {
    return transition ? Fade_default : NoopTransition_default;
  }
  return transition;
}

// node_modules/react-bootstrap/esm/TabContainer.js
var import_jsx_runtime117 = __toESM(require_jsx_runtime());
var TabContainer = ({
  transition,
  ...props
}) => (0, import_jsx_runtime117.jsx)(Tabs_default, {
  ...props,
  transition: getTabTransitionComponent(transition)
});
TabContainer.displayName = "TabContainer";
var TabContainer_default = TabContainer;

// node_modules/react-bootstrap/esm/TabContent.js
var React115 = __toESM(require_react());
var import_classnames84 = __toESM(require_classnames());
var import_jsx_runtime118 = __toESM(require_jsx_runtime());
var TabContent = React115.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "tab-content");
  return (0, import_jsx_runtime118.jsx)(Component, {
    ref,
    className: (0, import_classnames84.default)(className, bsPrefix),
    ...props
  });
});
TabContent.displayName = "TabContent";
var TabContent_default = TabContent;

// node_modules/react-bootstrap/esm/TabPane.js
var import_classnames85 = __toESM(require_classnames());
var React116 = __toESM(require_react());
var import_jsx_runtime119 = __toESM(require_jsx_runtime());
var TabPane = React116.forwardRef(({
  bsPrefix,
  transition,
  ...props
}, ref) => {
  const [{
    className,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = "div",
    ...rest
  }, {
    isActive,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition = Fade_default
  }] = useTabPanel({
    ...props,
    transition: getTabTransitionComponent(transition)
  });
  const prefix = useBootstrapPrefix(bsPrefix, "tab-pane");
  return (0, import_jsx_runtime119.jsx)(TabContext_default.Provider, {
    value: null,
    children: (0, import_jsx_runtime119.jsx)(SelectableContext_default.Provider, {
      value: null,
      children: (0, import_jsx_runtime119.jsx)(Transition, {
        in: isActive,
        onEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited,
        mountOnEnter,
        unmountOnExit,
        children: (0, import_jsx_runtime119.jsx)(Component, {
          ...rest,
          ref,
          className: (0, import_classnames85.default)(className, prefix, isActive && "active")
        })
      })
    })
  });
});
TabPane.displayName = "TabPane";
var TabPane_default = TabPane;

// node_modules/react-bootstrap/esm/Tab.js
var propTypes6 = {
  eventKey: import_prop_types8.default.oneOfType([import_prop_types8.default.string, import_prop_types8.default.number]),
  /**
   * Content for the tab title.
   */
  title: import_prop_types8.default.node.isRequired,
  /**
   * The disabled state of the tab.
   */
  disabled: import_prop_types8.default.bool,
  /**
   * Class to pass to the underlying nav link.
   */
  tabClassName: import_prop_types8.default.string,
  /**
   * Object containing attributes to pass to underlying nav link.
   */
  tabAttrs: import_prop_types8.default.object
};
var Tab = () => {
  throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly");
};
Tab.propTypes = propTypes6;
var Tab_default = Object.assign(Tab, {
  Container: TabContainer_default,
  Content: TabContent_default,
  Pane: TabPane_default
});

// node_modules/react-bootstrap/esm/Tabs.js
var React117 = __toESM(require_react());
var import_jsx_runtime120 = __toESM(require_jsx_runtime());
var import_jsx_runtime121 = __toESM(require_jsx_runtime());
function getDefaultActiveKey(children) {
  let defaultActiveKey;
  forEach(children, (child) => {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });
  return defaultActiveKey;
}
function renderTab(child) {
  const {
    title,
    eventKey,
    disabled,
    tabClassName,
    tabAttrs,
    id
  } = child.props;
  if (title == null) {
    return null;
  }
  return (0, import_jsx_runtime120.jsx)(NavItem_default2, {
    as: "li",
    role: "presentation",
    children: (0, import_jsx_runtime120.jsx)(NavLink_default, {
      as: "button",
      type: "button",
      eventKey,
      disabled,
      id,
      className: tabClassName,
      ...tabAttrs,
      children: title
    })
  });
}
var Tabs2 = (props) => {
  const {
    id,
    onSelect,
    transition,
    mountOnEnter = false,
    unmountOnExit = false,
    variant = "tabs",
    children,
    activeKey = getDefaultActiveKey(children),
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: "onSelect"
  });
  return (0, import_jsx_runtime121.jsxs)(Tabs_default, {
    id,
    activeKey,
    onSelect,
    transition: getTabTransitionComponent(transition),
    mountOnEnter,
    unmountOnExit,
    children: [(0, import_jsx_runtime120.jsx)(Nav_default2, {
      ...controlledProps,
      role: "tablist",
      as: "ul",
      variant,
      children: map(children, renderTab)
    }), (0, import_jsx_runtime120.jsx)(TabContent_default, {
      children: map(children, (child) => {
        const childProps = {
          ...child.props
        };
        delete childProps.title;
        delete childProps.disabled;
        delete childProps.tabClassName;
        delete childProps.tabAttrs;
        return (0, import_jsx_runtime120.jsx)(TabPane_default, {
          ...childProps
        });
      })
    })]
  });
};
Tabs2.displayName = "Tabs";
var Tabs_default2 = Tabs2;

// node_modules/react-bootstrap/esm/ToggleButton.js
var import_classnames86 = __toESM(require_classnames());
var React118 = __toESM(require_react());
var import_jsx_runtime122 = __toESM(require_jsx_runtime());
var import_jsx_runtime123 = __toESM(require_jsx_runtime());
var import_jsx_runtime124 = __toESM(require_jsx_runtime());
var noop4 = () => void 0;
var ToggleButton = React118.forwardRef(({
  bsPrefix,
  name,
  className,
  checked,
  type,
  onChange,
  value,
  disabled,
  id,
  inputRef,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "btn-check");
  return (0, import_jsx_runtime124.jsxs)(import_jsx_runtime123.Fragment, {
    children: [(0, import_jsx_runtime122.jsx)("input", {
      className: bsPrefix,
      name,
      type,
      value,
      ref: inputRef,
      autoComplete: "off",
      checked: !!checked,
      disabled: !!disabled,
      onChange: onChange || noop4,
      id
    }), (0, import_jsx_runtime122.jsx)(Button_default2, {
      ...props,
      ref,
      className: (0, import_classnames86.default)(className, disabled && "disabled"),
      type: void 0,
      role: void 0,
      as: "label",
      htmlFor: id
    })]
  });
});
ToggleButton.displayName = "ToggleButton";
var ToggleButton_default = ToggleButton;

// node_modules/react-bootstrap/esm/ToggleButtonGroup.js
var React119 = __toESM(require_react());
var import_invariant2 = __toESM(require_browser());
var import_jsx_runtime125 = __toESM(require_jsx_runtime());
var ToggleButtonGroup = React119.forwardRef((props, ref) => {
  const {
    children,
    type = "radio",
    name,
    value,
    onChange,
    vertical = false,
    ...controlledProps
  } = useUncontrolled(props, {
    value: "onChange"
  });
  const getValues = () => value == null ? [] : [].concat(value);
  const handleToggle = (inputVal, event) => {
    if (!onChange) {
      return;
    }
    const values = getValues();
    const isActive = values.indexOf(inputVal) !== -1;
    if (type === "radio") {
      if (!isActive)
        onChange(inputVal, event);
      return;
    }
    if (isActive) {
      onChange(values.filter((n) => n !== inputVal), event);
    } else {
      onChange([...values, inputVal], event);
    }
  };
  !(type !== "radio" || !!name) ? true ? (0, import_invariant2.default)(false, 'A `name` is required to group the toggle buttons when the `type` is set to "radio"') : (0, import_invariant2.default)(false) : void 0;
  return (0, import_jsx_runtime125.jsx)(ButtonGroup_default, {
    ...controlledProps,
    ref,
    vertical,
    children: map(children, (child) => {
      const values = getValues();
      const {
        value: childVal,
        onChange: childOnChange
      } = child.props;
      const handler = (e) => handleToggle(childVal, e);
      return React119.cloneElement(child, {
        type,
        name: child.name || name,
        checked: values.indexOf(childVal) !== -1,
        onChange: createChainedFunction_default(childOnChange, handler)
      });
    })
  });
});
var ToggleButtonGroup_default = Object.assign(ToggleButtonGroup, {
  Button: ToggleButton_default
});
export {
  Accordion_default as Accordion,
  AccordionButton_default as AccordionButton,
  AccordionCollapse_default as AccordionCollapse,
  AccordionContext_default as AccordionContext,
  AccordionHeader_default as AccordionHeader,
  AccordionItem_default as AccordionItem,
  Alert_default as Alert,
  AlertHeading_default as AlertHeading,
  AlertLink_default as AlertLink,
  Anchor_default2 as Anchor,
  Badge_default as Badge,
  Breadcrumb_default as Breadcrumb,
  BreadcrumbItem_default as BreadcrumbItem,
  Button_default2 as Button,
  ButtonGroup_default as ButtonGroup,
  ButtonToolbar_default as ButtonToolbar,
  Card_default as Card,
  CardBody_default as CardBody,
  CardFooter_default as CardFooter,
  CardGroup_default as CardGroup,
  CardHeader_default as CardHeader,
  CardImg_default as CardImg,
  CardImgOverlay_default as CardImgOverlay,
  CardLink_default as CardLink,
  CardSubtitle_default as CardSubtitle,
  CardText_default as CardText,
  CardTitle_default as CardTitle,
  Carousel_default as Carousel,
  CarouselCaption_default as CarouselCaption,
  CarouselItem_default as CarouselItem,
  CloseButton_default as CloseButton,
  Col_default as Col,
  Collapse_default as Collapse,
  Container_default as Container,
  Dropdown_default2 as Dropdown,
  DropdownButton_default as DropdownButton,
  DropdownDivider_default as DropdownDivider,
  DropdownHeader_default as DropdownHeader,
  DropdownItem_default2 as DropdownItem,
  DropdownItemText_default as DropdownItemText,
  DropdownMenu_default2 as DropdownMenu,
  DropdownToggle_default2 as DropdownToggle,
  Fade_default as Fade,
  Figure_default as Figure,
  FigureCaption_default as FigureCaption,
  FigureImage_default as FigureImage,
  FloatingLabel_default as FloatingLabel,
  Form_default as Form,
  FormCheck_default as FormCheck,
  FormControl_default as FormControl,
  FormFloating_default as FormFloating,
  FormGroup_default as FormGroup,
  FormLabel_default as FormLabel,
  FormSelect_default as FormSelect,
  FormText_default as FormText,
  Image_default as Image,
  InputGroup_default as InputGroup,
  ListGroup_default as ListGroup,
  ListGroupItem_default as ListGroupItem,
  Modal_default2 as Modal,
  ModalBody_default as ModalBody,
  ModalDialog_default as ModalDialog,
  ModalFooter_default as ModalFooter,
  ModalHeader_default as ModalHeader,
  ModalTitle_default as ModalTitle,
  Nav_default2 as Nav,
  NavDropdown_default as NavDropdown,
  NavItem_default2 as NavItem,
  NavLink_default as NavLink,
  Navbar_default as Navbar,
  NavbarBrand_default as NavbarBrand,
  NavbarCollapse_default as NavbarCollapse,
  NavbarOffcanvas_default as NavbarOffcanvas,
  NavbarText_default as NavbarText,
  NavbarToggle_default as NavbarToggle,
  Offcanvas_default as Offcanvas,
  OffcanvasBody_default as OffcanvasBody,
  OffcanvasHeader_default as OffcanvasHeader,
  OffcanvasTitle_default as OffcanvasTitle,
  OffcanvasToggling_default as OffcanvasToggling,
  Overlay_default as Overlay,
  OverlayTrigger_default as OverlayTrigger,
  PageItem_default as PageItem,
  Pagination_default as Pagination,
  Placeholder_default as Placeholder,
  PlaceholderButton_default as PlaceholderButton,
  Popover_default as Popover,
  PopoverBody_default as PopoverBody,
  PopoverHeader_default as PopoverHeader,
  ProgressBar_default as ProgressBar,
  Ratio_default as Ratio,
  Row_default as Row,
  SSRProvider_default as SSRProvider,
  Spinner_default as Spinner,
  SplitButton_default as SplitButton,
  Stack_default as Stack,
  Tab_default as Tab,
  TabContainer_default as TabContainer,
  TabContent_default as TabContent,
  TabPane_default as TabPane,
  Table_default as Table,
  Tabs_default2 as Tabs,
  ThemeProvider_default as ThemeProvider,
  Toast_default as Toast,
  ToastBody_default as ToastBody,
  ToastContainer_default as ToastContainer,
  ToastHeader_default as ToastHeader,
  ToggleButton_default as ToggleButton,
  ToggleButtonGroup_default as ToggleButtonGroup,
  Tooltip_default as Tooltip,
  useAccordionButton
};
//# sourceMappingURL=react-bootstrap.js.map
