//display, first operand, operator, and second operand check
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};


//updating display with input digits from user
function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
    //is display currently 0? yes - overwrite with clicked digits; otherwise digit appends using string concatenation
    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
    console.log(calculator);
};


//decimal functionality
//includes method cheks if decimal point already exists
function inputDecimal(dot) {
    //0. if no value entered first
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = "0.";
        calculator.waitingForSecondOperand === false;
        return;
    }
    // If the `displayValue` does not contain a decimal point
    if (!calculator.displayValue.includes(dot)) {
      // Append the decimal point
        calculator.displayValue += dot;
    }
};


//create first operand/value when operator detected
function handleOperator(nextOperator) {
    //destructure calculator object
    const {firstOperand, displayValue, operator} = calculator
    //parseFloat converts string to a floating point number
    const inputValue = parseFloat(displayValue);

    //handle two operators being entered in a row versus value operator value operator
    if (operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        console.log(calculator);
        return;
    }

    //verify firstOperand is null and that inputValue is not NaN
    if (firstOperand === null && !isNaN(inputValue)) {
        //update firstOperand 
        calculator.firstOperand = inputValue;
    
        //handle first value, second value, and operator key being clicked
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);

        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator)
};


//second operand/value entered after operator clicked
function calculate(firstOperand, secondOperand, operator) {
    if (operator === "+") {
        return firstOperand + secondOperand;
    } else if (operator === "-") {
        return firstOperand - secondOperand;
    } else if (operator === "*") {
      return firstOperand * secondOperand;
    } else if (operator === "/") {
        return firstOperand / secondOperand;
    }

    return secondOperand;
};


//reset calulator with clear button
function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
};


// update display
function updateDisplay () {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
};
updateDisplay();


//detecting which buttons are clicked with event listener
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const target = event.target;

    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        // console.log("operator", target.value);
        handleOperator(target.value);
            updateDisplay();
        return;
    }
    if (target.classList.contains("decimal")) {
        inputDecimal(target.value);
            updateDisplay();
        return;
    }
    if (target.classList.contains("all-clear")) {
        resetCalculator();
            updateDisplay();
        return;
    }

    inputDigit(target.value);
    updateDisplay()
});
