var Respuesta = "Si"
var Peticion = "Tramite"
var n1 = 3
var n2 = 6
var op = "*"
var unidades = 3
var stock = 2 
var Periodo = "perro"
var Extension = "5673"

//¿Necesitas atención?//
if(Respuesta == "Si"){
    console.log("Que necesitas?")
    switch(Peticion)
    {
        case "Medicina":
            console.log("La puede encontrar en nuestra farmacia de abajo")
        break;
        case "Tramite":
            console.log("Tome una ficha y espere turno")
        break;

    }

}else{
    console.log("Gracias por su visita")
}

//¿Desea agregar a su carrito?//
if (Respuesta == "Si"){
    console.log("¿Cuantas unidades desea?")
    if(unidades <= stock){
        switch(unidades)
        {
            case 1:
                console.log("Se agrego al carrito")
            break;
            case 2:
                console.log("Se agregaron al carrito")
            break;
        }
    
    }else{
        console.log("No hay suficientes unidades")
    }
}else{
    console.log ("Gracias por su visita")
    }

// ¿n1 en la posicion "1"?
if (Respuesta == "Si"){
    switch(op)
 {
    case "+":
        console.log(n1+n2)
    break;
    case "-":
        console.log(n1-n2)
    break;
    case "*":
        console.log(n1*n2)
    break;
    case "/":
        console.log(n1/n2)
    break;
 }
}else{
    switch(op)
 {
    case "+":
        console.log(n2+n1)
    break;
    case "-":
        console.log(n2-n1)
    break;
    case "*":
        console.log(n2*n1)
    break;
    case "/":
        console.log(n2/n1)
    break;
 }
}

//Lavado
if (Respuesta == "Si") {
    switch (Periodo) {
        case "Corto":
            console.log("El el tiempo de lavado se establecio en 30 minutos")
            break;
        case "Largo":
            console.log("Se establecio el tiempo de lavado en 1 hora")
            break;
        default:
            console.log(Periodo + " no es un periodo valido")
            break;
    }
} else {
    console.log("Por favor asegurese de cerrar bien la escotilla y apagar el equipo adecuadament")
}

//¿Desea ingresar una extension?
if (Respuesta) {
    switch (Extension) {
        case "1121":
            console.log("Por favor espere mientras lo comunicamos")
            break;
        case "2140":
            console.log("Por favor espere mientras lo comunicamos")
            break;
        default:
            console.log(Extension + " no es una extension valida")
            break;
    }
} else {
    console.log("Por favor espere mientras lo enlazamos")
}