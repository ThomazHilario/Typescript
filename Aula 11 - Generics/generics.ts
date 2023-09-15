/*
    -> Generics
    - Permite criar estruturas flexíveis, que se adaptam a vários tipos de dados.
    - Utilizado em: funções, class, type alias, interfaces.

    -> Algumas nomeclaturas quando se trabalha com genericsÇ
    - <s> -> state
    - <t> -> Type
    - <k> -> key
    - <v> -> value
    - <e> -> element
*/

function verify<t>(value1:t,value2:t):string{
    return 'Os parâmetros são iguais'
}

// Criando diversas funções com verificações de dados diferentes.

// verificando argumentos de strings
console.log(verify<string>('hello','world'))