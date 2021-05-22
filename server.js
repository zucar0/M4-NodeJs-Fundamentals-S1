//Importación del módulo: En la variable operaciones se asigna el require y el nombre del archivo. 
//Se puede omitir el .js del archivo porque el require hace referencia a los archivos JavaScript, entonces no es necesario
var operaciones = require('./operaciones');
// operaciones.sumar(2,6);
// operaciones.restar(2,6);
// operaciones.dividir(2,6);
// operaciones.multiplicar(2,6);
// operaciones.random(1,10,2);
// console.log("Enteros")
// operaciones.enteros(1,10);
// console.log("Random return")
// console.log(operaciones.randomConReturn(1,10,2));
// console.log("Math Random")
// console.log(operaciones.mathRandom());

//Reto 2
let lista=[];
// aux = 0;
for(let i=1;i<=100000; i++){
    
    // console.log(aux+1);
    lista.push(operaciones.random(1,100,2));
    // aux++;
}
// console.log(lista.length);

//Reto 3. Ordenamiento
//Burbuja
// for(let k=1; k<lista.length;k++){
//     for(let i=0;i<(lista.length-k);i++){
//         if(lista[i]>lista[i+1]){
//             aux=lista[i];
//             lista[i] = lista[i+1];
//             lista[i+1]=aux;
//         }
//     }
// }
// console.log("Burbuja");
// console.log(lista);

//JS
lista.sort((a,b)=>b-a).reverse();
console.log(lista);