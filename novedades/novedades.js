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
      fecha: "2025-03-01",
      titulo: "Inicio de clases 2025",
      imagen: "../imagenes/inicio_de_clases.jpg",
      descripcion: "La escuela inicia el ciclo lectivo el 1 de marzo con todas las medidas sanitarias correspondientes."
    },
    {
      fecha: "2025-06-01",
      titulo: "Renovación de biblioteca",
      imagen: "https://via.placeholder.com/400x200?text=Biblioteca+Renovada",
      descripcion: "Se han incorporado más de 500 libros nuevos y espacios de estudio para alumnos."
    },
    {
      fecha: "2025-06-05",
      titulo: "Caminata",
      imagen: "../imagenes/caminata.jpg",
      descripcion: "Caminata recreativa por Berazategui."
    },
    {
      fecha: "2025-06-10",
      titulo: "Competencia deportiva",
      imagen: "../imagenes/compe.jpg",
      descripcion: "Participación de la escuela en torneo intercolegial de atletismo."
    },
    {
      fecha: "2025-06-15",
      titulo: "Excursión a museo",
      imagen: "../imagenes/museo.jpg",
      descripcion: "Salida educativa al museo de ciencias naturales para 3° año."
    },
    {
      fecha: "2025-06-20",
      titulo: "Feria de ciencias",
      imagen: "../imagenes/feria.jpg",
      descripcion: "Presentación de proyectos científicos elaborados por los estudiantes."
    },
    {
      fecha: "2025-06-25",
      titulo: "Campaña de reciclaje",
      imagen: "https://via.placeholder.com/400x200?text=Campaña+de+Reciclaje",
      descripcion: "Nueva campaña para fomentar el reciclaje en la comunidad educativa."
    },
    {
      fecha: "2025-06-30",
      titulo: "Charla sobre salud mental",
      imagen: "https://via.placeholder.com/400x200?text=Charla+Salud+Mental",
      descripcion: "Especialistas visitan la escuela para concientizar sobre la salud mental."
    },
    {
      fecha: "2025-07-05",
      titulo: "Reunión de padres",
      imagen: "https://via.placeholder.com/400x200?text=Reunión+de+Padres",
      descripcion: "Convocatoria a reunión general con los padres para informar sobre el segundo trimestre."
    },
    {
      fecha: "2025-07-10",
      titulo: "Inscripciones abiertas",
      imagen: "https://via.placeholder.com/400x200?text=Inscripciones+Abiertas",
      descripcion: "Se abre el período de inscripción para el ciclo lectivo 2026."
    },
  ];

  // Función para formatear fecha en formato DD/MM/YYYY
  function formatearFecha(fechaISO) {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString("es-AR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  const newsList = document.getElementById("newsList");

  novedades.forEach((novedad) => {
    const card = document.createElement("article");
    card.className = "bg-white rounded-lg shadow-md overflow-hidden max-w-xl mx-auto";

    card.innerHTML = `
      <img src="${novedad.imagen}" alt="${novedad.titulo}" class="w-full h-48 sm:h-60 object-cover object-center" />
      <div class="p-4">
        <time datetime="${novedad.fecha}" class="block text-sm text-amber-600 font-semibold mb-2">${formatearFecha(novedad.fecha)}</time>
        <h3 class="text-xl font-bold text-amber-900 mb-2">${novedad.titulo}</h3>
        <p class="text-gray-700">${novedad.descripcion}</p>
      </div>
    `;

    newsList.appendChild(card);
  });
});
