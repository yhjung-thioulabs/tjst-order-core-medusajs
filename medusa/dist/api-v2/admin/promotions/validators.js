"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPostPromotionsPromotionReq = exports.ApplicationMethodsMethodPostReq = exports.ApplicationMethodsPostReq = exports.PromotionRule = exports.AdminPostPromotionsReq = exports.AdminGetPromotionsParams = exports.AdminGetPromotionsPromotionParams = void 0;
var utils_1 = require("@medusajs/utils");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var common_1 = require("../../../types/common");
var xor_1 = require("../../../types/validators/xor");
var validators_1 = require("../campaigns/validators");
var AdminGetPromotionsPromotionParams = /** @class */ (function (_super) {
    __extends(AdminGetPromotionsPromotionParams, _super);
    function AdminGetPromotionsPromotionParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AdminGetPromotionsPromotionParams;
}(common_1.FindParams));
exports.AdminGetPromotionsPromotionParams = AdminGetPromotionsPromotionParams;
var AdminGetPromotionsParams = /** @class */ (function (_super) {
    __extends(AdminGetPromotionsParams, _super);
    function AdminGetPromotionsParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminGetPromotionsParams.prototype, "code", void 0);
    return AdminGetPromotionsParams;
}((0, common_1.extendedFindParamsMixin)({
    limit: 100,
    offset: 0,
})));
exports.AdminGetPromotionsParams = AdminGetPromotionsParams;
var AdminPostPromotionsReq = /** @class */ (function () {
    function AdminPostPromotionsReq() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostPromotionsReq.prototype, "code", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], AdminPostPromotionsReq.prototype, "is_automatic", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(utils_1.PromotionType),
        __metadata("design:type", String)
    ], AdminPostPromotionsReq.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostPromotionsReq.prototype, "campaign_id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return validators_1.AdminPostCampaignsReq; }),
        __metadata("design:type", validators_1.AdminPostCampaignsReq)
    ], AdminPostPromotionsReq.prototype, "campaign", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return ApplicationMethodsPostReq; }),
        __metadata("design:type", ApplicationMethodsPostReq)
    ], AdminPostPromotionsReq.prototype, "application_method", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return PromotionRule; }),
        __metadata("design:type", Array)
    ], AdminPostPromotionsReq.prototype, "rules", void 0);
    return AdminPostPromotionsReq;
}());
exports.AdminPostPromotionsReq = AdminPostPromotionsReq;
var PromotionRule = /** @class */ (function () {
    function PromotionRule() {
    }
    __decorate([
        (0, class_validator_1.IsEnum)(utils_1.PromotionRuleOperator),
        __metadata("design:type", String)
    ], PromotionRule.prototype, "operator", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", Object)
    ], PromotionRule.prototype, "description", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], PromotionRule.prototype, "attribute", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_transformer_1.Type)(function () { return String; }),
        __metadata("design:type", Array)
    ], PromotionRule.prototype, "values", void 0);
    return PromotionRule;
}());
exports.PromotionRule = PromotionRule;
var ApplicationMethodsPostReq = /** @class */ (function () {
    function ApplicationMethodsPostReq() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], ApplicationMethodsPostReq.prototype, "description", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], ApplicationMethodsPostReq.prototype, "value", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], ApplicationMethodsPostReq.prototype, "max_quantity", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(utils_1.ApplicationMethodType),
        __metadata("design:type", String)
    ], ApplicationMethodsPostReq.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(utils_1.ApplicationMethodTargetType),
        __metadata("design:type", String)
    ], ApplicationMethodsPostReq.prototype, "target_type", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(utils_1.ApplicationMethodAllocation),
        __metadata("design:type", String)
    ], ApplicationMethodsPostReq.prototype, "allocation", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return PromotionRule; }),
        __metadata("design:type", Array)
    ], ApplicationMethodsPostReq.prototype, "target_rules", void 0);
    __decorate([
        (0, class_validator_1.ValidateIf)(function (data) { return data.type === utils_1.PromotionType.BUYGET; }),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return PromotionRule; }),
        __metadata("design:type", Array)
    ], ApplicationMethodsPostReq.prototype, "buy_rules", void 0);
    __decorate([
        (0, class_validator_1.ValidateIf)(function (data) { return data.type === utils_1.PromotionType.BUYGET; }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], ApplicationMethodsPostReq.prototype, "apply_to_quantity", void 0);
    __decorate([
        (0, class_validator_1.ValidateIf)(function (data) { return data.type === utils_1.PromotionType.BUYGET; }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], ApplicationMethodsPostReq.prototype, "buy_rules_min_quantity", void 0);
    return ApplicationMethodsPostReq;
}());
exports.ApplicationMethodsPostReq = ApplicationMethodsPostReq;
var ApplicationMethodsMethodPostReq = /** @class */ (function () {
    function ApplicationMethodsMethodPostReq() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], ApplicationMethodsMethodPostReq.prototype, "description", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], ApplicationMethodsMethodPostReq.prototype, "value", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], ApplicationMethodsMethodPostReq.prototype, "max_quantity", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(utils_1.ApplicationMethodType),
        __metadata("design:type", String)
    ], ApplicationMethodsMethodPostReq.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(utils_1.ApplicationMethodTargetType),
        __metadata("design:type", String)
    ], ApplicationMethodsMethodPostReq.prototype, "target_type", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(utils_1.ApplicationMethodAllocation),
        __metadata("design:type", String)
    ], ApplicationMethodsMethodPostReq.prototype, "allocation", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return PromotionRule; }),
        __metadata("design:type", Array)
    ], ApplicationMethodsMethodPostReq.prototype, "target_rules", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return PromotionRule; }),
        __metadata("design:type", Array)
    ], ApplicationMethodsMethodPostReq.prototype, "buy_rules", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], ApplicationMethodsMethodPostReq.prototype, "apply_to_quantity", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], ApplicationMethodsMethodPostReq.prototype, "buy_rules_min_quantity", void 0);
    return ApplicationMethodsMethodPostReq;
}());
exports.ApplicationMethodsMethodPostReq = ApplicationMethodsMethodPostReq;
var AdminPostPromotionsPromotionReq = /** @class */ (function () {
    function AdminPostPromotionsPromotionReq() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostPromotionsPromotionReq.prototype, "code", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Boolean)
    ], AdminPostPromotionsPromotionReq.prototype, "is_automatic", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(utils_1.PromotionType),
        __metadata("design:type", String)
    ], AdminPostPromotionsPromotionReq.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.Validate)(xor_1.XorConstraint, ["campaign"]),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostPromotionsPromotionReq.prototype, "campaign_id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.Validate)(xor_1.XorConstraint, ["campaign_id"]),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return validators_1.AdminPostCampaignsReq; }),
        __metadata("design:type", validators_1.AdminPostCampaignsReq)
    ], AdminPostPromotionsPromotionReq.prototype, "campaign", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return ApplicationMethodsMethodPostReq; }),
        __metadata("design:type", ApplicationMethodsMethodPostReq)
    ], AdminPostPromotionsPromotionReq.prototype, "application_method", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return PromotionRule; }),
        __metadata("design:type", Array)
    ], AdminPostPromotionsPromotionReq.prototype, "rules", void 0);
    return AdminPostPromotionsPromotionReq;
}());
exports.AdminPostPromotionsPromotionReq = AdminPostPromotionsPromotionReq;
//# sourceMappingURL=validators.js.map