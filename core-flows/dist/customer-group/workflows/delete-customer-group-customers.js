"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomerGroupCustomersWorkflow = exports.deleteCustomerGroupCustomersWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const steps_1 = require("../steps");
exports.deleteCustomerGroupCustomersWorkflowId = "delete-customer-group-customers";
exports.deleteCustomerGroupCustomersWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteCustomerGroupCustomersWorkflowId, (input) => {
    return (0, steps_1.deleteCustomerGroupCustomersStep)(input.groupCustomers);
});
//# sourceMappingURL=delete-customer-group-customers.js.map