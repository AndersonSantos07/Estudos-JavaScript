

let object = {
    name: 'anderson',
    age:20,
    genre: 'male'
}
console.log(object["name"])

for(property in object){
    console.log(`${property} : ${object[property]}`)
}