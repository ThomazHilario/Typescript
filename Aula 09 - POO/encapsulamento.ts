/*
    -> Encapsulamento
    - Forma de deixar propriedades ou metodos mais protegidos.
    - As propriedades e métodos podem receber por meio do encapsulamento: public(padrão), private, protected e readonly.
    - Protected: Atributos e metodos protegidos podem ser alterados ou acessados somente dentro da class ou subclass.
*/

class Person{
    // Definindo propriedades
    id:number;
    protected name:string;
    age:number;
    public email:string;

    // constructor
    constructor(id:number, name:string,age:number,email:string){
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email
    }
    // Acessando propriedade protegida: name
    nameIs(){
        // Acessando propriedade protected
        console.log(this.name)
    }
}

// Instanciando a class
let thomaz = new Person(2,`Thomaz`,18,`thomaz@email.com`)

// acessando uma porpriedade protected por meio de um método.
thomaz.nameIs()