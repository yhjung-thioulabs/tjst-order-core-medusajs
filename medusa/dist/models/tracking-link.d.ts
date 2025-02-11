import { Fulfillment } from "./fulfillment";
import { SoftDeletableEntity } from "../interfaces/models/soft-deletable-entity";
export declare class TrackingLink extends SoftDeletableEntity {
    url: string;
    tracking_number: string;
    fulfillment_id: string;
    fulfillment: Fulfillment;
    idempotency_key: string;
    metadata: Record<string, unknown>;
    /**
     * @apiIgnore
     */
    private beforeInsert;
}
/**
 * @schema TrackingLink
 * title: "Tracking Link"
 * description: "A tracking link holds information about tracking numbers for a Fulfillment. Tracking Links can optionally contain a URL that can be visited to see the status of the shipment. Typically, the tracking link is provided from the third-party service integrated through the used fulfillment provider."
 * type: object
 * required:
 *   - created_at
 *   - deleted_at
 *   - fulfillment_id
 *   - id
 *   - idempotency_key
 *   - metadata
 *   - tracking_number
 *   - updated_at
 *   - url
 * properties:
 *   id:
 *     description: The tracking link's ID
 *     type: string
 *     example: tlink_01G8ZH853Y6TFXWPG5EYE81X63
 *   url:
 *     description: The URL at which the status of the shipment can be tracked.
 *     nullable: true
 *     type: string
 *     format: uri
 *   tracking_number:
 *     description: The tracking number given by the shipping carrier.
 *     type: string
 *     format: RH370168054CN
 *   fulfillment_id:
 *     description: The ID of the fulfillment that the tracking link belongs to.
 *     type: string
 *     example: ful_01G8ZRTMQCA76TXNAT81KPJZRF
 *   fulfillment:
 *     description: The details of the fulfillment that the tracking link belongs to.
 *     x-expandable: "fulfillment"
 *     nullable: true
 *     $ref: "#/components/schemas/Fulfillment"
 *   idempotency_key:
 *     description: Randomly generated key used to continue the completion of a process in case of failure.
 *     nullable: true
 *     type: string
 *     externalDocs:
 *       url: https://docs.medusajs.com/development/idempotency-key/overview.md
 *       description: Learn more how to use the idempotency key.
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
