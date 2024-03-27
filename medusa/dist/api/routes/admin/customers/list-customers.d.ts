import { AdminListCustomerSelector } from "../../../../types/customers";
/**
 * @oas [get] /admin/customers
 * operationId: "GetCustomers"
 * summary: "List Customers"
 * description: "Retrieve a list of Customers. The customers can be filtered by fields such as `q` or `groups`. The customers can also be paginated."
 * x-authenticated: true
 * parameters:
 *   - (query) limit=50 {integer} The number of customers to return.
 *   - (query) offset=0 {integer} The number of customers to skip when retrieving the customers.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned customer.
 *   - (query) q {string} term to search customers' email, first_name, and last_name fields.
 *   - in: query
 *     name: groups
 *     style: form
 *     explode: false
 *     description: Filter by customer group IDs.
 *     schema:
 *       type: array
 *       items:
 *         type: string
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetCustomersParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.customers.list()
 *       .then(({ customers, limit, offset, count }) => {
 *         console.log(customers.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCustomers } from "medusa-react"
 *
 *       const Customers = () => {
 *         const { customers, isLoading } = useAdminCustomers()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {customers && !customers.length && (
 *               <span>No customers</span>
 *             )}
 *             {customers && customers.length > 0 && (
 *               <ul>
 *                 {customers.map((customer) => (
 *                   <li key={customer.id}>{customer.first_name}</li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default Customers
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/customers' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Customers
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminCustomersListRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
/**
 * Parameters used to filter and configure the pagination of the retrieved customers.
 */
export declare class AdminGetCustomersParams extends AdminListCustomerSelector {
    /**
     * {@inheritDoc FindPaginationParams.limit}
     * @defaultValue 50
     */
    limit: number;
    /**
     * {@inheritDoc FindPaginationParams.offset}
     * @defaultValue 0
     */
    offset: number;
    /**
     * {@inheritDoc FindParams.expand}
     */
    expand?: string;
}
