const time = document.querySelector("[data-clock]")
setInterval(function (){
  let data = new Date();
  time.innerHTML = data.toLocaleTimeString();
}, 1000)