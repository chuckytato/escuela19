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
  { ruta: 'libros/libro1.pdf', nombre: 'Libro 1 - Mate', imagen: 'img/matematicas1_libro.jpeg' },
  { ruta: 'libros/libro2.pdf', nombre: 'Libro 2 - Historia', imagen: 'img/historia1_libro.jpg' },
  { ruta: 'libros/libro3.pdf', nombre: 'Libro 3 - Ciencias', imagen: 'img/ciencias1_libro.jpeg' }
];

const bookList = document.getElementById('bookList');

// Función para mostrar el PDF
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
  btn.className = 'rounded px-4 py-2 font-medium text-amber-900 shadow-sm transition-colors duration-200';
  
  // Establecer la imagen como fondo
  btn.style.backgroundImage = `url(${libro.imagen})`;
  btn.style.backgroundSize = 'cover'; // Cubrir el botón con la imagen
  btn.style.backgroundPosition = 'center'; // Centrar la imagen

  // Aumentar el tamaño del botón
  btn.style.width = '200px'; // Establecer el ancho del botón
  btn.style.height = '200px'; // Establecer la altura del botón
  btn.style.border = 'none'; // Opcional: quitar el borde

  // Opcional: Color de fondo semi-transparente para el texto
  btn.style.backgroundColor = 'rgba(255, 255, 255, 0.6)'; // Fondo blanco semi-transparente

  btn.onclick = () => mostrarPDF(libro.ruta, libro.nombre); // Llamar a la función al hacer clic
  bookList.appendChild(btn);
});
});
