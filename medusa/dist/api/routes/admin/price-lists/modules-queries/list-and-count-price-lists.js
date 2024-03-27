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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAndCountPriceListPricingModule = void 0;
var index_1 = require("../index");
function listAndCountPriceListPricingModule(_a) {
    var filters = _a.filters, _b = _a.listConfig, listConfig = _b === void 0 ? { skip: 0 } : _b, container = _a.container;
    return __awaiter(this, void 0, void 0, function () {
        var remoteQuery, customerGroupService, query, _c, priceLists, count, customerGroupIds, priceListCustomerGroups, customerGroupIdCustomerGroupMap, _loop_1, priceLists_1, priceLists_1_1, priceList;
        var e_1, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    remoteQuery = container.resolve("remoteQuery");
                    customerGroupService = container.resolve("customerGroupService");
                    query = {
                        price_list: __assign({ __args: __assign({ filters: filters }, listConfig) }, index_1.defaultAdminPriceListRemoteQueryObject),
                    };
                    return [4 /*yield*/, remoteQuery(query)];
                case 1:
                    _c = _e.sent(), priceLists = _c.rows, count = _c.metadata.count;
                    if (!count) {
                        return [2 /*return*/, [[], 0]];
                    }
                    customerGroupIds = priceLists
                        .map(function (priceList) {
                        return priceList.price_list_rules
                            .filter(function (rule) { return rule.rule_type.rule_attribute === "customer_group_id"; })
                            .map(function (rule) {
                            return rule.price_list_rule_values.map(function (rule_value) { return rule_value.value; });
                        });
                    })
                        .flat(2);
                    return [4 /*yield*/, customerGroupService.list({ id: customerGroupIds }, {})];
                case 2:
                    priceListCustomerGroups = _e.sent();
                    customerGroupIdCustomerGroupMap = new Map(priceListCustomerGroups.map(function (customerGroup) { return [
                        customerGroup.id,
                        customerGroup,
                    ]; }));
                    _loop_1 = function (priceList) {
                        var priceSetMoneyAmounts = priceList.price_set_money_amounts || [];
                        var priceListRulesData = priceList.price_list_rules || [];
                        delete priceList.price_set_money_amounts;
                        delete priceList.price_list_rules;
                        priceList.prices = priceSetMoneyAmounts.map(function (priceSetMoneyAmount) {
                            var _a, _b;
                            var productVariant = priceSetMoneyAmount.price_set.variant_link.variant;
                            var rules = priceSetMoneyAmount.price_rules.reduce(function (acc, curr) {
                                acc[curr.rule_type.rule_attribute] = curr.value;
                                return acc;
                            }, {});
                            return __assign(__assign({}, priceSetMoneyAmount.money_amount), { price_list_id: priceList.id, variant_id: (_a = productVariant === null || productVariant === void 0 ? void 0 : productVariant.id) !== null && _a !== void 0 ? _a : null, variant: productVariant !== null && productVariant !== void 0 ? productVariant : null, region_id: (_b = rules["region_id"]) !== null && _b !== void 0 ? _b : null, rules: rules });
                        });
                        priceList.name = priceList.title;
                        delete priceList.title;
                        var customerGroupPriceListRule = priceListRulesData.find(function (plr) { return plr.rule_type.rule_attribute === "customer_group_id"; });
                        if (customerGroupPriceListRule &&
                            (customerGroupPriceListRule === null || customerGroupPriceListRule === void 0 ? void 0 : customerGroupPriceListRule.price_list_rule_values)) {
                            priceList.customer_groups =
                                customerGroupPriceListRule === null || customerGroupPriceListRule === void 0 ? void 0 : customerGroupPriceListRule.price_list_rule_values.map(function (customerGroupRule) {
                                    return customerGroupIdCustomerGroupMap.get(customerGroupRule.value);
                                }).filter(function (customerGroup) { return !!customerGroup; });
                        }
                        else {
                            priceList.customer_groups = [];
                        }
                    };
                    try {
                        for (priceLists_1 = __values(priceLists), priceLists_1_1 = priceLists_1.next(); !priceLists_1_1.done; priceLists_1_1 = priceLists_1.next()) {
                            priceList = priceLists_1_1.value;
                            _loop_1(priceList);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (priceLists_1_1 && !priceLists_1_1.done && (_d = priceLists_1.return)) _d.call(priceLists_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    return [2 /*return*/, [priceLists, count]];
            }
        });
    });
}
exports.listAndCountPriceListPricingModule = listAndCountPriceListPricingModule;
//# sourceMappingURL=list-and-count-price-lists.js.map