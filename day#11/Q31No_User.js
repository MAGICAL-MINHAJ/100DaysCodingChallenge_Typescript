var userNames = []; // Empty array
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
        var user = userNames_1[_i];
        if (user === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging in again."));
        }
    }
}
// if not empty then we welcome our users.
