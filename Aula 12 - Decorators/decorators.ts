/*
    -> Decorators
    - Podem ser usados em: classes,métodos,propriedades.
    - Pode adicionar novos recursos, ou vigiar / verificar alguma coisa.
    - O decorator tem a estrutura de uma funcao
*/

// Criando a estrutura 
function logInfo(target: any){
    console.log('Funcionando')
}

@logInfo
class pessoa{}

// O decorator tem o padrao (fabrica) | no qual recebe um parametro e retorna o proprio decorator.

function logClass(menssagem:string){
    return (target:any) => {
        console.log(menssagem,target)
    }
}
@logClass('Servidor ligado')
class sistema{}


// Praticando //

function LogIp(myIp:string){
    // retornando o decorator com a função factory
    return (target:any) => {
        // retornando a classe extendida de target
        return class extends target{
            ip = myIp
    }   }
}

@LogIp(`191.008.653.01`)
class Server{

}

const server = new Server
console.log(server)


// Podemos usar o decorator em propriedades, seja para validar ou passar algum valor a ela.

// Função factory -> retorna o proprio decorator.
function LogVerify(value:number){
    // target -> retorna o construtor da classe.
    // key -> retorna a propriedade.
    return (target:any,key:string) => {
        // Pegando o valor digitado na instancia.
        let name = target[key]

        // Pegando o nome por meio do getter.
        let getter = () => name

        // fazendo a verificação por meio do setter.
        let setter = (nome:string) => {
            if(nome === ''){
                console.log(`Preencha corretamente o campo vazio`)
            } else if(nome.length <= value){
                console.log('Seu nome e pequeno demais')
            } else{
                name = nome
            }
        }
        // Definindo valor do objeto
        Object.defineProperty(target,key, {
            get: getter,
            set: setter
        })
    }
}

class Cadastro{
    @LogVerify(3)
    name:string;

    //constructor
    constructor(name:string){
        this.name = name
    }
}

// Instanciando a classe
const lucas = new Cadastro('Lucas')