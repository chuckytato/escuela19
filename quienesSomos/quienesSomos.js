function toggleMenu() {
      const menu = document.getElementById('menuDrawer');
      const overlay = document.getElementById('overlay');
      const isOpen = !menu.classList.contains('translate-x-full');

      menu.classList.toggle('translate-x-full');
      overlay.classList.toggle('hidden');

      if (isOpen) {
        // Cerrando menú
        document.body.style.overflow = 'auto';
      } else {
        // Abriendo menú
        document.body.style.overflow = 'hidden';
      }
    }