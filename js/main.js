// --- CÓDIGO DE EDWART: Formulario de Reportes ---
const formReporte = document.getElementById('formularioReporte');
if (formReporte) {
    formReporte.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que la página recargue
        document.getElementById('mensajeExito').style.display = 'block';
        formReporte.reset(); // Limpia el formulario
    });
}


// --- CÓDIGO DE ALEXANDER: Ejercicio de Respiración ---
const btnRespirar = document.getElementById('btnRespirar');
const textoRespiracion = document.getElementById('textoRespiracion');

if (btnRespirar) {
    btnRespirar.addEventListener('click', function() {
        btnRespirar.disabled = true;
        textoRespiracion.innerText = "Inhala profundamente... (4s)";
        
        setTimeout(() => {
            textoRespiracion.innerText = "Mantén la respiración... (4s)";
        }, 4000);
        
        setTimeout(() => {
            textoRespiracion.innerText = "Exhala lentamente... (4s)";
        }, 8000);
        
        setTimeout(() => {
            textoRespiracion.innerText = "¡Muy bien! Puedes repetirlo si lo necesitas.";
            btnRespirar.disabled = false;
        }, 12000);
    });
}