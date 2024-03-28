function addNumberAndString(num1, strNum) {
    var num2 = parseFloat(strNum); // Convert string to number
    return num1 + num2;
}
// Example 
var ans = addNumberAndString(5, "3");
console.log(ans); // Output: 8
