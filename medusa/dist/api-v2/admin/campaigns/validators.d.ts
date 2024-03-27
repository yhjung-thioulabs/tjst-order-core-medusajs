import { CampaignBudgetType } from "@medusajs/utils";
import { FindParams } from "../../../types/common";
export declare class AdminGetCampaignsCampaignParams extends FindParams {
}
declare const AdminGetCampaignsParams_base: import("../../..").ClassConstructor<FindParams & import("../../../types/common").FindPaginationParams>;
export declare class AdminGetCampaignsParams extends AdminGetCampaignsParams_base {
    campaign_identifier?: string;
    currency?: string;
}
export declare class AdminPostCampaignsReq {
    name: string;
    campaign_identifier?: string;
    description?: string;
    currency?: string;
    budget?: CampaignBudget;
    starts_at?: string;
    ends_at?: string;
    promotions?: IdObject[];
}
export declare class IdObject {
    id: string;
}
export declare class CampaignBudget {
    type?: CampaignBudgetType;
    limit?: number;
}
export declare class AdminPostCampaignsCampaignReq {
    name?: string;
    campaign_identifier?: string;
    description?: string;
    currency?: string;
    budget?: CampaignBudget;
    starts_at?: string;
    ends_at?: string;
    promotions?: IdObject[];
}
export {};
