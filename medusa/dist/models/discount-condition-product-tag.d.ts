import { DiscountCondition } from "./discount-condition";
import { ProductTag } from "./product-tag";
export declare class DiscountConditionProductTag {
    product_tag_id: string;
    condition_id: string;
    product_tag?: ProductTag;
    discount_condition?: DiscountCondition;
    created_at: Date;
    updated_at: Date;
    metadata: Record<string, unknown>;
}
/**
 * @schema DiscountConditionProductTag
 * title: "Product Tag Discount Condition"
 * description: "This represents the association between a discount condition and a product tag"
 * type: object
 * required:
 *   - condition_id
 *   - created_at
 *   - metadata
 *   - product_tag_id
 *   - updated_at
 * properties:
 *   product_tag_id:
 *     description: The ID of the Product Tag
 *     type: string
 *     example: ptag_01F0YESHPZYY3H4SJ3A5918SBN
 *   condition_id:
 *     description: The ID of the Discount Condition
 *     type: string
 *     example: discon_01G8X9A7ESKAJXG2H0E6F1MW7A
 *   product_tag:
 *     description: The details of the product tag.
 *     x-expandable: "product_tag"
 *     nullable: true
 *     $ref: "#/components/schemas/ProductTag"
 *   discount_condition:
 *     description: The details of the discount condition.
 *     x-expandable: "discount_condition"
 *     nullable: true
 *     $ref: "#/components/schemas/DiscountCondition"
 *   created_at:
 *     description: The date with timezone at which the resource was created.
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: The date with timezone at which the resource was updated.
 *     type: string
 *     format: date-time
 *   metadata:
 *     description: An optional key-value map with additional details
 *     nullable: true
 *     type: object
 *     example: {car: "white"}
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
