// La sucecion de Fibonacci es infinita
// por lo que establecemos limite de terminos//
var limite = prompt("Establezca el limite")

//Serie de Fibonacci//
// Los primeros dos terminos son 0 y 1 pues son necesarios para 
// el termino general al ser una sucesion recursiva//
var Sucesion = [0,1]

// Termino general an = a(n-1) + a(n-2)//

// Dado que los primero dos terminos ya los tenemos, debemos iniciar
// con el tercero, que es la posicion 2 del arreglo//
for (let i = 2; i <= limite; i++) {
    
    Sucesion.push(Sucesion[i-1] + Sucesion[i-2])

}

// Imprime sucesion
console.log(Sucesion)
alert("Sucesion de Fibonacci: " + Sucesion)