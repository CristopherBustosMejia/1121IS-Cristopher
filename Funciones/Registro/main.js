
function registro() {
    var bandera1 = true
while (bandera1 == true) {
    let estudiante = []
    let padre = []
    let madre = []
    let hermanos = []
    let pasatiempos = []

    let array = {
    "Estudiante": estudiante,
    "Datos" : {
        "Padre": padre,
        "Madre" : madre,
        "Hermanos" : hermanos,
        "Pasatiempos" : pasatiempos
        }

    }

    confirm("Bienvenido, Vamos a comenzar con el registro, recuerda leer con atencion cada pregunta")

     estudiante.push(prompt("Ingresa tu nombre, comenzando por apellido"))
     padre.push(prompt("Ingresa el nombre de tu padre, inciando por apellido"))
     madre.push(prompt("Ingresa el nombre de tu madre, comenzando por apellido"))

    do {
        let hermano = prompt("Ingresa el nombre de tu hermano")
        hermanos.push(hermano)
        var confirmacion = confirm("¿Tienes otro hermano?")

    } while (confirmacion == true);

    do {
        let pasatiempo = prompt("Ingresa tus pasatiempos, del que mas realizas al que menos")
        pasatiempos.push(pasatiempo)
        var confirmacion = confirm("¿Deseas ingresar otro pasatiempo?")

    } while (confirmacion == true);

    alert("Su registro se concluyo de manera satisfactoria, puede revisar las respuestas en la consola")
    console.log(array)

    var bandera1 = confirm("¿Desea realizar otro registro?")
}
}

registro();

