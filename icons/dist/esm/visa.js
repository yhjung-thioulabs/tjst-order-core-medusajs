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
const Visa = React.forwardRef(
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
          fill: "#1A1F71",
          d: "m7.834 7.197-2.356 5.622H3.94L2.78 8.332c-.07-.276-.13-.378-.345-.494-.35-.19-.927-.367-1.435-.478l.034-.163H3.51a.678.678 0 0 1 .67.573l.613 3.253 1.513-3.826h1.528Zm6.025 3.786c.006-1.484-2.052-1.565-2.038-2.228.005-.202.197-.417.617-.471.492-.047.987.04 1.434.252l.255-1.193a3.906 3.906 0 0 0-1.36-.25c-1.438 0-2.45.765-2.459 1.86-.009.809.723 1.26 1.274 1.53.567.275.757.452.754.698-.004.378-.451.544-.87.55-.731.011-1.155-.197-1.494-.354l-.263 1.231c.34.156.967.292 1.617.298 1.528 0 2.527-.754 2.533-1.923Zm3.795 1.836H19l-1.174-5.622h-1.242a.662.662 0 0 0-.62.412l-2.181 5.21h1.527l.304-.84h1.866l.174.84Zm-1.622-1.992.765-2.111.441 2.11h-1.206Zm-6.12-3.63L8.71 12.819H7.255l1.204-5.622h1.453Z"
        }
      )
    );
  }
);
Visa.displayName = "Visa";

export { Visa as default };
//# sourceMappingURL=visa.js.map
