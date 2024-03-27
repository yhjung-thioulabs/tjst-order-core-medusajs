import { CustomerAddressDTO, FilterableCustomerAddressProps, ICustomerModuleService } from "@medusajs/types";
import { StepResponse } from "@medusajs/workflows-sdk";
export declare const unsetForUpdate: (data: {
    selector: FilterableCustomerAddressProps;
    update: Partial<CustomerAddressDTO>;
}, customerService: ICustomerModuleService, field: "is_default_billing" | "is_default_shipping") => Promise<StepResponse<undefined, string[]> | StepResponse<undefined, undefined>>;
