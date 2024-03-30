// FUNCTION DECLARATION
function squareNumber(num) {
    return num * num;
}
// Example
var result1 = squareNumber(5);
console.log("Using function declaration:", result1); // Output: 25
//FUNCTION EXPRESSIONS
var squareNumberExpr = function (num) {
    return num * num;
};
// Example 
var result2 = squareNumberExpr(5);
console.log("Using function expression:", result2); // Output: 25
