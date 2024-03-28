var VehicleCategory;
(function (VehicleCategory) {
    VehicleCategory["CAR"] = "Car";
    VehicleCategory["TRUCK"] = "Truck";
    VehicleCategory["MOTORCYCLE"] = "Motorcycle";
})(VehicleCategory || (VehicleCategory = {}));
var Vehicle = /** @class */ (function () {
    function Vehicle(category) {
        this.category = category;
    }
    return Vehicle;
}());
// printing vehicle type.
var myCar = new Vehicle(VehicleCategory.CAR);
console.log(myCar.category); // Output: Car
