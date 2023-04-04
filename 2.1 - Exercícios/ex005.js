//[ ] Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
//Ao rodar o programa, deve imprimir se a pessoa
//é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.

let peoples = [
    {
        name:'Anderson',
        age:20,
        sex:'male',
        job:'Developer Web',
        nationality:'Brazil',
    },
    {
        name:'Mario',
        age:32,
        sex:'male',
        job:'driver',
        nationality:'Italy',
    },
    {
        name:'João',
        age:12,
        sex:'male',
        job:'Studant',
        nationality:'Portugal',
    },
    {
        name:'Maria',
        age:72,
        sex:'female',
        job:'retired',
        nationality:'Brazil',
    },
    {
        name:'Madalena',
        age:27,
        sex:'female',
        job:'attendant',
        nationality:'Portugal',
    }]

let result = peoples[2].age >= 18 && peoples[2].nationality === 'Brazil' ? 'Você está contratado' : 'Você não passou no processo'
console.log(result)


