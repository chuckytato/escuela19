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
  const newsList = document.getElementById('newsList');

  const novedades = [
    {
      titulo: "Nuevo Salón de Ciencias",
      fecha: "2025-04-10",
      descripcion: "Se inauguró un nuevo salón equipado con tecnología para prácticas de laboratorio de Física y Química."
    },
    {
      titulo: "Participación en la Feria de Ciencias Regional",
      fecha: "2025-03-25",
      descripcion: "Los alumnos de último año presentaron sus proyectos en la Feria Regional obteniendo reconocimiento especial."
    },
    {
      titulo: "Proyecto de Reciclaje Escolar",
      fecha: "2025-02-15",
      descripcion: "Se lanzó un programa de reciclaje con la colaboración de toda la comunidad educativa para cuidar el medio ambiente."
    },
    {
      titulo: "Salida Educativa al Museo de Ciencias Naturales",
      fecha: "2025-05-05",
      descripcion: "Alumnos del ciclo básico visitaron el museo para complementar sus estudios de biología y geología."
    }
  ];

  novedades.forEach(novedad => {
    const div = document.createElement('div');
    div.className = "bg-amber-100 p-4 rounded shadow";

    div.innerHTML = `
      <h3 class="text-xl font-semibold text-amber-800">${novedad.titulo}</h3>
      <p class="text-sm text-amber-600 mb-2">${novedad.fecha}</p>
      <p class="text-amber-900">${novedad.descripcion}</p>
    `;

    newsList.appendChild(div);
  });
});
