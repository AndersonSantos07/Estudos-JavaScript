/*
        MAP
        - Cria um novo array, a partir do array percorrido (array original)
        - Cria um novo array, com a mesma quantidade de itens do array original
        - Aceita tres parametros:
            -item do array
            -index
            -array completo

*/






const numbers = [1,2,3,4]
const students = [
    { name: 'anderson', age: 20 },
    { name: 'maria', age: 70 },
    { name: 'joão', age: 30 },
    { name: 'bruno', age: 25 },
    { name: 'carla', age: 17 },
    { name: 'ana', age: 32 },
    { name: 'julio', age: 40 }
]

const newStudents = students.map((student) => {
    const mudar = {
        name: student.name,
        age: student.age - 10,
        lastname: ' Da silva'
    }
    return mudar
}
)

console.log(newStudents)