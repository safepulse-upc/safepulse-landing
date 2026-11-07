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

// --- 1. INDICADOR DE NAVEGACIÓN ACTIVA ---
// Obtenemos el nombre del archivo actual (ej. 'report.html' o 'index.html')
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    // Comparamos y aplicamos la clase 'active' definida en el CSS
    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});


// --- 2. CÓDIGO DE ALEXANDER: Ejercicio de Respiración Animado ---
const btnRespirar = document.getElementById('btnRespirar');
const textoRespiracion = document.getElementById('textoRespiracion');
const circulo = document.getElementById('circuloRespiracion'); // Capturamos el círculo

if (btnRespirar && circulo) {
    btnRespirar.addEventListener('click', function() {
        btnRespirar.disabled = true;

        // FASE 1: Inhalar (Expansión)
        textoRespiracion.innerText = "Inhala profundamente... (4s)";
        circulo.classList.add('inhale');
        circulo.classList.remove('exhale');

        // FASE 2: Mantener (Pausa sostenida)
        setTimeout(() => {
            textoRespiracion.innerText = "Mantén la respiración... (4s)";
        }, 4000);
        
        // FASE 3: Exhalar (Contracción)
        setTimeout(() => {
            textoRespiracion.innerText = "Exhala lentamente... (4s)";
            circulo.classList.add('exhale');
            circulo.classList.remove('inhale');
        }, 8000);
        
        // FINALIZAR
        setTimeout(() => {
            textoRespiracion.innerText = "¡Muy bien! Puedes repetirlo si lo necesitas.";
            btnRespirar.disabled = false;
        }, 12000);
    });
}