const myHeading = document.getElementById("myHeading"); 
const   myButton = document.getElementById("myButton"); 
const   myInput = document.getElementById("myInput"); 
const m1 = document.getElementsByClassName("b");
const c= document.getElementsByTagName("body")[0];
myButton.addEventListener('click', () => { myHeading.style.color = myInput.value;
                           });

console.log(m1);
console.log(c);