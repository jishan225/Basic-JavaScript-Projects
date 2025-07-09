let h2 = document.querySelector("h2");
let btn = document.querySelector("button");
let box = document.querySelector(".box");

btn.addEventListener("click", function(){
    let randomColor = getRandomColor();
    h2.innerText = randomColor;

    box.style.backgroundColor = randomColor;
});

function getRandomColor(){
let red = Math.floor(Math.random()*225);
let green = Math.floor(Math.random()*225);
let blue = Math.floor(Math.random()*225);

let random = `rgb(${red}, ${green}, ${blue})`
return random;
}


