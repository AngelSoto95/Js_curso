'use strict'

// Arrays - arreglos - matrices 

var nombre = "Angel Soto";
var nombres = ["angel soto", "Juan Soto", "Yesica Soto", 56 , 76, true];

var lenguajes = new Array("PHP","jS", "Go", "Java", "c#", "Python");

// var elemento = parseInt(prompt("Que elemento del array quieres?", 0));
// if(elemento >= nombres.length){
//     alert("Introduce el numero correcto menor que " + nombres.length);
// }else{
//     alert("El ususario seleccionado es: " + nombres[elemento]);
// }
//alert(nombres[elemento]);

document.write("<h1>Lenguajes de programación del 2018</h1>");
document.write("<ul>");
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>" + lenguajes[i] + "</li>");
}

document.write("</ul>");