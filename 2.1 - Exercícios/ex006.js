//[ ] Faça um programa onde leia um numero e diga se ele é par ou impar.
//Consideramos um número como sendo par quando o dividimos por dois e seu resto é zero.
// Já um número é ímpar quando, na divisão por dois, o resto é diferente de zero.

const number = 21.231312


if((parseInt(number % 2)) === 0){
    console.log(`O numero digitado: ${number} é par!`)
}else if((parseInt(number % 2)) === 1){
    console.log(`O número digitado:${number.toFixed(0)} é impar!`)
}else{
    console.log("ERROR 404")
}

