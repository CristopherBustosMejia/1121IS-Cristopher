String : frase = prompt("Ingresa tu frase");
var nVocales = 0

for (let i = 0; i <= frase.length; i++) {
    if (frase.charAt(i) == "a"){
       nVocales++
    }
    if (frase.charAt(i) == "e"){
        nVocales++
     }
    if (frase.charAt(i) == "i"){
       nVocales++
    }
    if (frase.charAt(i) == "o"){
        nVocales++
     }
    if (frase.charAt(i) == "u"){
       nVocales++
    }
}
console.log(nVocales)