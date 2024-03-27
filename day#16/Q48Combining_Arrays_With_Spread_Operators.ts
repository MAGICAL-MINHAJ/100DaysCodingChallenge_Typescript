const laptopPricesSet1: number[] = [1200, 1500, 1000];
const laptopPricesSet2: number[] = [1100, 1400, 1300];

// Combining arrays using spread operator and sorting them in ascending order
const combinedPrices: number[] = [...laptopPricesSet1, ...laptopPricesSet2].sort((a, b) => a - b);

// Logging the combined and sorted prices
console.log("Combined and sorted prices:", combinedPrices);
