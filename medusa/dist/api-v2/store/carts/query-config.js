"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultStoreCartRemoteQueryObject = exports.retrieveTransformQueryConfig = exports.defaultStoreCartRelations = exports.defaultStoreCartFields = void 0;
exports.defaultStoreCartFields = [
    "id",
    "currency_code",
    "email",
    "created_at",
    "updated_at",
    "deleted_at",
];
exports.defaultStoreCartRelations = [
    "items",
    "shipping_address",
    "billing_address",
    "shipping_methods",
];
exports.retrieveTransformQueryConfig = {
    defaultFields: exports.defaultStoreCartFields,
    defaultRelations: exports.defaultStoreCartRelations,
    isList: false,
};
exports.defaultStoreCartRemoteQueryObject = {
    fields: exports.defaultStoreCartFields,
    items: {
        fields: [
            "id",
            "created_at",
            "updated_at",
            "deleted_at",
            "title",
            "quantity",
            "unit_price",
        ],
    },
    shipping_address: {
        fields: [
            "id",
            "first_name",
            "last_name",
            "address_1",
            "address_2",
            "city",
            "postal_code",
            "country_code",
            "region_code",
            "phone",
        ],
    },
    billing_address: {
        fields: [
            "id",
            "first_name",
            "last_name",
            "address_1",
            "address_2",
            "city",
            "postal_code",
            "country_code",
            "region_code",
            "phone",
        ],
    },
};
//# sourceMappingURL=query-config.js.map