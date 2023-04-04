//[ ] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.

let numberone = 70
let numbertwo = 71
let numberthree = 70.5
let maior = undefined
let menor = undefined

if(numbertwo > numberone){
    maior = numbertwo
}

if(maior < numberthree){
    maior = numberthree
}

if(numberone < numbertwo){
    menor = numberone
}

if(menor > numberthree){
    menor = numberthree
}



console.log(`O número maior entre "${numberone}", "${numbertwo}", "${numberthree}", é o "${maior}".
E o número menor é o "${menor}".`)