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
exports.AdminPostPublishableApiKeysReq = void 0;
var class_validator_1 = require("class-validator");
/**
 * @oas [post] /admin/publishable-api-keys
 * operationId: "PostPublishableApiKeys"
 * summary: "Create Publishable API Key"
 * description: "Create a Publishable API Key."
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostPublishableApiKeysReq"
 * x-authenticated: true
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.publishableApiKeys.create({
 *        title
 *       })
 *       .then(({ publishable_api_key }) => {
 *         console.log(publishable_api_key.id)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreatePublishableApiKey } from "medusa-react"
 *
 *       const CreatePublishableApiKey = () => {
 *         const createKey = useAdminCreatePublishableApiKey()
 *         // ...
 *
 *         const handleCreate = (title: string) => {
 *           createKey.mutate({
 *             title,
 *           }, {
 *             onSuccess: ({ publishable_api_key }) => {
 *               console.log(publishable_api_key.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CreatePublishableApiKey
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/publishable-api-keys' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "title": "Web API Key"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Publishable Api Keys
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminPublishableApiKeysRes"
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
    var publishableApiKeyService, manager, data, loggedInUserId, pubKey;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                publishableApiKeyService = req.scope.resolve("publishableApiKeyService");
                manager = req.scope.resolve("manager");
                data = req.validatedBody;
                loggedInUserId = ((_b = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : (_c = req.user) === null || _c === void 0 ? void 0 : _c.userId);
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, publishableApiKeyService
                                        .withTransaction(transactionManager)
                                        .create(data, { loggedInUserId: loggedInUserId })];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            case 1:
                pubKey = _d.sent();
                return [2 /*return*/, res.status(200).json({ publishable_api_key: pubKey })];
        }
    });
}); });
/**
 * @schema AdminPostPublishableApiKeysReq
 * type: object
 * description: "The details of the publishable API key to create."
 * required:
 *   - title
 * properties:
 *   title:
 *     description: The title of the publishable API key
 *     type: string
 */
var AdminPostPublishableApiKeysReq = /** @class */ (function () {
    function AdminPostPublishableApiKeysReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostPublishableApiKeysReq.prototype, "title", void 0);
    return AdminPostPublishableApiKeysReq;
}());
exports.AdminPostPublishableApiKeysReq = AdminPostPublishableApiKeysReq;
//# sourceMappingURL=create-publishable-api-key.js.map