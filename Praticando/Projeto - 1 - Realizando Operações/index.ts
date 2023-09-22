// inputs
const inputValor1 = document.getElementById('num1') as HTMLInputElement
const inputValor2 = document.getElementById('num2') as HTMLInputElement

// button
const buttonClick = document.getElementById('click') as HTMLButtonElement

// Select tag
const Select = document.getElementById('selectoptions') as HTMLSelectElement

let resultado = document.getElementById('result') as HTMLElement
buttonClick.addEventListener('click',function(){

    switch (Select.value) {
        case '0':
            resultado.textContent = String(sum(Number(inputValor1.value),Number(inputValor2.value)))
            break;
        case '1':
            resultado.textContent = String(sub(Number(inputValor1.value),Number(inputValor2.value)))
            break;
        case '2':
            resultado.textContent = String(mult(Number(inputValor1.value),Number(inputValor2.value)))
            break;
        case '3':
            resultado.textContent = String(division(Number(inputValor1.value),Number(inputValor2.value)))
            break;
        default:
            break;
    }

})

// funcoes das operacoes

function sum(value1:number,value2:number):number{
    return value1 + value2
}

function sub(value1:number,value2:number):number{
    return value1 - value2
}

function mult(value1:number,value2:number):number{
    return value1 * value2
}

function division(value1:number,value2:number):number{
    return value1 / value2
}