var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    var ending = void 0;
    if (num === 1) {
        ending = "st";
    }
    else if (num === 2) {
        ending = "nd";
    }
    else if (num === 3) {
        ending = "rd";
    }
    else {
        ending = "th";
    }
    console.log("".concat(num).concat(ending));
}
