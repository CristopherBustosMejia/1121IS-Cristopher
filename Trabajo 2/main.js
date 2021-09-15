//    && //

var n1 = "perro";
var n2 = 10;

if(n1 < n2){
    switch(n1)
{
    case 1:
        console.log("n1 es igual a 1")
    break;
    case 2:
        console.log("n1 es igual 2")
    break;
    case "perro":
        console.log("¿Por que hay un perro")
    break;
    default:
        console.log("n1 no es igual a 1, 2 o perro")
    break;
}
}else{
    console.log("n1 es mayor que n2")
}