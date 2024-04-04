function convertStringToNumber(str: string): number {
    return +str;
  }
  
  // run test
  const strNumber = "321";
  const number = convertStringToNumber(strNumber);
  console.log(number); // Output: 321
  