"use strict";
exports.__esModule = true;
exports.durationToHumanSize = void 0;
var durationToHumanSize = function (duration) {
    if (!duration)
        return null;
    var h = Math.floor(duration / 3600);
    var m = Math.floor((duration % 3600) / 60);
    var s = Math.floor(duration % 60);
    if (h > 0)
        return "".concat(h, "h ").concat(m, "m ").concat(s, "s");
    if (m > 0)
        return "".concat(m, "m ").concat(s, "s");
    if (s > 0)
        return "".concat(s, "s");
};
exports.durationToHumanSize = durationToHumanSize;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVyYXRpb25Ub0h1bWFuU2l6ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kdXJhdGlvblRvSHVtYW5TaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLElBQU0sbUJBQW1CLEdBQUcsVUFBQyxRQUFnQjtJQUNsRCxJQUFJLENBQUMsUUFBUTtRQUFFLE9BQU8sSUFBSSxDQUFBO0lBRTFCLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFBO0lBQ3JDLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7SUFDNUMsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUE7SUFFbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUFFLE9BQU8sVUFBRyxDQUFDLGVBQUssQ0FBQyxlQUFLLENBQUMsTUFBRyxDQUFBO0lBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFBRSxPQUFPLFVBQUcsQ0FBQyxlQUFLLENBQUMsTUFBRyxDQUFBO0lBQy9CLElBQUksQ0FBQyxHQUFHLENBQUM7UUFBRSxPQUFPLFVBQUcsQ0FBQyxNQUFHLENBQUE7QUFDM0IsQ0FBQyxDQUFBO0FBVlksUUFBQSxtQkFBbUIsdUJBVS9CIn0=