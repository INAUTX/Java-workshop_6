console.log(
    "Intentando llamar a 'funcionDeclarada' antes de su declaración:"
);
try {
    console.log(funcionDeclarada());
} catch (error) {
    console.log("Error:", error.message);
}

console.log(
    "Intentando llamar a 'funcionExpresada' antes de su declaración:"
);
try {
    console.log(funcionExpresada());
} catch (error) {
    console.log("Error:", error.message);
}

// Declaración de una función declarada
function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
}

// Declaración de una función expresada
const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
};

console.log("Llamando a 'funcionDeclarada' después de su declaración:");
console.log(funcionDeclarada());

console.log("Llamando a 'funcionExpresada' después de su declaración:");
console.log(funcionExpresada());

  /* ¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
    R// La función que está expresada no funcionará; lanzará un error. Sin embargo, la función
    declarada sí funcionará debido al hoisting de JavaScript.

    ¿Cómo difieren los resultados entre la función declarada y la función expresada?
    R//Estas difieren el la capacidad de poder llamarlas, en diferentes momentos del codigo, esto devido 
    al hoisting de javaScript

    ¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
    R//Para la utilización de esos dos tipos de funciónes hay que tener en cuenta los momentos en que se declara una función
    expresada y declarada.

  */