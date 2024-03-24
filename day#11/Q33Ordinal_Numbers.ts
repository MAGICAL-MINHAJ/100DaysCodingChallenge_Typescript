let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of numbers) {
  let ending: string;
  if (num === 1) {
    ending = "st";
  } else if (num === 2) {
    ending = "nd";
  } else if (num === 3) {
    ending = "rd";
  } else {
    ending = "th";
  }
  console.log(`${num}${ending}`);
}
