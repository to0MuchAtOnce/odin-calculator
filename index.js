const displayView = document.querySelector('.display');
const digitKey = document.querySelectorAll('.digit-key');
const operatorKey = document.querySelectorAll('.operator-key');
const evaluationKey = document.querySelector('.evaluation-key');
const clearKey = document.querySelector('.clear-key');
const errorMsg = document.querySelector('.error-msg');

let firstNumber = '';
let currentOperator = null;
let secondNumber = '';
let result = '';

// Event for digitKeys to display value on screen
digitKey.forEach((key) => {
  key.addEventListener('click', () => {
    appendNumber(key.textContent);
  });
});

// Reset all variables and clear the display when clear key is clicked
clearKey.addEventListener('click', () => {
  displayView.textContent = '0';
  firstNumber = '';
  currentOperator = null;
  secondNumber = '';
  result = '';
});

// Sets the firstNumber variable and adds each number to the displayView variable as its clicked.
function appendNumber(number) {
  // Clear the initial value of '0'
  if (displayView.textContent === '0') clearDisplay();
  if (currentOperator === null) {
    firstNumber = displayView.textContent += number;
    console.log('First Number:', typeof firstNumber);
  }
  // If the currentOperator is set then this code runs, appending values to the secondNumber variable.
  if (currentOperator) {
    secondNumber += number;
    displayView.textContent = secondNumber;
    console.log('Second Number:', typeof secondNumber);
  }
}

// Sets the first number, and the specific operator clicked by the user
operatorKey.forEach((key) => {
  key.addEventListener('click', () => {
    if (result === '') {
      currentOperator = key.textContent;
      console.log('Operator in sum:', currentOperator);
      if (firstNumber !== '' && secondNumber !== '') {
        evaluate();
      }
    }
    currentOperator = key.textContent;
  });
});

evaluationKey.addEventListener('click', () => {
  if ((secondNumber !== '' && evaluationKey) || operatorKey) {
    evaluate();
  } else {
    errorMsg.innerHTML = 'Incomplete sum';
  }
});

function evaluate() {
  result = operate(
    parseInt(firstNumber),
    currentOperator,
    parseInt(secondNumber)
  );
  displayView.textContent = result;
  firstNumber = result;
  secondNumber = '';
  console.log('Evaluation:', typeof result, result);
}

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
      case '×':
        return multiply(val1, val2);
      case '÷':
        if (val2 === 0) {
          throw (e, 'error');
        } else return divide(val1, val2);
      default:
        return null;
    }
  } catch (e) {
    'Error', e;
  }
}

// console.log(operate(1, '+', 1));
