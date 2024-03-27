// Original list with mixed types
var mixedItems = ['apple', 13, 'banana', true, 'minhaj', 6];
// Filter out only strings
var stringItems = mixedItems.filter(function (item) { return typeof item === 'string'; });
console.log(stringItems); // Output: ['apple', 'banana', 'minhaj']
