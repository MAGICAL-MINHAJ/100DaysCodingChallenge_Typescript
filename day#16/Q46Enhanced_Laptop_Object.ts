class Laptop {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    describe() {
        console.log(`This is a ${this.year} ${this.make} ${this.model} laptop.`);
    }
}

// Example usage:
const myLaptop = new Laptop("Dell", "XPS 15", 2023);
myLaptop.describe();



