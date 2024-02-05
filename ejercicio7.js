'use strict';

var numero = parseInt(prompt("Ingrese algun numero", 1));

document.write("<h1>Tabla de multiplicar del" +numero+"</h1>")
for (var i = 1; i <= 10; i++) {
    //numero = numero * i; 
    document.write( numero + " x " + i + " = " + (i*numero) + "<br/>");
} 

//Rcorrer todas las tablas de multiplicar

for (var c = 1; c <= 10; c++) {
    document.write("<h1>Tabla de multiplicar del " +c+"</h1>");    //numero = numero * i; 
    for (var i = 1; i <= 10; i++) {
    document.write( i + " x " + c + " = " + (i*c) + "<br/>");
    }
}
