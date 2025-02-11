"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maybeUnsetDefaultBillingAddressesStep = exports.maybeUnsetDefaultBillingAddressesStepId = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const modules_sdk_1 = require("@medusajs/modules-sdk");
const utils_1 = require("./utils");
const utils_2 = require("@medusajs/utils");
exports.maybeUnsetDefaultBillingAddressesStepId = "maybe-unset-default-billing-customer-addresses";
exports.maybeUnsetDefaultBillingAddressesStep = (0, workflows_sdk_1.createStep)(exports.maybeUnsetDefaultBillingAddressesStepId, async (data, { container }) => {
    const customerModuleService = container.resolve(modules_sdk_1.ModuleRegistrationName.CUSTOMER);
    if ((0, utils_2.isDefined)(data.create)) {
        return (0, utils_1.unsetForCreate)(data.create, customerModuleService, "is_default_billing");
    }
    if ((0, utils_2.isDefined)(data.update)) {
        return (0, utils_1.unsetForUpdate)(data.update, customerModuleService, "is_default_billing");
    }
    throw new Error("Invalid step input");
}, async (addressesToSet, { container }) => {
    if (!addressesToSet?.length) {
        return;
    }
    const customerModuleService = container.resolve(modules_sdk_1.ModuleRegistrationName.CUSTOMER);
    await customerModuleService.updateAddresses({ id: addressesToSet }, { is_default_billing: true });
});
//# sourceMappingURL=maybe-unset-default-billing-addresses.js.map