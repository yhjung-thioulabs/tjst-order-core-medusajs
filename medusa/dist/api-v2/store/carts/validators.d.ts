import { FindParams } from "../../../types/common";
export declare class StoreGetCartsCartParams extends FindParams {
}
export declare class Item {
    variant_id: string;
    quantity: number;
}
export declare class StorePostCartReq {
    region_id?: string;
    customer_id?: string;
    email?: string;
    currency_code?: string;
    items?: Item[];
    sales_channel_id?: string;
    metadata?: Record<string, unknown>;
}
