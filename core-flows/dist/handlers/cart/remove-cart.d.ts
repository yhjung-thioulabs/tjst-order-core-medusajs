import { WorkflowArguments } from "@medusajs/workflows-sdk";
declare enum Aliases {
    Cart = "cart"
}
type HandlerInputData = {
    cart: {
        id: string;
    };
};
export declare function removeCart({ container, context, data, }: WorkflowArguments<HandlerInputData>): Promise<void>;
export declare namespace removeCart {
    var aliases: typeof Aliases;
}
export {};
