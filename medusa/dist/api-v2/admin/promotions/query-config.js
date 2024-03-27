"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.listTransformQueryConfig = exports.retrieveTransformQueryConfig = exports.defaultAdminPromotionFields = exports.allowedAdminPromotionRelations = exports.defaultAdminPromotionRelations = void 0;
exports.defaultAdminPromotionRelations = ["campaign", "application_method"];
exports.allowedAdminPromotionRelations = __spreadArray([], __read(exports.defaultAdminPromotionRelations), false);
exports.defaultAdminPromotionFields = [
    "id",
    "code",
    "campaign",
    "is_automatic",
    "type",
    "created_at",
    "updated_at",
    "deleted_at",
];
exports.retrieveTransformQueryConfig = {
    defaultFields: exports.defaultAdminPromotionFields,
    defaultRelations: exports.defaultAdminPromotionRelations,
    allowedRelations: exports.allowedAdminPromotionRelations,
    isList: false,
};
exports.listTransformQueryConfig = __assign(__assign({}, exports.retrieveTransformQueryConfig), { isList: true });
//# sourceMappingURL=query-config.js.map