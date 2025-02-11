import { LineItem } from "./line-item";
import { TaxLine } from "./tax-line";
export declare class LineItemTaxLine extends TaxLine {
    item_id: string;
    item: LineItem;
    /**
     * @apiIgnore
     */
    private beforeInsert;
}
/**
 * @schema LineItemTaxLine
 * title: "Line Item Tax Line"
 * description: "A Line Item Tax Line represents the taxes applied on a line item."
 * type: object
 * required:
 *   - code
 *   - created_at
 *   - id
 *   - item_id
 *   - metadata
 *   - name
 *   - rate
 *   - updated_at
 * properties:
 *   id:
 *     description: The line item tax line's ID
 *     type: string
 *     example: litl_01G1G5V2DRX1SK6NQQ8VVX4HQ8
 *   code:
 *     description: A code to identify the tax type by
 *     nullable: true
 *     type: string
 *     example: tax01
 *   name:
 *     description: A human friendly name for the tax
 *     type: string
 *     example: Tax Example
 *   rate:
 *     description: The numeric rate to charge tax by
 *     type: number
 *     example: 10
 *   item_id:
 *     description: The ID of the line item
 *     type: string
 *     example: item_01G8ZC9GWT6B2GP5FSXRXNFNGN
 *   item:
 *     description: The details of the line item.
 *     x-expandable: "item"
 *     nullable: true
 *     $ref: "#/components/schemas/LineItem"
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
