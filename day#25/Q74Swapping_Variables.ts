let g: number = 5;
let b: number = 10;

console.log("Before swapping:");
console.log("a:", g); // Output: g: 5
console.log("b:", b); // Output: b: 10

// Swap values
let temp: number = g;
g = b;
b = temp;

console.log("After swapping:");
console.log("a:", g); // Output: g: 10
console.log("b:", b); // Output: b: 5
