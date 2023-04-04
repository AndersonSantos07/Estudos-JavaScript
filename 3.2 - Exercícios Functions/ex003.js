//[ ] Escreva um programa onde, você chame uma função, e ela diga a hora exata!
//new Date().toLocaleTimeString('pt-BR') -> mostra a hora exata no brasil

const Hours = (hours) =>{
    hours = new Date().toLocaleTimeString('pt-BR')
    return hours
}

console.log(Hours())