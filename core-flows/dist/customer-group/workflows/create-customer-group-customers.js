"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomerGroupCustomersWorkflow = exports.createCustomerGroupCustomersWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.createCustomerGroupCustomersWorkflowId = "create-customer-group-customers";
exports.createCustomerGroupCustomersWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.createCustomerGroupCustomersWorkflowId, (input) => {
    return (0, steps_1.createCustomerGroupCustomersStep)(input.groupCustomers);
});
//# sourceMappingURL=create-customer-group-customers.js.map