function Deletrear() {
    let Palabra = prompt("Ingresa la palabra")
    let Spell = []

for (let i = 0; i < Palabra.length; i++) {
    
    Spell.push(Palabra.charAt(i))
    
}

console.log(Spell)
}

var Ingresar = prompt("¿Cuantas palabras ingresara?")

for (let j = 0; j < Ingresar; j++) {
   
    Deletrear();
    
}
