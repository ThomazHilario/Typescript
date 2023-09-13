/*
    -> Mixin entre classes.
    - Uma forma de extender mais de uma classe, usando interface e documentações especificas do typescript.
    - Vamos criar um arquivo para armazenar a documenta;ao especifica do typescript para fazer o mixin de classes.
*/

// Importando documento
import {applyMixins} from "./mixin-function/applyMixin";


class Veiculo{
    ligar(){
        console.log('o veiculo ligou')
    }
    desligar(){
        console.log('O veiculo desligou')
    }
}

class Veiculos_add{
    ajeitarRetrovisores(){
        console.log('Retrovisores arrumados')
    }
}


class Carro{
    // Definindo propriedades
    name:string;

    // Construtor
    constructor(name:string){
        this.name = name
    }
}

// criando a interface

interface Carro extends Veiculo, Veiculos_add{}

// chamando a funcao applymixin
applyMixins(Carro,[Veiculo,Veiculos_add])

// Instanciando a classe carro
let bmw = new Carro("BMW")

// Resultados:
bmw.ligar()
bmw.ajeitarRetrovisores()