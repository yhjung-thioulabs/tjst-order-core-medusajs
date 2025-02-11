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
const Twitter = React.forwardRef(
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
          fill: "#1DA1F2",
          d: "M18.592 4.332a6.824 6.824 0 0 1-.87.317c.351-.397.62-.865.783-1.377a.29.29 0 0 0-.425-.339 6.851 6.851 0 0 1-2.025.8 3.883 3.883 0 0 0-2.704-1.102 3.868 3.868 0 0 0-3.833 4.364 9.893 9.893 0 0 1-6.79-3.602.29.29 0 0 0-.476.037 3.862 3.862 0 0 0-.523 1.943c0 .93.332 1.814.92 2.504a3.273 3.273 0 0 1-.518-.23.29.29 0 0 0-.43.247l-.001.051c0 1.39.748 2.641 1.891 3.323a3.379 3.379 0 0 1-.294-.042.29.29 0 0 0-.33.373 3.863 3.863 0 0 0 2.83 2.59 6.836 6.836 0 0 1-3.654 1.043c-.274 0-.55-.016-.819-.048a.29.29 0 0 0-.19.533 10.42 10.42 0 0 0 5.635 1.652c3.934 0 6.395-1.856 7.767-3.412 1.71-1.94 2.691-4.51 2.691-7.047 0-.106-.002-.213-.005-.32a7.513 7.513 0 0 0 1.729-1.83.29.29 0 0 0-.359-.428Z"
        }
      )
    );
  }
);
Twitter.displayName = "Twitter";

export { Twitter as default };
//# sourceMappingURL=twitter.js.map
