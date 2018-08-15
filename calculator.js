let calcScreen = document.querySelector('.screen');

let clearButton = document.querySelector('.clear');
let backButton = document.querySelector('.back');
let numButtons = document.querySelectorAll('.num'), i;

let multiplyButton = document.querySelector('.multiply');
let divideButton = document.querySelector('.divide');
let addButton = document.querySelector('.add');
let subtractButton = document.querySelector('.subtract');
let equalsButton = document.querySelector('.equals');

let previousOperator; 
let workingNumA;
let workingNumB;
let testNumA;

function clear() {
  calcScreen.innerText = "0";
  workingNumA = 0; 
}

function reset() {
  calcScreen.innerText = "0";
}

clearButton.addEventListener('click', clear);

function back() {
  if (calcScreen.innerText.length > 1) {
     calcScreen.innerText = calcScreen.innerText.slice(0, -1);
  } else {
     reset();
  }
}

backButton.addEventListener('click', back);

function mirror() {
  if (calcScreen.innerText === "0") {
    calcScreen.innerText =  (`${event.target.innerText}`);
  } else {
    calcScreen.innerText  += (`${event.target.innerText}`);
 }
}

for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener('click', mirror);
  };

function multiply() {
    previousOperator = "multiply";
    workingNumA = calcScreen.innerText;
    testNumA = parseInt(workingNumA);
    calcScreen.innerText = "0";
}

multiplyButton.addEventListener('click', multiply);

function divide() {
    previousOperator = "divide";
    workingNumA = calcScreen.innerText;
    testNumA = parseInt(workingNumA);
    calcScreen.innerText = "0";
}

divideButton.addEventListener('click', divide);

function add() {
    previousOperator = "add";
    workingNumA = calcScreen.innerText;
    testNumA = parseInt(workingNumA);
    calcScreen.innerText = "0";
}

addButton.addEventListener('click', add);

function subtract() {
    previousOperator = "subtract";
    workingNumA = calcScreen.innerText;
    testNumA = parseInt(workingNumA);
    calcScreen.innerText = "0";
}

subtractButton.addEventListener('click', subtract);

function clearOp() {
    previousOperator = "";
}

function equals() {
    if (previousOperator === "multiply") {
        workingNumB = calcScreen.innerText;
        testNumB = parseInt(workingNumB);
        let mResult = testNumA * testNumB;
        calcScreen.innerText = mResult;
        clearOp;
    } else if (previousOperator === "divide") {
        workingNumB = calcScreen.innerText;
        testNumB = parseInt(workingNumB);
        let dResult = testNumA / testNumB;
        calcScreen.innerText = dResult;
        clearOp;
    } else if (previousOperator === "add") {
        workingNumB = calcScreen.innerText;
        testNumB = parseInt(workingNumB);
        let aResult = testNumA + testNumB;
        calcScreen.innerText = aResult;
        clearOp;
    } else {
        workingNumB = calcScreen.innerText;
        testNumB = parseInt(workingNumB);
        let sResult = testNumA - testNumB;
        calcScreen.innerText = sResult;
        clearOp;
    }
}

equalsButton.addEventListener('click', equals)







