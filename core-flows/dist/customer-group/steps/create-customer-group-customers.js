"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomerGroupCustomersStep = exports.createCustomerGroupCustomersStepId = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const modules_sdk_1 = require("@medusajs/modules-sdk");
exports.createCustomerGroupCustomersStepId = "create-customer-group-customers";
exports.createCustomerGroupCustomersStep = (0, workflows_sdk_1.createStep)(exports.createCustomerGroupCustomersStepId, async (data, { container }) => {
    const service = container.resolve(modules_sdk_1.ModuleRegistrationName.CUSTOMER);
    const groupPairs = await service.addCustomerToGroup(data);
    return new workflows_sdk_1.StepResponse(groupPairs, data);
}, async (groupPairs, { container }) => {
    if (!groupPairs?.length) {
        return;
    }
    const service = container.resolve(modules_sdk_1.ModuleRegistrationName.CUSTOMER);
    await service.removeCustomerFromGroup(groupPairs);
});
//# sourceMappingURL=create-customer-group-customers.js.map