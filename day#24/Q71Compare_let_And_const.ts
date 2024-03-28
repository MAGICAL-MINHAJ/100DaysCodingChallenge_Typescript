let x: number = 5;
console.log("Original value of x:", x); // Output: Original value of x: 5

// Reassigning the variable declared with let
x = 10;
console.log("New value of x:", x); // Output: New value of x: 10



const mannu: number = 5;
console.log("Original value of y:", mannu); // Output: Original value of mannu: 5

// Trying to reassign the variable declared with const
try {
    mannu = 10; // This will throw an error
} catch (error) {
    console.error(error); // Output: TypeError: Assignment to constant variable.
}
