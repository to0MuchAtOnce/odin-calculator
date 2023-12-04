let displayView = document.querySelector('.display');
const digitKey = document.querySelectorAll('.digit-key');
const operatorKey = document.querySelectorAll('.operator-key');
const clearKey = document.querySelector('.clear-key');

let firstNumber = '';
let operator = '';
let secondNumber = '';

let displayValue = '';

digitKey.forEach((key) => {
  key.addEventListener('click', () => {
    if (val1 === '' && operator === '') {
      displayValue = parseInt(key.innerHTML);
      val1 = displayValue;
      displayView.innerText = val1;
    }
  });
});

// Event for operator keys
operatorKey.forEach((key) => {
  key.addEventListener('click', () => {
    operator = key.innerText;
  });
});

function clearDisplay() {
  clearKey.addEventListener('click', () => {
    displayView.innerText = 0;
    val1 = '';
    val2 = '';
    operator = '';
  });
}

clearDisplay();

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
  total = 0;
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
