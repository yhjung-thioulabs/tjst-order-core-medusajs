"use strict";
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
var _1 = require(".");
/**
 * @oas [post] /admin/returns/{id}/cancel
 * operationId: "PostReturnsReturnCancel"
 * summary: "Cancel a Return"
 * description: "Registers a Return as canceled. The return can be associated with an order, claim, or swap."
 * parameters:
 *   - (path) id=* {string} The ID of the Return.
 * x-codegen:
 *   method: cancel
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.returns.cancel(returnId)
 *       .then(({ order }) => {
 *         console.log(order.id)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCancelReturn } from "medusa-react"
 *
 *       type Props = {
 *         returnId: string
 *       }
 *
 *       const Return = ({ returnId }: Props) => {
 *         const cancelReturn = useAdminCancelReturn(
 *           returnId
 *         )
 *         // ...
 *
 *         const handleCancel = () => {
 *           cancelReturn.mutate(void 0, {
 *             onSuccess: ({ order }) => {
 *               console.log(order.returns)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Return
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/returns/{id}/cancel' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Returns
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminReturnsCancelRes"
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
    var id, returnService, orderService, manager, result, swapService, claimService, order;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                returnService = req.scope.resolve("returnService");
                orderService = req.scope.resolve("orderService");
                manager = req.scope.resolve("manager");
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, returnService.withTransaction(transactionManager).cancel(id)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            case 1:
                result = _a.sent();
                if (!result.swap_id) return [3 /*break*/, 3];
                swapService = req.scope.resolve("swapService");
                return [4 /*yield*/, swapService.retrieve(result.swap_id)];
            case 2:
                result = _a.sent();
                return [3 /*break*/, 5];
            case 3:
                if (!result.claim_order_id) return [3 /*break*/, 5];
                claimService = req.scope.resolve("claimService");
                return [4 /*yield*/, claimService.retrieve(result.claim_order_id)];
            case 4:
                result = _a.sent();
                _a.label = 5;
            case 5: return [4 /*yield*/, orderService.retrieve(result.order_id, {
                    select: _1.defaultReturnCancelFields,
                    relations: _1.defaultReturnCancelRelations,
                })];
            case 6:
                order = _a.sent();
                res.status(200).json({ order: order });
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=cancel-return.js.map