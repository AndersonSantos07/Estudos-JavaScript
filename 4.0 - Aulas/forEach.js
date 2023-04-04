/*
    FOR EACH
*/

const students = [
    { name: 'anderson', age: 20 },
    { name: 'maria', age: 70 },
    { name: 'joão', age: 30 },
    { name: 'bruno', age: 25 },
    { name: 'carla', age: 17 },
    { name: 'ana', age: 32 },
    { name: 'julio', age: 40 }
]

let allStudentsAge = 0

students.forEach((student,index,array) =>{
    allStudentsAge += student.age
})

console.log(allStudentsAge)
let media = allStudentsAge / students.length

console.log(media.toFixed(0))
