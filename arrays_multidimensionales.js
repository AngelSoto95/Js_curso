'use strict'

var categorias = ['accion', 'terror', 'comedia'];
var peliculas = ['La verdad duele', 'la vida es bella', 'Gran Torino'];

var cine = [categorias,peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][2])

// var elemento = "";

// do{
//     elemento = prompt("Introduce tu pelicula: ");
//     peliculas.push(elemento);
// }while(elemento != "ACABAR")
var indice = peliculas.indexOf('Gran Torino');

if(indice > -1){
    peliculas.splice(indice, 1);
}

var peliculas_string = peliculas.join();

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

//peliculas.pop();
console.log(cadena_array);