/*
        FILTER
        -Cria uma nova array a partir da array percorrida.
        -Cria uma nova array, APENAS com os elementos filtrados
        -Aceita 3 parametros
            -ITEM DO ARRAY
            -INDEX
            -ARRAY COMPLETO
*/

const list = [
    { name: 'anderson', vip: true },
    { name: 'maria', vip: false },
    { name: 'joão', vip: true },
    { name: 'bruno', vip: false },
    { name: 'carla', vip: true },
    { name: 'ana', vip: false },
    { name: 'julio', vip: true },
]

const justVips = list.filter((vips) =>{
    return vips.vip === true
})

console.log(justVips)









const students = [
    { name: 'anderson', testGrade: 7 },
    { name: 'maria', testGrade: 8 },
    { name: 'joão', testGrade: 10 },
    { name: 'bruno', testGrade: 2 },
    { name: 'carla', testGrade: 6 },
    { name: 'ana', testGrade: 3 },
    { name: 'julio', testGrade: 1 },
]


const studentsApproved = students.filter((student) => {
    return student.testGrade >= 7

})

console.log(studentsApproved)