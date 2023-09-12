/*
    -> Getters e Setters
    - metodo get -> pegar o valor ao inves de acessa-lo diretamente.
    - metodo set -> Permite alterar o valor de uma propriedade por meio de uma função set.
*/
class Jogo {
    // Definindo propriedades 
    name;
    genero;
    isOnline;
    constructor(name, genero, isOnline) {
        this.name = name;
        this.genero = genero;
        this.isOnline = isOnline;
    }
    // Criando um método get para pegar o valor de uma propriedade.
    get getNameJogo() {
        return this.name;
    }
    // Criando um método set para inserir um novo valor ao isOnline.
    set setIsOnline(value) {
        this.isOnline = value;
    }
}
const fifa = new Jogo("fifa", "esportes", false);
// Mudando a propriedade isOnline por meio do set.
fifa.setIsOnline = true;
// Resultado do get.
console.log(fifa.getNameJogo);
// Resultado do set .
console.log(fifa.isOnline);
