function generateRandomNumber() {
    var randomNumber = Math.random();
    var scaledRandomNumber = Math.floor(randomNumber * 10) + 1;
    return scaledRandomNumber;
}
// test run...
var randomNumber = generateRandomNumber();
console.log(randomNumber); // Output: Random number between 1 and 10, inclusive
