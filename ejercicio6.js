'use strict';

var number = parseInt(prompt("Ingrese el numero", 0));

while(isNaN(number)){
    number = parseInt(prompt("Introduce un numero valido", 0))
}

if (number % 2 == 0) {
    alert("El numero " + number + " es par")
}else {
    alert("El numero " + number + " es impar")
}
