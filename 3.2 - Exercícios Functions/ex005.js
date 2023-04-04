// Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números,
// e a função responde qual número é maior

const comparison = (n1,n2) => {
    let maior
    if(n1 > n2){
        maior = console.log(`${n1} é maior que ${n2}`)
    }else{
        maior = console.log(`${n2} é maior que ${n1}`)
    }
    return maior
}

comparison(15,12)