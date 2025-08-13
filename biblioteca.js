window.addEventListener('load', () => {
  const ciclos = {
    basico: {
      Matemáticas: [
        { nombre: 'Matemáticas 1°', ruta: 'https://drive.google.com/file/d/xxx1/view', imagen: 'img/matematicas1_libro.jpeg' },
        { nombre: 'Matemáticas 2°', ruta: 'https://drive.google.com/file/d/xxx7/view', imagen: 'img/matematicas2_libro.jpeg' },
        { nombre: 'Matemáticas 1°', ruta: 'https://drive.google.com/file/d/xxx1/view', imagen: 'img/matematicas1_libro.jpeg' },
        { nombre: 'Matemáticas 2°', ruta: 'https://drive.google.com/file/d/xxx7/view', imagen: 'img/matematicas2_libro.jpeg' }
      
      ],
      "Ciencias Sociales": [
        { nombre: 'Historia 1°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' }
      ],
       "Ciencias Naturales": [
        { nombre: 'Historia 1°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' }
      ],
      "Practicas Lenguaje" : [
        { nombre: 'Historia 1°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' }
      ],
       Artistica: [
        { nombre: 'Historia 1°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' }
      ],
      
    },
    superior: {
      Filosofía: [
        { nombre: 'Filosofía 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' }
      ],
      Literatura: [
        { nombre: 'Literatura 6°', ruta: 'https://drive.google.com/file/d/xxx4/view', imagen: 'img/historia1_libro.jpg' }
      ]
    }
  };

  const documentacion = [
    { nombre: 'Plan de Lectura', ruta: 'https://drive.google.com/file/d/xxx5/view', imagen: 'img/pdf_icono.jpg' },
    { nombre: 'Reglamento', ruta: 'https://drive.google.com/file/d/xxx6/view', imagen: 'img/pdf_icono.jpg' }
  ];

  const btnCicloContainer = document.getElementById('ciclos');
  const materiasContainer = document.getElementById('materias');
  const librosContainer = document.getElementById('libros');
  const btnDocumentacion = document.getElementById('btn-documentacion');

  let cicloActual = null;

  function mostrarMaterias(ciclo) {
    materiasContainer.innerHTML = '';
    materiasContainer.classList.remove('hidden');
    librosContainer.innerHTML = '';
    cicloActual = ciclo;

    const materias = Object.keys(ciclos[ciclo]);
    materias.forEach(materia => {
      const btn = document.createElement('button');
      btn.className = 'btn-materia';
      btn.textContent = materia;
      btn.onclick = () => {
        document.querySelectorAll('.btn-materia').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        mostrarLibros(ciclos[ciclo][materia]);
      };
      materiasContainer.appendChild(btn);
    });
  }

  function mostrarLibros(libros) {
    librosContainer.innerHTML = '';
    libros.forEach(libro => {
      const btn = document.createElement('button');
      btn.className = 'rounded shadow-md overflow-hidden transition duration-300 hover:opacity-70';
      btn.style.width = '200px';
      btn.style.height = '200px';
      btn.style.backgroundImage = `url(${libro.imagen})`;
      btn.style.backgroundSize = 'cover';
      btn.style.backgroundPosition = 'center';
      btn.style.border = 'none';
      btn.title = libro.nombre;
      btn.onclick = () => window.open(libro.ruta, '_blank');
      librosContainer.appendChild(btn);
    });
  }

  function mostrarDocumentacion() {
    materiasContainer.classList.add('hidden');
    librosContainer.innerHTML = '';
    mostrarLibros(documentacion);
  }

  // Botones de ciclo
  document.querySelectorAll('.btn-ciclo').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.btn-ciclo').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const ciclo = btn.dataset.ciclo;
      if (ciclo === 'basico' || ciclo === 'superior') {
        mostrarMaterias(ciclo);
      } else {
        mostrarDocumentacion();
      }
    };
  });
});


