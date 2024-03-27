/// <reference types="node" />
import { PaymentProviderContext } from "./provider";
/**
 * The payment collection to be created.
 */
export interface CreatePaymentCollectionDTO {
    /**
     * The associated region's ID.
     */
    region_id: string;
    /**
     * The currency code of the payment collection.
     */
    currency_code: string;
    /**
     * The amount of the payment collection.
     */
    amount: number;
    /**
     * Holds custom data in key-value pairs.
     */
    metadata?: Record<string, unknown>;
}
/**
 * The attributes to update in the payment collection.
 */
export interface UpdatePaymentCollectionDTO extends Partial<CreatePaymentCollectionDTO> {
    /**
     * The ID of the payment collection.
     */
    id: string;
}
export interface UpsertPaymentCollectionDTO {
    id?: string;
    region_id?: string;
    currency_code?: string;
    amount?: number;
    metadata?: Record<string, unknown>;
}
/**
 * The attributes to update in the payment collection.
 */
export interface PaymentCollectionUpdatableFields {
    region_id?: string;
    currency_code?: string;
    amount?: number;
    metadata?: Record<string, unknown>;
}
/**
 * The payment to be created.
 */
export interface CreatePaymentDTO {
    /**
     * The amount of the payment.
     */
    amount: number;
    /**
     * The currency code of the payment.
     */
    currency_code: string;
    /**
     * The associated provider's ID.
     */
    provider_id: string;
    /**
     * The data of the payment.
     */
    data: Record<string, unknown>;
    /**
     * The associated payment session's ID.
     */
    payment_session_id: string;
    /**
     * The associated payment collection's ID.
     */
    payment_collection_id: string;
    /**
     * The associated cart's ID.
     */
    cart_id?: string;
    /**
     * The associated order's ID.
     */
    order_id?: string;
    /**
     * The associated order edit's ID.
     */
    order_edit_id?: string;
    /**
     * The associated customer's ID.
     */
    customer_id?: string;
}
/**
 * The attributes to update in the payment.
 */
export interface UpdatePaymentDTO {
    /**
     * The ID of the payment.
     */
    id: string;
    /**
     * The associated cart's ID.
     */
    cart_id?: string;
    /**
     * The associated order's ID.
     */
    order_id?: string;
    /**
     * The associated order edit's ID.
     */
    order_edit_id?: string;
    /**
     * The associated customer's ID.
     */
    customer_id?: string;
}
/**
 * The capture to be created.
 */
export interface CreateCaptureDTO {
    /**
     * The amount of the capture.
     */
    amount?: number;
    /**
     * The associated payment's ID.
     */
    payment_id: string;
    /**
     * The captured by of the capture.
     */
    captured_by?: string;
}
/**
 * The refund to be created.
 */
export interface CreateRefundDTO {
    /**
     * The amount of the refund.
     */
    amount?: number;
    /**
     * The associated payment's ID.
     */
    payment_id: string;
    /**
     * The created by of the refund.
     */
    created_by?: string;
}
/**
 * The payment session to be created.
 */
export interface CreatePaymentSessionDTO {
    /**
     * The provider's ID.
     */
    provider_id: string;
    /**
     * The selected currency code.
     */
    currency_code: string;
    /**
     * The payment's amount.
     */
    amount: number;
    /**
     * The value of the payment session's `data` field.
     */
    data: Record<string, unknown>;
    /**
     * The payment session's context.
     */
    context?: PaymentProviderContext;
}
/**
 * The attributes to update in a payment session.
 */
export interface UpdatePaymentSessionDTO {
    /**
     * The payment session's ID.
     */
    id: string;
    /**
     * The value of the payment session's `data` field.
     */
    data: Record<string, unknown>;
    /**
     * The selected currency code.
     */
    currency_code: string;
    /**
     * The payment's amount.
     */
    amount: number;
    /**
     * The payment session's context.
     */
    context?: PaymentProviderContext;
}
/**
 * The payment provider to be created.
 */
export interface CreatePaymentProviderDTO {
    /**
     * The provider's ID.
     */
    id: string;
    /**
     * Whether the provider is enabled.
     */
    is_enabled?: boolean;
}
/**
 * Webhook
 */
export interface ProviderWebhookPayload {
    provider: string;
    payload: {
        /**
         * Parsed webhook body
         */
        data: Record<string, unknown>;
        /**
         * Raw request body
         */
        rawData: string | Buffer;
        headers: Record<string, unknown>;
    };
}
//# sourceMappingURL=mutations.d.ts.map