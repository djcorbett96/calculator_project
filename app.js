// Operator functions to be used for calculations
let add = function(num1, num2) {
    return num1 + num2;
}
let subtract = function(num1, num2) {
    return num1 - num2;
}
let multiply = function(num1, num2) {
    return num1 * num2;
}
let divide = function(num1, num2) {
    return num1 / num2;
}

//constants
const numButtons = document.querySelectorAll('.num');
const opButtons = document.querySelectorAll('.operand');
const equalButton = document.querySelector('#equals');
const resetButton = document.querySelector('#reset');

// variables
let currentOperand;
let currentBtnValue;
let previousBtnValue;
let displayScreenNum = document.querySelector('#currentNum');
let displayScreenOp = document.querySelector('#currentOp');

// Calculate function to run when equals is pressed after a num, an operator, and another num
const calculate = function(operator, num1, num2) {
    if(operator === '+') {
        return add(num1, num2);
    }
    else if(operator === '-') {
        return subtract(num1, num2);
    }
    else if(operator === '*') {
       return multiply(num1, num2);
    }
    else if(operator === '/') {
        return divide(num1, num2);
    }
}

// Adding click listener to all buttons
numButtons.forEach(item => {
    item.addEventListener('click', event => {
        if(currentBtnValue === undefined) {
            currentBtnValue = parseInt(event.target.value);
        }
        else if(currentBtnValue !== undefined) {
            currentBtnValue = parseInt(currentBtnValue + event.target.value);
        }
        displayScreenNum.innerText = currentBtnValue;
    })
})

opButtons.forEach(item => {
    item.addEventListener('click', event => {
        currentOperand = event.target.value;
        displayScreenOp.innerText = currentOperand;
        previousBtnValue = currentBtnValue;
        currentBtnValue = undefined;
    })
})

equalButton.addEventListener('click', ()=> {
    let answer = calculate(currentOperand, previousBtnValue, currentBtnValue);
    currentBtnValue = answer;
    displayScreenNum.innerText = currentBtnValue;
    displayScreenOp.innerText = '';
})

resetButton.addEventListener('click', ()=> {
    currentBtnValue = undefined;
    previousBtnValue = undefined;
    displayScreenOp.innerText = '';
    displayScreenNum.innerText = '';
})


