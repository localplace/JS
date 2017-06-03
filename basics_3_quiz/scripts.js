var answer1 = prompt("What is Capital of India");
var answer2 = prompt("1 + 1");
var answer3 = prompt("What is the Capital of Karnataka");
var answer4 = prompt("2+2");
var answer5 = prompt("3+3");
var count = 0;

document.write("questions done");
if(answer1 === "Delhi") {
	count+=1;
}

if(parseInt(answer2) == 2) {
	count+=1;
}

if(answer3 === "Bengaluru") {
	count+=1;
}

if(parseInt(answer4) == 4) {
	count+=1;
}

if(parseInt(answer5) == 6) {
	count+=1;
}

if(count == 5) {
	document.write("You have gold crown ");
}else if(count >=3) {
	document.write("You have silver crown ");
}else if(count >= 1) {
document.write("You have bronze crown ");
}else {
document.write("You have no crown ");
}
