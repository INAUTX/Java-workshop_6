function suma(numeroSumar) {
    let suma = 0;

    return function incrementar(){
        suma++;
        return suma;
    }
}


let contador = suma();

while (true) {
    const opcion = prompt("¿Qué deseas hacer? (incrementar/salir)");
    if (opcion === "incrementar") {
        console.log("Nuevo valor:", contador());
    } else if (opcion === "salir") {
        console.log("Saliendo del programa.");
        break
    } else {
        console.log("Opción no válida. Por favor, elige 'incrementar' o 'salir'.");
    }
}
