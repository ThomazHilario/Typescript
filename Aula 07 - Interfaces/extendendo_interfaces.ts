/*
    -> Extendendo uma interface
    - Podemos usar a palavra extends para herdar propriedades e métodos de outra interface.
*/

interface Person{
    id:number;
    name:string;
    age:number;
}

// extendendo a interface ProgramerList com propriedades e métodos da interface Person
interface ProgramerList extends Person{
    linguagens?:string[] 
}

let joao:ProgramerList = {
    id:1,
    name:'João',
    age:21,
    linguagens:['PhP','Html',"Css","JavaScript"]
}