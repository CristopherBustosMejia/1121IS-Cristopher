
var suma = 0;
do {
    var n1 = prompt("Ingresa un numero");
    suma += parseInt(n1);
} while(prompt("Quieres seguir sumando: si / no")=="si");
console.log(suma);