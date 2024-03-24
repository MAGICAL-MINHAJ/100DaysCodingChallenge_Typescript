function makeAlbum(artist, title, tracks) {
    // An object to hold album info.
    var album = {
        artist: artist,
        title: title,
    };
    // Add tracks property if a value is provided for the optional parameter
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// albums without track count
var album1 = makeAlbum("The Beatles", "Abbey Road");
var album2 = makeAlbum("Pink Floyd", "The Dark Side of the Moon");
// album objects
console.log(album1); // { artist: "The Beatles", title: "Abbey Road" }
console.log(album2); // { artist: "Pink Floyd", title: "The Dark Side of the Moon" }
// album with track count
var album3 = makeAlbum("Daft Punk", "Random Access Memories", 14);
// Printing album object with track count
console.log(album3); // { artist: "Daft Punk", title: "Random Access Memories", tracks: 14 }
