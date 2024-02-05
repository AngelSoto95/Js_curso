'use strict';

var numero = parseInt(prompt("Ingrese el numero"));

for (var i = 1; i <= numero; i++) {
    if (numero % i == 0){
        console.log("Divisor "+ i); 
    }    
}