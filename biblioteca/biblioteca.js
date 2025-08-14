// Función para abrir/cerrar el menú
function toggleMenu() {
  const menu = document.getElementById('menuDrawer');
  const overlay = document.getElementById('overlay');
  const isOpen = !menu.classList.contains('translate-x-full');

  menu.classList.toggle('translate-x-full');
  overlay.classList.toggle('hidden');

  if (isOpen) {
    document.body.classList.remove('overflow-hidden');
  } else {
    document.body.classList.add('overflow-hidden');
  }
}

// Asegurar que el menú esté cerrado al cargar
window.addEventListener('load', () => {
  const menu = document.getElementById('menuDrawer');
  const overlay = document.getElementById('overlay');
  menu.classList.add('translate-x-full');
  overlay.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');

  // Lista de libros con imagen y ruta de Drive
  const libros = [
    {
      ruta: 'libros/libro1.pdf',
      nombre: 'Libro 1 - Matemáticas',
      imagen: '../img/matematicas1_libro.jpeg',
      drive: '#'
    },
    {
      ruta: 'libros/libro2.pdf',
      nombre: 'Libro 2 - Historia',
      imagen: '../img/historia1_libro.jpg',
      drive: 'https://drive.google.com/file/d/1XHPR61cz2b01h0zLN8UPzfGFQOS1gyVx/view'
    },
    {
      ruta: 'libros/libro3.pdf',
      nombre: 'Libro 3 - Ciencias',
      imagen: '../img/ciencias1_libro.jpeg',
      drive: 'https://drive.google.com/file/d/1wZ-F0N-_iGpjrrz3vhFVEQQGPGndvLOd/view'
    }
  ];

  const bookList = document.getElementById('bookList');

  // Mostrar PDF y portada
  function mostrarPDF(ruta, nombre, imagen, drive) {
    const link = document.getElementById('linkPdf');
    const contenedor = document.getElementById('visorPdfContainer');
    const titulo = document.getElementById('nombreLibro');
    const img = document.getElementById('imgLibro');

    link.href = drive;
    link.textContent = 'Abrir "' + nombre + '" en Google Drive';
    titulo.textContent = nombre;

    if (imagen) {
      img.src = imagen;
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }

    contenedor.classList.remove('hidden');
  }

  // Crear botones para cada libro
  libros.forEach(libro => {
    const btn = document.createElement('button');
    btn.textContent = libro.nombre;
    btn.className = 'text-left bg-amber-100 hover:bg-amber-200 rounded px-4 py-2 font-medium text-amber-900 shadow-sm transition-colors duration-200';
    btn.onclick = () => mostrarPDF(libro.ruta, libro.nombre, libro.imagen, libro.drive);
    bookList.appendChild(btn);
  });
});
