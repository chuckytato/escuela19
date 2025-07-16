function toggleMenu() {
  const menu = document.getElementById('menuDrawer');
  const overlay = document.getElementById('overlay');
  const isOpen = !menu.classList.contains('translate-x-full');

  menu.classList.toggle('translate-x-full');
  overlay.classList.toggle('hidden');

  if (isOpen) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const novedades = [
    {
      titulo: "Inicio de clases 2025",
      imagen: "../imagenes/inicio_de_clases.jpg",
      descripcion: "La escuela inicio el ciclo lectivo el 1 de marzo con todas las medidas sanitarias correspondientes."
    },
    {
      titulo: "Clases de natación",
      imagen: "../imagenes/nata.jpg",
      descripcion: "Nuestros estudiantes disfrutan de sus clases de natación en la pileta."
    },
    {
      titulo: "Caminata por berazategui",
      imagen: "../imagenes/caminata.jpg",
      descripcion: "Realizamos una caminata recreativa por Berazategui con los estudiantes."
    },
    {
      titulo: "Día del Deporte",
      imagen: "../imagenes/deporte.jpg",
      descripcion: "Una jornada llena de juegos, competencias y trabajo en equipo."
    },
    {
      titulo: "Excursión al museo",
      imagen: "../imagenes/museo.jpg",
      descripcion: "Salida educativa al museo de ciencias naturales para los estudiantes de 3° año."
    },
    {
      titulo: "Feria de ciencias",
      imagen: "../imagenes/feria.jpg",
      descripcion: "Presentación de proyectos científicos elaborados por los estudiantes."
    },
    {
      titulo: "Competencia de ajedrez",
      imagen: "../imagenes/aje.jpg",
      descripcion: "Se organizo un torneo de ajedrez en el Politecnico de Berazategui donde nuestros estudiantes participaron."
    },
    {
      titulo: "Acto del Dia de la Independencia",
      imagen: "../imagenes/acto.jpg",
      descripcion: "Se organizo el Acto del 9 de julio en nuestra institucion."
    },
    {
      titulo: "Clases de Educacion Fisica",
      imagen: "../imagenes/edu.jpg",
      descripcion: "Los estudiantes practican su tiro con la jabalina en educacion fisica."
    },
     {
      titulo: "Muestra de Arte",
      imagen: "../imagenes/arte.jpg",
      descripcion: "Exposición de pinturas, esculturas y dibujos hechos por los alumnos."
    },
    {
      titulo: "Clases de beisbol",
      imagen: "../imagenes/beisbol.jpg",
      descripcion: "Nuestra clase está diseñada para niños y adolescentes que quieran iniciarse en este apasionante deporte ."
    },
    {
      titulo: "Clases de tenis",
      imagen: "../imagenes/tenis.jpg",
      descripcion: "Nuestras clases están pensadas para todas las edades y niveles, desde quienes recién comienzan hasta jugadores que buscan perfeccionar su técnica."
    },
    {
      titulo: "Clases de escalada deportiva",
      imagen: "../imagenes/escalar.jpg",
      descripcion: "¡Desafiá la gravedad y superá tus propios límites! Nuestras clases de escalada deportiva están diseñadas para todos los niveles, desde principiantes que nunca han escalado hasta escaladores con experiencia que buscan mejorar su técnica."
    },
  ];

  const newsList = document.getElementById("newsList");

  novedades.forEach((novedad) => {
    const card = document.createElement("article");
    // w-full para que ocupe toda la celda del grid
    // altura fija para que todas sean iguales, podés ajustar la altura si querés más o menos
    card.className = "bg-white rounded-lg shadow-md overflow-hidden w-full h-[340px] flex flex-col";

card.innerHTML = `
  <img src="${novedad.imagen}" alt="${novedad.titulo}" class="w-full h-48 object-cover object-center" />
  <div class="p-4">
    <h3 class="text-xl font-bold text-amber-900 mb-1 line-clamp-2">${novedad.titulo}</h3> 
    <p class="text-gray-700 line-clamp-4">${novedad.descripcion}</p>
  </div>
`;

    newsList.appendChild(card);
  });
});