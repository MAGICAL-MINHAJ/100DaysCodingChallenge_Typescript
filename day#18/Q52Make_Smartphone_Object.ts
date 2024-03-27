class Smartphone {
    brand: string;
    model: string;
    storage: number; // Storage in GB
    screenSize: number; // Screen size in inches
    batteryLife: number; // Battery life in hours

    constructor(brand: string, model: string, storage: number, screenSize: number, batteryLife: number) {
        this.brand = brand;
        this.model = model;
        this.storage = storage;
        this.screenSize = screenSize;
        this.batteryLife = batteryLife;
    }

    displayDetails(): void {
        console.log(`Smartphone Details:
            Brand: ${this.brand}
            Model: ${this.model}
            Storage: ${this.storage} GB
            Screen Size: ${this.screenSize} inches
            Battery Life: ${this.batteryLife} hours`);
    }
}


const myPhone = new Smartphone("Samsung", "Note 20", 256, 6.2, 30);
myPhone.displayDetails();
