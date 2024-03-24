var Magicians = ["David Copperfield", "Criss Angel", "Minhaj Khan"];
function makeGreat(Magicians) {
    // Looping through the array and modify each element in-place
    for (var i = 0; i < Magicians.length; i++) {
        Magicians[i] = "".concat(Magicians[i], " the Great");
    }
}
function ShowMagicians(Magicians) {
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        var Magician = Magicians_1[_i];
        console.log(Magician);
    }
}
makeGreat(Magicians); // Modifying the original magicians array
ShowMagicians(Magicians);
