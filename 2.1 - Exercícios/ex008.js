//[ ] Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente:
//- Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES.
//Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.

const numbers = [2,74,4,8]

if(numbers[0] % 2 === 0 && numbers[1] % 2 === 0 && numbers[2] % 2 === 0 && numbers[3] % 2 === 0){
console.log('Todos os números são pares!')
}else if(numbers[0] % 2 !== 0 && numbers[1] % 2 !== 0 && numbers[2] % 2 !== 0 && numbers[3] % 2 !== 0){
    console.log('Todos os números são ímpares')
}else{
    console.log('Tudo misturado')
}
