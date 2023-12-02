const displayView = document.querySelector('.display');

let val1 = 'null';
let operator = '';
let val2 = 'null';

let total = null;

function updateDisplay() {
  displayView.textContent = total;
}

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
// console.log(operate(100, '+', 0));

// Addition
function add(num1, num2) {
  return num1 + num2;
}
// console.log(add(2, 5));

// Subtract
function subtract(num1, num2) {
  return num1 - num2;
}
// console.log(subtract(9, 6));

// Multiply
function multiply(num1, num2) {
  return num1 * num2;
}
// console.log(multiply(2, 2));

// Divide
function divide(num1, num2) {
  return num1 / num2;
}
// console.log(divide(10, 2));
