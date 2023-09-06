/*
    -> Herança
    - É quando uma classe filha herda propriedades e métodos da classe pai.
    - Podemos usar o extends para a classe filha extender a classe pai.
    - No constructor devemos usar a funçao super() passando como parâmetro tudo de propriedade que tinha na classe pai
*/

class Login{
    // Definindo propriedades
    email:string;
    senha:number;

    // constructor
    constructor(email:string,senha:number){
        this.email = email;
        this.senha = senha;
    }
}

// classe filha extendida.
class Admin extends Login{
    // Definindo propriedades
    cargo:string;

    // Constructior
    constructor(email:string,senha:number,cargo:string){
        super(email,senha)

        this.cargo = cargo
    }
}


const thomaz = new Admin(`thomaz@email.com`,123456678,'Programador Front-End')