
const p = document.querySelector("p.description");
const input = document.querySelector("input");
const button = document.querySelector("button");
const togglelist = document.querySelector(".togglelist");
const div1 = document.querySelector(".hides1");

/*button.addEventListener('click', () => { //p.textContent = input.value + ":";
                      
                        p.innerHTML =  input.value + ":";
                        });

p.title = "malathi"; // tooltip*/

togglelist.addEventListener('click', () => { //p.textContent = input.value + ":";
                        div1.style.display = 'none';
        
                    });