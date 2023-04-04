//[ ] Faça um programa que imprima na tela se um nome é
//igual ao outro nome digitado. Ex: João e João, imprime true. João e Maria, imprime false.

const firstName = 'Anderson'
const secondName = 'Mario'
let firstComparison = firstName == 'Anderson'
let secondComparison = secondName == firstName

console.log(`${firstName} é igual a "Anderson?" result:${firstComparison}.
${secondName} é igual a "${firstName}"? result:${secondComparison}.  `)

