
var n1 = prompt("Ingrese un numero")

function creador_de_palabras(n1) {
    var palabra  = "";
    var letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for ( var i = 0; i < n1; i++ ) {
       palabra += letras.charAt(Math.random() * letras.length);
    }
    return palabra;
 }

 for (let j = 0; j < n1; j++) {
     
    console.log(creador_de_palabras(n1));
 }
 