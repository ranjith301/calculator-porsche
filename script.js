let display = document.getElementById("display");

// Append number to the display
function appendNumber(number) {
  display.value += number;
}

// Append operator to the display
function appendOperator(operator) {
  display.value += operator;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Calculate the result of the expression
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}

// Listen for keyboard input
document.addEventListener("keydown", function(event) {
  const key = event.key;

  // If key is a number or an operator
  if (key >= 0 && key <= 9) {
    appendNumber(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    appendOperator(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1); // Delete the last character
  } else if (key === 'Escape') {
    clearDisplay();
  }
});
