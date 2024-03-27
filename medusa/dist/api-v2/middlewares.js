"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var middlewares_1 = require("./admin/campaigns/middlewares");
var middlewares_2 = require("./admin/customer-groups/middlewares");
var middlewares_3 = require("./store/customers/middlewares");
var middlewares_4 = require("./admin/customers/middlewares");
var middlewares_5 = require("./admin/promotions/middlewares");
var middlewares_6 = require("./store/carts/middlewares");
var middlewares_7 = require("./auth/middlewares");
exports.config = {
    routes: __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], __read(middlewares_2.adminCustomerGroupRoutesMiddlewares), false), __read(middlewares_4.adminCustomerRoutesMiddlewares), false), __read(middlewares_5.adminPromotionRoutesMiddlewares), false), __read(middlewares_1.adminCampaignRoutesMiddlewares), false), __read(middlewares_3.storeCustomerRoutesMiddlewares), false), __read(middlewares_6.storeCartRoutesMiddlewares), false), __read(middlewares_7.authRoutesMiddlewares), false),
};
//# sourceMappingURL=middlewares.js.map