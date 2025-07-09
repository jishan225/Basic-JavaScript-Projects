const inputSlider = document.querySelector("[data-lengthSlider]");  //fetching using custom attribute.( data-lengthSlider)
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numberCheck = document.querySelector("#numbers");
const symbolCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generate-button");
const allCheckbox = document.querySelectorAll("input[type=checkbox]"); //represets all checkboxes
const symbols = '~`!@#$%^&*()_-+={}[]|:;"<,>.?/';


let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();

//set password Length
function handleSlider(){
 inputSlider.value = passwordLength;
 lengthDisplay.innerText = passwordLength;

}

function setIndicator(color){
  indicator.style.backgroundColor = color;

}
function getRandomInt(min, max){
 return Math.floor(Math.random() * (max-min)) + min;   //generating random num btw min and max
}
function generateRandomNum(){
    return getRandomInt(0, 9);
}
function generateLowercase(){
 return String.fromCharCode(getRandomInt(97, 123)); //random lowercase character   
}
function generateUppercase(){
    return String.fromCharCode(getRandomInt(65, 91)); //random lowercase character   
}

function generateSymbol(){
 const randomNum = getRandomInt(0, symbols.length);
 return symbols.charAt(randomNum);
}

function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numberCheck.checked) hasNum = true;
    if(symbolCheck.checked) hasSym = true;

    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 0){
        setIndicator("#0f0");
    } else if (
        (hasLower || hasUpper)&&
        (hasNum || hasSym) &&
        passwordLength >= 6
    ) {
          setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
}

async function copyContent(){
    try{
      await navigator.clipboard.writeText(passwordDisplay.value);
      copyMsg.innerText = "copied";
    }
    catch(e){
      copyMsg.innerText = "failed";
    }
    copyMsg.classList.add("active");
    setTimeout( () =>{
        copyMsg.classList.remove("active");
    }, 2000);
    
}

function shufflePassword(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array.join("");
}


function handleCheckboxChange(){
   checkCount = 0;
   allCheckbox.forEach((checkbox) => {
    if(checkbox.checked)
        checkCount++;
   });
   //special case
   if(passwordLength<checkCount){
    passwordLength = checkCount;
    handleSlider();
   }
}

allCheckbox.forEach((checkbox) => {       //we can apply event listner to every checkbox seperately
    checkbox.addEventListener('change', handleCheckboxChange);
});

inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
});

copyBtn.addEventListener('click', () => {
 if(password.length > 0){   //Or  passwordDisplay.value
    copyContent();
 }
});

generateBtn.addEventListener('click', () => {
  //none of the checkbok is selected
  if(checkCount <= 0) return;

  if(passwordLength < checkCount){
    passwordLength = checkCount;
    handleSlider();
  }
   
  //remove old password
   password = "";

   //lets put the stuf mentioned in checkbox
//   if(uppercaseCheck.checked){
//     password += generateUppercase();
//   }

//   if(lowercaseCheck.checked){
//     password += generateLowercase();
//   }

//   if(numberCheck.checked){
//     password += generateRandomNum();
//   }

//   if(symbolCheck.checked){
//     password += generateSymbol();
//   }
let funcArr = [];
if(uppercaseCheck.checked)
    funcArr.push(generateUppercase);

if(lowercaseCheck.checked)
    funcArr.push(generateLowercase);

if(numberCheck.checked)
    funcArr.push(generateRandomNum);

if(symbolCheck.checked)
    funcArr.push(generateSymbol);

// compulsory addition

for(let i=0; i<funcArr.length; i++){
    password += funcArr[i]();
}

//remaining addition

for(let i=0; i<passwordLength-funcArr.length; i++){
    let randomIdx = getRandomInt(0, funcArr.length);
    password += funcArr[randomIdx]();
}

//shuffle password
password = shufflePassword(Array.from(password));
//display in ui
passwordDisplay.value = password;
//calculate strength
calcStrength();


});