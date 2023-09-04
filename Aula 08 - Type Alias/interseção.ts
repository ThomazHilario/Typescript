/*
    -> interseção no type alias
    - Podemos criar estrutura de objeto com o type alias,e fazer a interseção(UNIÃO) entre dois type alias,para um herdar as propriedades do outro.
*/

type Person = {
    id:number;
    name:string;
}

type Programador = {
    linguagens:string[]
}

// primeira forma
let joao: Person & Programador = {
    id:1,
    name:'João',
    linguagens:['html','css','javascript']
}

// segunda forma: criando um tipo que recebe os dois tipos criados.
type Candidatos = Person & Programador

let Ana:Candidatos = {
    id:2,
    name:'Ana',
    linguagens:['php','java','python']
}