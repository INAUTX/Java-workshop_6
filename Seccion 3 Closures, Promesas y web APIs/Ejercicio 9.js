// mostrara un menseje despues de x segundo
function mostrarMensajeDespuesDeXSegundos(intervalo) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("¡Han pasado " + intervalo + " segundos!");
        }, intervalo * 1000);
    });
}

// Cargar datos de la URL
function cargarDatos(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar los datos");
            }
            return response.json();
        });
}

// Interactuar
function principal() {
    const intervaloSegundos = parseInt(prompt("Ingrese el intervalo en segundos:"));

    mostrarMensajeDespuesDeXSegundos(intervaloSegundos)
        .then(mensaje => {
            console.log(mensaje);
            return cargarDatos('https://jsonplaceholder.typicode.com/posts');
        })
        .then(data => {
            console.log("Datos cargados exitosamente:");
            console.log(data);
        })
        .catch(error => {
            console.error("Se produjo un error:");
            console.error(error);
        });
}

principal()
