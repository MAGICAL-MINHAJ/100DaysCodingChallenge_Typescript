function divideAndFindRemainder(dividend, divisor) {
    var quotient = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    return { quotient: quotient, remainder: remainder };
}
// Example usage
var answer = divideAndFindRemainder(10, 3);
console.log(answer); // Output: { quotient: 3, remainder: 1 }
