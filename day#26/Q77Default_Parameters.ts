function greetUser(name: string = "Anonymous"): void {
    console.log(`Hello, ${name}!`);
}

// lets see by some examples
greetUser("Minhaj"); // Output: Hello, Minhaj!
greetUser(); // Output: Hello, Anonymous!
