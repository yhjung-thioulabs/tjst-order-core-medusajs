"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminCustomerRoutesMiddlewares = void 0;
var middlewares_1 = require("../../../api/middlewares");
var QueryConfig = __importStar(require("./query-config"));
var validators_1 = require("./validators");
exports.adminCustomerRoutesMiddlewares = [
    {
        method: ["GET"],
        matcher: "/admin/customers",
        middlewares: [
            (0, middlewares_1.transformQuery)(validators_1.AdminGetCustomersParams, QueryConfig.listTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/customers",
        middlewares: [(0, middlewares_1.transformBody)(validators_1.AdminPostCustomersReq)],
    },
    {
        method: ["GET"],
        matcher: "/admin/customers/:id",
        middlewares: [
            (0, middlewares_1.transformQuery)(validators_1.AdminGetCustomersCustomerParams, QueryConfig.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/customers/:id",
        middlewares: [(0, middlewares_1.transformBody)(validators_1.AdminPostCustomersCustomerReq)],
    },
    {
        method: ["POST"],
        matcher: "/admin/customers/:id/addresses",
        middlewares: [(0, middlewares_1.transformBody)(validators_1.AdminPostCustomersCustomerAddressesReq)],
    },
    {
        method: ["POST"],
        matcher: "/admin/customers/:id/addresses/:address_id",
        middlewares: [(0, middlewares_1.transformBody)(validators_1.AdminPostCustomersCustomerAddressesAddressReq)],
    },
    {
        method: ["GET"],
        matcher: "/admin/customers/:id/addresses",
        middlewares: [
            (0, middlewares_1.transformQuery)(validators_1.AdminGetCustomersCustomerAddressesParams, QueryConfig.listAddressesTransformQueryConfig),
        ],
    },
];
//# sourceMappingURL=middlewares.js.map