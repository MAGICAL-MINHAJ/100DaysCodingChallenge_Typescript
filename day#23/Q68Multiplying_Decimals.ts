function multiplyDecimals(num1: number, num2: number): number {
    const product: number = num1 * num2;
    return Math.round(product * 100) / 100; // Round to two decimal places
}

// solution
const a: number = multiplyDecimals(3.25, 2.5);
console.log(a); // Output: 8.13
