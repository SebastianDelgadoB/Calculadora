function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    var display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById('result').value += number;
}

function appendOperator(operator) {
    document.getElementById('result').value += operator;
}

function calculate() {
    var display = document.getElementById('result');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
