/*
    - SOMA
    - SUBTRACAO
    -DIVISÃO
    -MULTIPLICAÇÃO


*/

//utilizand arrow function e cases

const calculate = (n1, n2, operation) => {
    let result
    switch (operation) {
        case "+":
            result = n1 + n2
            break;
        case "-":
            result = n1 - n2
        case "*":
            result = n1 * n2
            break;
        case "/":
            result = n1 / n2
            break

        default:
            console.log("Escolha operações entre: +(soma), -(sub), *(mult), /(div)")
            break;
    }
    return result
}

//console.log(calculate(10,5,"?"))


//utilizando arrow function junto com operacoes condicionais if else if else
const calculator = (n1, n2, operation) => {
    let result
    if (operation === "+") {
        result = n1 + n2

    } else if (operation === "-") {
        result = n1 - n2
    } else if (operation === "*") {
        result = n1 * n2
    } else if (operation === "/") {
        result = n1 / n2
    }else{
        console.log("Escolha operações entre: +(soma), -(sub), *(mult), /(div)")
    }
    return result
}


let first_number = 15
let second_number = 5
let operation = "-"
console.log(calculator(first_number,second_number,operation))

