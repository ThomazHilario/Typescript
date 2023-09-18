/*
    -> Generics em type alias
*/

type produto<t> = t
// Usando em variáveis

let value:produto<string> = 'hello world'
// usando em funções
function getParam(param:produto<number>):number{
    return param
}

getParam(18)