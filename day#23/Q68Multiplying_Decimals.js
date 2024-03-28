function multiplyDecimals(num1, num2) {
    var product = num1 * num2;
    return Math.round(product * 100) / 100; // Round to two decimal places
}
// solution
var a = multiplyDecimals(3.25, 2.5);
console.log(a); // Output: 8.13
