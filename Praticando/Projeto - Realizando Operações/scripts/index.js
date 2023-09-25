"use strict";
// inputs
const inputValor1 = document.getElementById('num1');
const inputValor2 = document.getElementById('num2');
// button
const buttonClick = document.getElementById('click');
// Select tag
const Select = document.getElementById('selectoptions');
// painel de resultado
let resultado = document.getElementById('result');
//regex
let digito = new RegExp(/[0-9]/);
// Event button
buttonClick.addEventListener('click', function () {
    switch (Select.value) {
        case '0':
            resultado.textContent = String(sum(Number(inputValor1.value), Number(inputValor2.value)));
            break;
        case '1':
            resultado.textContent = String(sub(Number(inputValor1.value), Number(inputValor2.value)));
            break;
        case '2':
            resultado.textContent = String(mult(Number(inputValor1.value), Number(inputValor2.value)));
            break;
        case '3':
            resultado.textContent = String(division(Number(inputValor1.value), Number(inputValor2.value)));
            break;
        default:
            break;
    }
    if (!digito.test(inputValor1.value) || !digito.test(inputValor2.value)) {
        alert('Os valores não correspondem');
    }
});
// funcões das operacões
// Soma
function sum(value1, value2) {
    return value1 + value2;
}
// Subtração
function sub(value1, value2) {
    return value1 - value2;
}
// Multiplicação
function mult(value1, value2) {
    return value1 * value2;
}
// Divisão
function division(value1, value2) {
    return value1 / value2;
}
