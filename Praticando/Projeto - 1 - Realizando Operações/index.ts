// inputs
const inputValor1 = document.getElementById('num1') as HTMLInputElement
const inputValor2 = document.getElementById('num2') as HTMLInputElement

// button
const buttonClick = document.getElementById('click') as HTMLButtonElement

// Select tag
const Select = document.getElementById('selectoptions') as HTMLSelectElement

let resultado = document.getElementById('result') as HTMLElement
buttonClick?.addEventListener('click',function(){

    switch (Select.value) {
        case '0':
            resultado.textContent = String(sum(parseInt(inputValor1.value),parseInt(inputValor2.value)))
            break;
        case '1':
            resultado.textContent = String(sub(parseInt(inputValor1.value),parseInt(inputValor2.value)))
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

