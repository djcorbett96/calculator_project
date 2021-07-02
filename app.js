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
const decimalButton = document.querySelector('#decimal');
const percentButton = document.querySelector('#percent');
const negButton = document.querySelector('#negative');

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
        opButtons.forEach(item => {
            item.classList.remove('operand-selected');
        });
    })
})

opButtons.forEach(item => {
    item.addEventListener('click', event => {
        opButtons.forEach(item => {
            item.classList.remove('operand-selected');
        });
        event.target.classList.add('operand-selected');
        if(currentOperand === undefined) {
            previousBtnValue = currentBtnValue;
            currentBtnValue = undefined;
        }
        currentOperand = event.target.value;
    })
})

equalButton.addEventListener('click', ()=> {
    let answer = calculate(currentOperand, previousBtnValue, currentBtnValue);
    currentBtnValue = answer;
    displayScreenNum.innerText = currentBtnValue;
    currentOperand = undefined;
    opButtons.forEach(item => {
        item.classList.remove('operand-selected');
    });
})

resetButton.addEventListener('click', ()=> {
    currentBtnValue = undefined;
    previousBtnValue = undefined;
    displayScreenNum.innerText = 0;
    opButtons.forEach(item => {
        item.classList.remove('operand-selected');
    });
})


