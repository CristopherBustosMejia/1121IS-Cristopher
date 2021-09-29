//Ingrese datos
var nombreU = prompt("Ingrese nombre de usuario")
var nombreP = prompt("Ingrese su nombre de pila")
var apellidoP = prompt("Ingrese su apellido paterno")
var apellidoM = prompt("Ingrese su apellido materno")
var sexo = prompt("Ingrese su sexo, M o F")
var generoFav = prompt("Ingresa tu genero musical favorito")
var interprete = prompt("Ingresa el nombre de tu interprete favorito")
var sopaP = prompt("Ingresa tu sopa de pasta favorita")
var depoFav = prompt("Ingrese su deporte favorito")
var depoPPref = prompt("Ingrese cual football prefiere, si americano o soccer")

var recomendacion = ""
//Arreglo
var datos = {
    "Nombre Usuario": nombreU,
    "Nombre":{
        "Nombre de pila": nombreP,
        "Apellido paterno" : apellidoP,
        "Apellido materno" : apellidoM,
        "Sexo" : sexo

    },
    "Musica": {
        "Genero": generoFav,
        "Interprete" : interprete
    },
    "Comida": {
        "Sopas": {
            "Pasta": sopaP
        }
    },
    "Deporte":{
        "Dporte Favorito": depoFav,
        "De pelota": {
            "Football": depoPPref

        }
    }
    


}

if(sexo == "M"){
    console.log("Bienvenido")
} else {
    console.log("Bienvenida")
}
console.log(datos["Nombre Usuario"]);
switch (generoFav) {
    case "Rock":
        console.log("Te recomendamos AC/DC")
        break;
    case "rock":
        console.log("Te recomnedamos Linkin Park")
        break;
    default: "Te recomendamos a lo Beatles"
        break;
}
switch (depoFav) {
    case "Futbol":
        console.log("Te recomendamos los tenis del CR7")
        break;
    case "Basquetbol":
        console.log("Te recomendamos los tenis air jordan 9")
        break;
    default: 
    console.log("Te recomendamos nuestra toalla deportiva")
        break;
}
