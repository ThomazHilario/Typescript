/*
    -> Unio Type
    - Permite que uma variável ou argumento recebe mais de um tipo de dado, por meio do operador pipe( | )
*/

// Ex 01:
let value:string | number;
value = 'Olá'
value = 808
// Ex 02:
let list:number[] | [string,string,number]
list = [10,20,30,40,506,2,3,4,5]
list = ['Hello','World',777]
// Ex 03:
let responseApi:string | number | object;
responseApi = "response"
responseApi = 10
responseApi = {
    name:"responseApi",
    id:1,
}