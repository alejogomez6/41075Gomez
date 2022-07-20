let precioTotal = 0;
let cantidadProductos = 0;
let precio;

function calcularProductos(precio) {
    return precioTotal = precioTotal + precio;
}

do {
    precio = prompt("Ingrese nro");
    const  precioParseado = parseFloat(precio);
    if (precioParseado >= 1) {
        calcularProductos(precioParseado);
        cantidadProductos++;
    }
} while (precio != "FIN");

alert("El total de sus " + cantidadProductos + " productos es $" + precioTotal)
