import { Country } from "./country";
import { Customer } from "./customer";
import { SoftDeletableEntity } from "../interfaces/models/soft-deletable-entity";
export declare class Address extends SoftDeletableEntity {
    customer_id: string | null;
    customer: Customer | null;
    company: string | null;
    first_name: string | null;
    last_name: string | null;
    address_1: string | null;
    address_2: string | null;
    city: string | null;
    country_code: string | null;
    country: Country | null;
    province: string | null;
    postal_code: string | null;
    phone: string | null;
    metadata: Record<string, unknown>;
    /**
     * @apiIgnore
     */
    private beforeInsert;
}
/**
 * @schema Address
 * title: "Address"
 * description: "An address is used across the Medusa backend within other schemas and object types. For example, a customer's billing and shipping addresses both use the Address entity."
 * type: object
 * required:
 *   - address_1
 *   - address_2
 *   - city
 *   - company
 *   - country_code
 *   - created_at
 *   - customer_id
 *   - deleted_at
 *   - first_name
 *   - id
 *   - last_name
 *   - metadata
 *   - phone
 *   - postal_code
 *   - province
 *   - updated_at
 * properties:
 *  id:
 *    type: string
 *    description: ID of the address
 *    example: addr_01G8ZC9VS1XVE149MGH2J7QSSH
 *  customer_id:
 *    description: ID of the customer this address belongs to
 *    nullable: true
 *    type: string
 *    example: cus_01G2SG30J8C85S4A5CHM2S1NS2
 *  customer:
 *    description: Available if the relation `customer` is expanded.
 *    nullable: true
 *    $ref: "#/components/schemas/Customer"
 *  company:
 *    description: Company name
 *    nullable: true
 *    type: string
 *    example: Acme
 *  first_name:
 *    description: First name
 *    nullable: true
 *    type: string
 *    example: Arno
 *  last_name:
 *    description: Last name
 *    nullable: true
 *    type: string
 *    example: Willms
 *  address_1:
 *    description: Address line 1
 *    nullable: true
 *    type: string
 *    example: 14433 Kemmer Court
 *  address_2:
 *    description: Address line 2
 *    nullable: true
 *    type: string
 *    example: Suite 369
 *  city:
 *    description: City
 *    nullable: true
 *    type: string
 *    example: South Geoffreyview
 *  country_code:
 *    description: The 2 character ISO code of the country in lower case
 *    nullable: true
 *    type: string
 *    externalDocs:
 *      url: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
 *      description: See a list of codes.
 *    example: st
 *  country:
 *    description: A country object.
 *    x-expandable: "country"
 *    nullable: true
 *    $ref: "#/components/schemas/Country"
 *  province:
 *    description: Province
 *    nullable: true
 *    type: string
 *    example: Kentucky
 *  postal_code:
 *    description: Postal Code
 *    nullable: true
 *    type: string
 *    example: 72093
 *  phone:
 *    description: Phone Number
 *    nullable: true
 *    type: string
 *    example: 16128234334802
 *  created_at:
 *    type: string
 *    description: "The date with timezone at which the resource was created."
 *    format: date-time
 *  updated_at:
 *    type: string
 *    description: "The date with timezone at which the resource was updated."
 *    format: date-time
 *  deleted_at:
 *    description: The date with timezone at which the resource was deleted.
 *    nullable: true
 *    type: string
 *    format: date-time
 *  metadata:
 *    description: An optional key-value map with additional details
 *    nullable: true
 *    type: object
 *    example: {car: "white"}
 *    externalDocs:
 *      description: "Learn about the metadata attribute, and how to delete and update it."
 *      url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
