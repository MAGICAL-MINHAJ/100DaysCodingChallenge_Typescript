function createCustomAdder(addend: number): (numberToAdd: number) => number {
    return function(numberToAdd: number): number {
        return addend + numberToAdd;
    };
}

// Example usage
const add5 = createCustomAdder(5);
console.log(add5(10)); // Output: 15 (10 + 5)
console.log(add5(20)); // Output: 25 (20 + 5)

const add10 = createCustomAdder(10);
console.log(add10(15)); // Output: 25 (15 + 10)
console.log(add10(30)); // Output: 40 (30 + 10)
