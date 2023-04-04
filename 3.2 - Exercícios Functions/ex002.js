//[ ] Escreva um programa onde, você chame uma função enviando um número
//(aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

const table = (number) => {
    if(number < 1 || number > 10){
        console.log('Apenas aceitamos números entre 1 e 10.')
        return
    }
    for(i=1; i <=10; i++){
        console.log(`${number} x ${i} = ${number * i}`)
    }
}


table(12)