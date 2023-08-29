/*
    -> Funções
    - A sua estrutura é igual ao do javaScript
    - Porem, podemos tipar os argumentos / parâmetros e o retorno
*/

// Ex: 01
function sum(n1:number,n2:number): number{
    return n1 + n2
}

console.log(sum(10,30))

// EX: 02
function parOrImpar(value:number):string{
    if(value % 2 == 0){
        return "É par"
    } else{
        return 'É impar'
    }
}

console.log(parOrImpar(3))

// Ex: 03
function generatePassword(value:number): string{
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('')
    let password = ''
    for(let i = 0;i < value;i++){
        password += characters[Math.floor(Math.random() * characters.length)]
    }
    return password
}

console.log(generatePassword(14))