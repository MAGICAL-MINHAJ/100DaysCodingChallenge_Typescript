function mergeTextWithNumber(text: string, number: number): string {
    return `${text}${number}`;
}

// Example usage
const mergedString: string = mergeTextWithNumber("Age: ", 20);
console.log(mergedString); // Output: Age: 20
