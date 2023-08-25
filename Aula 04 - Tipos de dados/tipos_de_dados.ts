/*
    -> Tipos de dados
    - O typeScript aceita os tipos primitivos de dados: string, number e boolean.
*/

// String
let nameAnime:string = 'Bungou stray dogs'; // Variável com tipagem explícita.
let nameOtherAnime = "Jujutsu Kaisen"; // Variável com tipagem implícita.

// Number
let age:number = 18; // Variável com tipagem explícita
let value = 20; // Variável com tipagem implícita

// Boolean
let isStudent:boolean = true; // Variável com tipagem explícita
let isAutenticate = false; // Variável com tipagem implícita



/*
    -> Tipo any
    - Aceita qualquer tipo de dado.
*/

let text:any = 10
text = 'Hello world'
text = true
text = []
text = {}

/* 
    -> Tipo array
    - No typescript podemos tipar os conteúdo que vem dentro de um array.
    - Caso não definimos uma tipagem e somente passar valores ao array, ele acaba tendo multiplos tipos de dados.
    - Podemos usar o union type para definir quais tipos de dados podem estar dentro de um array.
*/

// Array com type string
let list_name:string[] = ['Ana','Beatriz',"Filipe"]

// Array com type number
let numeros:number[] = [1,8,9,0,10,23,543]

// -> Array com dois tipos usando o Union type

let valores: (string | number)[] = ['valor 1',1,'valor 2',2,'valor 3',3]

// -> Array sem tipagem
let array = ['world',1,true,{}]


/* 
    -> Tuplas
    - É um array com estrutura definida pelo desenvolvedor, tanto para a quantidade de valores, como cada tipo de dado para eles.
*/

let statusWhatsap:[string,string,string] = ['Triste','Normal',"Feliz"]
let endereço:[string,string,number] = ['Rua Desconhecido cunha','Bairro Desconhecido',887]



/*
    -> Object
    - Semelhante ao do javaScript
*/

let aluno:object = {
    name: "thomaz",
    age: 18,
    goodNotes: true,
}

let filme:object = {
    name: "Kimi no na wa",
    autor: "Makoto shinkai",
    personagens:["Taki Tachibana","Mitsuha Miyamizu","Tsukasa Fujii"]
}