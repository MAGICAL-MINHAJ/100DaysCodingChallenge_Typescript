type Shape = Circle | Rectangle;

interface Circle {
    kind: 'circle';
    radius: number;
}

interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}

// Function to describe the shape
function describeShape(shape: Shape): void {
    if (shape.kind === 'circle') {
        console.log(`This is a circle with radius ${shape.radius}`);
    } else if (shape.kind === 'rectangle') {
        console.log(`This is a rectangle with width ${shape.width} and height ${shape.height}`);
    }
}

// Example 
const circle: Circle = { kind: 'circle', radius: 5 };
const rectangle: Rectangle = { kind: 'rectangle', width: 4, height: 6 };

describeShape(circle);      // Output: This is a circle with radius 5
describeShape(rectangle);   // Output: This is a rectangle with width 4 and height 6
// a program which can easily describe diff types of shapes in detail.