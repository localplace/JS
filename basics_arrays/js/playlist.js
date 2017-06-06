var playlist = [];
playlist.push("I did it my way");
playlist.unshift("Respect");
printList(playlist);
var lastItem = playlist.pop();
var first = playlist.shift();
document.write(lastItem);
document.write(first);