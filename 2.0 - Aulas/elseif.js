/* ELSEIF

    if = se
    else if = mas se
    else = se não

*/

const temperatura = 38

if (temperatura >= 36 && temperatura <=39){
    console.log('A pessoa está saudável')
}else if(temperatura > 39){
    console.log('A pessoa está com febre')
}else{
    console.log('A pessoa está doente, com a temperatura muito baixa')
}

console.log('FIM')