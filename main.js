const decimal = document.getElementById("decimal-point");
const clear = document.getElementById("clear-display");
//selectors for the h1 element
const displayValElement = document.getElementById("input-result");
//selectors for numbers
const btnNumber = document.getElementsByClassName("btn-numbers");
//selectors for operators
const btnOperators = document.getElementsByClassName("btn-calculator-operator");
var displayVal = '0';
var pendingVal;
var evalStringArray = [];
//loops to add event listeners
// for(let i = 0; i < btnNumber.length; i++) {
//   btnNumber[i].addEventListeners('click', );
// }
// for(let i = 0; i < btnOperators.length; i++) {
//   btnOperators[i].addEventListeners('click', );
// }
//updating the display content
updateDisplayVal = (e) => {
  var btnText = e.target.innerText;
  if (displayVal === "0") {
    displayVal = "";
  }
  displayVal += btnText;
displayValElement.innerText = displayVal;
}
//Appending the content of the button clicked to displayVal variable


//making the button works
performOperation = (e) => {
  var operator = e.target.innerText;

  switch (operator) {
    case '+': 
    pendingVal = displayVal;
    displayVal = "0";
    displayValElement.innerText = displayVal;
    evalStringArray.push(pendingVal);
    evalStringArray.push('+');
    break;
    case '-':
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push('-');
      break;
      case 'x':
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push('*');
      break;
      case '/':
        pendingVal = displayVal;
        displayVal = "0";
        displayValElement.innerText = displayVal;
        evalStringArray.push(pendingVal);
        evalStringArray.push('/');
        break;
        case '=':
          evalStringArray.push(displayVal);
          var evaluation = eval(evalStringArray.join(' '));
          displayVal = evaluation + '';
          displayValElement.innerText = displayVal;
          evalStringArray = []; // clear the array 
          break;
          default:
            break;
  }
}
//loops to add event listeners
for(let i = 0; i < btnNumber.length; i++){
  btnNumber[i].addEventListener('click', updateDisplayVal);

}
for(let i = 0; i < btnOperators.length; i++){
  btnOperators[i].addEventListener('click', performOperation);
}
//onlicking to clear 
clear.onclick = () => {
  displayVal = '0';
  pendingVal = undefined;
  evalStringArray = [];
  displayValElement.innerHTML = displayVal;
}
//allowing only one decimal point
decimal.onclick = () => {
  if(!displayVal.includes('.')) {
   displayVal += '.';
  }
  displayValElement.innerText = displayVal;
}