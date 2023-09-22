"use strict";
// inputs
const inputValor1 = document.getElementById('num1');
const inputValor2 = document.getElementById('num2');
// button
const buttonClick = document.getElementById('click');
// Select tag
const Select = document.getElementById('selectoptions');
let resultado = document.getElementById('result');
buttonClick?.addEventListener('click', function () {
    switch (Select.value) {
        case '0':
            resultado.textContent = String(sum(parseInt(inputValor1.value), parseInt(inputValor2.value)));
            break;
        case '1':
            resultado.textContent = String(sub(parseInt(inputValor1.value), parseInt(inputValor2.value)));
            break;
        default:
            break;
    }
});
// funcoes das operacoes
function sum(value1, value2) {
    return value1 + value2;
}
function sub(value1, value2) {
    return value1 - value2;
}
