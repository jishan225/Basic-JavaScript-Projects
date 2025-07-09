const ans = document.querySelector(".display");


function calcBMI() {
  const inputHeight = parseInt(document.querySelector("#height").value);
  const inputWeight = parseInt(document.querySelector("#weight").value);
  
  if (inputHeight === "" || inputHeight < 0 || isNaN(inputHeight)) {
    ans.innerHTML = `please give a valid height ${document.querySelector('#height').value}`;
  } else if (inputWeight === "" || inputWeight < 0 || isNaN(inputWeight)) {
    ans.innerHTML = `please give a valid weight ${document.querySelector('#weight').value}`;
  } else {
    const bmi = (inputWeight / ((inputHeight * inputHeight) / 10000)).toFixed(2);
    ans.innerHTML = `<span> ${bmi} </span>`;
  }
}
