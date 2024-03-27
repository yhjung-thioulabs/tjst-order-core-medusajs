"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCartsWorkflow = exports.createCartsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.createCartsWorkflowId = "create-carts";
exports.createCartsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createCartsWorkflowId, (input) => {
    return (0, steps_1.createCartsStep)(input.cartData);
});
//# sourceMappingURL=create-carts.js.map