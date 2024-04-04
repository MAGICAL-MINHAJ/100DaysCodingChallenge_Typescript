function findSubstringPosition(sentence: string): number {
    return sentence.indexOf("code");
  }
  
  // Example usage:
  const sentence = "The secret code is hidden within this code snippet.";
  const position = findSubstringPosition(sentence);
  console.log("Position of 'code':", position); // Output: 11
  