import { CartWorkflow } from "@medusajs/types";
import { WorkflowArguments } from "@medusajs/workflows-sdk";
type HandlerInputData = {
    line_items: {
        items?: CartWorkflow.CreateLineItemInputDTO[];
    };
    cart: {
        id: string;
        customer_id: string;
        region_id: string;
    };
};
declare enum Aliases {
    LineItems = "line_items",
    Cart = "cart"
}
export declare function attachLineItemsToCart({ container, context, data, }: WorkflowArguments<HandlerInputData>): Promise<void>;
export declare namespace attachLineItemsToCart {
    var aliases: typeof Aliases;
}
export {};
