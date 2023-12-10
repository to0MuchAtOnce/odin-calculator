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

// Reset all variables and clear the display when clear key is clicked
clearKey.addEventListener('click', () => {
  displayView.textContent = '0';
  firstNumber = '';
  operator = '';
  secondNumber = '';
});

// Adds each number to the displayView variable as its clicked.
function appendNumber(number) {
  if (displayView.textContent === '0') clearDisplay();
  displayView.textContent += number;
}

// Sets the specific operator clicked by the user
function setOperation(operator) {
  firstNumber = displayView.textContent;
  currentOperator = operator;
}

// Perform the evaluation
function evaluate() {
  operate(firstNumber, currentOperator, secondNumber);
}

// Clear the display
function clearDisplay() {
  displayView.textContent = '';
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
