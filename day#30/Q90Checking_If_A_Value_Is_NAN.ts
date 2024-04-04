function generateRandomNumber(): number {
    
    const randomNumber = Math.random();
    
   
    const scaledRandomNumber = Math.floor(randomNumber * 10) + 1;
    
    return scaledRandomNumber;
  }
  
  // test run...
  const randomNumber = generateRandomNumber();
  console.log(randomNumber); // Output: Random number between 1 and 10, inclusive
  