let displayView = document.querySelector('.display');
const digitKey = document.querySelectorAll('.digit-key');
const clearKey = document.querySelector('.clear-key');

let val1 = null;
let operator = '';
let val2 = null;

let displayValue = 0;

digitKey.forEach((key) => {
  key.addEventListener('click', () => {
    displayValue = key.innerText;
    displayView.innerHTML = parseInt(displayValue);
  });
});

function updateDisplay() {}

function clearDisplay() {
  clearKey.addEventListener('click', () => {
    displayView.textContent = 0;
  });
}

clearDisplay();

// Handle the operations based on type
function operate(val1, operator, val2) {
  total = 0;
  try {
    switch (operator.trim()) {
      case '+':
        total = val1 + val2;
      case '-':
        total = val1 - val2;
      case '/':
        if (val2 === 0) {
          throw 'error';
        }
        total = val1 / val2;
      case '*':
        total = val1 * val2;
    }
  } catch (e) {
    'Error', e;
  }
  return updateDisplay(total);
}

// Addition
function add(num1, num2) {
  return num1 + num2;
}

// Subtract
function subtract(num1, num2) {
  return num1 - num2;
}

// Multiply
function multiply(num1, num2) {
  return num1 * num2;
}

// Divide
function divide(num1, num2) {
  return num1 / num2;
}
