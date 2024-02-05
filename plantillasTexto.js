'use strict'

//Plantillas de texto

var nombre = prompt("Ingresa tu nombre");
var apellido = prompt("Ingresa tu apellido");

//var texto = "My name is: " + nombre + " <br/> my lastname is: " + apellidos;
var texto = `
    <h1>Hola, qué tal</h1>
    <h3>mi nombre es: ${nombre}</h3>
    <h3>mi apellido es: ${apellido}</h3>
`;
document.write(texto);