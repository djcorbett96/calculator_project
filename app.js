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
let rounded = function(num) {
    return Math.round(num * 1000) / 1000
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
let currentBtnValue = 0;
let previousBtnValue;
let displayScreenNum = document.querySelector('#currentNum');
let displayScreenOp = document.querySelector('#currentOp');

// Calculate function to run when equals is pressed after a num, an operator, and another num
const calculate = function(operator, num1, num2) {
    if(operator === '+') {
        return rounded(add(num1, num2));
    }
    else if(operator === '-') {
        return rounded(subtract(num1, num2));
    }
    else if(operator === '*') {
       return rounded(multiply(num1, num2));
    }
    else if(operator === '/') {
        return rounded(divide(num1, num2));
    }
}

// Adding click listener to all buttons
numButtons.forEach(item => {
    item.addEventListener('click', event => {
        if(currentBtnValue === undefined) {
            currentBtnValue = parseFloat(event.target.value);
        }
        else if(currentBtnValue !== undefined) {
            currentBtnValue = parseFloat(currentBtnValue + event.target.value);
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
            currentBtnValue = 0;
        }
        currentOperand = event.target.value;
        decimalButton.disabled = false;
    })
})

equalButton.addEventListener('click', ()=> {
    let answer = calculate(currentOperand, previousBtnValue, currentBtnValue);
    currentBtnValue = answer;
    displayScreenNum.innerText = currentBtnValue;
    currentOperand = undefined;
    decimalButton.disabled = false;
    opButtons.forEach(item => {
        item.classList.remove('operand-selected');
    });
})

resetButton.addEventListener('click', ()=> {
    currentBtnValue = 0;
    previousBtnValue = 0;
    displayScreenNum.innerText = 0;
    decimalButton.disabled = false;
    opButtons.forEach(item => {
        item.classList.remove('operand-selected');
    });
})

decimalButton.addEventListener('click', () => {
    currentBtnValue = currentBtnValue + decimalButton.value;
    displayScreenNum.innerText = currentBtnValue;
    decimalButton.disabled = true;
    opButtons.forEach(item => {
        item.classList.remove('operand-selected');
    });
})