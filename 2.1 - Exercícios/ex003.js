//[ ] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'.
//Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio,
//se não ganhou, mostra outra mensagem.

const machine = parseInt(Math.random() * 10)
const people = parseInt(Math.random() * 10)
let comparative = undefined


if(machine === people){
    comparative = 'Ganhador'
}else{
    comparative = 'Perdedor'
}
    
switch(comparative){

    case 'Ganhador':
        console.log(`Parabéns você ganhou o número da máquina que é ${machine} é igual ao seu ${people}`)
        break
    
    case 'Perdedor':
        console.log(`Você perdeu o número da máquina é ${machine} e o seu é ${people}`)
        break
    
    default:
        console.log('ERROR 404')
        break

}
