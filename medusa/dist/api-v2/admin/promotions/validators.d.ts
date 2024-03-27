import { PromotionTypeValues } from "@medusajs/types";
import { ApplicationMethodAllocation, ApplicationMethodTargetType, ApplicationMethodType, PromotionRuleOperator, PromotionType } from "@medusajs/utils";
import { FindParams } from "../../../types/common";
import { AdminPostCampaignsReq } from "../campaigns/validators";
export declare class AdminGetPromotionsPromotionParams extends FindParams {
}
declare const AdminGetPromotionsParams_base: import("../../..").ClassConstructor<FindParams & import("../../../types/common").FindPaginationParams>;
export declare class AdminGetPromotionsParams extends AdminGetPromotionsParams_base {
    code?: string;
}
export declare class AdminPostPromotionsReq {
    code: string;
    is_automatic?: boolean;
    type?: PromotionTypeValues;
    campaign_id?: string;
    campaign?: AdminPostCampaignsReq;
    application_method: ApplicationMethodsPostReq;
    rules?: PromotionRule[];
}
export declare class PromotionRule {
    operator: PromotionRuleOperator;
    description?: string | null;
    attribute: string;
    values: string[];
}
export declare class ApplicationMethodsPostReq {
    description?: string;
    value?: string;
    max_quantity?: number;
    type?: ApplicationMethodType;
    target_type?: ApplicationMethodTargetType;
    allocation?: ApplicationMethodAllocation;
    target_rules?: PromotionRule[];
    buy_rules?: PromotionRule[];
    apply_to_quantity?: number;
    buy_rules_min_quantity?: number;
}
export declare class ApplicationMethodsMethodPostReq {
    description?: string;
    value?: string;
    max_quantity?: number;
    type?: ApplicationMethodType;
    target_type?: ApplicationMethodTargetType;
    allocation?: ApplicationMethodAllocation;
    target_rules?: PromotionRule[];
    buy_rules?: PromotionRule[];
    apply_to_quantity?: number;
    buy_rules_min_quantity?: number;
}
export declare class AdminPostPromotionsPromotionReq {
    code?: string;
    is_automatic?: boolean;
    type?: PromotionType;
    campaign_id?: string;
    campaign?: AdminPostCampaignsReq;
    application_method?: ApplicationMethodsMethodPostReq;
    rules?: PromotionRule[];
}
export {};
