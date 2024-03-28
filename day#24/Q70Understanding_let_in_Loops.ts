function printNumbers(): void {
    for (let i = 1; i <= 5; i++) { // (i) is defined by let, cannot be used outside the loop.
        console.log(i);
    }
}

// Calling the function
printNumbers();
