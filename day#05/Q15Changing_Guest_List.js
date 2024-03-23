// list of guests in array.
var GuestList = ["Laiba", "Mannu", "Hassan"];
// printing msgs to invite them.
console.log("Dear " + GuestList[0] + ", you are invited to dinner.");
console.log("Dear " + GuestList[1] + ", you are invited to dinner.");
console.log("Dear " + GuestList[2] + ", you are invited to dinner.");
console.log("As " + GuestList[1] + "is busy.");
GuestList[1] = "Umair";
console.log("Dear " + GuestList[0] + ", you are invited to dinner.");
console.log("Dear " + GuestList[1] + ", you are invited to dinner.");
console.log("Dear " + GuestList[2] + ", you are invited to dinner.");
