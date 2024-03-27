import { BaseFilterable } from "../dal";
import { OperatorMap } from "../dal/utils";
/**
 * @enum
 *
 * The payment collection's status.
 */
export declare enum PaymentCollectionStatus {
    /**
     * The payment collection isn't paid.
     */
    NOT_PAID = "not_paid",
    /**
     * The payment collection is awaiting payment.
     */
    AWAITING = "awaiting",
    /**
     * The payment collection is authorized.
     */
    AUTHORIZED = "authorized",
    /**
     * Some of the payments in the payment collection are authorized.
     */
    PARTIALLY_AUTHORIZED = "partially_authorized",
    /**
     * The payment collection is canceled.
     */
    CANCELED = "canceled"
}
/**
 * @enum
 *
 * The status of a payment session.
 */
export declare enum PaymentSessionStatus {
    /**
     * The payment is authorized.
     */
    AUTHORIZED = "authorized",
    /**
     * The payment is pending.
     */
    PENDING = "pending",
    /**
     * The payment requires an action.
     */
    REQUIRES_MORE = "requires_more",
    /**
     * An error occurred while processing the payment.
     */
    ERROR = "error",
    /**
     * The payment is canceled.
     */
    CANCELED = "canceled"
}
/**
 * The payment collection details.
 */
export interface PaymentCollectionDTO {
    /**
     * The ID of the Payment Collection
     */
    id: string;
    /**
     * The currency of the payments/sessions associated with payment collection
     */
    currency_code: string;
    /**
     * The id of the region
     */
    region_id: string;
    /**
     * The amount
     */
    amount: number;
    /**
     * The amount authorized within associated payment sessions
     */
    authorized_amount?: number;
    /**
     * The amount refunded from associated payments
     */
    refunded_amount?: number;
    /**
     * When the payment collection was completed
     */
    completed_at?: string | Date;
    /**
     * When the payment collection was created
     */
    created_at?: string | Date;
    /**
     * When the payment collection was updated
     */
    updated_at?: string | Date;
    /**
     * Holds custom data in key-value pairs
     */
    metadata?: Record<string, unknown>;
    /**
     * The status of the payment collection
     */
    status: PaymentCollectionStatus;
    /**
     * The payment provider for the payments
     *
     * @expandable
     */
    payment_providers: PaymentProviderDTO[];
    /**
     * The associated payment sessions
     *
     * @expandable
     */
    payment_sessions?: PaymentSessionDTO[];
    /**
     * The associated payments
     *
     * @expandable
     */
    payments?: PaymentDTO[];
}
/**
 * The filters to apply on the retrieved payment collection.
 */
