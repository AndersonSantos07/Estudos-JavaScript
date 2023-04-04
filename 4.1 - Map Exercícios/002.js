//7 ou mais esta aprovado, menos reprovado

const list = [
    { name: 'anderson', testGrade: 7 },
    { name: 'maria', testGrade: 8 },
    { name: 'joão', testGrade: 10 },
    { name: 'bruno', testGrade: 2 },
    { name: 'carla', testGrade: 6 },
    { name: 'ana', testGrade: 3 },
    { name: 'julio', testGrade: 1 },
]


const newList = list.map((alunos) =>{
    const result = {
        name: alunos.name,
        testGrade: alunos.testGrade,
        finalResult: alunos.testGrade >= 7 ? 'Approved' : 'disapproved'
    }
    return result
}
) 

console.log(newList)