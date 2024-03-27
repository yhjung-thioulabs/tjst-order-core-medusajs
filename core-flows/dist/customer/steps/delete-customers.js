"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomersStep = exports.deleteCustomersStepId = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const modules_sdk_1 = require("@medusajs/modules-sdk");
exports.deleteCustomersStepId = "delete-customers";
exports.deleteCustomersStep = (0, workflows_sdk_1.createStep)(exports.deleteCustomersStepId, async (ids, { container }) => {
    const service = container.resolve(modules_sdk_1.ModuleRegistrationName.CUSTOMER);
    await service.softDelete(ids);
    return new workflows_sdk_1.StepResponse(void 0, ids);
}, async (prevCustomerIds, { container }) => {
    if (!prevCustomerIds?.length) {
        return;
    }
    const service = container.resolve(modules_sdk_1.ModuleRegistrationName.CUSTOMER);
    await service.restore(prevCustomerIds);
});
//# sourceMappingURL=delete-customers.js.map