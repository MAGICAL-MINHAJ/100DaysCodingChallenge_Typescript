var currentUsers = ["Ali", "Bobby", "Bhatti", "Mannu", "Adam"];
var newUsers = ["Khan", "Areesha", "Minhaj", "Asif", "Muazzam"];
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    var lowercaseNewUser = newUser.toLowerCase();
    var found = false;
    for (var _a = 0, currentUsers_1 = currentUsers; _a < currentUsers_1.length; _a++) {
        var currentUser = currentUsers_1[_a];
        if (currentUser.toLowerCase() === lowercaseNewUser) {
            found = true;
            break;
        }
    }
    if (found) {
        console.log("Username \"".concat(newUser, "\" is already taken. Please choose another."));
    }
    else {
        console.log("Username \"".concat(newUser, "\" is available."));
    }
}
