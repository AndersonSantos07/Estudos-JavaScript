//[ ] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado.
//Ex: João e João, imprime false. João e Maria, imprime true.
// sinal de diferente !=

let first_name = 'Anderson'
let second_name = 'Santos'
const first_comparison = first_name != 'Anderson'
const second_comparison = second_name != first_name

console.log(`${first_name} é diferente de "Anderson"? result:${first_comparison}.
${second_name} é diferente de ${first_name}? result:${second_comparison}.`)

