{
    var x = 5;
    var y = 10;
    console.log("Inside the block:");
    console.log("x:", x); // Output: x: 5
    console.log("y:", y); // Output: y: 10
}
// Attempting to access variables outside the block
// Results in ReferenceError because the variables are not accessible outside the block
try {
    console.log("Outside the block:");
    console.log("x:", x); // This will throw a ReferenceError
    console.log("y:", y); // This will throw a ReferenceError
}
catch (error) {
    console.error(error); // Output: ReferenceError: x is not defined
    //         ReferenceError: y is not defined
}
