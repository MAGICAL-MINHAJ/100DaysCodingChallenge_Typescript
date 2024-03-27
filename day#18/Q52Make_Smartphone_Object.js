var Smartphone = /** @class */ (function () {
    function Smartphone(brand, model, storage, screenSize, batteryLife) {
        this.brand = brand;
        this.model = model;
        this.storage = storage;
        this.screenSize = screenSize;
        this.batteryLife = batteryLife;
    }
    Smartphone.prototype.displayDetails = function () {
        console.log("Smartphone Details:\n            Brand: ".concat(this.brand, "\n            Model: ").concat(this.model, "\n            Storage: ").concat(this.storage, " GB\n            Screen Size: ").concat(this.screenSize, " inches\n            Battery Life: ").concat(this.batteryLife, " hours"));
    };
    return Smartphone;
}());
var myPhone = new Smartphone("Samsung", "Note 20", 256, 6.2, 30);
myPhone.displayDetails();
