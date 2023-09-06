/*
    -> Métodos em classes com typescript.
    - Podemos criar métodos, da mesma forma que no javascript, porem com tipagens nos parâmetros e no retorno.
*/

class Person{
    // Definindo propriedades
    name:string;
    age:number;

    // constructor
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }

    // adicionando metodos
    apresentacao(){
        console.log(`Ola eu sou ${this.name}`)
    }

    falandoIdade(){
        console.log(`Eu tenho ${this.age} anos`)
    }

    // metodos com tipagem
    falando(texto:string):void {
        console.log(texto)
    }
}


// instanciando a classe
const lucas = new Person(`Lucas`,21)

lucas.apresentacao()
lucas.falandoIdade()
lucas.falando('Como vai o seu dia ?')