var resultado = 0
var suma = prompt("Ingrese el numero de veces que se va a sumar")



for (let i = 1 ; i <= suma ; i++) {
    let n1 = prompt("Ingrese los datos a sumar")

    resultado = resultado + parseInt(n1)
    
}
console.log(resultado)