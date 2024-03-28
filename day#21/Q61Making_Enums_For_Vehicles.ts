enum VehicleCategory {
    CAR = 'Car',
    TRUCK = 'Truck',
    MOTORCYCLE = 'Motorcycle'
}

class Vehicle {
    constructor(public category: VehicleCategory) {}
}

// printing vehicle type.
const myCar = new Vehicle(VehicleCategory.CAR);
console.log(myCar.category); // Output: Car
