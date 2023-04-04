//[ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
//Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e 
//João, imprime true. João e Maria, imprime false.

let peoples = ['Anderson', 'Maria']
let first_comparison = peoples[0] == 'Anderson'
let second_comparison = peoples[0] == peoples[1]

console.log(`${peoples[0]} é igual a "${peoples[0]}"?, result:${first_comparison}.
${peoples[0]} é igual a ${peoples[1]}?, result:${second_comparison}.`)