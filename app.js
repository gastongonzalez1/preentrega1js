let divisaInicial;
let valorDolar = 400;
let valorEuro = 241;
let divisaConvertida;

let historialConversiones = [];

class HistorialConversiones {
    constructor (operacion, resultado) {
        this.operacion = operacion;
        this.resultado = resultado;
    }
}


function convertir(divisa, operacion) {
    if (operacion === 1) {
        divisaConvertida = divisa * valorDolar;
        alert(`${divisaInicial} Dolares son ${divisaConvertida} Pesos Argentinos`);
        let historial = new HistorialConversiones(`Operacion de ${divisaInicial} Dolares`, `Resultado de ${divisaConvertida} en ARS`)
        historialConversiones.push(historial);
        console.log(historialConversiones);
    } else {
        divisaConvertida = divisa * valorEuro;
        alert(`${divisaInicial} Euros son ${divisaConvertida} Pesos Argentinos`);
        let historial = new HistorialConversiones(`Operacion de ${divisaInicial} Euros`, `Resultado de ${divisaConvertida} en ARS`)
        historialConversiones.push(historial);
        console.log(historialConversiones);
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
function verHistorialConversiones() {
    let mensaje = "";
        for (let i = 0; i<historialConversiones.length; i++) {
            mensaje += `${historialConversiones[i].operacion} ${historialConversiones[i].resultado}\n`;
    }
     alert(mensaje);
    return mensaje

}
function ejecutarPrograma () {
    let continuar;
    let opciones = 6;
    do {
        traerValorInicial();
        opciones = Number(prompt(`
            Que desea realizar?
            1)Realizar otra conversion
            2)Ver historial de conversiones
            3)Salir
            Ingrese la opcion deseada con el numero correspondiente
        `));
        if(opciones == 3) {
            continuar = false;
            alert("Muchas gracias por usar nuestro conversor");
        } else if (opciones === 2) {
            verHistorialConversiones()
        } else {
            ejecutarPrograma();
        }
    
    } while (continuar)
}
ejecutarPrograma();
