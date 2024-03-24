function MakeShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You ordered a ".concat(size, " t-shirt with the message: \"").concat(message, "\"."));
}
// Large shirt with default message
MakeShirt();
// Medium shirt with default message
MakeShirt("Medium");
// Any size shirt with custom message
MakeShirt("Small", "Thank you to my teachers for making coding easy for me!");
