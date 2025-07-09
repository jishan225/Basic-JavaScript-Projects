let div = document.querySelector(".box");
let inp = document.querySelector("#inp");
let btn = document.querySelector("#add");
let ul =  document.querySelector("ul");

btn.addEventListener("click", function(){
    let newTask = document.createElement("li");
    newTask.innerText = inp.value;
   
    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("add");
    
    newTask.appendChild(delbtn); 

    ul.appendChild(newTask);
    inp.value = "";
   
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
     let lis = event.target.parentElement;
     lis.remove();
    }
});

