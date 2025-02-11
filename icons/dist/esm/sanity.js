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
const Sanity = React.forwardRef(
  (props, ref) => {
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
          fill: "#F03E2F",
          d: "M6.545 6.482a4.309 4.309 0 0 1-.624-.51c-.685-.682-1.035-1.55-1.035-2.676v-.43C6.024 1.695 7.779 1 9.87 1c4.045 0 6.386 2.1 6.963 5.055h-3.67c-.404-1.165-1.417-2.073-3.263-2.073-1.817 0-3.102.957-3.355 2.5ZM4.512 3.296c0 2.427 1.526 3.872 4.58 4.633l3.236.737c2.891.653 4.65 2.273 4.65 4.913a4.957 4.957 0 0 1-1.077 3.18c0-2.634-1.387-4.058-4.732-4.913l-3.177-.71c-2.545-.57-4.508-1.902-4.508-4.77a4.934 4.934 0 0 1 1.028-3.07Zm9.373 10.067c-.22 1.676-1.57 2.621-3.524 2.621-1.735 0-3.036-.71-3.527-2.242H3.02C3.638 17.08 6.418 19 10.39 19c2.121 0 3.958-.652 5.138-1.83v-.412c0-1.245-.325-2.157-1.007-2.862a4.13 4.13 0 0 0-.635-.532v-.001Z"
        }
      )
    );
  }
);
Sanity.displayName = "Sanity";

export { Sanity as default };
//# sourceMappingURL=sanity.js.map
