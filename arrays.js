'use strict'

// Arrays - arreglos - matrices 

var nombre = "Angel Soto";
var nombres = ["angel soto", "Juan Soto", "Yesica Soto", 56 , 76, true];

var lenguajes = new Array("PHP","JS", "Go", "Java", "C#", "Python");

// var elemento = parseInt(prompt("Que elemento del array quieres?", 0));
// if(elemento >= nombres.length){
//     alert("Introduce el numero correcto menor que " + nombres.length);
// }else{
//     alert("El ususario seleccionado es: " + nombres[elemento]);
// }
//alert(nombres[elemento]);

// document.write("<h1>Lenguajes de programación del 2018</h1>");
// document.write("<ul>");
// for(var i = 0; i < lenguajes.length; i++){
//     document.write("<li>" + lenguajes[i] + "</li>");
// }

// lenguajes.forEach((elemento, indice)=>{
//     console.log(arr);
//     document.write("<li>" + indice + " . " + elemento + "</li>");
// })

for(let lenguaje in lenguajes){
    document.write("<li>" + lenguajes[lenguaje] +"</li>");
}

document.write("</ul>");

//busquedas
var precios = [12,24,56,34];

var busqueda = precios.some(precio => precio >= 58);

//var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");

console.log(busqueda);