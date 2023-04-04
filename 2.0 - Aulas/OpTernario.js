/*  OPERADOR TERNÁRIO OU CONDICIONAL

        ? se
        : se não

        ex. abaixo, se chuva(rain ?) for verdadeiro levar guarda chuva se nao deixar guarda chuva ('Levar Guarda Chuva' : 'Deixar guarda chuva')
                                                                                                    antes do : é true depois do : é false

*/


//exemplo 1 simples
const rain = true
const umbrela = rain ? 'Levar Guarda Chuva' : 'Deixar guarda chuva'
console.log(umbrela)

//exemplo 2 complexo desbloquear celular unlock cell phone
const biometry = true
const facialRecognition = false
const password = false

const unlockCellPhone = biometry || facialRecognition || password ? 'Celular Debloqueado' : 'Celular Bloqueado'
console.log(unlockCellPhone)

//exemplo 3 complexo TRANSFERENCIA BANCARIA

const accountExist = true
const balance = true
const accountIsNotBlocked = false

const transfer = accountExist && balance && accountIsNotBlocked ? 'Transferência Realizada' : 'Transferência Bloqueada' 
console.log(transfer)
 

