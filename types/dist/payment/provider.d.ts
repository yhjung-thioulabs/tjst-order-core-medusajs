import { AddressDTO } from "../address";
import { CustomerDTO } from "../customer";
import { PaymentSessionStatus } from "./common";
import { ProviderWebhookPayload } from "./mutations";
export type PaymentAddressDTO = Partial<AddressDTO>;
export type PaymentCustomerDTO = Partial<CustomerDTO>;
/**
 * Normalized events from payment provider to internal payment module events.
 */
export declare enum PaymentActions {
    /**
     * Payment session has been authorized and there are available funds for capture.
     */
    AUTHORIZED = "authorized",
    /**
     * Payment was successful and the mount is captured.
     */
    SUCCESSFUL = "captured",
    /**
     * Payment failed.
     */
    FAILED = "failed",
    /**
     * Received an event that is not processable.
     */
    NOT_SUPPORTED = "not_supported"
}
/**
 * @interface
 *
 * A payment's context.
 */
export type PaymentProviderContext = {
    /**
     * The payment's billing address.
     */
    billing_address?: PaymentAddressDTO;
    /**
     * The customer's email.
     */
    email?: string;
    /**
     * The ID of the resource the payment is associated with i.e. the ID of the PaymentSession in Medusa
     */
    resource_id?: string;
    /**
     * The customer associated with this payment.
     */
    customer?: PaymentCustomerDTO;
    /**
     * The extra fields specific to the provider session.
     */
    extra?: Record<string, unknown>;
};
export type CreatePaymentProviderSession = {
    context: PaymentProviderContext;
    amount: number;
    currency_code: string;
};
export type UpdatePaymentProviderSession = {
    context: PaymentProviderContext;
    data: Record<string, unknown>;
    amount: number;
    currency_code: string;
};
/**
 * @interface
 *
 * The response of operations on a payment.
 */
export type PaymentProviderSessionResponse = {
    /**
     * The data to be stored in the `data` field of the Payment Session to be created.
     * The `data` field is useful to hold any data required by the third-party provider to process the payment or retrieve its details at a later point.
     */
    data: Record<string, unknown>;
};
export type PaymentProviderAuthorizeResponse = {
    /**
     * The status of the payment, which will be stored in the payment session's `status` field.
     */
    status: PaymentSessionStatus;
    /**
     * The `data` to be stored in the payment session's `data` field.
     */
    data: PaymentProviderSessionResponse["data"];
};
export type PaymentProviderDataInput = {
    provider_id: string;
    data: Record<string, unknown>;
};
/**
 * An object that is returned in case of an error.
 */
