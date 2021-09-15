var mascota = "perro"
var numero = 2
var invitado = "Pedro"
var genero = "hombre"
var pAlimento= "Sin preferencia"

//1
switch(mascota)
{
    case "perro":
        console.log("Tu mascota es un perro")
    break;
    case "gato":
        console.log("Tu mascota es un gato")
    break;
    default:
        console.log("Tu mascota no esta en la lista")

}

//2
switch(numero)
{
    case 1:
        console.log("Tu numero es 1")
    break;
    case 2:
        console.log("Tu numero es 2")
    break;
    case 3:
        console.log("Tu numero es 3")
    break;
    default:
        console.log("Tu numero no es 1, 2 o 3")
    break;
}

//3
switch(invitado)
{
    case "Paramo":
        console.log("Bienvenido Paramo")
    break;
    case "Wally":
        console.log("Bienvenido Wally")
    break;
    default:
        console.log("No estas en la lista")
    break;
}

//4
switch(genero)
{
    case "hombre":
        console.log("Bienvenido")
    break;
    case "mujer":
        console.log("bienvnida")
}
 //5
switch(pAlimento)
{
    case "vegetariano":
        console.log("Te recomendamos el menu 1")
    break;
    case "vegano":
        console.log("Te recomedamos el menu 2")
    break;
    default:
        console.log("Te recomendamos el especial del dia")
}