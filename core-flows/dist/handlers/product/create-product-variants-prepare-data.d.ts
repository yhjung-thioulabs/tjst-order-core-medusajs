import { ProductWorkflow, WorkflowTypes } from "@medusajs/types";
import { WorkflowArguments } from "@medusajs/workflows-sdk";
type VariantPrice = {
    region_id?: string;
    currency_code?: string;
    amount: number;
    min_quantity?: number;
    max_quantity?: number;
};
export type CreateProductVariantsPreparedData = {
    productVariants: ProductWorkflow.CreateProductVariantsInputDTO[];
    variantIndexPricesMap: Map<number, VariantPrice[]>;
    productVariantsMap: Map<string, ProductWorkflow.CreateProductVariantsInputDTO[]>;
};
export declare function createProductVariantsPrepareData({ container, data, }: WorkflowArguments<WorkflowTypes.ProductWorkflow.CreateProductVariantsWorkflowInputDTO>): Promise<CreateProductVariantsPreparedData>;
export declare namespace createProductVariantsPrepareData {
    var aliases: {
        payload: string;
    };
}
export {};
