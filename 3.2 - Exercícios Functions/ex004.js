//[ ] Escreva um programa onde, você chame uma função, e ela diga que ano estamos!

const years = (year) => {
    year = new Date().getFullYear()
    return year
}

console.log(years())