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
var medusa_core_utils_1 = require("medusa-core-utils");
var medusa_telemetry_1 = require("medusa-telemetry");
var node_schedule_1 = require("node-schedule");
var loaders_1 = __importDefault(require("../loaders"));
var logger_1 = __importDefault(require("../loaders/logger"));
var EVERY_SIXTH_HOUR = "0 */6 * * *";
var CRON_SCHEDULE = EVERY_SIXTH_HOUR;
function default_1(_a) {
    var port = _a.port, directory = _a.directory;
    return __awaiter(this, void 0, void 0, function () {
        function start() {
            return __awaiter(this, void 0, void 0, function () {
                var app, dbConnection, serverActivity_1, server_1, gracefulShutDown, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            (0, medusa_telemetry_1.track)("CLI_START");
                            app = (0, express_1.default)();
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, (0, loaders_1.default)({ directory: directory, expressApp: app })];
                        case 2:
                            dbConnection = (_a.sent()).dbConnection;
                            serverActivity_1 = logger_1.default.activity("Creating server");
                            server_1 = medusa_core_utils_1.GracefulShutdownServer.create(app.listen(port, function (err) {
                                if (err) {
                                    return;
                                }
                                logger_1.default.success(serverActivity_1, "Server is ready on port: ".concat(port));
                                (0, medusa_telemetry_1.track)("CLI_START_COMPLETED");
                            }));
                            gracefulShutDown = function () {
                                server_1
                                    .shutdown()
                                    .then(function () {
                                    logger_1.default.info("Gracefully stopping the server.");
                                    process.exit(0);
                                })
                                    .catch(function (e) {
                                    logger_1.default.error("Error received when shutting down the server.", e);
                                    process.exit(1);
                                });
                            };
                            process.on("SIGTERM", gracefulShutDown);
                            process.on("SIGINT", gracefulShutDown);
                            (0, node_schedule_1.scheduleJob)(CRON_SCHEDULE, function () {
                                (0, medusa_telemetry_1.track)("PING");
                            });
                            return [2 /*return*/, { dbConnection: dbConnection, server: server_1 }];
                        case 3:
                            err_1 = _a.sent();
                            logger_1.default.error("Error starting server", err_1);
                            process.exit(1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, start()];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=start.js.map