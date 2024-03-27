import { ShippingOptionDTO } from "./shipping-option";
export interface FulfillmentProviderDTO {
    id: string;
    name: string;
    metadata: Record<string, unknown> | null;
    shipping_options: ShippingOptionDTO[];
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
}
//# sourceMappingURL=fulfillment-provider.d.ts.map