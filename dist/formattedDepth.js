"use strict";
exports.__esModule = true;
exports.formattedDepth = void 0;
var convertDepth_1 = require("./convertDepth");
var formattedDepth = function (depth, unit) {
    if (unit === void 0) { unit = 'm'; }
    if (!depth)
        return null;
    return "".concat((0, convertDepth_1.convertDepth)(depth, unit), " ").concat(unit);
};
exports.formattedDepth = formattedDepth;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0dGVkRGVwdGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZm9ybWF0dGVkRGVwdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsK0NBQTZDO0FBT3RDLElBQU0sY0FBYyxHQUFHLFVBQUMsS0FBYSxFQUFFLElBQXdCO0lBQXhCLHFCQUFBLEVBQUEsVUFBd0I7SUFDcEUsSUFBSSxDQUFDLEtBQUs7UUFBRSxPQUFPLElBQUksQ0FBQTtJQUV2QixPQUFPLFVBQUcsSUFBQSwyQkFBWSxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBSSxJQUFJLENBQUUsQ0FBQTtBQUMvQyxDQUFDLENBQUE7QUFKWSxRQUFBLGNBQWMsa0JBSTFCIn0=