let listItems;
const colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];
listItems = document.querySelectorAll("li");
let abc = document.querySelectorAll(".student-info");
console.log(abc);
for(var i = 0; i < colors.length; i ++) {
  listItems[i].style.color = colors[i];    
}