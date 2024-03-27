function loveHobbies() {
    var listOfHobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        listOfHobbies[_i] = arguments[_i];
    }
    if (listOfHobbies.length === 0) {
        console.log("You don't have any hobbies.");
    }
    else {
        console.log("You enjoy the following hobbies:");
        listOfHobbies.forEach(function (hobby) {
            console.log("- ".concat(hobby));
        });
    }
}
// Example 
loveHobbies("Reading", "Sleeping", "Coding");
