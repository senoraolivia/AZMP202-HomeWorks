let output = document.getElementById('output');
let value1Input = document.getElementById('value1');
let value2Input = document.getElementById('value2');

let additionButton = document.getElementById('addition');
let substractButton = document.getElementById('substract');
let multiplyButton = document.getElementById('multiply');
let divisionButton = document.getElementById('division');
let resetButton = document.getElementById('reset');

function add() {
    let value1 = +value1Input.value;
    let value2 = +value2Input.value;
    output.textContent = value1 + value2;
}

function substract() {
    let value1 = +value1Input.value;
    let value2 = +value2Input.value;
    output.textContent = value1 - value2;
}

function multiply() {
    let value1 = +value1Input.value;
    let value2 = +value2Input.value;
    output.textContent = value1 * value2;
}

function divide() {
    let value1 = +value1Input.value;
    let value2 = +value2Input.value;
    output.textContent = value1 / value2;
    

}

function reset() {
    value1Input.value = '';
    value2Input.value = '';
    output.textContent = '0';
}

additionButton.addEventListener('click', add);
substractButton.addEventListener('click', substract);
multiplyButton.addEventListener('click', multiply);
divisionButton.addEventListener('click', divide);
resetButton.addEventListener('click', reset);
