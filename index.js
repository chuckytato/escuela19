function toggleMenu() {
  const menuDrawer = document.getElementById("menuDrawer");
  const overlay = document.getElementById("overlay");
  menuDrawer.classList.toggle("translate-x-full");
  overlay.classList.toggle("hidden");
}

// Carrusel automático
const items = document.querySelectorAll('.carousel-item');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let current = 0;

function showSlide(index) {
  items.forEach((item, i) => {
    item.classList.remove('active');
    const span = item.querySelector('span');
    if (span) {
      span.classList.remove('animate-fade-up');
      void span.offsetWidth;
    }
  });

  items[index].classList.add('active');
  const activeSpan = items[index].querySelector('span');
  if (activeSpan) {
    activeSpan.classList.add('animate-fade-up');
  }
}

nextBtn.addEventListener('click', () => {
  current = (current + 1) % items.length;
  showSlide(current);
});

prevBtn.addEventListener('click', () => {
  current = (current - 1 + items.length) % items.length;
  showSlide(current);
});

// 🔁 Carrusel automático cada 5 segundos
setInterval(() => {
  current = (current + 1) % items.length;
  showSlide(current);
}, 5000); // 5000 milisegundos = 5 segundos
