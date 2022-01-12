"use strict";
exports.__esModule = true;
exports.numberToHumanSize = void 0;
var _1 = require(".");
var numberToHumanSize = function (size) {
    if (!size)
        return null;
    if (size < _1.ONE_BYTE)
        return size + ' bytes';
    if (size < _1.ONE_BYTE * _1.ONE_BYTE)
        return (size / _1.ONE_BYTE).toFixed(2) + ' KB';
    if (size < _1.ONE_BYTE * _1.ONE_BYTE * _1.ONE_BYTE)
        return (size / _1.ONE_BYTE / _1.ONE_BYTE).toFixed(2) + ' MB';
    return (size / _1.ONE_BYTE / _1.ONE_BYTE / _1.ONE_BYTE).toFixed(2) + ' GB';
};
exports.numberToHumanSize = numberToHumanSize;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyVG9IdW1hblNpemUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbnVtYmVyVG9IdW1hblNpemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0JBQTRCO0FBRXJCLElBQU0saUJBQWlCLEdBQUcsVUFBQyxJQUFZO0lBQzVDLElBQUksQ0FBQyxJQUFJO1FBQUUsT0FBTyxJQUFJLENBQUE7SUFFdEIsSUFBSSxJQUFJLEdBQUcsV0FBUTtRQUFFLE9BQU8sSUFBSSxHQUFHLFFBQVEsQ0FBQTtJQUMzQyxJQUFJLElBQUksR0FBRyxXQUFRLEdBQUcsV0FBUTtRQUFFLE9BQU8sQ0FBQyxJQUFJLEdBQUcsV0FBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQTtJQUMzRSxJQUFJLElBQUksR0FBRyxXQUFRLEdBQUcsV0FBUSxHQUFHLFdBQVE7UUFBRSxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVEsR0FBRyxXQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFBO0lBQ2pHLE9BQU8sQ0FBQyxJQUFJLEdBQUcsV0FBUSxHQUFHLFdBQVEsR0FBRyxXQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFBO0FBQ25FLENBQUMsQ0FBQTtBQVBZLFFBQUEsaUJBQWlCLHFCQU83QiJ9