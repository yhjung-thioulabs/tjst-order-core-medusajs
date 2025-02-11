"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loaders = exports.service = void 0;
const loaders_1 = __importDefault(require("./loaders"));
const event_bus_local_1 = __importDefault(require("./services/event-bus-local"));
exports.service = event_bus_local_1.default;
exports.loaders = [loaders_1.default];
const moduleDefinition = {
    service: exports.service,
    loaders: exports.loaders,
};
exports.default = moduleDefinition;
__exportStar(require("./initialize"), exports);
//# sourceMappingURL=index.js.map