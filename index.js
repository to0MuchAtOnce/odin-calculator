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
    if (displayView.textContent.length < 9) {
      if (displayView.textContent === '0') clearDisplay();
      firstNumber = displayView.textContent += number;
      console.log('First Number:', typeof firstNumber);
    }
  } else {
    // If the currentOperator is set then this code runs, appending values to the secondNumber variable.
    if (currentOperator && secondNumber.length < 9) {
      secondNumber += number;
      displayView.textContent = secondNumber;
      console.log('Second Number:', typeof secondNumber);
    }
  }
}

plusMinus.addEventListener('click', () => {
  let currentValue = parseFloat(displayView.textContent);
  let newValue = plusOrMinus(currentValue);
  displayView.textContent = newValue;

  if (!currentOperator) {
    firstNumber = String(newValue);
  } else {
    secondNumber = String(newValue);
  }
});

percentageKey.addEventListener('click', () => {
  let currentValue = parseFloat(displayView.textContent);
  let percentageValue = percentage(currentValue);
  displayView.textContent = percentageValue;

  if (!currentOperator) {
    firstNumber = String(currentValue);
  } else {
    secondNumber = String(currentValue);
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
  if (currentOperator === '%') {
    result =
      parseFloat(firstNumber) +
      parseFloat(firstNumber) * (parseFloat(secondNumber) / 100);
  } else {
    result = operate(
      parseFloat(firstNumber),
      currentOperator,
      parseFloat(secondNumber)
    );
  }
  result = Math.round(result * 100000000) / 100000000;
  displayView.textContent = result;
  if (result.toString().length > 9) {
    displayView.style.fontSize = '60px';
  }
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

// Change sum to +/- value
function plusOrMinus(val1) {
  return val1 * -1;
}

// Percentage
function percentage(val1) {
  return val1 / 100;
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
