function logObjectProperties(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            console.log("".concat(key, ": ").concat(obj[key]));
        }
    }
}
// run test.
var myCar = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2000,
    color: 'pink'
};
logObjectProperties(myCar);
