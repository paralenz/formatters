"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.formattedWeight = void 0;
var lodash_round_1 = __importDefault(require("lodash.round"));
var constants_1 = require("./constants");
var formattedWeight = function (weight, unit, includeUnit) {
    if (unit === void 0) { unit = 'kg'; }
    if (includeUnit === void 0) { includeUnit = true; }
    if (!weight)
        return null;
    var inKg = (0, lodash_round_1["default"])(weight, 1).toFixed(1);
    var inLbs = (0, lodash_round_1["default"])(weight * constants_1.LBS_TO_KG_RATIO, 1).toFixed(1);
    var inKgWithUnits = inKg + (includeUnit ? ' kg' : '');
    var inLbsWithUnits = inLbs + (includeUnit ? ' lbs' : '');
    return unit === 'kg' ? inKgWithUnits : inLbsWithUnits;
};
exports.formattedWeight = formattedWeight;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVkV2VpZ2h0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Zvcm1hdHRlZFdlaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw4REFBZ0M7QUFDaEMseUNBQTZDO0FBVXRDLElBQU0sZUFBZSxHQUFHLFVBQUMsTUFBYyxFQUFFLElBQXVCLEVBQUUsV0FBa0I7SUFBM0MscUJBQUEsRUFBQSxXQUF1QjtJQUFFLDRCQUFBLEVBQUEsa0JBQWtCO0lBQ3pGLElBQUksQ0FBQyxNQUFNO1FBQUUsT0FBTyxJQUFJLENBQUE7SUFFeEIsSUFBTSxJQUFJLEdBQUcsSUFBQSx5QkFBSyxFQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDeEMsSUFBTSxLQUFLLEdBQUcsSUFBQSx5QkFBSyxFQUFDLE1BQU0sR0FBRywyQkFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUMzRCxJQUFNLGFBQWEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDdkQsSUFBTSxjQUFjLEdBQUcsS0FBSyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBRTFELE9BQU8sSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUE7QUFDdkQsQ0FBQyxDQUFBO0FBVFksUUFBQSxlQUFlLG1CQVMzQiJ9