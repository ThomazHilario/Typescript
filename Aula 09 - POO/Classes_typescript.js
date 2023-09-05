/*
    -> Classe
    - É o molde de um objeto, onde armazenará as propriedades e métodos.
*/
class Person {
    // Atributos / Propriedades da classe
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new Person('João', 17);
console.log(joao);
