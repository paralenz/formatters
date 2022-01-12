"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.convertDepth = void 0;
var lodash_round_1 = __importDefault(require("lodash.round"));
var constants_1 = require("./constants");
var convertDepth = function (depth, unit) {
    if (unit === void 0) { unit = 'm'; }
    if (!depth)
        return '0';
    var result = unit === 'm' ? depth : (depth * constants_1.METERS_TO_FEET_RATIO);
    return parseFloat("".concat((0, lodash_round_1["default"])(result, 2))).toFixed(1);
};
exports.convertDepth = convertDepth;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydERlcHRoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbnZlcnREZXB0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw4REFBZ0M7QUFFaEMseUNBQWtEO0FBUTNDLElBQU0sWUFBWSxHQUFHLFVBQUMsS0FBYSxFQUFFLElBQXdCO0lBQXhCLHFCQUFBLEVBQUEsVUFBd0I7SUFDbEUsSUFBSSxDQUFDLEtBQUs7UUFBRSxPQUFPLEdBQUcsQ0FBQTtJQUV0QixJQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLGdDQUFvQixDQUFDLENBQUE7SUFDcEUsT0FBTyxVQUFVLENBQUMsVUFBRyxJQUFBLHlCQUFLLEVBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDckQsQ0FBQyxDQUFBO0FBTFksUUFBQSxZQUFZLGdCQUt4QiJ9