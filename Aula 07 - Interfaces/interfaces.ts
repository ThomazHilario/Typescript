/*
    -> interface
    - Estrutura definida de um objeto, no qual irá seguir um padrão.
    - Podemos definir o tipo de dado para cada chave do objeto.
*/

// Criando uma interface
interface Person{
    name: string;
    idade:number;
    status:string;
    isStudent:boolean;
}

// Colocando a estrutura da interface a uma variável
let pessoa1:Person = {
    name:'Thomaz',
    idade:18,
    status:'Feliz',
    isStudent:true,
}

// Colocando a estrutura da iterface em uma função
function pessoas({name,idade,status,isStudent}:Person):boolean{
    console.log(name)
    console.log(idade)
    console.log(status)
    console.log(isStudent)
    return true
}

pessoas({name:'thomaz',idade:18,status:'triste',isStudent:false})
