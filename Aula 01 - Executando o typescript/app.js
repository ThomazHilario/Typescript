/*
    -> Executando o typescript
    - Podemos compilar o typescript para javaScript no terminal usando tsc nomedoarquivo.ts
    - Caso queira compilar usando a versão mais recente do ecmascript usamos no terminal: tsc nomedoarquivo.ts --target "ESNEXT" 
*/
function sum(a, b) {
    return a + b;
}
console.log("O valor é: ", sum(2, 3));
