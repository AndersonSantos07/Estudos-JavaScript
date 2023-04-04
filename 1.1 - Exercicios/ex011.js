//[ ] Faça um programa onde toda vez que ele rodar,
//coloca na tela um número aleatório entre 1 e 100.

let random_number = parseInt(Math.random() * 100) 

console.log(random_number)


//math.random() cria numeros aleatórios entre 0 e 1 ex 0.8908989 
//Math.random() * (max - min) + min
//ex. faça um programa que coloque na tela um valor aleatório entre 0 a 50
let random_two = (Math.random() * (50 - 0) + 0)
console.log(random_two.toFixed(0))