function makeBubble(){
var clutter = "";
for(var i=1; i<=126; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector('.pbottom').innerHTML = clutter;
}
var timer = 60;
function setTimer(){
    var timer2 = setInterval(function(){
    if(timer > 0){
        timer--;
        document.querySelector('#timeVal').textContent = timer; 
    } else {
        clearInterval(timer2); //stop the interval
        document.querySelector('.pbottom').innerHTML = `<h1>GAME OVER!</h1>`;
    }
    },1000);
}
var randomHit = 0;
function getNewHit(){
    randomHit = Math.floor(Math.random()*10);
    document.querySelector('#hitVal').textContent = randomHit;
}
var score = 0;
function increseScore(){
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
}
document.querySelector('.pbottom').addEventListener("click", function(details){
    var clickedNum = Number(details.target.textContent);
    if(clickedNum === randomHit){
        increseScore();
        makeBubble(); //for mew bubbles
        getNewHit(); // for new hit value
    }
});
setTimer();
makeBubble();
getNewHit();
// increseScore();
