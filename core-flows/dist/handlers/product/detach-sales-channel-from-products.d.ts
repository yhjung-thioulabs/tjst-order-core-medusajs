import { WorkflowArguments } from "@medusajs/workflows-sdk";
type ProductHandle = string;
type SalesChannelId = string;
type PartialProduct = {
    handle: string;
    id: string;
};
type HandlerInput = {
    productsHandleSalesChannelsMap: Map<ProductHandle, SalesChannelId[]>;
    products: PartialProduct[];
};
export declare function detachSalesChannelFromProducts({ container, context, data, }: WorkflowArguments<HandlerInput>): Promise<void>;
export declare namespace detachSalesChannelFromProducts {
    var aliases: {
        products: string;
    };
}
export {};
