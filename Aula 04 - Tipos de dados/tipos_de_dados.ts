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

/*
    -> Type Enum
    - Serve para enumerar tipos de dados.
    - Sua estrutura lembra uma classe em javascript, sem o constructor.
    - Caso os parametros passados não tenha recebido valores, O Ts os enumera começando do 0.
    - Acessamos os valores como se fosse um objeto, colocando o nome.pripriedade
*/

enum backgroundColors{
    vermelho = "red",
    azul = "blue",
    rosa = "pink",
    roxo = "purple"
}

console.log(backgroundColors.roxo)

// Criando um tipo enum sem valores
// como não terá valores o TS enumera os começando do zero

enum Status{
    Offline,
    Online,
    absent,
    sleeping
}

/*
    -> Type Null
    - Algo que existe mas não tem nada dentro (Ausência de valor da variável).
*/

let userName:null | string;

/*
    -> Type Undefined
    - Algo que não existe.
*/

let oneValue;
console.log(oneValue) // irá retornar underfined porque não tem um valor definido.


/*
    -> Type Unknown
    - Significa desconhecido
    - Usada geralmente quando o desenvolvedor não sabe o tipo de dado que a variável vai receber.
    - Valores do tipo unknown só podem ser atribuidas em variáveis que tem a tipagem any ou unknown.
*/

let response:unknown;
response = "Luiz"

let valueResponse:any = response

/*
    -> Type assertions
    - Afirmando algum tipo de dado.
    - Usamos o as para afirma o tipo de dado de uma variável.
*/

// Ex: 01
let responseApi:unknown = "Thomaz";
let valueResponseApi:string = responseApi as string

// Ex: 02
let responseApi2:unknown = true;
let valueResponseApi2:boolean = responseApi2 as boolean

// Ex: 03
let responseApi3:unknown = 10;
let valueResponseApi3:number = responseApi3 as number