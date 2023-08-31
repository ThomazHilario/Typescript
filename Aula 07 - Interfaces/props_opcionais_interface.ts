/*
    -> propriedade opcionais em interfaces
    - Da mesma maneira em uma função que devemos usar (?) para um parâmetro opcional 
    - usamos (?) para uma propriedade opcional em interfaces.
*/

interface Aluno{
    name:string;
    age:number;
    serie:string
    email?:string
}

// Com email
let aluno1:Aluno = {
    name:'Felipe',
    age:17,
    serie:'3 Ano Ensino médio',
    email:'felipe@email.com'
}

// Sem email
let aluno2:Aluno = {
    name:'Anderson',
    age:16,
    serie:'2 Ano Ensino médio'
}