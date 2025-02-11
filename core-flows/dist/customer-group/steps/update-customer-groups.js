"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCustomerGroupsStep = exports.updateCustomerGroupStepId = void 0;
const modules_sdk_1 = require("@medusajs/modules-sdk");
const utils_1 = require("@medusajs/utils");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
exports.updateCustomerGroupStepId = "update-customer-groups";
exports.updateCustomerGroupsStep = (0, workflows_sdk_1.createStep)(exports.updateCustomerGroupStepId, async (data, { container }) => {
    const service = container.resolve(modules_sdk_1.ModuleRegistrationName.CUSTOMER);
    const { selects, relations } = (0, utils_1.getSelectsAndRelationsFromObjectArray)([
        data.update,
    ]);
    const prevCustomerGroups = await service.listCustomerGroups(data.selector, {
        select: selects,
        relations,
    });
    const customers = await service.updateCustomerGroups(data.selector, data.update);
    return new workflows_sdk_1.StepResponse(customers, prevCustomerGroups);
}, async (prevCustomerGroups, { container }) => {
    if (!prevCustomerGroups) {
        return;
    }
    const service = container.resolve(modules_sdk_1.ModuleRegistrationName.CUSTOMER);
    await (0, utils_1.promiseAll)(prevCustomerGroups.map((c) => service.updateCustomerGroups(c.id, {
        name: c.name,
    })));
});
//# sourceMappingURL=update-customer-groups.js.map