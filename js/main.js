// 1. INDICADOR DE NAVEGACIÓN ACTIVA
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});

// 2. MODO OSCURO (Dark Mode con LocalStorage)
const btnTema = document.getElementById('btnTema');
if (localStorage.getItem('temaSafePulse') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (btnTema) btnTema.innerText = '☀️';
}

if (btnTema) {
    btnTema.addEventListener('click', () => {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('temaSafePulse', 'light');
            btnTema.innerText = '🌙';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('temaSafePulse', 'dark');
            btnTema.innerText = '☀️';
        }
    });
}

// 3. BASE DE DATOS SIMULADA: GUARDAR REPORTE (report.html)
const formReporte = document.getElementById('formularioReporte');
const descripcionInput = document.getElementById('descripcion');
const mensajeExito = document.getElementById('mensajeExito');

if (formReporte) {
    formReporte.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const textoDescripcion = descripcionInput.value.trim();
        if (textoDescripcion.length < 10) {
            alert("Por favor, detalla un poco más la situación (mínimo 10 caracteres).");
            descripcionInput.focus();
            return;
        }

        // Creamos el objeto del nuevo reporte
        const nuevoReporte = {
            id: '#' + Math.floor(Math.random() * 1000).toString().padStart(3, '0'),
            tipo: textoDescripcion.length > 40 ? textoDescripcion.substring(0, 40) + '...' : textoDescripcion,
            riesgo: 'Por evaluar',
            estado: 'Nuevo'
        };

        // Guardamos en LocalStorage
        let reportesBD = JSON.parse(localStorage.getItem('bd_safepulse')) || [];
        reportesBD.unshift(nuevoReporte); 
        localStorage.setItem('bd_safepulse', JSON.stringify(reportesBD));

        mensajeExito.style.display = 'block';
        formReporte.reset();
        setTimeout(() => { mensajeExito.style.display = 'none'; }, 5000);
    });
}

// 4. BASE DE DATOS SIMULADA: LEER Y MOSTRAR (psychologist.html)
const tablaReportes = document.getElementById('tablaReportes');
if (tablaReportes) {
    const reportesGuardados = JSON.parse(localStorage.getItem('bd_safepulse')) || [];
    
    reportesGuardados.forEach(reporte => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${reporte.id}</td>
            <td>${reporte.tipo}</td>
            <td class="risk-medium">${reporte.riesgo}</td>
            <td><span class="badge badge-warning">${reporte.estado}</span></td>
        `;
        tablaReportes.prepend(fila); // Inserta la nueva fila al inicio del DOM
    });
}

// 5. ANIMACIÓN DE RESPIRACIÓN (index.html)
const btnRespirar = document.getElementById('btnRespirar');
const textoRespiracion = document.getElementById('textoRespiracion');
const circulo = document.getElementById('circuloRespiracion');

if (btnRespirar && circulo) {
    btnRespirar.addEventListener('click', function() {
        btnRespirar.disabled = true;
        textoRespiracion.innerText = "Inhala profundamente... (4s)";
        circulo.classList.add('inhale');
        circulo.classList.remove('exhale');

        setTimeout(() => {
            textoRespiracion.innerText = "Mantén la respiración... (4s)";
        }, 4000);
        
        setTimeout(() => {
            textoRespiracion.innerText = "Exhala lentamente... (4s)";
            circulo.classList.add('exhale');
            circulo.classList.remove('inhale');
        }, 8000);
        
        setTimeout(() => {
            textoRespiracion.innerText = "¡Muy bien! Puedes repetirlo si lo necesitas.";
            btnRespirar.disabled = false;
        }, 12000);
    });
}