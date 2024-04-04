// Defining a type for the car object
type Car = {
  make: string;
  model: string;
  year: number;
};

// Create a car object
const myCar: Car = {
  make: "Toyota",
  model: "Corolla",
  year: 2000,
};

// Accessing the model property of the car
console.log(myCar.model); // Output: Corolla
