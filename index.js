 // Toggle menú hamburguesa
  function toggleMenu() {
    const menu = document.getElementById('menuDrawer');
    const overlay = document.getElementById('overlay');
    if (menu.classList.contains('translate-x-full')) {
      menu.classList.remove('translate-x-full');
      overlay.classList.remove('hidden');
    } else {
      menu.classList.add('translate-x-full');
      overlay.classList.add('hidden');
    }
  }

  // Toggle submenús del menú lateral
  function toggleSubmenu(id) {
    const submenu = document.getElementById(id);
    const icon = document.getElementById('icon' + id.charAt(0).toUpperCase() + id.slice(1).replace('Submenu',''));
    if (submenu.classList.contains('hidden')) {
      submenu.classList.remove('hidden');
      if (icon) icon.style.transform = 'rotate(180deg)';
    } else {
      submenu.classList.add('hidden');
      if (icon) icon.style.transform = 'rotate(0deg)';
    }
  }

  // Navegación simulada con alert (puedes modificar para scroll o cambio real)
  function irA(seccion) {
    alert('Ir a sección: ' + seccion);
  }

  // Manejo de modales
  function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('hidden');
  }
  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('hidden');
}

// Datos de ejemplo para los ciclos
const datos = {
basico: {
cursos: ['1ro', '2do', '3ro'],
materias: {
'1ro': ['Matemáticas', 'Lengua', 'Historia'],
'2do': ['Matemáticas', 'Biología', 'Geografía'],
'3ro': ['Física', 'Química', 'Literatura']
},
trabajos: {
'Matemáticas': ['Ejercicio 1', 'Ejercicio 2', 'Proyecto Álgebra'],
'Lengua': ['Análisis de texto', 'Redacción ensayo'],
'Historia': ['Informe sobre la independencia'],
'Biología': ['Práctica de laboratorio'],
'Geografía': ['Mapa de América'],
'Física': ['Experimento de caída libre'],
'Química': ['Informe de reacción química'],
'Literatura': ['Reseña de libro']
}
},
superior: {
cursos: ['4to', '5to', '6to'],
materias: {
'4to': ['Matemáticas Avanzadas', 'Filosofía', 'Sociología'],
'5to': ['Física', 'Química', 'Biología'],
'6to': ['Literatura', 'Historia del Arte', 'Economía']
},
trabajos: {
'Matemáticas Avanzadas': ['Tarea integradora'],
'Filosofía': ['Ensayo sobre ética'],
'Sociología': ['Estudio de caso'],
'Física': ['Informe sobre ondas'],
'Química': ['Proyecto químico'],
'Biología': ['Práctica de campo'],
'Literatura': ['Análisis literario'],
'Historia del Arte': ['Presentación de movimientos artísticos'],
'Economía': ['Trabajo de investigación']
}
}
};

// Cuando se selecciona "Ver cursos y trabajos" de un ciclo
function selectCiclo(ciclo) {
closeMenuAndReset();
const modal = document.getElementById('modalCursosGrados');
const titulo = document.getElementById('modalCursosCiclo');
const container = document.getElementById('cursosContainer');
titulo.textContent = ciclo === 'basico' ? 'Ciclo Básico - Cursos' : 'Ciclo Superior - Cursos';
container.innerHTML = '';
datos[ciclo].cursos.forEach(curso => {
const btn = document.createElement('button');
btn.textContent = curso;
btn.className = "block w-full text-left py-2 px-3 bg-amber-100 hover:bg-amber-200 rounded";
btn.onclick = () => selectCurso(ciclo, curso);
container.appendChild(btn);
});
openModal('modalCursosGrados');
}

// Cuando se selecciona un curso se muestran materias
function selectCurso(ciclo, curso) {
closeModal('modalCursosGrados');
const modal = document.getElementById('modalMaterias');
const tituloCiclo = document.getElementById('modalMateriasCiclo');
const tituloCurso = document.getElementById('modalMateriasCurso');
const container = document.getElementById('materiasContainer');
tituloCiclo.textContent = ciclo === 'basico' ? 'Ciclo Básico' : 'Ciclo Superior';
tituloCurso.textContent = curso;
container.innerHTML = '';
const materias = datos[ciclo].materias[curso] || [];
materias.forEach(materia => {
const btn = document.createElement('button');
btn.textContent = materia;
btn.className = "block w-full text-left py-2 px-3 bg-amber-100 hover:bg-amber-200 rounded";
btn.onclick = () => selectMateria(ciclo, materia);
container.appendChild(btn);
});
openModal('modalMaterias');
}

// Cuando se selecciona una materia, se muestran trabajos
function selectMateria(ciclo, materia) {
closeModal('modalMaterias');
const modal = document.getElementById('modalTrabajos');
const tituloMateria = document.getElementById('modalTrabajosMateria');
const lista = document.getElementById('trabajosList');
tituloMateria.textContent = materia;
lista.innerHTML = '';
const trabajos = datos[ciclo].trabajos[materia] || ['No hay trabajos disponibles'];
trabajos.forEach(trabajo => {
const li = document.createElement('li');
li.textContent = trabajo;
lista.appendChild(li);
});
openModal('modalTrabajos');
}

// Al cerrar menú hamburguesa también cerramos submenús para reset
function closeMenuAndReset() {
toggleMenu();
// Cerrar submenús si están abiertos
['basicoSubmenu','superiorSubmenu'].forEach(id => {
const submenu = document.getElementById(id);
if (!submenu.classList.contains('hidden')) {
submenu.classList.add('hidden');
}
// Reset iconos
const icon = document.getElementById('icon' + id.charAt(0).toUpperCase() + id.slice(1).replace('Submenu',''));
if (icon) icon.style.transform = 'rotate(0deg)';
});
}
