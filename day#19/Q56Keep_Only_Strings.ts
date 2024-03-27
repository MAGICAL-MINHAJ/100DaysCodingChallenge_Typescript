// Original list with mixed types
const mixedItems: (string | number | boolean)[] = ['apple', 13, 'banana', true, 'minhaj', 6];

// Filter out only strings
const stringItems: string[] = mixedItems.filter(item => typeof item === 'string');

console.log(stringItems); // Output: ['apple', 'banana', 'minhaj']
