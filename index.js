const displayView = document.querySelector('.display');
const digitKey = document.querySelectorAll('.digit-key');
const operatorKey = document.querySelectorAll('.operator-key');
const clearKey = document.querySelector('.clear-key');

let firstNumber = '';
let operator = '';
let secondNumber = '';
let currentOperator = null;

let displayValue = '';

// Event for digitKeys to display value on screen
digitKey.forEach((key) => {
  key.addEventListener('click', () => {
    appendNumber(key.textContent);
    displayValue = displayView.textContent;
  });
});

// Event to get operator keys when clicked
operatorKey.forEach((key) => {
  key.addEventListener('click', () => {
    operator = key.textContent;
  });
});

clearKey.addEventListener('click', () => {
  displayView.textContent = '0';
  firstNumber = '';
  operator = '';
  secondNumber = '';
});

function appendNumber(number) {
  if (displayView.textContent === '0') clearDisplay();
  displayView.textContent += number;
}

function setOperation(operator) {
  firstNumber = displayView.textContent;
  currentOperator = operator;
}

function evaluate() {
  operate(firstNumber, currentOperator, secondNumber);
}

function clearDisplay() {
  displayView.textContent = '';
  shouldResetScreen = false;
}

// Addition
function add(val1, val2) {
  return val1 + val2;
}

// Subtract
function subtract(val1, val2) {
  return val1 - val2;
}

// Multiply
function multiply(val1, val2) {
  return val1 * val2;
}

// Divide
function divide(val1, val2) {
  return val1 / val2;
}

// Handle the operations based on type
function operate(val1, operator, val2) {
  try {
    switch (operator.trim()) {
      case '+':
        return add(val1, val2);
      case '-':
        return subtract(val1, val2);
      case '*':
        return multiply(val1, val2);
      case '/':
        if (val2 === 0) {
          throw 'error';
        } else return divide(val1, val2);
      default:
        return null;
    }
  } catch (e) {
    'Error', e;
  }
}
