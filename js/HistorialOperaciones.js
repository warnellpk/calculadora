let Historial = [];
function ActualizarHistorial(NuevaOperacion) {
    Historial.push(NuevaOperacion);
    if (Historial.length() > 10) {
        Historial.shift()
    }
}