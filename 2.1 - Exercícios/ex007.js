//[ ] Faça um programa onde leia um número e diga
//se ele é: - ímpar, - par, - é um número primo e impar divisivel por 1 ou ele mesmo, - é par e divisível por 5.

const number = 10

if((number % 2) === 0){
    if(number % 5 === 0){console.log(`o número ${number} é par e DIVISIVEL por 5`)}
    else{`o número ${number} é par e não é DIVISIVEL por 5`}
}else{
    for(let i=2;i < number; i++)
        if ( number % i ===0) {
            console.log(`o número ${number} é impar, mas não é PRIMO`)
            break
        } else{
            if(i === number -1) console.log(`o número ${number} é um úmero primo`)
        }
}  