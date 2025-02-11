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
require("core-js/stable");
require("regenerator-runtime/runtime");
var express_1 = __importDefault(require("express"));
var medusa_telemetry_1 = require("medusa-telemetry");
var loaders_1 = __importDefault(require("../loaders"));
var logger_1 = __importDefault(require("../loaders/logger"));
function default_1(_a) {
    var directory = _a.directory, id = _a.id, email = _a.email, password = _a.password, keepAlive = _a.keepAlive, invite = _a.invite;
    return __awaiter(this, void 0, void 0, function () {
        var app, container, inviteService, invite_1, userService, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    (0, medusa_telemetry_1.track)("CLI_USER", { with_id: !!id });
                    app = (0, express_1.default)();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 8, , 9]);
                    return [4 /*yield*/, (0, loaders_1.default)({
                            directory: directory,
                            expressApp: app,
                        })];
                case 2:
                    container = (_b.sent()).container;
                    if (!invite) return [3 /*break*/, 5];
                    inviteService = container.resolve("inviteService");
                    return [4 /*yield*/, inviteService.create(email, "admin")];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, inviteService.list({
                            user_email: email,
                        })];
                case 4:
                    invite_1 = _b.sent();
                    logger_1.default.info("\n      Invite token: ".concat(invite_1[0].token, "\n      Open the invite in Medusa Admin at: [your-admin-url]/invite?token=").concat(invite_1[0].token));
                    return [3 /*break*/, 7];
                case 5:
                    userService = container.resolve("userService");
                    return [4 /*yield*/, userService.create({ id: id, email: email }, password)];
                case 6:
                    _b.sent();
                    _b.label = 7;
                case 7: return [3 /*break*/, 9];
                case 8:
                    err_1 = _b.sent();
                    console.error(err_1);
                    process.exit(1);
                    return [3 /*break*/, 9];
                case 9:
                    (0, medusa_telemetry_1.track)("CLI_USER_COMPLETED", { with_id: !!id });
                    if (!keepAlive) {
                        process.exit();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=user.js.map