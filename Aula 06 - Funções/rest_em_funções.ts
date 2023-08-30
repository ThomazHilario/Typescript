/*
    -> rest em funções
    - Podemos usar o operador rest(...) com tipagem, para passar multiplos parâmetros em uma função.
*/

function listNumbers(...values:number[]):void{
    let sum = values.reduce((a,b) => a += b)
    console.log(sum)
}

listNumbers(10,20,30,40,50,60,708,9,300)