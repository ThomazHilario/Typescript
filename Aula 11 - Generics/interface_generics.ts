/*
    -> Generics em interfaces
*/


interface Person<t>{
    id:t;
    name:string;
    dinheiro(value:t):string;
}

const Thomaz:Person<number> ={
    id:1,
    name:"Thomaz",
    dinheiro(value:number):string{
        let total = value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
        return total
    }
}

const matheus:Person<string> = {
    id:'02',
    name:"Matheus",
    dinheiro(text:string):string{
        return text
    }
}