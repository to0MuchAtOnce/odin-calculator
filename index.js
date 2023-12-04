let displayView = document.querySelector('.display');
const digitKey = document.querySelectorAll('.digit-key');
const operatorKey = document.querySelectorAll('.operator-key');
const clearKey = document.querySelector('.clear-key');

let val1 = '';
let operator = '';
let val2 = '';

let displayValue = '';

digitKey.forEach((key) => {
  key.addEventListener('click', (e) => {
    const digitClicked = e.target.value;
    if (operator === '' && val2 === '') {
      val1 = parseFloat(val1 + digitClicked);
      console.log('FirstNumber', val1);
      displayValue = val1.toString();
    }
    displayValue = key.innerText;
    displayView.innerHTML = parseInt(displayValue);
  });
});

// Event for operator keys
operatorKey.forEach((key) => {
  key.addEventListener('click', (e) => {
    operator = e.target.value;
    console.log('operator');
  });
});

function clearDisplay() {
  clearKey.addEventListener('click', () => {
    displayView.textContent = 0;
    val1 = '';
    val2 = '';
    operator = '';
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
