"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCart = void 0;
const orchestration_1 = require("@medusajs/orchestration");
const definitions_1 = require("../../definitions");
const handlers_1 = require("../../handlers");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
var CreateCartActions;
(function (CreateCartActions) {
    CreateCartActions["setContext"] = "setContext";
    CreateCartActions["attachLineItems"] = "attachLineItems";
    CreateCartActions["attachToSalesChannel"] = "attachToSalesChannel";
    CreateCartActions["findRegion"] = "findRegion";
    CreateCartActions["findSalesChannel"] = "findSalesChannel";
    CreateCartActions["createCart"] = "createCart";
    CreateCartActions["findOrCreateAddresses"] = "findOrCreateAddresses";
    CreateCartActions["findOrCreateCustomer"] = "findOrCreateCustomer";
    CreateCartActions["removeCart"] = "removeCart";
    CreateCartActions["removeAddresses"] = "removeAddresses";
})(CreateCartActions || (CreateCartActions = {}));
const workflowAlias = "cart";
const getWorkflowInput = (alias = workflowAlias) => ({
    inputAlias: workflowAlias,
    invoke: {
        from: workflowAlias,
        alias,
    },
});
const workflowSteps = {
    next: [
        {
            action: CreateCartActions.findOrCreateCustomer,
            noCompensation: true,
        },
        {
            action: CreateCartActions.findSalesChannel,
            noCompensation: true,
        },
        {
            action: CreateCartActions.setContext,
            noCompensation: true,
        },
        {
            action: CreateCartActions.findRegion,
            noCompensation: true,
            next: {
                action: CreateCartActions.findOrCreateAddresses,
                noCompensation: true,
                next: {
                    action: CreateCartActions.createCart,
                    next: [
                        {
                            action: CreateCartActions.attachLineItems,
                            noCompensation: true,
                        },
                        { action: CreateCartActions.attachToSalesChannel },
                    ],
                },
            },
        },
    ],
};
const handlers = new Map([
    [
        CreateCartActions.findOrCreateCustomer,
        {
            invoke: (0, workflows_sdk_1.pipe)(getWorkflowInput(handlers_1.CustomerHandlers.findOrCreateCustomer.aliases.Customer), handlers_1.CustomerHandlers.findOrCreateCustomer),
        },
    ],
    [
        CreateCartActions.findSalesChannel,
        {
            invoke: (0, workflows_sdk_1.pipe)(getWorkflowInput(handlers_1.SalesChannelHandlers.findSalesChannel.aliases.SalesChannel), handlers_1.SalesChannelHandlers.findSalesChannel),
        },
    ],
    [
        CreateCartActions.setContext,
        {
            invoke: (0, workflows_sdk_1.pipe)(getWorkflowInput(handlers_1.CommonHandlers.setContext.aliases.Context), handlers_1.CommonHandlers.setContext),
        },
    ],
    [
        CreateCartActions.findRegion,
        {
            invoke: (0, workflows_sdk_1.pipe)(getWorkflowInput(handlers_1.RegionHandlers.findRegion.aliases.Region), handlers_1.RegionHandlers.findRegion),
        },
    ],
    [
        CreateCartActions.findOrCreateAddresses,
        {
            invoke: (0, workflows_sdk_1.pipe)({
                invoke: [
                    getWorkflowInput(handlers_1.AddressHandlers.findOrCreateAddresses.aliases.Addresses).invoke,
                    {
                        from: CreateCartActions.findRegion,
                        alias: handlers_1.AddressHandlers.findOrCreateAddresses.aliases.Region,
                    },
                ],
            }, handlers_1.AddressHandlers.findOrCreateAddresses),
        },
    ],
    [
        CreateCartActions.createCart,
        {
            invoke: (0, workflows_sdk_1.pipe)({
                invoke: [
                    {
                        from: CreateCartActions.findSalesChannel,
                        alias: handlers_1.CartHandlers.createCart.aliases.SalesChannel,
                    },
                    {
                        from: CreateCartActions.findRegion,
                        alias: handlers_1.CartHandlers.createCart.aliases.Region,
                    },
                    {
                        from: CreateCartActions.setContext,
                        alias: handlers_1.CartHandlers.createCart.aliases.Context,
                    },
                    {
                        from: CreateCartActions.findOrCreateCustomer,
                        alias: handlers_1.CartHandlers.createCart.aliases.Customer,
                    },
                    {
                        from: CreateCartActions.findOrCreateAddresses,
                        alias: handlers_1.CartHandlers.createCart.aliases.Addresses,
                    },
                ],
            }, handlers_1.CartHandlers.createCart),
            compensate: (0, workflows_sdk_1.pipe)({
                invoke: [
                    {
                        from: CreateCartActions.createCart,
                        alias: handlers_1.CartHandlers.removeCart.aliases.Cart,
                    },
                ],
            }, handlers_1.CartHandlers.removeCart),
        },
    ],
    [
        CreateCartActions.attachLineItems,
        {
            invoke: (0, workflows_sdk_1.pipe)({
                invoke: [
                    getWorkflowInput(handlers_1.CartHandlers.attachLineItemsToCart.aliases.LineItems).invoke,
                    {
                        from: CreateCartActions.createCart,
                        alias: handlers_1.CartHandlers.attachLineItemsToCart.aliases.Cart,
                    },
                ],
            }, handlers_1.CartHandlers.attachLineItemsToCart),
        },
    ],
    [
        CreateCartActions.attachToSalesChannel,
        {
            invoke: (0, workflows_sdk_1.pipe)({
                invoke: [
                    {
                        from: CreateCartActions.createCart,
                        alias: handlers_1.CartHandlers.attachCartToSalesChannel.aliases.Cart,
                    },
                    {
                        from: CreateCartActions.findSalesChannel,
                        alias: handlers_1.CartHandlers.attachCartToSalesChannel.aliases.SalesChannel,
                    },
                ],
            }, handlers_1.CartHandlers.attachCartToSalesChannel),
            compensate: (0, workflows_sdk_1.pipe)({
                invoke: [
                    {
                        from: CreateCartActions.findSalesChannel,
                        alias: handlers_1.CartHandlers.detachCartFromSalesChannel.aliases.SalesChannel,
                    },
                ],
            }, handlers_1.CartHandlers.detachCartFromSalesChannel),
        },
    ],
]);
orchestration_1.WorkflowManager.register(definitions_1.Workflows.CreateCart, workflowSteps, handlers);
exports.createCart = (0, workflows_sdk_1.exportWorkflow)(definitions_1.Workflows.CreateCart, CreateCartActions.createCart);
//# sourceMappingURL=create-cart.js.map