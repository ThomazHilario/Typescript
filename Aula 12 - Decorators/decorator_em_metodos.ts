/*
    -> Decorator em métodos.
    - O decorator so é chamado quando chamamos o método em algum local.
*/
// Criando o decorator
function LogVerifyAge(idade:number){

    // retornando o decorator
    return (target:any,key:string,descriptor:PropertyDescriptor) => {
        const metodoOriginal = descriptor.value
        descriptor.value = function (){
            if(idade >= 18){
                console.log('Cadastro para maior de idade')
                return metodoOriginal.apply(this)
            } else{
                console.log('Conta para menor de idade')
                return metodoOriginal.apply(this)
            }
        }
    }
}
// Criando a class
class cadastro{
    name:string;
    age:number;
    email:string;

    // constructor
    constructor(name:string,age:number,email:string){
        this.name = name
        this.age = age
        this.email = email
    }

    // metodo
    @LogVerifyAge(18)
    verificandoPessoa(){
        console.log('Seja bem vindo: ',this.name)
    }
}

// instanciando a class
const luiz = new cadastro('Luiz',17,'luiz@email.com')

luiz.verificandoPessoa()