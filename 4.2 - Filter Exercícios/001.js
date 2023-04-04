//APENAS os números pares e divísiveis por 5


const numbersList = [20,3,12,17,541,6,87,275,1000,300]

const newNumbersList = numbersList.filter(numbers => numbers % 2 === 0 && numbers % 5 === 0)

console.log(newNumbersList)