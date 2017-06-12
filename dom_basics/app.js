const myHeading = document.getElementById("myHeading"); 
const   myButton = document.getElementById("myButton"); 
const   myInput = document.getElementById("myInput"); 

myButton.addEventListener('click', () => { myHeading.style.color = myInput.value;
                           });