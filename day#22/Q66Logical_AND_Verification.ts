function checkBothTrue(value1: boolean, value2: boolean): boolean {
    return value1 && value2; // both should be true, or else it will print false.
}

// for example.....
console.log(checkBothTrue(true, false)); // Output: false
console.log(checkBothTrue(true, true));  // Output: true
console.log(checkBothTrue(false, false)); // Output: false
