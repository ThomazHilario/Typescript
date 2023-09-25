// inputs
const inputValor1 = document.getElementById('num1') as HTMLInputElement
const inputValor2 = document.getElementById('num2') as HTMLInputElement

// button
const buttonClick = document.getElementById('click') as HTMLElement

// Select tag
const Select = document.getElementById('selectoptions') as HTMLSelectElement

// painel de resultado
let resultado = document.getElementById('result') as HTMLElement

//regex
let digito = new RegExp(/[0-9]/)

// interface
interface valores{
    value1:number,
    value2:number
}

// Event button
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
            resultado.textContent = String(division({value1:Number(inputValor1.value),value2:Number(inputValor2.value)}))
            break;
        default:
            break;
    }

    if(!digito.test(inputValor1.value) || !digito.test(inputValor2.value)){
        alert('Os valores não correspondem')
    }
})

// funcões das operacões

// Soma
function sum(value1:number,value2:number):number{
    return value1 + value2
}

// Subtração
function sub(value1:number,value2:number):number{
    return value1 - value2
}

// Multiplicação
function mult(value1:number,value2:number):number{
    return value1 * value2
}

// Divisão
function division({value1, value2}:valores):number{
    return value1 / value2
}