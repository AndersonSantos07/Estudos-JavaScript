//Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10.
//Cada nota deve conter uma mensagem diferente.

const nota = 5

switch (nota) {
    case 0:
        console.log(`Horrível, desclassificado sua nota foi: ${nota}`)
        break
    case 1:
        console.log(`Horrível, desclassificado sua nota foi: ${nota}`)
        break
    case 2:
        console.log(`Horrível, desclassificado sua nota foi: ${nota}`)
        break
    case 3:
        console.log(`Ruim, desclassificado sua nota foi: ${nota}`)
        break
    case 4:
        console.log(`Ruim, desclassificado sua nota foi: ${nota}`)
        break
    case 5:
        console.log(`Bom, mas mesmo asism foi desclassificado, sua nota foi: ${nota}`)
        break
    case 6:
        console.log(`Bom, mas mesmo asism foi desclassificado, sua nota foi: ${nota}: ${nota}`)
        break
    case 7:
        console.log(`Parabéns, você foi classificado sua nota foi: ${nota}`)
        break
    case 8:
        console.log(`Parabéns, você foi classificado sua nota foi: ${nota}`)
        break
    case 9:
        console.log(`ótimo, classificado sua nota foi: ${nota}`)
        break
    case 10:
        console.log(`Perfeito, classificado com nota máxima: ${nota}`)
        break
    default:
        console.log('Error 404')
        break
}