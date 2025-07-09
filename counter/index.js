const countValue = document.querySelector('.count'); // we can also use getElementByClass.
function increment() {
    //get the value from ui
  let value = parseInt(countValue.innerText);
  //update the value
  value = value + 1;
  //set the value on ui
  countValue.innerText = value;
  
};

function decrement (){
  //get the value from ui
  let value = parseInt(countValue.innerText);
  //update the value
  value = value - 1;
  //set the value on ui
  countValue.innerText = value;
};