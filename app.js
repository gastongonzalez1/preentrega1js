let divisaInicial;
let valorDolar = 400;
let valorEuro = 241;
let divisaConvertida;
function convertir(divisa, operacion) {
    if (operacion === 1) {
        divisaConvertida = divisa * valorDolar;
        alert(`${divisaInicial} Dolares son ${divisaConvertida} Pesos Argentinos`);
    } else {
        divisaConvertida = divisa * valorEuro;
        alert(`${divisaInicial} Euros son ${divisaConvertida} Pesos Argentinos`);
    }
    return divisaConvertida;
}
function traerValorInicial () {
    let continuar = true;
    do {
        operacion = Number(prompt(`Bienvenido al convertidor de divisas a Peso Argentino
        ¿Que divisa quiere convertir?
        1)Dolar
        2)Euro
        A continuación se le pedirá que ingrese el numero de la divisa en cuestión.`))
        if (isNaN(operacion) || operacion == undefined || operacion <= 0 || operacion > 2) {
            alert("El valor ingresado no es valido");
        } else {
            if (operacion === 1) {
                divisaInicial = Number(prompt("Ingrese la cantidad de Dolares a convertir a Peso Argentino"));
            } else {
                divisaInicial = Number(prompt("Ingrese la cantidad de Euros a convertir a Peso Argentino"));
            }
            if (isNaN(divisaInicial) || divisaInicial == undefined || divisaInicial <= 0) {
                alert("El valor ingresado no es valido");
            } else {
                continuar = false;
                alert(`Usted ingresó: ${divisaInicial}`);
            }
        }
    } while (continuar)
    convertir(divisaInicial, operacion);
}
function ejecutarPrograma () {
    let continuar;
    do {
        traerValorInicial();
        continuar = prompt("Quiere realizar otra conversion? Escriba ESC para salir");
        if (continuar == "Esc" || continuar == "ESC") {
            continuar = false;
            alert("Muchas gracias por usar nuestro conversor");
        }
    } while (continuar)
}
ejecutarPrograma();
