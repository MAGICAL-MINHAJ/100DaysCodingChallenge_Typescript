function MakeShirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`You ordered a ${size} t-shirt with the message: "${message}".`);
  }
  
  // Large shirt with default message
  MakeShirt();
  
  // Medium shirt with default message
  MakeShirt("Medium");
  
  // Any size shirt with custom message
  MakeShirt("Small", "Thank you to my teachers for making coding easy for me!");
  