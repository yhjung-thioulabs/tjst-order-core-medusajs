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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAdminPostUploadsFileReq = void 0;
var utils_1 = require("@medusajs/utils");
var fs_1 = __importDefault(require("fs"));
/**
 * @oas [post] /admin/uploads
 * operationId: "PostUploads"
 * summary: "Upload Files"
 * description: "Upload at least one file to a public bucket or storage. The file upload is handled by the file service installed on the Medusa backend."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     multipart/form-data:
 *       schema:
 *         type: object
 *         properties:
 *           files:
 *             type: string
 *             format: binary
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.uploads.create(file)
 *       .then(({ uploads }) => {
 *         console.log(uploads.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUploadFile } from "medusa-react"
 *
 *       const UploadFile = () => {
 *         const uploadFile = useAdminUploadFile()
 *         // ...
 *
 *         const handleFileUpload = (file: File) => {
 *           uploadFile.mutate(file, {
 *             onSuccess: ({ uploads }) => {
 *               console.log(uploads[0].key)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default UploadFile
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/uploads' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: image/jpeg' \
 *       --form 'files=@"<FILE_PATH_1>"' \
 *       --form 'files=@"<FILE_PATH_1>"'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Uploads
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminUploadsRes"
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
    var fileService, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fileService = req.scope.resolve("fileService");
                return [4 /*yield*/, (0, utils_1.promiseAll)(req.files.map(function (f) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, fileService.upload(f).then(function (result) {
                                    fs_1.default.unlinkSync(f.path);
                                    return result;
                                })];
                        });
                    }); }))];
            case 1:
                result = _a.sent();
                res.status(200).json({ uploads: result });
                return [2 /*return*/];
        }
    });
}); });
var IAdminPostUploadsFileReq = /** @class */ (function () {
    function IAdminPostUploadsFileReq() {
    }
    return IAdminPostUploadsFileReq;
}());
exports.IAdminPostUploadsFileReq = IAdminPostUploadsFileReq;
//# sourceMappingURL=create-upload.js.map