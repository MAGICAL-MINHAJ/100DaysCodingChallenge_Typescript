function createCustomAdder(addend) {
    return function (numberToAdd) {
        return addend + numberToAdd;
    };
}
// Example usage
var add5 = createCustomAdder(5);
console.log(add5(10)); // Output: 15 (10 + 5)
console.log(add5(20)); // Output: 25 (20 + 5)
var add10 = createCustomAdder(10);
console.log(add10(15)); // Output: 25 (15 + 10)
console.log(add10(30)); // Output: 40 (30 + 10)
