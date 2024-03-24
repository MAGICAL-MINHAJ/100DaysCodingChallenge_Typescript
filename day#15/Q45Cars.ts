function createCar(manufacturer: string, modelName: string, ...extras: { [key: string]: any }[]): { manufacturer: string, modelName: string, extras: { [key: string]: any } } {
    let car: { manufacturer: string, modelName: string, extras: { [key: string]: any } } = {
        manufacturer: manufacturer,
        modelName: modelName,
        extras: {}
    };

    // Assigning additional properties to the extras object
    extras.forEach(extra => {
        for (let key in extra) {
            car.extras[key] = extra[key];
        }
    });

    return car;
}

// Calling the function with required information and two other name-value pairs
let myCar = createCar("Toyota", "Corolla", { color: "blue" }, { hasSunroof: true });

// Printing the object to check if all the information was stored correctly
console.log(myCar);
