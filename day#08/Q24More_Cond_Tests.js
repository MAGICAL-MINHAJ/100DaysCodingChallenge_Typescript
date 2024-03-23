// Tests for equality and inequality with strings
var city1 = "Karachi";
var city2 = "Lahore";
console.log("Is city1 equal to 'Karachi'? I predict True.");
console.log(city1 === "Karachi");
console.log("Is city2 not equal to 'Lahore'? I predict True.");
console.log(city2 !== "Lahore");
// Tests using the lower case function
var name1 = "John";
var name2 = "mary";
console.log("Is name1 in lowercase equal to 'john'? I predict True.");
console.log(name1.toLowerCase() === "john");
console.log("Is name2 in lowercase not equal to 'mary'? I predict False.");
console.log(name2.toLowerCase() !== "mary");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 10;
var num2 = 20;
console.log("Is num1 equal to 10? I predict True.");
console.log(num1 === 10);
console.log("Is num2 not equal to 15? I predict True.");
console.log(num2 !== 15);
console.log("Is num1 less than num2? I predict True.");
console.log(num1 < num2);
console.log("Is num2 greater than or equal to 20? I predict True.");
console.log(num2 >= 20);
console.log("Is num1 less than or equal to 5? I predict False.");
console.log(num1 <= 5);
// Tests using "and" and "or" operators
var sunny = true;
var warm = true;
console.log("Is it sunny and warm? I predict True.");
console.log(sunny && warm);
console.log("Is it sunny or warm? I predict True.");
console.log(sunny || warm);
