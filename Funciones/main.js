confirm("Instrucciones de uso: Ingresa '+' para realizar una suma, '-' para una resta, '*' para una multiplicacion y '/' para una division")
var operador = prompt("Ingrese el operador")

function suma() {
    let n1 = prompt("Ingrese su primer valor")
    let n2 = prompt("Ingrese su segundo valor")
    let resultado = parseInt(n1) + parseInt(n2)

    alert("El resultado es: "+ resultado)
    console.log("El resultado de " + n1 + " + " + n2 + " es: " + resultado)
}
function resta() {
    let n1 = prompt("Ingrese su primer valor")
    let n2 = prompt("Ingrese su segundo valor")
    let resultado = parseInt(n1) - parseInt(n2)

    alert("El resultado es: "+ resultado)
    console.log("El resultado de " + n1 + " - " + n2 + " es: " + resultado)
}
function multiplicacion() {
    let n1 = prompt("Ingrese su primer valor")
    let n2 = prompt("Ingrese su segundo valor")
    let resultado = parseInt(n1) * parseInt(n2)

    alert("El resultado es: "+ resultado)
    console.log("El resultado de " + n1 + " * " + n2 + " es: " + resultado)
}
function division() {
    let n1 = prompt("Ingrese su primer valor")
    let n2 = prompt("Ingrese su segundo valor")
    let resultado = parseInt(n1) / parseInt(n2)

    alert("El resultado es: "+ resultado)
    console.log("El resultado de " + n1 + " / " + n2 + " es: " + resultado)
}

var bandera = "Si"

do{
    switch (operador) {
        case "+":
           suma()
           break;
        case "-":
           resta()
           break;
         case "*":
           multiplicacion()
          break;
        case "/":
          division()
          break;

         default:
          alert("Operador no valido")
          break;
    }

    bandera = prompt("¿Desea realizar otra operacion? (Responda: Si o No")
    if(bandera == "Si"){
    operador = prompt("Ingrese el operador")
    }
} while(bandera == "Si");