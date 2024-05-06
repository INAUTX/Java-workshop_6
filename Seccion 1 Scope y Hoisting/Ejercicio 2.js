alert(`Contamos con el siguiente codigo:
// vars call
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);

// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};`)

alert(`Porfavor indicar lo que sucedera en en cada una de las operaciones`)

prompt(`Indica lo que sucedera en el llamado de las "VARS CALL"
// vars call
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);

// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};`)

alert(`Con respecto a "VARS CALL" inicialmente el "a" mostrara "undefined", debido a que la informacion de "var", antes de estar declarada y asignada, primero se inicializa con un "undefine"`)

// ------------

prompt((`Indica lo que sucedera en el llamado de las "functionS CALL"
// vars call
console.log("Valor de a:", a);
console.log("Valor de b:", b);
console.log("Valor de c:", c);

// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
console.log("Resultado de funcionExpresada:", funcionExpresada());

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};`))

alert(`Con respecto a "funtion CALL" contamos con dos tipo de funciones las declaradas y expresadas, donde se imprimira la de la declarada ya que esta es hoistied, lo que significa que pueden ser llamadas antes de su declaración, mientras que la expresada no y lanzara un "TypeError" deido a que no son del todo hoistied`)

// ------------

