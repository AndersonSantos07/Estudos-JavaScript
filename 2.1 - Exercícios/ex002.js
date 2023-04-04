//[ ] Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO

const person = {
    name:'Anderson',
    nationality:'Brasilei',
    state:'SP'
}

switch(person.nationality){
    case 'Brazilian','Brasileiro':
        console.log(`${person.name} é brasileiro!`)
        break
    default:
        console.log(`${person.name} não é brasileiro, sua nacionalidade é ${person.nationality}`)
        break
}

if(person.nationality === 'Brasileiro'){
    console.log('Brasileiro')

}else{
    console.log('estrangeiro')
}

