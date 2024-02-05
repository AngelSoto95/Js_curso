'use strict';

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("Introduce numeros hasta que metas uno negativo", 0));
    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma = suma + numero;
       // suma += numero;  esto es lo mismo que lo de la fila 11. 
        contador ++;
    }
    console.log(suma);
    console.log(contador);
}while(numero >= 0);
alert('La suma de todos los numeros es: ' + suma);
alert('La media de todos los numeros es: '+ (suma/contador));