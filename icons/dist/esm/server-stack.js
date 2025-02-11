/**
 * @medusajs/icons v1.2.1 - MIT
 */

import * as React from 'react';

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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
const ServerStack = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { color = "currentColor" } = _b, props = __objRest(_b, ["color"]);
    return /* @__PURE__ */ React.createElement(
      "svg",
      __spreadValues({
        xmlns: "http://www.w3.org/2000/svg",
        width: 20,
        height: 20,
        fill: "none",
        ref
      }, props),
      /* @__PURE__ */ React.createElement(
        "path",
        {
          stroke: color,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M4.375 11.875h11.25m-11.25 0a2.5 2.5 0 0 1-2.5-2.5m2.5 2.5a2.5 2.5 0 0 0 0 5h11.25a2.5 2.5 0 0 0 0-5m-13.75-2.5a2.5 2.5 0 0 1 2.5-2.5h11.25a2.5 2.5 0 0 1 2.5 2.5m-16.25 0c0-.811.263-1.6.75-2.25L4.781 4.25a2.813 2.813 0 0 1 2.25-1.125h5.938c.885 0 1.719.417 2.25 1.125l2.156 2.875c.487.65.75 1.439.75 2.25m0 0a2.5 2.5 0 0 1-2.5 2.5m0 2.5h.007v.007h-.007v-.007Zm0-5h.007v.007h-.007v-.007Zm-2.5 5h.007v.007h-.007v-.007Zm0-5h.007v.007h-.007v-.007Z"
        }
      )
    );
  }
);
ServerStack.displayName = "ServerStack";

export { ServerStack as default };
//# sourceMappingURL=server-stack.js.map
