import { Order } from "./order";
import { Region } from "./region";
import { SoftDeletableEntity } from "../interfaces/models/soft-deletable-entity";
export declare class GiftCard extends SoftDeletableEntity {
    code: string;
    value: number;
    balance: number;
    region_id: string;
    region: Region;
    order_id: string;
    order: Order;
    is_disabled: boolean;
    ends_at: Date;
    tax_rate: number | null;
    metadata: Record<string, unknown>;
    /**
     * @apiIgnore
     */
    private beforeInsert;
}
/**
 * @schema GiftCard
 * title: "Gift Card"
 * description: "Gift Cards are redeemable and represent a value that can be used towards the payment of an Order."
 * type: object
 * required:
 *   - balance
 *   - code
 *   - created_at
 *   - deleted_at
 *   - ends_at
 *   - id
 *   - is_disabled
 *   - metadata
 *   - order_id
 *   - region_id
 *   - tax_rate
 *   - updated_at
 *   - value
 * properties:
 *   id:
 *     description: The gift card's ID
 *     type: string
 *     example: gift_01G8XKBPBQY2R7RBET4J7E0XQZ
 *   code:
 *     description: The unique code that identifies the Gift Card. This is used by the Customer to redeem the value of the Gift Card.
 *     type: string
 *     example: 3RFT-MH2C-Y4YZ-XMN4
 *   value:
 *     description: The value that the Gift Card represents.
 *     type: integer
 *     example: 10
 *   balance:
 *     description: The remaining value on the Gift Card.
 *     type: integer
 *     example: 10
 *   region_id:
 *     description: The ID of the region this gift card is available in.
 *     type: string
 *     example: reg_01G1G5V26T9H8Y0M4JNE3YGA4G
 *   region:
 *     description: The details of the region this gift card is available in.
 *     x-expandable: "region"
 *     nullable: true
 *     $ref: "#/components/schemas/Region"
 *   order_id:
 *     description: The ID of the order that the gift card was purchased in.
 *     nullable: true
 *     type: string
 *     example: order_01G8TJSYT9M6AVS5N4EMNFS1EK
 *   order:
 *     description: The details of the order that the gift card was purchased in.
 *     x-expandable: "region"
 *     nullable: true
 *     $ref: "#/components/schemas/Order"
 *   is_disabled:
 *     description: Whether the Gift Card has been disabled. Disabled Gift Cards cannot be applied to carts.
 *     type: boolean
 *     default: false
 *   ends_at:
 *     description: The time at which the Gift Card can no longer be used.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   tax_rate:
 *     description: The gift card's tax rate that will be applied on calculating totals
 *     nullable: true
 *     type: number
 *     example: 0
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
 *   metadata:
 *     description: An optional key-value map with additional details
 *     nullable: true
 *     type: object
 *     example: {car: "white"}
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
