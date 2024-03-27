interface Laptop {
    make: string;
    model: string;
    year: number;
}

// Array of objects representing different laptops
const laptops: Laptop[] = [
    { make: "Toshiba", model: "XPS 13", year: 2020 },
    { make: "HP", model: "Spectre x360", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2019 }
];

// Using array destructuring to assign the first and second laptops to variables
const [firstLaptop, secondLaptop] = laptops;

// Logging the variables
console.log("First laptop:", firstLaptop);
console.log("Second laptop:", secondLaptop);
