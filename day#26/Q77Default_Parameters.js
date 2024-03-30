function greetUser(name) {
    if (name === void 0) { name = "Anonymous"; }
    console.log("Hello, ".concat(name, "!"));
}
// lets see by some examples
greetUser("Minhaj"); // Output: Hello, Minhaj!
greetUser(); // Output: Hello, Anonymous!
