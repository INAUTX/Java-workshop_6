function crearSumador(numero){
    return function crearSumar_2(number){
        return numero - number
    }
}

let sumarCinco = crearSumador(5)


console.log(sumarCinco(3))

 sumarCinco = crearSumador(4)

sumarCinco(20)
sumarCinco(2)
sumarCinco(7)