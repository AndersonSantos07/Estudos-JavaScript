// A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e
//número de filhos. A prefeitura deseja saber: - média do salário da população; - média do número de filhos;
//- maior salário; - O final da leitura de dados se dará com a entrada de um salário negativo.
//- Faça isso usando uma função!

const population = [
    {
        name: 'Ronaldo',
        wage: 1200,
        children: 3
    },
    {
        name: 'Anderson',
        wage: 4000,
        children: 1

    },
    {
        name: 'Maria',
        wage: 1800,
        children: 0
    },
    {
        name: 'João',
        wage: 2200,
        children: 4
    },
    {
        name: 'Tereza',
        wage: -1000,
        children: 2
    }
]

function findAverageAndHighesSalary(peopleInformation) {

    let averageSalary = 0
    let averageChildren = 0
    let highestSalary = 0

    for (let i = 0; i < peopleInformation.length; i++) {
        const salary = peopleInformation[i].wage
        const children = peopleInformation[i].children

        if(salary > highestSalary) highestSalary = salary

        if(salary < 0) {
            console.log(`Média de salário R$${(averageSalary / i).toFixed(0)}`)
            console.log(`Média de filhos ${(averageChildren / i).toFixed(0)}`)
            console.log(`Maior salário R$${highestSalary}`)
            break
        }else {
            averageSalary = averageSalary + salary;
            averageChildren += children
        }   


    }
}



function findAverageAndHighesSalaryTwo (peopleInformation){
    let i = 0;
    let averageSalary = 0
    let averageChildren = 0
    let highestSalary = 0

    while (peopleInformation[i].wage > 0){
        averageSalary = averageSalary + peopleInformation[i].wage
        averageChildren += peopleInformation[i].children

        peopleInformation[i].wage > highestSalary ? highestSalary = peopleInformation[i].wage : highestSalary = highestSalary
        i++
    }

    console.log(`Média de salário R$${(averageSalary / i).toFixed(0)}`)
    console.log(`Média de filhos ${(averageChildren / i).toFixed(0)}`)
    console.log(`Maior salário R$${highestSalary}`)

}

findAverageAndHighesSalary(population)
findAverageAndHighesSalaryTwo(population)