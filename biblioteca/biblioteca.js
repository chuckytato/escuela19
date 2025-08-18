// Ejecutar el código cuando la página termine de cargar
window.addEventListener('load', () => {

  // Lista de ciclos, años, materias y libros
  const ciclos = {
    basico: {
      "1° Año": {
        "Artistica": [
          { nombre: 'Matemáticas 1°', ruta: 'https://drive.google.com/file/d/xxx1/view', imagen: 'img/matematicas1_libro.jpeg' },
          { nombre: 'Matemáticas 1°', ruta: 'https://drive.google.com/file/d/xxx1/view', imagen: 'img/matematicas1_libro.jpeg' },
          { nombre: 'Matemáticas 1°', ruta: 'https://drive.google.com/file/d/xxx1/view', imagen: 'img/matematicas1_libro.jpeg' }
        ],
        "Ciencias Naturales": [
          { nombre: 'Ciencias Naturales 1º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Ciencias Naturales 1º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Ciencias Naturales 1º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' }
        ],
        "Ciencias Sociales": [
          { nombre: 'Ciencias Sociales 1º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Ciencias Sociales 1º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Ciencias Sociales 1º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' }
        ],
        "Ciudadanía": [
          { nombre: 'Ciudadanía 1°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Ciudadanía 1°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Ciudadanía 1°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' }
        ],
        "Inglés": [
          { nombre: 'Inglés 1°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Inglés 1°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Inglés 1°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' }
        ],
        "Matematicas": [
          { nombre: 'Matematica 1°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Matematica 1°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Matematica 1°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' }

        ],
        "Prácticas de Lenguaje": [
          { nombre: 'Practicas de Lenguaje 1°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Practicas de Lenguaje 1°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Practicas de Lenguaje 1°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' }
        ]
      
      },
      "2° Año": {
        "Artistica": [
          { nombre: 'Artistica 2°', ruta: 'https://drive.google.com/file/d/xxx1/view', imagen: 'img/matematicas1_libro.jpeg' },
          { nombre: 'Artistica 2°', ruta: 'https://drive.google.com/file/d/xxx1/view', imagen: 'img/matematicas1_libro.jpeg' },
          { nombre: 'Artistica 2°', ruta: 'https://drive.google.com/file/d/xxx1/view', imagen: 'img/matematicas1_libro.jpeg' }
        ],
        "Biología": [
          { nombre: 'Biología 2º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Biología 2º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Biología 2º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' }
        ],
        "Ciudadanía": [
          { nombre: 'Ciudadanía 2°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Ciudadanía 2°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Ciudadanía 2°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' }
        ],
        "Fisico Quimica": [
          { nombre: 'Fisico Quimica 2º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Fisico Quimica 2º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Fisico Quimica 2º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' }
        ],
        "Geografia": [
          { nombre: 'Geografia 2º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Geografia 2º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Geografia 2º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' }
        ],
        "Historia": [
          { nombre: 'Historia 2º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Historia 2º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Historia 2º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' }
        ],
        "Inglés": [
          { nombre: 'Inglés 2°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Inglés 2°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Inglés 2°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' }
        ],
        "Matematicas": [
          { nombre: 'Matematica 2°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Matematica 2°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Matematica 2°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' }
        ],
        "Prácticas de Lenguaje": [
          { nombre: 'Practicas de Lenguaje 2°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Practicas de Lenguaje 2°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg'},
          { nombre: 'Practicas de Lenguaje 2°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg'}
        ]
      },
      "3° Año": {
        "Artistica": [
          { nombre: 'Artistica 3°', ruta: 'https://drive.google.com/file/d/xxx1/view', imagen: 'img/matematicas1_libro.jpeg' },
          { nombre: 'Artistica 3°', ruta: 'https://drive.google.com/file/d/xxx1/view', imagen: 'img/matematicas1_libro.jpeg' },
          { nombre: 'Artistica 3°', ruta: 'https://drive.google.com/file/d/xxx1/view', imagen: 'img/matematicas1_libro.jpeg' }
        ],
        "Biología": [
          { nombre: 'Biología 3º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Biología 3º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Biología 3º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' }
        ],
        "Ciudadanía": [
          { nombre: 'Ciudadanía 3°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Ciudadanía 3°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Ciudadanía 3°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' }
        ],
        "Fisico Quimica": [
          { nombre: 'Fisico Quimica 3º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Fisico Quimica 3º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Fisico Quimica 3º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' }
        ],
        "Geografia": [
          { nombre: 'Geografia 3º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Geografia 3º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Geografia 3º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' }
        ],
        "Historia": [
          { nombre: 'Historia 3º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Historia 3º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Historia 3º ed. Santillán', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' }
        ],
        "Inglés": [
          { nombre: 'Inglés 3', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Inglés 3°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Inglés 3°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' }
        ],
        "Matematicas": [
          { nombre: 'Matematica 3°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Matematica 3°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Matematica 3°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' }
        ],
        "Prácticas de Lenguaje": [
          { nombre: 'Practicas de Lenguaje 3°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg' },
          { nombre: 'Practicas de Lenguaje 3°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg'},
          { nombre: 'Practicas de Lenguaje 3°', ruta: 'https://drive.google.com/file/d/xxx2/view', imagen: 'img/historia1_libro.jpg'}
        ]
      }
    },
    superior: {
      "4° Año": { //10 materias
        "Biología": [
          { nombre: 'Biología 4°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Biología 4°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Biología 4°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' }
        ],
        "Geografía": [
          { nombre: 'Geografía 4°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Geografía 4°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Geografía 4°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' }
        ],
        "Historia": [
          { nombre: 'Historia 4°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Historia 4°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Historia 4°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' }
        ],
        "Inglés": [
          { nombre: 'Inglés 4°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Inglés 4°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Inglés 4°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' }
        ],
        "Introducción a la Fisica": [
          { nombre: 'Introducción a la fisica', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' }
        ],
        "Introducción a la Química": [
          { nombre: 'Introducción a la Química', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' }
        ],
        "Literatura": [
          { nombre: 'Literatura 4°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Literatura 4°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Literatura 4°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' }
        ],
        "Matemática": [
          { nombre: 'Matemática 4°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Matemática 4°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Matemática 4°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' }
        ],
        "Psicología": [
          { nombre: 'Psicología 4°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Psicología 4°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Psicología 4°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' }
        ],
        "Salud y Adolescencia": [
          { nombre: 'Salud y Adolescencia', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Salud y Adolescencia', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Salud y Adolescencia', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' }
        ]
      },
      "5° Año": {//11 materias
            "Biología": [
          { nombre: 'Biología 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Biología 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Biología 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' }
        ],
        "Fisica": [
          { nombre: 'Fisíca 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Fisíca 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Fisíca 5°°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' }
        ],
        "Geografía": [
          { nombre: 'Geografía 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Geografía 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Geografía 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' }
        ],
        "Historia": [
          { nombre: 'Historia 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Historia 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Historia 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' }
        ],
        "Inglés": [
          { nombre: 'Inglés 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Inglés 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Inglés 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' }
        ],
        "Literatura": [
          { nombre: 'Literatura 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Literatura 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Literatura 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' }
        ],
        "Matemática": [
          { nombre: 'Matemática 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Matemática 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Matemática 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' }
        ],
        "Política y Ciudadanía": [
          { nombre: 'Política y Ciudadanía 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Política y Ciudadanía 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Política y Ciudadanía 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' }
        ],
        "Química": [
          { nombre: 'Quimíca 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Quimíca 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Quimíca 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' }
        ],
        "Sociología": [
          { nombre: 'Sociología 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Sociología 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' },
          { nombre: 'Sociología 5°', ruta: 'https://drive.google.com/file/d/xxx3/view', imagen: 'img/ciencias1_libro.jpeg' }
        ]
      },
      "6° Año": {//8 materias
        Literatura: [
          { nombre: 'Literatura 6°', ruta: 'https://drive.google.com/file/d/xxx4/view', imagen: 'img/historia1_libro.jpg' }
        ]
      }
    }
  };

  // Lista de documentos de la sección "Documentación"
  const documentacion = [
    { nombre: 'Plan de Lectura', ruta: 'https://drive.google.com/file/d/xxx5/view', imagen: 'img/pdf_icono.jpg' },
    { nombre: 'Reglamento', ruta: 'https://drive.google.com/file/d/xxx6/view', imagen: 'img/pdf_icono.jpg' }
  ];

  // Obtener referencias a los contenedores HTML
  const materiasContainer = document.getElementById('materias');
  const librosContainer = document.getElementById('libros');
  const aniosContainer = document.getElementById('anios');

  // Variables para guardar la selección actual
  let cicloActual = null;
  let anioActual = null;

  // Función para mostrar los años de un ciclo
  function mostrarAnios(ciclo) {
    aniosContainer.innerHTML = ''; // Vaciar contenedor de años
    materiasContainer.innerHTML = ''; // Vaciar contenedor de materias
    librosContainer.innerHTML = ''; // Vaciar contenedor de libros

    aniosContainer.classList.remove('hidden'); // Mostrar años
    materiasContainer.classList.add('hidden'); // Ocultar materias

    cicloActual = ciclo; // Guardar ciclo seleccionado
    anioActual = null; // Reiniciar año seleccionado

    const anios = Object.keys(ciclos[ciclo]); // Obtener lista de años

    // Crear botón para cada año
    anios.forEach(anio => {
      const btn = document.createElement('button');
      btn.className = 'btn-anio';
      btn.textContent = anio;

      // Al hacer clic en un año, mostrar sus materias
      btn.onclick = () => {
        document.querySelectorAll('.btn-anio').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        mostrarMaterias(anio);
      };

      aniosContainer.appendChild(btn); // Agregar botón al contenedor
    });
  }

  // Función para mostrar las materias de un año
  function mostrarMaterias(anio) {
    materiasContainer.innerHTML = ''; // Vaciar materias
    materiasContainer.classList.remove('hidden'); // Mostrar materias
    librosContainer.innerHTML = ''; // Vaciar libros

    anioActual = anio; // Guardar año seleccionado

    const materias = Object.keys(ciclos[cicloActual][anio]); // Lista de materias

    // Crear botón para cada materia
    materias.forEach(materia => {
      const btn = document.createElement('button');
      btn.className = 'btn-materia';
      btn.textContent = materia;

      // Al hacer clic en materia, mostrar sus libros
      btn.onclick = () => {
        document.querySelectorAll('.btn-materia').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        mostrarLibros(ciclos[cicloActual][anio][materia]);
      };

      materiasContainer.appendChild(btn); // Agregar botón al contenedor
    });
  }

  // Función para mostrar los libros de una materia o la documentación
  // Función para mostrar los libros de una materia o la documentación
function mostrarLibros(libros) {
  librosContainer.innerHTML = ''; // Vaciar contenedor de libros

  libros.forEach(libro => {
    // Contenedor de cada libro (imagen + nombre)
    const card = document.createElement('div');
    card.className = 'flex flex-col items-center';

    // Botón con la imagen del libro
    const btn = document.createElement('button');
    btn.className = 'rounded shadow-md overflow-hidden transition duration-300 hover:opacity-70';
    btn.style.width = '200px'; // Ancho fijo
    btn.style.height = '200px'; // Alto fijo
    btn.style.backgroundImage = `url(${libro.imagen})`; // Imagen de fondo
    btn.style.backgroundSize = 'cover'; // Ajustar imagen
    btn.style.backgroundPosition = 'center'; // Centrar imagen
    btn.style.border = 'none'; // Sin borde

    // Acción al hacer clic
    btn.onclick = () => window.open(libro.ruta, '_blank');

    // Texto con el nombre del libro
    const label = document.createElement('p');
    label.className = 'mt-2 text-center text-amber-900 font-medium';
    label.textContent = libro.nombre; // Nombre bonito definido en el objeto

    // Agregar botón y texto al contenedor
    card.appendChild(btn);
    card.appendChild(label);

    // Agregar la tarjeta al contenedor de libros
    librosContainer.appendChild(card);
  });
}


  // Función para mostrar la sección de Documentación
  function mostrarDocumentacion() {
    aniosContainer.classList.add('hidden'); // Ocultar años
    materiasContainer.classList.add('hidden'); // Ocultar materias
    librosContainer.innerHTML = ''; // Vaciar libros
    mostrarLibros(documentacion); // Mostrar documentos
  }

  // Asignar eventos a los botones de ciclo
  document.querySelectorAll('.btn-ciclo').forEach(btn => {
    btn.onclick = () => {
      // Quitar "active" a todos los botones y ponerlo en el actual
      document.querySelectorAll('.btn-ciclo').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Si es Documentación, mostrar directamente
      if (btn.id === 'btn-documentacion') {
        mostrarDocumentacion();
      } else {
        // Si no, mostrar los años de ese ciclo
        mostrarAnios(btn.dataset.ciclo);
      }
    };
  });

});
