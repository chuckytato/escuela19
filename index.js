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

// Datos de ciclos, cursos, materias y trabajos
const ciclos = {
  basico: {
    nombre: "Ciclo Básico",
    cursos: {
      1: {
        nombre: "Primero",
        materias: {
          "Matemática": [
            { nombre: "Trabajo 1: Álgebra", url: "trabajos/basico/primero/matematica/trabajo1.pdf" },
            { nombre: "Trabajo 2: Geometría", url: "trabajos/basico/primero/matematica/trabajo2.pdf" }
          ],
          "Lengua": [
            { nombre: "Trabajo 1: Gramática", url: "trabajos/basico/primero/lengua/trabajo1.pdf" },
            { nombre: "Trabajo 2: Redacción", url: "trabajos/basico/primero/lengua/trabajo2.pdf" }
          ]
        }
      },
      2: {
        nombre: "Segundo",
        materias: {
          "Matemática": [
            { nombre: "Trabajo 1: Estadística", url: "trabajos/basico/segundo/matematica/trabajo1.pdf" }
          ]
        }
      }
      // Agrega más cursos si quieres...
    }
  },
  superior: {
    nombre: "Ciclo Superior",
    cursos: {
      4: {
        nombre: "Cuarto",
        materias: {
          "Matemática": [
            { nombre: "Trabajo 1: Cálculo Diferencial", url: "trabajos/superior/cuarto/matematica/trabajo1.pdf" }
          ],
          "Física": [
            { nombre: "Trabajo 1: Mecánica", url: "trabajos/superior/cuarto/fisica/trabajo1.pdf" }
          ]
        }
      },
      5: {
        nombre: "Quinto",
        materias: {
          "Matemática": [
            { nombre: "Trabajo 1: Álgebra Lineal", url: "trabajos/superior/quinto/matematica/trabajo1.pdf" }
          ]
        }
      }
      // Más cursos si quieres...
    }
  }
};

let cicloSeleccionado = null;
let cursoSeleccionado = null;

// Al seleccionar ciclo (Básico o Superior)
function selectCiclo(ciclo) {
  cicloSeleccionado = ciclo;
  document.getElementById('modalCurso').classList.add('hidden');
  // Mostrar modal para seleccionar curso con el nombre del ciclo
  const modalCursos = document.getElementById('modalCursosGrados');
  document.getElementById('modalCursosCiclo').textContent = ciclos[ciclo].nombre;
  modalCursos.classList.remove('hidden');
}

// Al seleccionar curso (año)
function selectCurso(curso) {
  cursoSeleccionado = curso;
  // Cerrar modal de cursos y abrir modal materias
  closeModal('modalCursosGrados');
  openModal('modalMaterias');
  mostrarMaterias();
}

// Mostrar materias del ciclo y curso seleccionados en el modal materias
function mostrarMaterias() {
  const cont = document.getElementById('materiasContainer');
  cont.innerHTML = '';
  const ciclo = ciclos[cicloSeleccionado];
  if (!ciclo) return;
  const curso = ciclo.cursos[cursoSeleccionado];
  if (!curso) return;

  document.getElementById('modalMateriasCiclo').textContent = ciclo.nombre;
  document.getElementById('modalMateriasCurso').textContent = curso.nombre;

  for (const materia in curso.materias) {
    const btn = document.createElement('button');
    btn.className = 'w-full bg-amber-100 hover:bg-amber-200 rounded py-2 font-semibold';
    btn.textContent = materia;
    btn.onclick = () => mostrarTrabajos(materia);
    cont.appendChild(btn);
  }
}

// Mostrar trabajos de una materia en el modal trabajos
function mostrarTrabajos(materia) {
  closeModal('modalMaterias');
  openModal('modalTrabajos');
  document.getElementById('modalTrabajosMateria').textContent = materia;

  const lista = document.getElementById('trabajosList');
  lista.innerHTML = '';

  const trabajos = ciclos[cicloSeleccionado].cursos[cursoSeleccionado].materias[materia];

  trabajos.forEach(trabajo => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = trabajo.url;
    a.target = '_blank';
    a.textContent = trabajo.nombre;
    li.appendChild(a);
    lista.appendChild(li);
  });
}
