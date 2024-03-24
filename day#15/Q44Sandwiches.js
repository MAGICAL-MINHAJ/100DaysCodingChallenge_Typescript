function describeSandwich() {
    var sandwichItems = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sandwichItems[_i] = arguments[_i];
    }
    // Checking if any items were provided
    if (sandwichItems.length === 0) {
        console.log("You forgot to order a sandwich!");
        return;
    }
    //  creating the summary message
    var summary = "You ordered a sandwich with ";
    if (sandwichItems.length === 1) {
        summary += sandwichItems[0];
    }
    else {
        for (var i = 0; i < sandwichItems.length - 1; i++) {
            summary += "".concat(sandwichItems[i], ", ");
        }
        summary += "and ".concat(sandwichItems[sandwichItems.length - 1]);
    }
    console.log(summary);
}
// Calling the function with different numbers of arguments
describeSandwich("bread");
describeSandwich("bread", "cheese", "turkey");
describeSandwich("bread", "peanut butter", "jelly");
