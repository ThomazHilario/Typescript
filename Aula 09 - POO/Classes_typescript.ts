/*
    -> Classe 
    - É o molde de um objeto, onde armazenará as propriedades e métodos.
*/

class Person{
    // Atributos / Propriedades da classe
    name:string;
    age:number | string;

    constructor(name:string,age:number | string){
        this.name = name
        this.age = age
    }
}

const joao = new Person('João',17)

// Verificando o resultado no console:
console.log(joao)