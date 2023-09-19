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