function roundToTwoDecimalPlaces(num) {
    return Math.round(num * 100) / 100;
}
// test run...
var nnumber = 3.14159;
var roundedNumber = roundToTwoDecimalPlaces(nnumber);
console.log(roundedNumber); // Output: 3.14
