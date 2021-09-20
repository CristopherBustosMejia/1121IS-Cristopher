String : frase = prompt("Ingresa tu frase");
var banderaA = false
var banderaE = false
var banderaI = false
var banderaO = false
var banderaU = false

for (let i = 0; i <= frase.length; i++) {
    if ((frase.toLowerCase().charAt(i) == "a" && banderaA == false)) {
       console.log(frase.charAt(i)); banderaA = true;
    }
    if ((frase.toLowerCase().charAt(i) == "e" && banderaE == false)) {
        console.log(frase.charAt(i)); banderaE = true;
    }
    if ((frase.toLowerCase().charAt(i) == "i" && banderaI == false)) {
        console.log(frase.charAt(i)); banderaI = true;
    }

    if ((frase.toLowerCase().charAt(i) == "o" && banderaO == false)) {
        console.log(frase.charAt(i)); banderaO = true;
    }
    if ((frase.toLowerCase().charAt(i) == "u" && banderaU == false)) {
        console.log(frase.charAt(i)); banderaU = true;
    }
}