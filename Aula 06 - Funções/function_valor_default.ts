/*
    -> Parâmetros opcionais em funções
    - Podemos definir o valor de um parâmetro caso alguem não passe nada.
    - E podemos deixar o valor opcional, ou seja o usuário não precisa preencher aquele parâmetro se ele não quiser, usando ?
*/

// Definindo um valor por padrão de um parâmetro
function cadastro(nome:string,email:string,senha:number,sexo = "F"):void{
    let pessoa = {
        nome,
        email,
        senha,
        sexo
    }
    console.log(pessoa)
}

cadastro('Ana','ana@email.com',34755544)

// Definindo um valor opcional
function Cadastro2(nome:string,email:string,idade?:number):void{
    let pessoa = {
        nome,
        email,
        idade
    }

    console.log(pessoa)
}

Cadastro2('Luiz','luiz@email.com')