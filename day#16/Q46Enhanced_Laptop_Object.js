var Laptop = /** @class */ (function () {
    function Laptop(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Laptop.prototype.describe = function () {
        console.log("This is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, " laptop."));
    };
    return Laptop;
}());
// Example usage:
var myLaptop = new Laptop("Dell", "XPS 15", 2023);
myLaptop.describe();
