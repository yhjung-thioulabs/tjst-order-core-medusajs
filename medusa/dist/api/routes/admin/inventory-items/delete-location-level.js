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
var medusa_core_utils_1 = require("medusa-core-utils");
/**
 * @oas [delete] /admin/inventory-items/{id}/location-levels/{location_id}
 * operationId: "DeleteInventoryItemsInventoryIteLocationLevelsLocation"
 * summary: "Delete a Location Level"
 * description: "Delete a location level of an Inventory Item."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Inventory Item.
 *   - (path) location_id=* {string} The ID of the location.
 * x-codegen:
 *   method: deleteLocationLevel
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.inventoryItems.deleteLocationLevel(inventoryItemId, locationId)
 *       .then(({ inventory_item }) => {
 *         console.log(inventory_item.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminDeleteLocationLevel } from "medusa-react"
 *
 *       type Props = {
 *         inventoryItemId: string
 *       }
 *
 *       const InventoryItem = ({ inventoryItemId }: Props) => {
 *         const deleteLocationLevel = useAdminDeleteLocationLevel(
 *           inventoryItemId
 *         )
 *         // ...
 *
 *         const handleDelete = (
 *           locationId: string
 *         ) => {
 *           deleteLocationLevel.mutate(locationId)
 *         }
 *
 *         // ...
 *       }
 *
 *       export default InventoryItem
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X DELETE '{backend_url}/admin/inventory-items/{id}/location-levels/{location_id}' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Inventory Items
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminInventoryItemsRes"
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
    var _a, id, location_id, inventoryService, manager, reservedQuantity, inventoryItem;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.params, id = _a.id, location_id = _a.location_id;
                inventoryService = req.scope.resolve("inventoryService");
                manager = req.scope.resolve("manager");
                return [4 /*yield*/, inventoryService.retrieveReservedQuantity(id, [
                        location_id,
                    ])];
            case 1:
                reservedQuantity = _b.sent();
                if (reservedQuantity > 0) {
                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot remove Inventory Level ".concat(id, " at Location ").concat(location_id, " because there are reserved items."));
                }
                return [4 /*yield*/, inventoryService.deleteInventoryLevel(id, location_id)];
            case 2:
                _b.sent();
                return [4 /*yield*/, inventoryService.retrieveInventoryItem(id, req.retrieveConfig)];
            case 3:
                inventoryItem = _b.sent();
                res.status(200).json({ inventory_item: inventoryItem });
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=delete-location-level.js.map