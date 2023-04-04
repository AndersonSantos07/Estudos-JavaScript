/* OPERADORES DE COMPARAÇÃO

    == -> IGUAL // ELE COMPARA O VALOR, MAS NÃO COMPARA O TIPO DO VALOR
    === -> TOTALMENTE IGUAL // COMPARA O VALOR E O TIPO DO DADO!  ///// sempre usar este para comparar valores iguais


    != -> DIFERENTE // ELE COMPARA O  VALOR, MAS NAO O TIPO DO VALOR
    !== -> TOTALMENTE DIFERENTE // ELE VERIFICA O VALOR E O TIPO DO DADO! ///sempre use este para comparar valores diferentes


*/

let person_one = undefined
let person_two = undefined
let number_one = undefined
let number_two = undefined
person_one = 'anderson'
person_two = 'maria'
number_one = "21"
number_two = 21
console.log(person_one == person_two)
console.log(number_one != number_two)