let Magicians: string[] = ["David Copperfield", "Criss Angel", "Minhaj Khan"];

function makeGreat(Magicians: string[]): void {
  // Looping through the array and modify each element in-place
  for (let i = 0; i < Magicians.length; i++) {
    Magicians[i] = `${Magicians[i]} the Great`;
  }
}

function ShowMagicians(Magicians: string[]): void {
  for (let Magician of Magicians) {
    console.log(Magician);
  }
}

makeGreat(Magicians); // Modifying the original magicians array
ShowMagicians(Magicians);
