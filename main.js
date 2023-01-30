let resultadoConsigna = 96;

// Establecemos el número máximo de intentos
let numeroDeIntentos = [];

// Utilizamos un ciclo while para ejecutar el juego hasta que el jugador acierte el número o se quede sin intentos
while (numeroDeIntentos < 3) {
    // Pedimos al jugador que ingrese un número
    let numeroIngresado = prompt("Continúa esta sucesión numérica: 3, 6, 12, 24, 48,...");

    // Verificamos si el número ingresado es igual al resultado de la consigna
    if (numeroIngresado == resultadoConsigna) {
        alert("¡Felicidades! Acertaste la consigna 😀");
        break;
    } else {
        // Incrementamos el contador de intentos
        alert("El resultado es incorrecto 🥲. Te quedan " + (2 - numeroDeIntentos) + " intentos.");
        numeroDeIntentos++;

        // Notificamos al jugador que su resultado es incorrecto
        if (numeroIngresado = !resultadoConsigna) {
            alert("EL resultado es incorrecto");
        } 
    }
}

// Si el jugador se queda sin intentos, notificamos que ha perdido
if (numeroDeIntentos == 3) {
    alert ("Lo siento, se te acabaron tus intentos.");
}