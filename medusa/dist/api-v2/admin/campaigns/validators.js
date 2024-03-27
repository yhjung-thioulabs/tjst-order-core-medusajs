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
exports.AdminPostCampaignsCampaignReq = exports.CampaignBudget = exports.IdObject = exports.AdminPostCampaignsReq = exports.AdminGetCampaignsParams = exports.AdminGetCampaignsCampaignParams = void 0;
var utils_1 = require("@medusajs/utils");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var common_1 = require("../../../types/common");
var AdminGetCampaignsCampaignParams = /** @class */ (function (_super) {
    __extends(AdminGetCampaignsCampaignParams, _super);
    function AdminGetCampaignsCampaignParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AdminGetCampaignsCampaignParams;
}(common_1.FindParams));
exports.AdminGetCampaignsCampaignParams = AdminGetCampaignsCampaignParams;
var AdminGetCampaignsParams = /** @class */ (function (_super) {
    __extends(AdminGetCampaignsParams, _super);
    function AdminGetCampaignsParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminGetCampaignsParams.prototype, "campaign_identifier", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminGetCampaignsParams.prototype, "currency", void 0);
    return AdminGetCampaignsParams;
}((0, common_1.extendedFindParamsMixin)({
    limit: 100,
    offset: 0,
})));
exports.AdminGetCampaignsParams = AdminGetCampaignsParams;
var AdminPostCampaignsReq = /** @class */ (function () {
    function AdminPostCampaignsReq() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostCampaignsReq.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], AdminPostCampaignsReq.prototype, "campaign_identifier", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostCampaignsReq.prototype, "description", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostCampaignsReq.prototype, "currency", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return CampaignBudget; }),
        __metadata("design:type", CampaignBudget)
    ], AdminPostCampaignsReq.prototype, "budget", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsDateString)(),
        __metadata("design:type", String)
    ], AdminPostCampaignsReq.prototype, "starts_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsDateString)(),
        __metadata("design:type", String)
    ], AdminPostCampaignsReq.prototype, "ends_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return IdObject; }),
        __metadata("design:type", Array)
    ], AdminPostCampaignsReq.prototype, "promotions", void 0);
    return AdminPostCampaignsReq;
}());
exports.AdminPostCampaignsReq = AdminPostCampaignsReq;
var IdObject = /** @class */ (function () {
    function IdObject() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], IdObject.prototype, "id", void 0);
    return IdObject;
}());
exports.IdObject = IdObject;
var CampaignBudget = /** @class */ (function () {
    function CampaignBudget() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(utils_1.CampaignBudgetType),
        __metadata("design:type", String)
    ], CampaignBudget.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], CampaignBudget.prototype, "limit", void 0);
    return CampaignBudget;
}());
exports.CampaignBudget = CampaignBudget;
var AdminPostCampaignsCampaignReq = /** @class */ (function () {
    function AdminPostCampaignsCampaignReq() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostCampaignsCampaignReq.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], AdminPostCampaignsCampaignReq.prototype, "campaign_identifier", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostCampaignsCampaignReq.prototype, "description", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostCampaignsCampaignReq.prototype, "currency", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return CampaignBudget; }),
        __metadata("design:type", CampaignBudget)
    ], AdminPostCampaignsCampaignReq.prototype, "budget", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsDateString)(),
        __metadata("design:type", String)
    ], AdminPostCampaignsCampaignReq.prototype, "starts_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsDateString)(),
        __metadata("design:type", String)
    ], AdminPostCampaignsCampaignReq.prototype, "ends_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return IdObject; }),
        __metadata("design:type", Array)
    ], AdminPostCampaignsCampaignReq.prototype, "promotions", void 0);
    return AdminPostCampaignsCampaignReq;
}());
exports.AdminPostCampaignsCampaignReq = AdminPostCampaignsCampaignReq;
//# sourceMappingURL=validators.js.map