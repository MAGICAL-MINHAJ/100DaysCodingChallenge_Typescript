function addNumberAndString(num1: number, strNum: string): number {
    const num2: number = parseFloat(strNum); // Convert string to number
    return num1 + num2;
}

// Example 
const ans: number = addNumberAndString(5, "3");
console.log(ans); // Output: 8
