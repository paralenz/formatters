"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.formattedTemperature = void 0;
var lodash_round_1 = __importDefault(require("lodash.round"));
var constants_1 = require("./constants");
var formattedTemperature = function (temperature, unit) {
    if (unit === void 0) { unit = 'C'; }
    if (temperature === null) {
        return;
    }
    return unit === 'C'
        ? "".concat((0, lodash_round_1["default"])(temperature - constants_1.KELVIN, 1).toFixed(1), " \u00B0C")
        : "".concat((0, lodash_round_1["default"])(((temperature - constants_1.KELVIN) * 9 / 5) + 32, 1).toFixed(1), " \u00B0F");
};
exports.formattedTemperature = formattedTemperature;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVkVGVtcGVyYXR1cmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZm9ybWF0dGVkVGVtcGVyYXR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsOERBQWdDO0FBRWhDLHlDQUFvQztBQVE3QixJQUFNLG9CQUFvQixHQUFHLFVBQUMsV0FBbUIsRUFBRSxJQUEyQjtJQUEzQixxQkFBQSxFQUFBLFVBQTJCO0lBQ25GLElBQUksV0FBVyxLQUFLLElBQUksRUFBRTtRQUN4QixPQUFNO0tBQ1A7SUFFRCxPQUFPLElBQUksS0FBSyxHQUFHO1FBQ2pCLENBQUMsQ0FBQyxVQUFHLElBQUEseUJBQUssRUFBQyxXQUFXLEdBQUcsa0JBQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQUs7UUFDbkQsQ0FBQyxDQUFDLFVBQUcsSUFBQSx5QkFBSyxFQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsa0JBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFLLENBQUE7QUFDeEUsQ0FBQyxDQUFBO0FBUlksUUFBQSxvQkFBb0Isd0JBUWhDIn0=