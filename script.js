const estudiantes = [
  "Juan Pablo Gutiérrez",
  "María Fernanda Rodríguez",
  "Carlos Andrés López",
  "Ana Sofía Pérez",
  "Diego Armando Morales",
  "Valentina Ramírez",
  "Santiago González",
  "Isabella Castro",
  "Miguel Ángel Silva",
  "Camila Herrera"
];

const listaEstudiantes = document.getElementById('lista-estudiantes');

estudiantes.forEach(estudiante => {
  const estudianteDiv = document.createElement('div');
  estudianteDiv.className = 'estudiante';
  estudianteDiv.innerHTML = `
    <div class="status"></div>
    <div class="nombre">${estudiante}</div>
    <div class="botones-accion">
      <button class="presente-btn" onclick="marcarAsistencia(this, true)">Asistió</button>
      <button class="ausente-btn" onclick="marcarAsistencia(this, false)">No Asistió</button>
    </div>
  `;
  listaEstudiantes.appendChild(estudianteDiv);
});

function marcarAsistencia(boton, asistio) {
  const estudianteDiv = boton.parentElement.parentElement;
  const status = estudianteDiv.querySelector('.status');
  status.classList.remove('presente', 'ausente');
  if(asistio) {
    status.classList.add('presente');
  } else {
    status.classList.add('ausente');
  }
  actualizarContadores();
}

function actualizarContadores() {
  const presentes = document.querySelectorAll('.presente').length;
  const ausentes = document.querySelectorAll('.ausente').length;
  document.getElementById('contador-presentes').textContent = presentes;
  document.getElementById('contador-ausentes').textContent = ausentes;
}

function resetearAsistencia() {
  const statuses = document.querySelectorAll('.status');
  statuses.forEach(status => {
    status.classList.remove('presente', 'ausente');
  });
  actualizarContadores();
}

window.addEventListener('load', function() {
  const contadores = document.querySelector('.contadores');
  const lista = document.getElementById('lista-estudiantes');
  lista.style.marginTop = (contadores.offsetHeight + 40) + 'px';
});