/*
TYPEOF E DELETE

*/


//definindo as variaveis e os dados
const number = 7
const string = 'Hello Word!'
const objeto = {
    name:'anderson',
    age:20
}
const  boll = true
const undefinede = undefined
const nul = null
const arraay = ['Olá', 'Mundo']


//mostrando o tipo dos dados
console.log(typeof boll)
console.log(typeof number)
console.log(typeof string)
console.log(typeof objeto)
console.log(typeof undefinede)
console.log(typeof nul)
console.log(typeof arraay)


//deletando a propriedade age
delete objeto.age

console.log(objeto)





















//console.log(arraay[0] + " " + arraay[1])