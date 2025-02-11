"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCampaignsStep = exports.updateCampaignsStepId = void 0;
const modules_sdk_1 = require("@medusajs/modules-sdk");
const utils_1 = require("@medusajs/utils");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
exports.updateCampaignsStepId = "update-campaigns";
exports.updateCampaignsStep = (0, workflows_sdk_1.createStep)(exports.updateCampaignsStepId, async (data, { container }) => {
    const promotionModule = container.resolve(modules_sdk_1.ModuleRegistrationName.PROMOTION);
    const { selects, relations } = (0, utils_1.getSelectsAndRelationsFromObjectArray)(data);
    const dataBeforeUpdate = await promotionModule.listCampaigns({ id: data.map((d) => d.id) }, { relations, select: selects });
    const updatedCampaigns = await promotionModule.updateCampaigns(data);
    return new workflows_sdk_1.StepResponse(updatedCampaigns, dataBeforeUpdate);
}, async (dataBeforeUpdate, { container }) => {
    if (!dataBeforeUpdate) {
        return;
    }
    const promotionModule = container.resolve(modules_sdk_1.ModuleRegistrationName.PROMOTION);
    // TODO: This still requires some sanitation of data and transformation of
    // shapes for manytomany and oneToMany relations. Create a common util.
    await promotionModule.updateCampaigns(dataBeforeUpdate);
});
//# sourceMappingURL=update-campaigns.js.map