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
exports.AdminDeletePriceListPricesPricesReq = void 0;
var utils_1 = require("@medusajs/utils");
var class_validator_1 = require("class-validator");
var validator_1 = require("../../../../utils/validator");
var core_flows_1 = require("@medusajs/core-flows");
/**
 * @oas [delete] /admin/price-lists/{id}/prices/batch
 * operationId: "DeletePriceListsPriceListPricesBatch"
 * summary: "Delete Prices"
 * description: "Delete a list of prices in a Price List"
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Price List
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminDeletePriceListPricesPricesReq"
 * x-codegen:
 *   method: deletePrices
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.priceLists.deletePrices(priceListId, {
 *         price_ids: [
 *           price_id
 *         ]
 *       })
 *       .then(({ ids, object, deleted }) => {
 *         console.log(ids.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminDeletePriceListPrices } from "medusa-react"
 *
 *       const PriceList = (
 *         priceListId: string
 *       ) => {
 *         const deletePrices = useAdminDeletePriceListPrices(priceListId)
 *         // ...
 *
 *         const handleDeletePrices = (priceIds: string[]) => {
 *           deletePrices.mutate({
 *             price_ids: priceIds
 *           }, {
 *             onSuccess: ({ ids, deleted, object }) => {
 *               console.log(ids)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default PriceList
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X DELETE '{backend_url}/admin/price-lists/{id}/prices/batch' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "price_ids": [
 *             "adasfa"
 *           ]
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Price Lists
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminPriceListDeleteBatchRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
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
    var id, validated, priceListService, featureFlagRouter, manager, isMedusaV2FlagEnabled, deletePriceListPricesWorkflow, input;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, (0, validator_1.validator)(AdminDeletePriceListPricesPricesReq, req.body)];
            case 1:
                validated = _a.sent();
                priceListService = req.scope.resolve("priceListService");
                featureFlagRouter = req.scope.resolve("featureFlagRouter");
                manager = req.scope.resolve("manager");
                isMedusaV2FlagEnabled = featureFlagRouter.isFeatureEnabled(utils_1.MedusaV2Flag.key);
                if (!isMedusaV2FlagEnabled) return [3 /*break*/, 3];
                deletePriceListPricesWorkflow = (0, core_flows_1.removePriceListPrices)(req.scope);
                input = {
                    price_list_id: id,
                    money_amount_ids: validated.price_ids,
                };
                return [4 /*yield*/, deletePriceListPricesWorkflow.run({
                        input: input,
                        context: {
                            manager: manager,
                        },
                    })];
            case 2:
                _a.sent();
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, priceListService
                                    .withTransaction(transactionManager)
                                    .deletePrices(id, validated.price_ids)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); })];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5:
                res.json({ ids: validated.price_ids, object: "money-amount", deleted: true });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @schema AdminDeletePriceListPricesPricesReq
 * type: object
 * description: "The details of the prices to delete."
 * properties:
 *   price_ids:
 *     description: The IDs of the prices to delete.
 *     type: array
 *     items:
 *       type: string
 */
var AdminDeletePriceListPricesPricesReq = /** @class */ (function () {
    function AdminDeletePriceListPricesPricesReq() {
    }
    __decorate([
        (0, class_validator_1.ArrayNotEmpty)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Array)
    ], AdminDeletePriceListPricesPricesReq.prototype, "price_ids", void 0);
    return AdminDeletePriceListPricesPricesReq;
}());
exports.AdminDeletePriceListPricesPricesReq = AdminDeletePriceListPricesPricesReq;
//# sourceMappingURL=delete-prices-batch.js.map