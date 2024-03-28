// Function to describe the shape
function describeShape(shape) {
    if (shape.kind === 'circle') {
        console.log("This is a circle with radius ".concat(shape.radius));
    }
    else if (shape.kind === 'rectangle') {
        console.log("This is a rectangle with width ".concat(shape.width, " and height ").concat(shape.height));
    }
}
// Example 
var circle = { kind: 'circle', radius: 5 };
var rectangle = { kind: 'rectangle', width: 4, height: 6 };
describeShape(circle); // Output: This is a circle with radius 5
describeShape(rectangle); // Output: This is a rectangle with width 4 and height 6
// a program which can easily describe diff types of shapes in detail.
