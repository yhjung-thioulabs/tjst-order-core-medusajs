export interface CreateFulfillmentAddressDTO {
    fulfillment_id: string;
    company?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    address_1?: string | null;
    address_2?: string | null;
    city?: string | null;
    country_code?: string | null;
    province?: string | null;
    postal_code?: string | null;
    phone?: string | null;
    metadata?: Record<string, unknown> | null;
}
//# sourceMappingURL=fulfillment-address.d.ts.map