console.log("Mensaje 1: Inmediatamente")


setTimeout(() => {
    console.log("Mensaje 2: Con timeout de 0 segundos")
}, 0);

setTimeout(() => {
    console.log("Mensaje 3: Con timeout de 1 segundo")
}, 1000);

console.log("Mensaje 4: final")
/*
¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente
después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos? - 
¿Que nos dicen este comportamiento sobre el event loop, las macro y micro tareas,
y la forma en que JavaScript maneja las operaciones asíncronas?

R/Lo primero a tener en cuenta es que las microtareas tienen mas prioridad, lo que significa que
se ejecutaran primero(Seran puestas en una cola distinta a las macrotareas), a pesar de contar con 
0 segundos de espera, sigue siendo una macrotarea y las macrotereas son operaciones asincronicas.*/