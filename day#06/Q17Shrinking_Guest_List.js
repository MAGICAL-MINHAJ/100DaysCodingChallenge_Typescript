// list of all guests.
var guests = ["Laiba", "Hassan", "Raheem", "Afridi", "Umair", "Mary"];
// informing people about problem.
console.log("Sorry, we can only invite two people for dinner.");
// Removing guests until desired 2 remain
var removedGuest1 = guests.pop();
if (removedGuest1) {
    console.log("Sorry ".concat(removedGuest1, ", we can't invite you to dinner."));
}
var removedGuest2 = guests.pop();
if (removedGuest2) {
    console.log("Sorry ".concat(removedGuest2, ", we can't invite you to dinner."));
}
// inviting only 2.
console.log("Dear ".concat(guests[0], ", please join us for dinner."));
console.log("Dear ".concat(guests[1], ", please join us for dinner."));
// this clears the list to avoid confusion.
guests = [];
// Printing to make sure the list is empty and no further confusion is created between my friends.
console.log("Remaining guests:", guests);
