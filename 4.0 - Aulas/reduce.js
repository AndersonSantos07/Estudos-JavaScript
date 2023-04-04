/*

        REDUCE
        RETORNA UM VALOR, MAS NÃO OBRIGATORIAMENTE COMO NO FILTER E MAP QUE RETORNA UMA ARRAY,
        PODE SER UM STRING, UM OBJETO, UMA NOVA ARRAY...

        ACEITA 4 PARAMETROS:
            - ACUMULADOR
            - VALOR ATUAL
            - INDEX
            - ARRAY COMPLETO
*/

const list = [1,2,3,4]

const sum = list.reduce((acc,current) =>
{
    return acc + current
},0)

console.log(sum)