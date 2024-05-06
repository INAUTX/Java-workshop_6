// // 5.1
// let promesa
// function manejarAsincornia(callback, promesa) {
//     // 5.2
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let flag = true;
//             if(!flag){
//                 reject("Ha sucedido un error!...");
//             }
//             resolve("De una")
//         },3000)

//     })
//     .then((a)=>{
//         callback();
//         console.log(a)
//     })
// }

// function callback() {// 5.3
//     console.log("¡Promesa cumplida y callback ejecutado!")
// }

// manejarAsincornia(callback,promesa)

// 5.1
function manejarAsincronia(callback, promise) {
    // 5.2
    const miPromesa= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },3000);
    })
    // 5.3
    miPromesa
    .then(() => {
        callback("Promesa cumplida y callback ejecutado!")
    })
    .catch(() =>{
        callback("Promesa rechazada!")
    })
}

// 5.4: Invocar la Función
manejarAsincronia((mensaje) => {
    console.log(mensaje);
});

// 5.5
/*
¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo?
R/El tiempo de mostrar el mensaje "Promesa cumplida y callback ejecutado!" tardaria dependiendo el tiempo acordado.

¿Cómo se comporta la función si la promesa es rechazada en lugar de resuelta? 
R/ En este caso saldria un mensaje "Promesa rechazada!"

¿Puedes modificar la función para que el callback maneje diferentes tipos de información dependiendo 
del resultado de la promesa?

R/ Sí se puede modifica, en la parte despues de crear la constante "miPromesa" 
esta para ver dar la información dependiendo si esta es rechazada o no
*/