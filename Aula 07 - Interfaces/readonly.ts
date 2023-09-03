/*
    -> readonly em interfaces
    - readonly é uma propriedade que faz com que a chave de um valor da interface não seja alterada.
*/

interface person{
    // id inalterável
    readonly id:number;
    name:string;
    age:number;
}

let joao:person = {
    id:1,
    name:'João',
    age:21,
}
