//Faça um programa onde entramos
//com dois números, e ele imprime se o primeiro número é maior que o segundo. Ex: 2 e 5.
//Imprime: false. Faça um programa onde entramos com dois números, e ele imprime se o
// primeiro número é menor que o segundo. Ex: 2 e 5. Imprime: true.

let first_number = 12
let second_number = 15
let first_validation = Boolean(first_number > second_number)
let second_validation = Boolean(first_number < second_number)

console.log(`${first_number} é maior que o ${second_number}? response: ${first_validation}.
${first_number} é menor que o ${second_number}? response:${second_validation}.`)

