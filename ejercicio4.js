'use strict';

var numero1 = parseInt(prompt("Ingrese el primer numero"));
var numero2 = parseInt(prompt("Ingrese el segundo numero"));

while(numero1 < numero2){
    numero1++;
    if (numero1 % 2 != 0) {
        console.log("El " + numero1 + " es impar");
    }
}