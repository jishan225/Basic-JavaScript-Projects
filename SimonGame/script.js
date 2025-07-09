let gameSeq = [];
let userSeq = [];

let btn = ["red", "green", "yellow", "pink"];
let h2 = document.querySelector("h2");


let started = false;
let level = 0;

document.addEventListener("keypress", function(){
    if(started === false){
        console.log("Game Started");
        started = true;
        levelUp(); 
    }
});

function btnflash(btn){
 btn.classList.add("flash");
 setTimeout(function (){
   btn.classList.remove("flash"); 
 }, 250);
}

function userFlash(btn){
 btn.classList.add("userFlash");
 setTimeout(function (){
   btn.classList.remove("userFlash"); 
 }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let radIdx = Math.floor(Math.random()*3);
    let radColor = btn[radIdx];
    let radBtn = document.querySelector(`.${radColor}`); 
    
    gameSeq.push(radColor);

    btnflash(radBtn);
}

let highScore = 0;

function checkAns(idx){
     
     if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length === gameSeq.length){
        setTimeout(levelUp, 500);
       }
     } else {
        if(level > highScore){
            highScore = level;
        }
        h2.innerHTML  = `Game Over!  Your score was <b>${level}</b><br>  Highest Score: <b>${highScore}</b><br>  press any key to start.`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
        }, 150)
        reset();
     }
}
 
function btnPress(){
    let btn = this;
    userFlash(btn);
 
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);  

    checkAns(userSeq.length - 1);
}

let allBtn = document.querySelectorAll(".btn");

for(btns of allBtn){
    btns.addEventListener("click", btnPress); 
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}

