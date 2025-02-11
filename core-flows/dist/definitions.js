"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputAlias = exports.Workflows = void 0;
var Workflows;
(function (Workflows) {
    // Product workflows
    Workflows["CreateProducts"] = "create-products";
    Workflows["UpdateProducts"] = "update-products";
    // Product Variant workflows
    Workflows["CreateProductVariants"] = "create-product-variants";
    Workflows["UpdateProductVariants"] = "update-product-variants";
    // Cart workflows
    Workflows["CreateCart"] = "create-cart";
    Workflows["CreateInventoryItems"] = "create-inventory-items";
    // Price list workflows
    Workflows["CreatePriceList"] = "create-price-list";
    Workflows["UpdatePriceLists"] = "update-price-lists";
    Workflows["DeletePriceLists"] = "delete-price-lists";
    Workflows["RemovePriceListProductPrices"] = "remove-price-list-products";
    Workflows["RemovePriceListVariantPrices"] = "remove-price-list-variants";
    Workflows["RemovePriceListPrices"] = "remove-price-list-prices";
})(Workflows || (exports.Workflows = Workflows = {}));
var InputAlias;
(function (InputAlias) {
    InputAlias["Products"] = "products";
    InputAlias["ProductsInputData"] = "productsInputData";
    InputAlias["RemovedProducts"] = "removedProducts";
    InputAlias["ProductVariants"] = "productVariants";
    InputAlias["ProductVariantsUpdateInputData"] = "productVariantsUpdateInputData";
    InputAlias["ProductVariantsCreateInputData"] = "productVariantsCreateInputData";
    InputAlias["InventoryItems"] = "inventoryItems";
    InputAlias["RemovedInventoryItems"] = "removedInventoryItems";
    InputAlias["AttachedInventoryItems"] = "attachedInventoryItems";
    InputAlias["DetachedInventoryItems"] = "detachedInventoryItems";
    InputAlias["InventoryItemsInputData"] = "inventoryItemsInputData";
})(InputAlias || (exports.InputAlias = InputAlias = {}));
//# sourceMappingURL=definitions.js.map