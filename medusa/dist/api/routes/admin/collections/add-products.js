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
exports.AdminPostProductsToCollectionReq = void 0;
var class_validator_1 = require("class-validator");
var index_1 = require("./index");
/**
 * @oas [post] /admin/collections/{id}/products/batch
 * operationId: "PostProductsToCollection"
 * summary: "Add Products to Collection"
 * description: "Add products to a product collection."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the product collection.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostProductsToCollectionReq"
 * x-codegen:
 *   method: addProducts
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.collections.addProducts(collectionId, {
 *         product_ids: [
 *           productId1,
 *           productId2
 *         ]
 *       })
 *       .then(({ collection }) => {
 *         console.log(collection.products)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminAddProductsToCollection } from "medusa-react"
 *
 *       type Props = {
 *         collectionId: string
 *       }
 *
 *       const Collection = ({ collectionId }: Props) => {
 *         const addProducts = useAdminAddProductsToCollection(collectionId)
 *         // ...
 *
 *         const handleAddProducts = (productIds: string[]) => {
 *           addProducts.mutate({
 *             product_ids: productIds
 *           }, {
 *             onSuccess: ({ collection }) => {
 *               console.log(collection.products)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Collection
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/collections/{id}/products/batch' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "product_ids": [
 *               "prod_01G1G5V2MBA328390B5AXJ610F"
 *           ]
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Product Collections
 * responses:
 *  "200":
 *    description: OK
 *    content:
 *      application/json:
 *        schema:
 *          $ref: "#/components/schemas/AdminCollectionsRes"
 *  "400":
 *    $ref: "#/components/responses/400_error"
 *  "401":
 *    $ref: "#/components/responses/unauthorized"
 *  "404":
 *    $ref: "#/components/responses/not_found_error"
 *  "409":
 *    $ref: "#/components/responses/invalid_state_error"
 *  "422":
 *    $ref: "#/components/responses/invalid_request_error"
 *  "500":
 *    $ref: "#/components/responses/500_error"
 */
exports.default = (function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, validatedBody, productCollectionService, manager, updated, collection;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                validatedBody = req.validatedBody;
                productCollectionService = req.scope.resolve("productCollectionService");
                manager = req.scope.resolve("manager");
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, productCollectionService
                                        .withTransaction(transactionManager)
                                        .addProducts(id, validatedBody.product_ids)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            case 1:
                updated = _a.sent();
                return [4 /*yield*/, productCollectionService.retrieve(updated.id, {
                        relations: index_1.defaultAdminCollectionsRelations,
                    })];
            case 2:
                collection = _a.sent();
                res.status(200).json({ collection: collection });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @schema AdminPostProductsToCollectionReq
 * type: object
 * description: "The details of the products to add to the collection."
 * required:
 *   - product_ids
 * properties:
 *   product_ids:
 *     description: "An array of Product IDs to add to the Product Collection."
 *     type: array
 *     items:
 *       description: "The ID of a Product to add to the Product Collection."
 *       type: string
 */
var AdminPostProductsToCollectionReq = /** @class */ (function () {
    function AdminPostProductsToCollectionReq() {
    }
    __decorate([
        (0, class_validator_1.ArrayNotEmpty)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Array)
    ], AdminPostProductsToCollectionReq.prototype, "product_ids", void 0);
    return AdminPostProductsToCollectionReq;
}());
exports.AdminPostProductsToCollectionReq = AdminPostProductsToCollectionReq;
//# sourceMappingURL=add-products.js.map