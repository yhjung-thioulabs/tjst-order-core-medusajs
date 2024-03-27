"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachCartToSalesChannel = void 0;
const utils_1 = require("@medusajs/utils");
const modules_sdk_1 = require("@medusajs/modules-sdk");
var Aliases;
(function (Aliases) {
    Aliases["Cart"] = "cart";
    Aliases["SalesChannel"] = "sales_channel";
})(Aliases || (Aliases = {}));
async function attachCartToSalesChannel({ container, data, }) {
    const featureFlagRouter = container.resolve("featureFlagRouter");
    const remoteLink = container.resolve("remoteLink");
    if (!featureFlagRouter.isFeatureEnabled(utils_1.MedusaV2Flag.key)) {
        return;
    }
    const cart = data[Aliases.Cart];
    const salesChannel = data[Aliases.SalesChannel];
    await remoteLink.create({
        [modules_sdk_1.Modules.CART]: {
            cart_id: cart.id,
        },
        [modules_sdk_1.Modules.SALES_CHANNEL]: {
            sales_channel_id: salesChannel.sales_channel_id,
        },
    });
}
exports.attachCartToSalesChannel = attachCartToSalesChannel;
attachCartToSalesChannel.aliases = Aliases;
//# sourceMappingURL=attach-cart-to-sales-channel.js.map