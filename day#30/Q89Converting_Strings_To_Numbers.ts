function roundToTwoDecimalPlaces(num: number): number {
    return Math.round(num * 100) / 100;
  }
  
  // test run...
  const nnumber = 3.14159;
  const roundedNumber = roundToTwoDecimalPlaces(nnumber);
  console.log(roundedNumber); // Output: 3.14
  