//TIPOS DE DADOS!!!!!!!!!!!!


/* Strings


-Cadeia de caracteres

maneiras de criar strings 
- "", '', ``.

*/

let myFirstString = "Hello Word!" //tudo o que eu escrever aqui dentro é uma string
let mySecondString = 'Olá Mundo!'
let myThirdString = `Hello Word/Olá Mundo#$%&*` //template literals ou template strings

let text = 'Esse é o meu "texto" '

let numberOfpeoplesInClass = 30 + ' Alunos'

let myTextWithSuperPowers = `tinham
exatamente
${numberOfpeoplesInClass} na minha sala de aula` //é póssível pular linha e de uma maneira mais fácil, puxar um dado.

//console.log(myTextWithSuperPowers)



/* NUMBERS



*/

const numberOne = 174/2  //isso é um número
const numberTwo = "174/2"  //isso é uma string
const numberThree = 12.4
const numberFour = 24
const my_string = "abc" //caso o result utilize essa string o resultado é NaN - Não é um número.
const result = numberThree * my_string


//console.log(numberOne)
//console.log(numberTwo)
//console.log(result)


/* OBJECT

    TODOS OS OBJETOS TEM PROPRIEDADES : VALOR
    EX
    TV

    MARCA: SAMSUNG
    COR: PRETA
    TAMANHO: 75"


*/

//exemplo de criação de um objeto
const person = {
    name:'Anderson',
    age:20,
    height:180,
    sex:'Male',
    adress:{
        street:'Rua macedonia',
        number:34,
        state:'SP',
        Country:'Brazil',
    }
}

//console.log(person) //mostra o objeto inteiro
//console.log(person.name) //mostra o nome também pode mostrar o age,etc..

//console.log(person.adress) //mostra o objeto dentro do objeto
//console.log(person.adress.street) //mostra a rua do endereço, assim como o number,etc..



/* BOOLEAN

*/

let NumberOne = 10
let NumberTwo = 20

NumberTwo = 10

//console.log(NumberOne == NumberTwo)

//lembrando sinal de = é de atribuição e de == de comparação


/* 

    ARRAYS == VETOR OR LISTA


*/

//CASO PRECISE CRIAR UMA LISTA DE NUMEROS, MESMA NOÇÃO DO OBJETO, PARA NÃO PRECISAR CRIAR VÁRIAS VARIÁVEIS USA O ARRAY.
//CONJUNTO DE DADOS

const peoples = ['Anderson','Maria','João']

//NAVEGANDO NA ARRAY através do index

//console.log(peoples) //mostra a array completa
//console.log(peoples[1]) //returns Maria
//console.log(peoples[0])//returns Anderson


//OBJETOS DENTRO DAS ARRYAS, exemplo caso precisemos de um conjunto de alunos com seus dados (propriedades:valores) criamos arrays e dentro dela os objetos que seriam os alunos

const alunos = [{
    name:'Anderson',
    age:20,
    sex:'Male',
    },
    {
    name:'Maria',
    age:22,
    sex:'female',
    },
    {
        name:'João',
        age:19,
        sex:'male'
    }]

    //console.log(alunos) retorna a array 'alunos'
    //console.log(alunos[0]) retorna o index do primeiro objeto
    //console.log(alunos[0].name) retorna o nome do primeiro objeto










