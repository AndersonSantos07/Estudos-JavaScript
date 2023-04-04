/*
    FUNÇÕES ANONIMAS

    criar uma variánel e dentro dela armazenar uma função.
    essa função nao tera nome e por isso é anonima.


*/


const sum = function(n1,n2){
    const result = n1 + n2
    return result
}

const n1 = 10
const n2 = 20

const definingValuesAndResult = sum(n1,n2)
console.log(definingValuesAndResult)

