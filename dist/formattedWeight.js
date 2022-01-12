"use strict";
exports.__esModule = true;
exports.formattedWeight = void 0;
var constants_1 = require("./constants");
var formattedWeight = function (weight, unit, includeUnit) {
    if (unit === void 0) { unit = 'kg'; }
    if (includeUnit === void 0) { includeUnit = true; }
    if (!weight)
        return null;
    var inKg = parseFloat("".concat(weight)).toFixed(1);
    var inLbs = parseFloat("".concat(weight * constants_1.LBS_TO_KG_RATIO)).toFixed(1);
    var inKgWithUnits = inKg + (includeUnit ? ' kg' : '');
    var inLbsWithUnits = inLbs + (includeUnit ? ' lbs' : '');
    return unit === 'kg' ? inKgWithUnits : inLbsWithUnits;
};
exports.formattedWeight = formattedWeight;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVkV2VpZ2h0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Zvcm1hdHRlZFdlaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBNkM7QUFVdEMsSUFBTSxlQUFlLEdBQUcsVUFBQyxNQUFjLEVBQUUsSUFBdUIsRUFBRSxXQUFrQjtJQUEzQyxxQkFBQSxFQUFBLFdBQXVCO0lBQUUsNEJBQUEsRUFBQSxrQkFBa0I7SUFDekYsSUFBSSxDQUFDLE1BQU07UUFBRSxPQUFPLElBQUksQ0FBQTtJQUV4QixJQUFNLElBQUksR0FBRyxVQUFVLENBQUMsVUFBRyxNQUFNLENBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUMvQyxJQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsVUFBRyxNQUFNLEdBQUcsMkJBQWUsQ0FBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2xFLElBQU0sYUFBYSxHQUFHLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN2RCxJQUFNLGNBQWMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUE7SUFFMUQsT0FBTyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQTtBQUN2RCxDQUFDLENBQUE7QUFUWSxRQUFBLGVBQWUsbUJBUzNCIn0=