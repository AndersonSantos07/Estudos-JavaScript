//[ ] Faça um programa que encontre a raiz quadrada de um número, multiplique 
//o resultado por 10 e divida por 33

const numberOne = 25
const numberTwo = 10
const numberThree = 33

const raiz_quadrada = Math.sqrt(numberOne)
const multiplique = raiz_quadrada * numberTwo
const divisao = multiplique / numberThree

console.log(`A raiz quadrada do numero ${numberOne} é ${raiz_quadrada} multiplicado por
${numberTwo} fica ${multiplique} e dividido por ${numberThree} o resultado é ${divisao.toFixed(2)}`)


