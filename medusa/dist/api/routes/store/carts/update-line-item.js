"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorePostCartsCartLineItemsItemReq = void 0;
var class_validator_1 = require("class-validator");
var _1 = require(".");
var medusa_core_utils_1 = require("medusa-core-utils");
var clean_response_data_1 = require("../../../../utils/clean-response-data");
/**
 * @oas [post] /store/carts/{id}/line-items/{line_id}
 * operationId: PostCartsCartLineItemsItem
 * summary: Update a Line Item
 * description: "Update a line item's quantity."
 * parameters:
 *   - (path) id=* {string} The ID of the Cart.
 *   - (path) line_id=* {string} The ID of the Line Item.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostCartsCartLineItemsItemReq"
 * x-codegen:
 *   method: updateLineItem
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.carts.lineItems.update(cartId, lineId, {
 *         quantity: 1
 *       })
 *       .then(({ cart }) => {
 *         console.log(cart.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useUpdateLineItem } from "medusa-react"
 *
 *       type Props = {
 *         cartId: string
 *       }
 *
 *       const Cart = ({ cartId }: Props) => {
 *         const updateLineItem = useUpdateLineItem(cartId)
 *
 *         const handleUpdateItem = (
 *           lineItemId: string,
 *           quantity: number
 *         ) => {
 *           updateLineItem.mutate({
 *             lineId: lineItemId,
 *             quantity,
 *           }, {
 *             onSuccess: ({ cart }) => {
 *               console.log(cart.items)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Cart
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/store/carts/{id}/line-items/{line_id}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "quantity": 1
 *       }'
 * tags:
 *   - Carts
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreCartsRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
exports.default = (function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, line_id, validated, manager, cartService, productVariantInventoryService, data;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.params, id = _a.id, line_id = _a.line_id;
                validated = req.validatedBody;
                manager = req.scope.resolve("manager");
                cartService = req.scope.resolve("cartService");
                productVariantInventoryService = req.scope.resolve("productVariantInventoryService");
                return [4 /*yield*/, manager.transaction(function (m) { return __awaiter(void 0, void 0, void 0, function () {
                        var cart, existing, lineItemUpdate, updated;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!(validated.quantity === 0)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, cartService.withTransaction(m).removeLineItem(id, line_id)];
                                case 1:
                                    _b.sent();
                                    return [3 /*break*/, 5];
                                case 2: return [4 /*yield*/, cartService.withTransaction(m).retrieve(id, {
                                        relations: ["items", "items.variant", "shipping_methods"],
                                    })];
                                case 3:
                                    cart = _b.sent();
                                    existing = cart.items.find(function (i) { return i.id === line_id; });
                                    if (!existing) {
                                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Could not find the line item");
                                    }
                                    lineItemUpdate = {
                                        variant_id: existing.variant.id,
                                        region_id: cart.region_id,
                                        quantity: validated.quantity,
                                        metadata: validated.metadata || {},
                                        should_calculate_prices: true,
                                    };
                                    return [4 /*yield*/, cartService
                                            .withTransaction(m)
                                            .updateLineItem(id, line_id, lineItemUpdate)];
                                case 4:
                                    _b.sent();
                                    _b.label = 5;
                                case 5: return [4 /*yield*/, cartService.withTransaction(m).retrieve(id, {
                                        relations: ["payment_sessions"],
                                    })];
                                case 6:
                                    updated = _b.sent();
                                    if (!((_a = updated.payment_sessions) === null || _a === void 0 ? void 0 : _a.length)) return [3 /*break*/, 8];
                                    return [4 /*yield*/, cartService.withTransaction(m).setPaymentSessions(id)];
                                case 7:
                                    _b.sent();
                                    _b.label = 8;
                                case 8: return [2 /*return*/];
                            }
                        });
                    }); })];
            case 1:
                _b.sent();
                return [4 /*yield*/, cartService.retrieveWithTotals(id, {
                        select: _1.defaultStoreCartFields,
                        relations: _1.defaultStoreCartRelations,
                    })];
            case 2:
                data = _b.sent();
                return [4 /*yield*/, productVariantInventoryService.setVariantAvailability(data.items.map(function (i) { return i.variant; }), data.sales_channel_id)];
            case 3:
                _b.sent();
                res.status(200).json({ cart: (0, clean_response_data_1.cleanResponseData)(data, []) });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @schema StorePostCartsCartLineItemsItemReq
 * type: object
 * description: "The details to update of the line item."
 * required:
 *   - quantity
 * properties:
 *   quantity:
 *     type: number
 *     description: The quantity of the line item in the cart.
 *   metadata:
 *     type: object
 *     description: An optional key-value map with additional details about the Line Item. If omitted, the metadata will remain unchanged."
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
var StorePostCartsCartLineItemsItemReq = /** @class */ (function () {
    function StorePostCartsCartLineItemsItemReq() {
    }
    __decorate([
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Number)
    ], StorePostCartsCartLineItemsItemReq.prototype, "quantity", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], StorePostCartsCartLineItemsItemReq.prototype, "metadata", void 0);
    return StorePostCartsCartLineItemsItemReq;
}());
exports.StorePostCartsCartLineItemsItemReq = StorePostCartsCartLineItemsItemReq;
//# sourceMappingURL=update-line-item.js.map