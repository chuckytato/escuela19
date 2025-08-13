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

  // Lista de libros
  const libros = [
    { ruta: 'libros/libro1.pdf', nombre: 'Libro 1 - Matemáticas' },
    { ruta: 'libros/libro2.pdf', nombre: 'Libro 2 - Historia' },
    { ruta: 'libros/libro3.pdf', nombre: 'Libro 3 - Ciencias' }
  ];

  const bookList = document.getElementById('bookList');

  // Función para mostrar el PDF mediante link a Google Drive
  function mostrarPDF(ruta, nombre) {
    const link = document.getElementById('linkPdf');
    const contenedor = document.getElementById('visorPdfContainer');
    const titulo = document.getElementById('nombreLibro');

    link.href = ruta;
    link.textContent = 'Abrir "' + nombre + '" en Google Drive';
    titulo.textContent = nombre;
    contenedor.classList.remove('hidden');
  }

  // Crear botones para cada libro
  libros.forEach(libro => {
    const btn = document.createElement('button');
    btn.textContent = libro.nombre;
    btn.className = 'text-left bg-amber-100 hover:bg-amber-200 rounded px-4 py-2 font-medium text-amber-900 shadow-sm transition-colors duration-200';
    btn.onclick = () => mostrarPDF(libro.ruta, libro.nombre);
    bookList.appendChild(btn);
  });
});
