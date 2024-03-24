var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicianss = ["David Copperfield", "Criss Angel", "Minhaj Khan"];
function MakeGreat(magicianss) {
    //  a new array to store the modified names
    var GreatMagicians = [];
    // Looping through the original array and add modified names to the new array
    for (var _i = 0, magicianss_1 = magicianss; _i < magicianss_1.length; _i++) {
        var magiciann = magicianss_1[_i];
        GreatMagicians.push("".concat(magiciann, " the Great"));
    }
    return GreatMagicians; // Returning the new array with modified names
}
function ShowMagicianss(magicianss) {
    for (var _i = 0, magicianss_2 = magicianss; _i < magicianss_2.length; _i++) {
        var magiciann = magicianss_2[_i];
        console.log(magiciann);
    }
}
// a copy of the original array to pass to make_great()
var GreatMagiciansCopy = MakeGreat(__spreadArray([], magicianss, true));
console.log("\nOriginal magicians:");
ShowMagicianss(magicianss); // Original array remains unchanged
console.log("\nGreat magicians:");
ShowMagicianss(GreatMagiciansCopy); // Modified array with "the Great"
