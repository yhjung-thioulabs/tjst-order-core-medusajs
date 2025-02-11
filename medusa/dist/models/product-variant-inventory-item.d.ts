import { SoftDeletableEntity } from "../interfaces";
import { ProductVariant } from "./product-variant";
export declare class ProductVariantInventoryItem extends SoftDeletableEntity {
    inventory_item_id: string;
    variant_id: string;
    variant: ProductVariant;
    required_quantity: number;
    /**
     * @apiIgnore
     */
    private beforeInsert;
}
/**
 * @schema ProductVariantInventoryItem
 * title: "Product Variant Inventory Item"
 * description: "A Product Variant Inventory Item links variants with inventory items and denotes the required quantity of the variant."
 * type: object
 * required:
 *   - created_at
 *   - deleted_at
 *   - id
 *   - inventory_item_id
 *   - required_quantity
 *   - updated_at
 *   - variant_id
 * properties:
 *   id:
 *     description: The product variant inventory item's ID
 *     type: string
 *     example: pvitem_01G8X9A7ESKAJXG2H0E6F1MW7A
 *   inventory_item_id:
 *     description: The id of the inventory item
 *     type: string
 *   variant_id:
 *     description: The id of the variant.
 *     type: string
 *   variant:
 *     description: The details of the product variant.
 *     x-expandable: "variant"
 *     nullable: true
 *     $ref: "#/components/schemas/ProductVariant"
 *   required_quantity:
 *     description: The quantity of an inventory item required for the variant.
 *     type: integer
 *     default: 1
 *   created_at:
 *     description: The date with timezone at which the resource was created.
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: The date with timezone at which the resource was updated.
 *     type: string
 *     format: date-time
 *   deleted_at:
 *     description: The date with timezone at which the resource was deleted.
 *     nullable: true
 *     type: string
 *     format: date-time
 */
