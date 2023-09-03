/*
    -> arrays em interfaces
    - Podemos colocar arrays tipados dentro da interface
*/

interface Programador {
    name:string;
    linguagens:string[];
}

let igor:Programador = {
    name:'Igor',
    linguagens:['Java','React','Html','Css','Python']
}

// Criar um array de uma interface
interface Lista_Candidatos{
    candidatos:Programador[]
}

let listaCandidatos:Lista_Candidatos = {
    candidatos:[
        {name:'Igor',linguagens:['Java','React','Html','Css','Python']},
        {name:'Julia',linguagens:['Html','Css','JavaScript','VueJs']},
        {name:'Ingrid',linguagens:['Python','SQL','Java']}
    ]
}

console.log(listaCandidatos)