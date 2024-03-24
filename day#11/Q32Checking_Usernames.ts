let currentUsers: string[] = ["Ali", "Bobby", "Bhatti", "Mannu", "Adam"];
let newUsers: string[] = ["Khan", "Areesha", "Minhaj", "Asif", "Muazzam"];

for (let newUser of newUsers) {
  const lowercaseNewUser = newUser.toLowerCase();
  let found = false;

  for (let currentUser of currentUsers) {
    if (currentUser.toLowerCase() === lowercaseNewUser) {
      found = true;
      break;
    }
  }

  if (found) {
    console.log(`Username "${newUser}" is already taken. Please choose another.`);
  } else {
    console.log(`Username "${newUser}" is available.`);
  }
}
