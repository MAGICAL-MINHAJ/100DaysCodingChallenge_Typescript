// Array of places to visit
let placesToVisit: string[] = ["Paris", "Tokyo", "New York", "Machu Picchu", "Santorini"];

// Print array in its original order
console.log("Original order:");
console.log(placesToVisit);

// Print array in alphabetical order without modifying the actual list
console.log("\nAlphabetical order:");
console.log([...placesToVisit].sort());

// Show that the original order is unchanged
console.log("\nOriginal order after sorting:");
console.log(placesToVisit);

// Print array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());

// Show that the original order is unchanged
console.log("\nOriginal order after reverse sorting:");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed order:");
console.log(placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();
console.log("\nOriginal order after double reversing:");
console.log(placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nSorted in alphabetical order:");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit);
