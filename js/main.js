// --- CÓDIGO DE EDWART: Formulario de Reportes ---
const formReporte = document.getElementById('formularioReporte');
if (formReporte) {
    formReporte.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que la página recargue
        document.getElementById('mensajeExito').style.display = 'block';
        formReporte.reset(); // Limpia el formulario
    });
}