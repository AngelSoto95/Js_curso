'use strict'

var categorias = ['accion', 'terror', 'comedia'];
var peliculas = ['La verdad duele', 'la vida es bella', 'Gran Torino'];

var cine = [categorias,peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][2])

var elemento = "";

do{
    elemento = prompt("Introduce tu pelicula: ");
    peliculas.push(elemento);
}while(elemento != "ACABAR")

peliculas.pop();
console.log(peliculas);