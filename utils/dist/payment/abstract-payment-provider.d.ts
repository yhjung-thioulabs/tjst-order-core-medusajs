import { CreatePaymentProviderSession, IPaymentProvider, MedusaContainer, PaymentProviderError, PaymentProviderSessionResponse, PaymentSessionStatus, ProviderWebhookPayload, UpdatePaymentProviderSession, WebhookActionResult } from "@medusajs/types";
export declare abstract class AbstractPaymentProvider<TConfig = Record<string, unknown>> implements IPaymentProvider {
    protected readonly container: MedusaContainer;
    protected readonly config: TConfig;
    /**
     * You can use the `constructor` of your Payment Provider to have access to different services in Medusa through [dependency injection](https://docs.medusajs.com/development/fundamentals/dependency-injection).
     *
     * You can also use the constructor to initialize your integration with the third-party provider. For example, if you use a client to connect to the third-party provider’s APIs,
     * you can initialize it in the constructor and use it in other methods in the service.
     *
     * Additionally, if you’re creating your Payment Provider as an external plugin to be installed on any Medusa backend and you want to access the options added for the plugin,
     * you can access it in the constructor. The options are passed as a second parameter.
     *
     * @param {MedusaContainer} container - An instance of `MedusaContainer` that allows you to access other resources, such as services, in your Medusa backend through [dependency injection](https://docs.medusajs.com/development/fundamentals/dependency-injection)
     * @param {Record<string, unknown>} config - If this payment processor is created in a plugin, the plugin's options are passed in this parameter.
     *
     * @example
     * ```ts
     * class MyPaymentService extends AbstractPaymentProvider {
     *   // ...
     *   constructor(container, options) {
     *     super(container)
     *     // you can access options here
     *
     *     // you can also initialize a client that
     *     // communicates with a third-party service.
     *     this.client = new Client(options)
     *   }
     *   // ...
     * }
     * ```
     */
    protected constructor(container: MedusaContainer, config?: TConfig);
    /**
     * @ignore
     */
    static _isPaymentProvider: boolean;
    /**
     * @ignore
     */
    static isPaymentProvider(object: any): boolean;
    /**
     * The `PaymentProvider` entity has 2 properties: `id` and `is_installed`. The `identifier` property in the payment provider service is used when the payment provider is added to the database.
     *
     * The value of this property is also used to reference the payment provider throughout Medusa.
     * For example, it is used to [add a payment provider](https://docs.medusajs.com/api/admin#regions_postregionsregionpaymentproviders) to a region.
     *
     * ```ts
     * class MyPaymentService extends AbstractPaymentProvider {
     *   static identifier = "my-payment"
     *   // ...
     * }
     * ```
     */
    static identifier: string;
    /**
     * @ignore
     *
     * Return a unique identifier to retrieve the payment plugin provider
     */
    getIdentifier(): string;
    abstract capturePayment(paymentSessionData: Record<string, unknown>): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]>;
    abstract authorizePayment(paymentSessionData: Record<string, unknown>, context: Record<string, unknown>): Promise<PaymentProviderError | {
        status: PaymentSessionStatus;
        data: PaymentProviderSessionResponse["data"];
    }>;
    abstract cancelPayment(paymentSessionData: Record<string, unknown>): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]>;
    abstract initiatePayment(context: CreatePaymentProviderSession): Promise<PaymentProviderError | PaymentProviderSessionResponse>;
    abstract deletePayment(paymentSessionData: Record<string, unknown>): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]>;
    abstract getPaymentStatus(paymentSessionData: Record<string, unknown>): Promise<PaymentSessionStatus>;
    abstract refundPayment(paymentSessionData: Record<string, unknown>, refundAmount: number): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]>;
    abstract retrievePayment(paymentSessionData: Record<string, unknown>): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]>;
    abstract updatePayment(context: UpdatePaymentProviderSession): Promise<PaymentProviderError | PaymentProviderSessionResponse>;
    abstract getWebhookActionAndData(data: ProviderWebhookPayload["payload"]): Promise<WebhookActionResult>;
}
export declare function isPaymentProviderError(obj: any): obj is PaymentProviderError;
