/*
    -> classe abstrata
    - É um conceito, que permite criar uma classe que represente métodos e atributos.
    - Pode ser considerado tambem apenas um modelo. 
*/


// Criando classe abstrata

abstract class Conta {
    abstract abrirConta(dados:object):object;
}

// extendendo classe abstrata a outra class.

class PessoaFisica extends Conta{

    abrirConta(dados: object): object {
        return dados
    }
}


// Instanciando a classe pessoa fisica

let thomaz = new PessoaFisica()




console.log(thomaz.abrirConta({name:"thomaz",age:18,conta:'5555-5555-5555-5555'}))