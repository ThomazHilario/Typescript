/*
    -> Encapsulamento
    - Forma de deixar propriedades ou métodos mais protegidos.
    - As propriedades e métodos podem receber por meio do encapsulamento: public(padrão), private, protected e readonly.
    - Protected: Atributos e métodos protegidos podem ser alterados ou acessados somente dentro da class ou subclass.
    - Private: Atributos e métodos só podem ser acessados dentro da classe criada.
*/

class Person{
    // Definindo propriedades
    public id:number = 1;
    protected name:string;
    age:number;
    public email:string;

    // constructor
    constructor(id:number,name:string,age:number,email:string){
        this.id = id
        this.name = name;
        this.age = age;
        this.email = email
    }
    // Acessando propriedade protegida: name
    nameIs(){
        // Acessando propriedade protected
        console.log(this.name)

        // Mostrando informações
        thomaz.mostrarInformacoes()
    }

    // Criando método privado
    private mostrarInformacoes(){
        console.log(this.id,this.name,this.age,this.email)
    }
}

// Instanciando a class
let thomaz = new Person(1,`Thomaz`,18,`thomaz@email.com`)

// acessando uma propriedade protected por meio de um método.
thomaz.nameIs()