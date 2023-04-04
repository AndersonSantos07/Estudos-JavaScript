//[ ] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado.
//Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime false.
//João e Maria, imprime true.

const pessoas = ['Anderson', 'João']
let firstComparison = pessoas[0] != pessoas[0]
let secondComparison = pessoas[0] != pessoas[1]

console.log(`"${pessoas[0]}" é diferente de "Anderson"?, result:${firstComparison}.
"${pessoas[0]}" é diferente de "${pessoas[1]}"?, result:${secondComparison}.`)