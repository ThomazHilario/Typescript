/*
    -> funções em interfaces
    - Podemos passar funções dentro de uma interface.
*/

interface jogo{
    name:string;
    preço:number;
    mostrarpreço:(preco?:number) => void;
}

let jogo1:jogo = {
    name:'God OF War Ragnarok',
    preço:175,
    mostrarpreço:(preco) =>{
        console.log(`O preço do jogo é ${preco}`)
    },
}

jogo1.mostrarpreço(jogo1.preço)