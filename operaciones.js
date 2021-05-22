function sumar(num1, num2){
    console.log("Sumar");
    console.log(num1+num2);
}
//Exportamos un archivo
// module.exports = sumar; 


//Reto 1: Agregar resta, multiplicación y división
// Resta
function restar(num1,num2){
    console.log("Restar");
    console.log(num1-num2);
}
// Multiplicación
function multiplicar(num1,num2){
    console.log("Multiplicar");
    console.log(num1*num2);
}
//División
function dividir(num1,num2){
    console.log("Dividir")
    console.log(num1/num2)
}

function random(min, max, decimals){
    let presition = Math.pow(10, decimals);
    min = min * presition;
    max = max * presition;
    console.log((Math.random()*(max-min+1)+min)/presition);
}

module.exports = {
    restar, multiplicar, dividir, sumar, random
}

