/*
    -> Arrow functions
    - Podemos criar uma arrow function e tipar os argumentos e o retorno
*/

// função padrão
function menssage(text:string):string{
    return text
}

// Arrow function
let menssage2 = (text:string):string => {
    return text
}

console.log(menssage2('Hello'))