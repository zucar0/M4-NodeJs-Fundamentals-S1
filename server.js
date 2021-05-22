//Importación del módulo: En la variable operaciones se asigna el require y el nombre del archivo. 
//Se puede omitir el .js del archivo porque el require hace referencia a los archivos JavaScript, entonces no es necesario
var operaciones = require('./operaciones');
operaciones.sumar(2,6);
operaciones.restar(2,6);
operaciones.dividir(2,6);
operaciones.multiplicar(2,6);
operaciones.random(1,10,2);