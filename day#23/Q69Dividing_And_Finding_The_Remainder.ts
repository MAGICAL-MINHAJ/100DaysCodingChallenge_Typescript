interface DivisionResult {
    quotient: number;
    remainder: number;
}

function divideAndFindRemainder(dividend: number, divisor: number): DivisionResult {
    const quotient: number = Math.floor(dividend / divisor);
    const remainder: number = dividend % divisor;
    return { quotient, remainder };
}

// Example usage
const answer: DivisionResult = divideAndFindRemainder(10, 3);
console.log(answer); // Output: { quotient: 3, remainder: 1 }
