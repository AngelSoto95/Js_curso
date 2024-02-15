'use strict'

/* 
1. Hacer un programa que pida 6 numeros por pantalla y los meta en un array
2. mostrar el arra entero / (todos sus elementos) ene el cuerpo de la página y en la consola
3. Oredenalo y mostrarlo
4. invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario. que nos diga si lo encuentra y su indice.
*/
function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1>Contenido del array" + " " + textoCustom + "</h1>");
    document.write("<ul>")
    elementos.forEach((elemento, index) =>{
    document.write("<li>" + elemento + "</li>");
});
document.write("</ul>")
}

//Pedir los 6 numeros
//var numeros = new Array(6);
var numeros = [];

for(var i = 0;i <= 5; i++){
    //numeros[i] = parseInt(prompt("Introduzca el numero respectivo", 0));
    numeros.push(parseInt(prompt("Introduzca el numero respectivo", 0)));
}

//Mostrar ene el cuerpo de la pagina
mostrarArray(numeros);


//Mostrar array por consola
console.log(numeros);

//Ordenar y mostrar 
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros,"ordenado");

//Invertir orden y mostrar 
numeros.reverse();
mostrarArray(numeros, 'revertido');

//Contar indices
document.write("<h1>El  array tiene " + numeros.length + " numeros");

//Busqueda
var busqueda = parseInt(prompt("Busca un valor", 0));

var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1 ){
document.write("<hr/><h1>ENCONTRADO</h1>");
document.write("<h1>Posicion de la busqueda: " + posicion + "</h1>");
}else{
    document.write("<hr/><h1>No encontrado</h1><hr/>")
}