export interface FilterablePaymentCollectionProps extends BaseFilterable<PaymentCollectionDTO> {
    /**
     * The IDs to filter the payment collection by.
     */
    id?: string | string[];
    /**
     * Filter by associated region's ID.
     */
    region_id?: string | string[] | OperatorMap<string>;
    /**
     * Filter payment collections by created date.
     */
    created_at?: OperatorMap<string>;
    /**
     * Filter payment collections by updated date.
     */
    updated_at?: OperatorMap<string>;
}
export interface FilterablePaymentSessionProps extends BaseFilterable<PaymentSessionDTO> {
    id?: string | string[];
    currency_code?: string | string[];
    amount?: number | OperatorMap<number>;
    provider_id?: string | string[];
    payment_collection_id?: string | string[];
    region_id?: string | string[] | OperatorMap<string>;
    created_at?: OperatorMap<string>;
    updated_at?: OperatorMap<string>;
    deleted_at?: OperatorMap<string>;
}
export interface FilterableCaptureProps extends BaseFilterable<CaptureDTO> {
    id?: string | string[];
    currency_code?: string | string[];
    amount?: number | OperatorMap<number>;
    payment_id?: string | string[];
    created_at?: OperatorMap<string>;
    updated_at?: OperatorMap<string>;
    deleted_at?: OperatorMap<string>;
}
export interface FilterableRefundProps extends BaseFilterable<RefundDTO> {
    id?: string | string[];
    currency_code?: string | string[];
    amount?: number | OperatorMap<number>;
    payment_id?: string | string[];
    created_at?: OperatorMap<string>;
    updated_at?: OperatorMap<string>;
    deleted_at?: OperatorMap<string>;
}
export interface PaymentDTO {
    /**
     * The ID of the Payment
     */
    id: string;
    /**
     * The payment amount
     */
    amount: number;
    /**
     * The authorized amount of the payment.
     */
    authorized_amount?: number;
    /**
     * Payment currency
     */
    currency_code: string;
    /**
     * The ID of payment provider
     */
    provider_id: string;
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
    /**
     * Payment provider data
     */
    data?: Record<string, unknown>;
    /**
     * When the payment collection was created
     */
    created_at?: string | Date;
    /**
     * When the payment collection was updated
     */
    updated_at?: string | Date;
    /**
     * When the payment was captured
     */
    captured_at?: string | Date;
    /**
     * When the payment was canceled
     */
    canceled_at?: string | Date;
    /**
     * The sum of the associated captures
     */
    captured_amount?: number;
    /**
     * The sum of the associated refunds
     */
    refunded_amount?: number;
    /**
     * The associated payment captures
     *
     * @expandable
     */
    captures?: CaptureDTO[];
    /**
     * The associated refunds of the payment
     *
     * @expandable
     */
    refunds?: RefundDTO[];
    /**
     * The payment collection the payment is associated with
     *
     * @expandable
     */
    payment_collection?: PaymentCollectionDTO;
    /**
     * The payment session from which the payment is created
     *
     * @expandable
     */
    payment_session?: PaymentSessionDTO;
}
export interface FilterablePaymentProps extends BaseFilterable<FilterablePaymentProps> {
    id?: string | string[];
    session_id?: string | string[] | OperatorMap<string>;
    customer_id?: string | string[] | OperatorMap<string>;
    cart_id?: string | string[] | OperatorMap<string>;
    order_id?: string | string[] | OperatorMap<string>;
    order_edit_id?: string | string[] | OperatorMap<string>;
    created_at?: OperatorMap<string>;
    updated_at?: OperatorMap<string>;
    captured_at?: OperatorMap<string>;
    canceled_at?: OperatorMap<string>;
}
/**
 * The capture details.
 */
export interface CaptureDTO {
    /**
     * The ID of the Capture
     */
    id: string;
    /**
     * Captured amount
     */
    amount: number;
    /**
     * The creation date of the capture.
     */
    created_at: Date;
    /**
     * Who the capture was created by.
     */
    created_by?: string;
    /**
     * The associated payment.
     */
    payment: PaymentDTO;
}
/**
 * The refund details.
 */
export interface RefundDTO {
    /**
     * The ID of the Refund
     */
    id: string;
    /**
     * Refunded amount
     */
    amount: number;
    /**
     * The creation date of the refund.
     */
    created_at: Date;
    /**
     * Who created the refund.
     */
    created_by?: string;
    /**
     * The associated payment.
     */
    payment: PaymentDTO;
}
export interface PaymentSessionDTO {
    /**
     * The ID of the Payment Session
     */
    id: string;
    /**
     * The amount
     */
    amount: number;
    /**
     * Payment session currency
     */
    currency_code: string;
    /**
     * The ID of payment provider
     */
    provider_id: string;
    /**
     * Payment provider data
     */
    data: Record<string, unknown>;
    /**
     * Payment session context
     */
    context?: Record<string, unknown>;
    /**
     * The status of the payment session
     */
    status: PaymentSessionStatus;
    /**
     * When the session was authorized
     */
    authorized_at?: Date;
    /**
     * The payment collection the session is associated with
     * @expandable
     */
    payment_collection?: PaymentCollectionDTO;
    /**
     * The payment created from the session
     * @expandable
     */
    payment?: PaymentDTO;
}
/**
 * The payment provider details.
 */
export interface PaymentProviderDTO {
    /**
     * The ID of the payment provider.
     */
    id: string;
    /**
     * Whether the payment provider is enabled.
     */
    is_enabled: string;
}
export interface FilterablePaymentProviderProps extends BaseFilterable<PaymentProviderDTO> {
    /**
     * The IDs to filter the payment collection by.
     */
    id?: string | string[];
    /**
     * Filter by enabled status
     */
    is_enabled?: boolean;
}
//# sourceMappingURL=common.d.ts.map