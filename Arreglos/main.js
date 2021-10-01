var numeros_a_sumar = []
var suma = 0
var i=0

while (i <= 98) {
      i++
    numeros_a_sumar.push(i)
      i++
    numeros_a_sumar.push(i)
      i++
    console.log(i)
}

for (let i = 0; i < numeros_a_sumar.length; i++) {
    suma += numeros_a_sumar[i]

}

console.log(numeros_a_sumar)
console.log(suma)