var personName = "Minhaj Khan"; // stores name
console.log("Lowercase:", personName.toLowerCase()); //prints in lowercase
console.log("Uppercase:", personName.toUpperCase()); // prints in uppercase
console.log("Titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); })); //prints in titlecase
