let count = 0;

const counterDisplay = document.getElementById("counter-value");
const btnIncrement = document.getElementById("btn-increment");
const btnDecrement = document.getElementById("btn-decrement");
const btnReset = document.getElementById("btn-reset");

function updateDisplay() {
    counterDisplay.textContent = count;

    if (count > 0) {
        counterDisplay.style.color = "black";
    } else if (count < 0) {
        counterDisplay.style.color = "red";
    } else {
        counterDisplay.style.color = "black";
    }
}

function handleIncrement() {
    count++;
    updateDisplay();
}

function handleDecrement() {
    count--;
    updateDisplay();
}

function handleReset() {
    count = 0;
    updateDisplay();
}

btnIncrement.addEventListener("click", handleIncrement);
btnDecrement.addEventListener("click", handleDecrement);
btnReset.addEventListener("click", handleReset);