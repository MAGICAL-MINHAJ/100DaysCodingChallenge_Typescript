var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var laptopPricesSet1 = [1200, 1500, 1000];
var laptopPricesSet2 = [1100, 1400, 1300];
// Combining arrays using spread operator and sorting them in ascending order
var combinedPrices = __spreadArray(__spreadArray([], laptopPricesSet1, true), laptopPricesSet2, true).sort(function (a, b) { return a - b; });
// Logging the combined and sorted prices
console.log("Combined and sorted prices:", combinedPrices);
