import { CartDTO, CreateCartDTO } from "@medusajs/types";
type WorkflowInput = {
    cartData: CreateCartDTO[];
};
export declare const createCartsWorkflowId = "create-carts";
export declare const createCartsWorkflow: import("@medusajs/workflows-sdk").ReturnWorkflow<WorkflowInput, CartDTO[], Record<string, Function>>;
export {};