export interface PaymentProviderError {
    /**
     * The error message
     */
    error: string;
    /**
     * The error code.
     */
    code?: string;
    /**
     * Any additional helpful details.
     */
    detail?: any;
}
export type WebhookActionData = {
    resource_id: string;
    amount: number;
};
export type WebhookActionResult = {
    action: PaymentActions.NOT_SUPPORTED;
} | {
    action: PaymentActions;
    data: WebhookActionData;
};
export interface IPaymentProvider {
    /**
     * @ignore
     *
     * Return a unique identifier to retrieve the payment plugin provider
     */
    getIdentifier(): string;
    /**
     * Make calls to the third-party provider to initialize the payment. For example, in Stripe this method is used to create a Payment Intent for the customer.
     *
     * @param {CreatePaymentProviderSession} context
     * @returns {Promise<PaymentProviderError | PaymentProviderSessionResponse>} Either the payment's data or an error object.
     */
    initiatePayment(data: CreatePaymentProviderSession): Promise<PaymentProviderError | PaymentProviderSessionResponse>;
    /**
     * This method is used to update the payment session.
     *
     * @param {UpdatePaymentProviderSession} context
     * @returns {Promise<PaymentProviderError | PaymentProviderSessionResponse | void>} Either the payment's data or an error object.
     */
    updatePayment(context: UpdatePaymentProviderSession): Promise<PaymentProviderError | PaymentProviderSessionResponse>;
    /**
     * This method is used to perform any actions necessary before a Payment Session is deleted. The Payment Session is deleted in one of the following cases:
     *
     * @param {Record<string, unknown>} paymentSessionData - The `data` field of the Payment Session.
     * @returns Either an error object or an empty object.
     */
    deletePayment(paymentSessionData: Record<string, unknown>): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]>;
    /**
     * This method is used to authorize payment using the Payment Session.
     * You can interact with a third-party provider and perform any actions necessary to authorize the payment.
     *
     * The payment authorization might require additional action from the customer before it is declared authorized. Once that additional action is performed,
     * the `authorizePayment` method will be called again to validate that the payment is now fully authorized. So, make sure to implement it for this case as well, if necessary.
     *
     * :::note
     *
     * The payment authorization status is determined using the {@link getPaymentStatus} method. If the status is `requires_more`, then it means additional actions are required
     * from the customer.
     *
     * :::
     *
     * @param {Record<string, unknown>} paymentSessionData - The `data` field of the payment session.
     * @param {Record<string, unknown>} context - The context of the authorization.
     * @returns The authorization details or an error object.
     */
    authorizePayment(paymentSessionData: Record<string, unknown>, context: Record<string, unknown>): Promise<PaymentProviderError | PaymentProviderAuthorizeResponse>;
    /**
     * This method is used to capture the payment amount. This is typically triggered manually by the store operator from the admin.
     *
     * You can utilize this method to interact with the third-party provider and perform any actions necessary to capture the payment.
     *
     * @param {Record<string, unknown>} paymentSessionData - The `data` field of the Payment for its first parameter.
     * @returns Either an error object or a value that's stored in the `data` field of the Payment.
     */
    capturePayment(paymentSessionData: Record<string, unknown>): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]>;
    /**
     * This method is used to refund a payment. This is typically triggered manually by the store operator from the admin. The refund amount might be the total amount or part of it.
     *
     * You can utilize this method to interact with the third-party provider and perform any actions necessary to refund the payment.
     *
     * @param {Record<string, unknown>} paymentSessionData - The `data` field of a Payment.
     * @param {number} refundAmount - the amount to refund.
     * @returns Either an error object or a value that's stored in the `data` field of the Payment.
     */
    refundPayment(paymentSessionData: Record<string, unknown>, refundAmount: number): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]>;
    /**
     * This method is used to provide a uniform way of retrieving the payment information from the third-party provider.
     * For example, in Stripe’s Payment Provider this method is used to retrieve the payment intent details from Stripe.
     *
     * @param {Record<string, unknown>} paymentSessionData -
     * The `data` field of a Payment Session. Make sure to store in the `data` field any necessary data that would allow you to retrieve the payment data from the third-party provider.
     * @returns {Promise<PaymentProviderError | PaymentProviderSessionResponse["session_data"]>} The payment's data, typically retrieved from a third-party provider.
     */
    retrievePayment(paymentSessionData: Record<string, unknown>): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]>;
    /**
     * This method is used to cancel a payment. This method is typically triggered by one of the following situations:
     *
     * You can utilize this method to interact with the third-party provider and perform any actions necessary to cancel the payment.
     *
     * @param {Record<string, unknown>} paymentSessionData - The `data` field of the Payment.
     * @returns Either an error object or a value that's stored in the `data` field of the Payment.
     */
    cancelPayment(paymentSessionData: Record<string, unknown>): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]>;
    /**
     * This method is used to get the status of a Payment or a Payment Session.
     *
     * @param {Record<string, unknown>} paymentSessionData -
     * The `data` field of a Payment as a parameter. You can use this data to interact with the third-party provider to check the status of the payment if necessary.
     * @returns {Promise<PaymentSessionStatus>} The status of the Payment or Payment Session.
     */
    getPaymentStatus(paymentSessionData: Record<string, unknown>): Promise<PaymentSessionStatus>;
    /**
     * The method is called when å webhook call for this particular provider is received.
     *
     * The method is responsible for normalizing the received event and provide
     *
     * @param data - object containing provider id and data from the provider
     */
    getWebhookActionAndData(data: ProviderWebhookPayload["payload"]): Promise<WebhookActionResult>;
}
//# sourceMappingURL=provider.d.ts.map