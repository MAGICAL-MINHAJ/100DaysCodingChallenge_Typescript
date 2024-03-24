function createCar(manufacturer, modelName) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
        extras: {}
    };
    // Assigning additional properties to the extras object
    extras.forEach(function (extra) {
        for (var key in extra) {
            car.extras[key] = extra[key];
        }
    });
    return car;
}
// Calling the function with required information and two other name-value pairs
var myCar = createCar("Toyota", "Corolla", { color: "blue" }, { hasSunroof: true });
// Printing the object to check if all the information was stored correctly
console.log(myCar);
