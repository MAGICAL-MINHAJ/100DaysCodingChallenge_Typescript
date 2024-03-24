let userNames: string[] = []; // Empty array

if (userNames.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let user of userNames) {
    if (user === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${user}, thank you for logging in again.`);
    }
  }
}
// if not empty then we welcome our users.