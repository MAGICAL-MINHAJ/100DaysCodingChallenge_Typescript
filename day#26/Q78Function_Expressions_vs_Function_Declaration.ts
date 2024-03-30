// FUNCTION DECLARATION
function squareNumber(num: number): number {
    return num * num;
}

// Example
const result1 = squareNumber(5);
console.log("Using function declaration:", result1); // Output: 25

//FUNCTION EXPRESSIONS
const squareNumberExpr = function(num: number): number {
    return num * num;
};

// Example 
const result2 = squareNumberExpr(5);
console.log("Using function expression:", result2); // Output: 25

