alert(`El siguiente codigo se ejecutara de una forma, indicar de que forma se mostraran los diferentes emnsajes`);
const respuesta = prompt(`MEDIANTE NUMEROS SEPARADOS CON "," indicar el orden
1 Para "Inicio del script"
2 Para "Primer setTimeout"
3 Para "Segundo setTimeout"
4 Para "Promesa resuelta"
5 Para "Fin del script"

console.log("Inicio del script");

setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

Promise.resolve("Promesa resuelta").then(console.log);

console.log("Fin del script");

`);

function RespuestasIncorrectas (respuestaIncorrecta){
    switch (respuesta) {
        case value:
            
            break;
    
        default:
            break;
    }
}

const respuestasCorrectas = [
    1,5,4,2,3
    // 1-Inicio del script
    // 5-Fin del script
    // 4-Promesa resuelta
    // 2-Primer setTimeout
    // 3-Segundo setTimeout
];

const respuestasArray = respuesta.split(",").map(item => item.trim());

let numeroDeErrores = 0;
let errores = []

for (let i = 0; i < respuestasArray.length; i++) {
    if (String(respuestasCorrectas[i]) !== respuestasArray[i]) {
        numeroDeErrores++;
        errores.push(respuestasArray[i]);
        console.log(respuestasArray[i]);
    } else{
        console.log(respuestasCorrectas)
    }
}

if (numeroDeErrores === 0){
    console.log("¡Felicidades! Acertaste el orden correctamente.");
} else if (numeroDeErrores === 1){
    console.log("Cometiste un error.");
    console.log("El paso incorrecto fue:", errores, "El orden correcto es: ", respuestasCorrectas)
} else{
    console.log("Cometiste", numeroDeErrores,"errores que fueron; ",errores ,"la respuesta correcta es:", respuestasCorrectas)
}
console.log(`RESPUESTA CORECTA:
// 1-Inicio del script
// 5-Fin del script
// 4-Promesa resuelta
// 2-Primer setTimeout
// 3-Segundo setTimeout`)
