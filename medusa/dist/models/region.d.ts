import { SoftDeletableEntity } from "../interfaces/models/soft-deletable-entity";
import { Country } from "./country";
import { Currency } from "./currency";
import { FulfillmentProvider } from "./fulfillment-provider";
import { PaymentProvider } from "./payment-provider";
import { TaxProvider } from "./tax-provider";
import { TaxRate } from "./tax-rate";
export declare class Region extends SoftDeletableEntity {
    name: string;
    currency_code: string;
    currency: Currency;
    tax_rate: number;
    tax_rates: TaxRate[] | null;
    tax_code: string;
    gift_cards_taxable: boolean;
    automatic_taxes: boolean;
    countries: Country[];
    tax_provider_id: string | null;
    tax_provider: TaxProvider;
    payment_providers: PaymentProvider[];
    fulfillment_providers: FulfillmentProvider[];
    metadata: Record<string, unknown>;
    includes_tax: boolean;
    /**
     * @apiIgnore
     */
    private beforeInsert;
}
/**
 * @schema Region
 * title: "Region"
 * description: "A region holds settings specific to a geographical location, including the currency, tax rates, and fulfillment and payment providers. A Region can consist of multiple countries to accomodate common shopping settings across countries."
 * type: object
 * required:
 *   - automatic_taxes
 *   - created_at
 *   - currency_code
 *   - deleted_at
 *   - gift_cards_taxable
 *   - id
 *   - metadata
 *   - name
 *   - tax_code
 *   - tax_provider_id
 *   - tax_rate
 *   - updated_at
 * properties:
 *   id:
 *     description: The region's ID
 *     type: string
 *     example: reg_01G1G5V26T9H8Y0M4JNE3YGA4G
 *   name:
 *     description: The name of the region as displayed to the customer. If the Region only has one country it is recommended to write the country name.
 *     type: string
 *     example: EU
 *   currency_code:
 *     description: The three character currency code used in the region.
 *     type: string
 *     example: usd
 *     externalDocs:
 *       url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *       description: See a list of codes.
 *   currency:
 *     description: The details of the currency used in the region.
 *     x-expandable: "currency"
 *     nullable: true
 *     $ref: "#/components/schemas/Currency"
 *   tax_rate:
 *     description: The tax rate that should be charged on purchases in the Region.
 *     type: number
 *     example: 0
 *   tax_rates:
 *     description: The details of the tax rates used in the region, aside from the default rate.
 *     type: array
 *     x-expandable: "tax_rates"
 *     items:
 *       $ref: "#/components/schemas/TaxRate"
 *   tax_code:
 *     description: The tax code used on purchases in the Region. This may be used by other systems for accounting purposes.
 *     nullable: true
 *     type: string
 *     example: null
 *   gift_cards_taxable:
 *     description: Whether the gift cards are taxable or not in this region.
 *     type: boolean
 *     default: true
 *   automatic_taxes:
 *     description: Whether taxes should be automated in this region.
 *     type: boolean
 *     default: true
 *   countries:
 *     description: The details of the countries included in this region.
 *     type: array
 *     x-expandable: "countries"
 *     items:
 *       $ref: "#/components/schemas/Country"
 *   tax_provider_id:
 *     description: The ID of the tax provider used in this region
 *     nullable: true
 *     type: string
 *     example: null
 *   tax_provider:
 *     description: The details of the tax provider used in the region.
 *     x-expandable: "tax_provider"
 *     nullable: true
 *     $ref: "#/components/schemas/TaxProvider"
 *   payment_providers:
 *     description: The details of the payment providers that can be used to process payments in the region.
 *     type: array
 *     x-expandable: "payment_providers"
 *     items:
 *       $ref: "#/components/schemas/PaymentProvider"
 *   fulfillment_providers:
 *     description: The details of the fulfillment providers that can be used to fulfill items of orders and similar resources in the region.
 *     type: array
 *     x-expandable: "fulfillment_providers"
 *     items:
 *       $ref: "#/components/schemas/FulfillmentProvider"
 *   includes_tax:
 *     description: "Whether the prices for the region include tax"
 *     type: boolean
 *     x-featureFlag: "tax_inclusive_pricing"
 *     default: false
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
