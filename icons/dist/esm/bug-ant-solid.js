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
const BugAntSolid = React.forwardRef(
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
          fill: color,
          fillRule: "evenodd",
          d: "M6.788 1.727a.7.7 0 0 1 .165.976 3.725 3.725 0 0 0-.433.803c.173.159.357.307.551.441A3.728 3.728 0 0 1 10 2.53c1.188 0 2.245.555 2.929 1.417.194-.134.378-.281.55-.441a3.72 3.72 0 0 0-.433-.803.7.7 0 0 1 1.141-.811c.345.484.607 1.031.768 1.62a.7.7 0 0 1-.163.66c-.36.39-.768.734-1.213 1.026.103.346.156.705.155 1.067 0 .485-.28.899-.675 1.108a6.501 6.501 0 0 1-1.08.454c.12.194.215.407.276.634a18.057 18.057 0 0 0 3.81-.897A18.349 18.349 0 0 0 15.98 5.4a.7.7 0 0 1 1.394-.136c.092.94.117 1.884.075 2.827a.7.7 0 0 1-.45.623 19.49 19.49 0 0 1-4.812 1.166c-.029.079-.062.156-.1.23 1.68.178 3.328.572 4.905 1.174a.7.7 0 0 1 .448.691 19.55 19.55 0 0 1-.847 4.768.701.701 0 0 1-1.338-.414c.388-1.251.645-2.561.753-3.912a17.588 17.588 0 0 0-1.412-.43c.047.264.071.536.071.814 0 1.694-.482 3.093-1.331 4.08A4.333 4.333 0 0 1 10 18.402a4.333 4.333 0 0 1-3.337-1.521c-.85-.99-1.331-2.388-1.331-4.08 0-.279.024-.551.07-.816-.478.125-.949.268-1.411.43a18.06 18.06 0 0 0 .752 3.913.7.7 0 1 1-1.338.414 19.55 19.55 0 0 1-.847-4.768.7.7 0 0 1 .45-.69A19.478 19.478 0 0 1 7.91 10.11a2.315 2.315 0 0 1-.1-.231 19.49 19.49 0 0 1-4.81-1.166.7.7 0 0 1-.45-.623 19.927 19.927 0 0 1 .074-2.827.7.7 0 1 1 1.394.136c-.07.72-.099 1.443-.084 2.166 1.215.429 2.49.733 3.81.896.06-.227.154-.44.276-.634a6.5 6.5 0 0 1-1.08-.454 1.259 1.259 0 0 1-.676-1.108c0-.362.052-.721.155-1.067a6.565 6.565 0 0 1-1.214-1.026.7.7 0 0 1-.161-.66c.158-.58.418-1.13.767-1.62a.7.7 0 0 1 .976-.165Z",
          clipRule: "evenodd"
        }
      )
    );
  }
);
BugAntSolid.displayName = "BugAntSolid";

export { BugAntSolid as default };
//# sourceMappingURL=bug-ant-solid.js.map
