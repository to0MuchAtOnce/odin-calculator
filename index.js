const displayView = document.querySelector('.display');
const digitKey = document.querySelectorAll('.digit-key');
const operatorKey = document.querySelectorAll('.operator-key');
const evaluationKey = document.querySelector('.evaluation-key');
const plusMinus = document.querySelector('.plus-minus');
const percentageKey = document.querySelector('.percentage');
const decimalPoint = document.querySelector('.decimal');
const clearKey = document.querySelector('.clear-key');
const errorMsg = document.querySelector('.error-msg');

let firstNumber = '';
let currentOperator = null;
let secondNumber = '';
let result = '';

let isNegative = false;

// Event for digitKeys to display value on screen
digitKey.forEach((key) => {
  key.addEventListener('click', () => {
    appendNumber(key.textContent);
  });
});

// Reset all variables and clear the display when clear key is clicked
clearKey.addEventListener('click', () => {
  displayView.textContent = '0';
  displayView.style.fontSize = '66px';
  firstNumber = '';
  currentOperator = null;
  secondNumber = '';
  result = '';
});

// Sets the firstNumber variable and adds each number to the displayView variable as its clicked.
function appendNumber(number) {
  // Clear the initial value
  if (currentOperator === null) {
    if (displayView.textContent.length < 8) {
      if (displayView.textContent === '0') {
        displayView.textContent = '';
      }
      firstNumber += number.startsWith('-') ? number : parseFloat(number);
      console.log('First Number:', typeof firstNumber);
      displayView.textContent = firstNumber;
    }
  } else {
    // If the currentOperator is set then this code runs, appending values to the secondNumber variable.
    if (currentOperator && secondNumber.length < 8) {
      secondNumber += number.startsWith('-') ? number : parseFloat(number);
      displayView.textContent = secondNumber;
      console.log('Second Number:', typeof secondNumber);
    }
  }
}

plusMinus.addEventListener('click', () => {
  if (currentOperator === null) {
    firstNumber = (parseFloat(firstNumber) * -1).toString();
    displayView.textContent = firstNumber;
    isNegative = firstNumber.startsWith('-');
  } else {
    secondNumber = (parseFloat(secondNumber) * -1).toString();
    displayView.textContent = secondNumber;
    isNegative = secondNumber.startsWith('-');
  }
});

percentageKey.addEventListener('click', () => {
  let currentValue = parseFloat(displayView.textContent);
  let percentageValue = currentValue / 100;

  if (currentOperator) {
    if (currentOperator === '+' || currentOperator === '-') {
      secondNumber = String(percentageValue * parseFloat(firstNumber));
    } else {
      secondNumber = String(percentageValue);
    }
    displayView.textContent = secondNumber;
  } else {
    firstNumber = String(percentageValue);
    displayView.textContent = firstNumber;
  }
});

// Add decimal point to number
decimalPoint.addEventListener('click', () => {
  console.log(typeof 'Decimal clicked');
  if (!displayView.textContent.includes('.')) {
    displayView.textContent += '.';
    if (currentOperator === null) {
      firstNumber += '.';
    } else if (currentOperator) {
      secondNumber += '.';
    }
  }
});

// Sets the first number, and the specific operator clicked by the user
operatorKey.forEach((key) => {
  key.addEventListener('click', () => {
    if (result === '') {
      currentOperator = key.textContent;
      console.log('Operator in sum:', currentOperator);
    }
  });
});

//Evaluate the sum when key clicked
evaluationKey.addEventListener('click', () => {
  if (currentOperator && secondNumber !== '') {
    evaluate();
  }
  secondNumber = '';
  result = '';
});

function evaluate() {
  if (currentOperator && secondNumber !== '') {
    try {
      result = operate(
        parseFloat(firstNumber),
        currentOperator,
        parseFloat(secondNumber)
      );
      if (isNaN(result)) {
        return;
      }
    } catch (e) {
      return;
    }
  }
  result = Math.round(result * 10000000) / 10000000;
  displayView.textContent = result;
  if (result.toString().length > 8) {
    displayView.style.fontSize = '50px';
  }
  firstNumber = result;
  secondNumber = '';
  console.log('Evaluation:', typeof result, result);
}

function clearDisplay() {
  if (displayView.textContent) {
    displayView.textContent = '';
  }
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

// Change sum to +/- value
function plusOrMinus(val1) {
  return val1 * -1;
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
          displayView.style.fontSize = '50px';
          throw new Error('error');
        } else return divide(val1, val2);
      default:
        return null;
    }
  } catch (e) {
    displayView.textContent = 'Not a number';
  }
}

// console.log(operate(1, '+', 1));
