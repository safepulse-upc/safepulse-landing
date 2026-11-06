// --- CÓDIGO DE EDWART: Formulario de Reportes ---
const formReporte = document.getElementById('formularioReporte');
const descripcionInput = document.getElementById('descripcion');
const mensajeExito = document.getElementById('mensajeExito');

if (formReporte) {
    formReporte.addEventListener('submit', function(event) {
        // Prevenimos el envío automático
        event.preventDefault(); 

        // Extraemos el valor eliminando espacios en blanco a los extremos
        const textoDescripcion = descripcionInput.value.trim();

        // Validación: Asegurar que la descripción tenga al menos 10 caracteres
        if (textoDescripcion.length < 10) {
            alert("Por favor, detalla un poco más la situación (mínimo 10 caracteres) para poder ayudarte mejor.");
            descripcionInput.focus(); // Retorna el cursor al campo de texto
            return; // Detiene la ejecución aquí
        }

        // Si pasa la validación, mostramos el éxito y limpiamos
        mensajeExito.style.display = 'block';
        formReporte.reset();

        // Ocultamos el mensaje visualmente después de 5 segundos
        setTimeout(() => {
            mensajeExito.style.display = 'none';
        }, 5000);
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