'use strict'

//Funciones anonimas
//Es una función que no tiene nombre

function sumame(numero1, numeo2, sumaYMuestra, sumaPorDos){
    var sumar = numero1 + numeo2;
    
    sumaYMuestra(sumar);
    sumaPorDos(sumar);
    return sumar
}

sumame(5,7,dato => {
    console.log("La suma es: " + dato);
},
dato => {
    console.log("La suma por dos es : " + (dato*2))
});

