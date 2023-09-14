/*
    -> Generics
    - Permite criar estruturas flexíveis, que se adaptam a vários tipos de dados.
    - Utilizado em: funções, class, type alias, interfaces.
*/

function verify<t>(value1:t,value2:t):string{
    return 'Os parâmetros são iguais'
}

// Criando diversas funções com verificações de dados diferentes.

// verificando argumentos de strings
console.log(verify<string>('hello','world'))

