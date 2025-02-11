/**
 * @oas [post] /admin/return-reasons
 * operationId: "PostReturnReasons"
 * summary: "Create a Return Reason"
 * description: "Create a Return Reason."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostReturnReasonsReq"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.returnReasons.create({
 *         label: "Damaged",
 *         value: "damaged"
 *       })
 *       .then(({ return_reason }) => {
 *         console.log(return_reason.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateReturnReason } from "medusa-react"
 *
 *       const CreateReturnReason = () => {
 *         const createReturnReason = useAdminCreateReturnReason()
 *         // ...
 *
 *         const handleCreate = (
 *           label: string,
 *           value: string
 *         ) => {
 *           createReturnReason.mutate({
 *             label,
 *             value,
 *           }, {
 *             onSuccess: ({ return_reason }) => {
 *               console.log(return_reason.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CreateReturnReason
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/return-reasons' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "label": "Damaged",
 *           "value": "damaged"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Return Reasons
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminReturnReasonsRes"
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
 * @schema AdminPostReturnReasonsReq
 * type: object
 * description: "The details of the return reason to create."
 * required:
 *  - label
 *  - value
 * properties:
 *   label:
 *     description: "The label to display to the Customer."
 *     type: string
 *   value:
 *     description: "A unique value of the return reason."
 *     type: string
 *   parent_return_reason_id:
 *     description: "The ID of the parent return reason."
 *     type: string
 *   description:
 *     description: "The description of the Reason."
 *     type: string
 *   metadata:
 *     description: An optional set of key-value pairs with additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
export declare class AdminPostReturnReasonsReq {
    value: string;
    label: string;
    parent_return_reason_id?: string;
    description?: string;
    metadata?: Record<string, unknown>;
}
