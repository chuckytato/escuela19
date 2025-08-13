function toggleMenu() {
  const menu = document.getElementById('menuDrawer');
  const overlay = document.getElementById('overlay');
  const isOpen = !menu.classList.contains('translate-x-full');

  menu.classList.toggle('translate-x-full');
  overlay.classList.toggle('hidden');

  if (isOpen) {
    // Cerrando menú
    document.body.classList.remove('overflow-hidden');
  } else {
    // Abriendo menú
    document.body.classList.add('overflow-hidden');
  }
}

window.addEventListener('load', () => {
  const menu = document.getElementById('menuDrawer');
  const overlay = document.getElementById('overlay');

  menu.classList.add('translate-x-full');  // menú oculto al cargar
  overlay.classList.add('hidden');          // overlay oculto
  document.body.classList.remove('overflow-hidden'); // scroll activo
});
