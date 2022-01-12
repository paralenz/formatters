"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.formattedPressure = void 0;
var lodash_round_1 = __importDefault(require("lodash.round"));
var constants_1 = require("./constants");
var formattedPressure = function (pressure, unit, includeUnit) {
    if (unit === void 0) { unit = 'bar'; }
    if (includeUnit === void 0) { includeUnit = true; }
    var inBar = (0, lodash_round_1["default"])(pressure, 1).toFixed(1);
    var inPsi = (0, lodash_round_1["default"])(pressure * constants_1.BAR_TO_PSI_RATIO, 1).toFixed(1);
    var inBarWithUnits = inBar + (includeUnit ? ' bar' : '');
    var inPsiWithUnits = inPsi + (includeUnit ? ' psi' : '');
    return unit === 'bar' ? inBarWithUnits : inPsiWithUnits;
};
exports.formattedPressure = formattedPressure;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVkUHJlc3N1cmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZm9ybWF0dGVkUHJlc3N1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsOERBQWdDO0FBQ2hDLHlDQUE4QztBQVV2QyxJQUFNLGlCQUFpQixHQUFHLFVBQUMsUUFBZ0IsRUFBRSxJQUEwQixFQUFFLFdBQWtCO0lBQTlDLHFCQUFBLEVBQUEsWUFBMEI7SUFBRSw0QkFBQSxFQUFBLGtCQUFrQjtJQUNoRyxJQUFNLEtBQUssR0FBRyxJQUFBLHlCQUFLLEVBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUMzQyxJQUFNLEtBQUssR0FBRyxJQUFBLHlCQUFLLEVBQUMsUUFBUSxHQUFHLDRCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUM5RCxJQUFNLGNBQWMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDMUQsSUFBTSxjQUFjLEdBQUcsS0FBSyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBRTFELE9BQU8sSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUE7QUFDekQsQ0FBQyxDQUFBO0FBUFksUUFBQSxpQkFBaUIscUJBTzdCIn0=