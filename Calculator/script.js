let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function operate(operator) {
    displayValue += operator;
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}
