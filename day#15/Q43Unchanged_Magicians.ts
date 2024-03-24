let magicianss: string[] = ["David Copperfield", "Criss Angel", "Minhaj Khan"];

function MakeGreat(magicianss: string[]): string[] {
  //  a new array to store the modified names
  const GreatMagicians: string[] = [];

  // Looping through the original array and add modified names to the new array
  for (let magiciann of magicianss) {
    GreatMagicians.push(`${magiciann} the Great`);
  }

  return GreatMagicians; // Returning the new array with modified names
}

function ShowMagicianss(magicianss: string[]): void {
  for (let magiciann of magicianss) {
    console.log(magiciann);
  }
}

// a copy of the original array to pass to make_great()
let GreatMagiciansCopy = MakeGreat([...magicianss]);

console.log("\nOriginal magicians:");
ShowMagicianss(magicianss); // Original array remains unchanged

console.log("\nGreat magicians:");
ShowMagicianss(GreatMagiciansCopy); // Modified array with "the Great"
