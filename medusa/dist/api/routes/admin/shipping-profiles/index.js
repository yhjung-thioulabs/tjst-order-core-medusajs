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
exports.defaultAdminShippingProfilesRelations = exports.defaultAdminShippingProfilesFields = void 0;
var express_1 = require("express");
require("reflect-metadata");
var middlewares_1 = __importDefault(require("../../../middlewares"));
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/shipping-profiles", route);
    route.get("/", middlewares_1.default.wrap(require("./list-shipping-profiles").default));
    route.post("/", middlewares_1.default.wrap(require("./create-shipping-profile").default));
    route.get("/:profile_id", middlewares_1.default.wrap(require("./get-shipping-profile").default));
    route.post("/:profile_id", middlewares_1.default.wrap(require("./update-shipping-profile").default));
    route.delete("/:profile_id", middlewares_1.default.wrap(require("./delete-shipping-profile").default));
    return app;
});
exports.defaultAdminShippingProfilesFields = [
    "id",
    "name",
    "type",
    "created_at",
    "updated_at",
    "deleted_at",
    "metadata",
];
exports.defaultAdminShippingProfilesRelations = [
    "products.profiles",
    "shipping_options",
];
__exportStar(require("./create-shipping-profile"), exports);
__exportStar(require("./delete-shipping-profile"), exports);
__exportStar(require("./update-shipping-profile"), exports);
//# sourceMappingURL=index.js.map