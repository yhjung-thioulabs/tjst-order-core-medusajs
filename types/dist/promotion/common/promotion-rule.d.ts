import { BaseFilterable } from "../../dal";
import { PromotionRuleValueDTO } from "./promotion-rule-value";
export type PromotionRuleOperatorValues = "gt" | "lt" | "eq" | "ne" | "in" | "lte" | "gte";
export interface PromotionRuleDTO {
    id: string;
    description?: string | null;
    attribute?: string;
    operator?: PromotionRuleOperatorValues;
    values: PromotionRuleValueDTO[];
}
export interface CreatePromotionRuleDTO {
    description?: string | null;
    attribute: string;
    operator: PromotionRuleOperatorValues;
    values: string[] | string;
}
export interface UpdatePromotionRuleDTO {
    id: string;
    description?: string | null;
    attribute?: string;
    operator?: PromotionRuleOperatorValues;
    values?: string[] | string;
}
export interface RemovePromotionRuleDTO {
    id: string;
}
export interface FilterablePromotionRuleProps extends BaseFilterable<FilterablePromotionRuleProps> {
    id?: string[];
}
export type PromotionRuleTypes = "buy_rules" | "target_rules" | "rules";
//# sourceMappingURL=promotion-rule.d.ts.map