//[ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
//Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1
// = {name:"João"},object1 = {name:"Maria"}. João e João, imprime true. João e Maria,
//imprime false

let personOne = new Object()
personOne.name = 'Anderson'


let personTwo = new Object()
personTwo.name = 'João'

const firstComparison = personOne.name == personOne.name
const secondComparison = personOne.name == personTwo.name

console.log(`"${personOne.name}" é igual a "Anderson"?, result:${firstComparison}.
"${personOne.name}" é igual a "${personTwo.name}"?, result:${secondComparison}.`)
