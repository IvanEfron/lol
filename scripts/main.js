let precio = parseFloat(prompt("¿Cuánto cuesta tú producto?"));
let porcentaje = parseFloat(prompt("Que porcentaje de descuento quieres aplicar?"));
console.log(" porcentaje ingresado",porcentaje);
let descuento = 0;
let total = precio;
if (porcentaje > 0){
    descuento = precio * (porcentaje/100)
}
total = precio - descuento;
console.log("--> El valor final del producto es de " + total);
