function toggleMenu() {
      const menu = document.getElementById('menuDrawer');
      const overlay = document.getElementById('overlay');
      const isOpen = !menu.classList.contains('translate-x-full');
      menu.classList.toggle('translate-x-full');
      overlay.classList.toggle('hidden');
      document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    }
      const menu = document.getElementById('menuDrawer');
      const overlay = document.getElementById('overlay');
      const isOpen = !menu.classList.contains('translate-x-full');
      menu.classList.toggle('translate-x-full');
      overlay.classList.toggle('hidden');
      document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  

    document.addEventListener('DOMContentLoaded', () => {
      const novedades = [
        { titulo: "Inicio de clases 2025", imagen: "../imagenes/inicio_de_clases.jpg", descripcion: "La escuela inicio el ciclo lectivo el 4 de marzo con todas las medidas sanitarias correspondientes." },
        { titulo: "Practicas Deportivas y Acuaticas", imagen: "../imagenes/nata.jpg", descripcion: "Nuestros estudiantes disfrutan de sus clases de natación en la pileta." },
        { titulo: "Caminata Municipal por el Dia Mundial del VIH", imagen: "../imagenes/caminata.jpg", descripcion: "Participamos en la caminata Municipal por el Dia Mundial del VIH en Berazategui." },
        { titulo: "Encuentro de ESOEF de Berazategui", imagen: "../imagenes/deporte.jpg", descripcion: "Encuentro deportivo de las 5 escuelas orientadas a ESOEF en el club Municipal Ducilo." },
        { titulo: "Salida Educativa", imagen: "../imagenes/museo.jpg", descripcion: "Salida educativa al Complejo Cultural El Patio" },
        { titulo: "Feria de ciencias", imagen: "../imagenes/feria.jpg", descripcion: "Presentación de proyectos científicos elaborados por los estudiantes." },
        { titulo: "Competencia de ajedrez", imagen: "../imagenes/aje.jpg", descripcion: "Se organizó un torneo de ajedrez en el Politécnico de Berazategui donde nuestros estudiantes participaron." },
        { titulo: "Acto del Día de la Independencia", imagen: "../imagenes/acto.jpg", descripcion: "Se organizó el Acto del 9 de julio en nuestra institución." },
        { titulo: "Clases de Educación Física", imagen: "../imagenes/edu.jpg", descripcion: "Los estudiantes practican atletismo y su tecnica de lanzamiento con jabalina." },
        { titulo: "Muestra de Arte", imagen: "../imagenes/arte.jpg", descripcion: "Exposición de pinturas, esculturas y dibujos hechos por los alumnos." },
        { titulo: "Clases de softball", imagen: "../imagenes/beisbol.jpg", descripcion: "Aprendé los fundamentos del softball en clases dinámicas y divertidas." },
        { titulo: "Clases de tenis", imagen: "../imagenes/tenis.jpg", descripcion: "clases de Tenis en Educacion Fisica y Comunidad" },
        { titulo: "Clases de escalada deportiva", imagen: "../imagenes/escalar.jpg", descripcion: "Desarrollá fuerza, técnica y confianza mientras escalás rutas desafiantes." },
        { titulo: "Acrosport", imagen: "../imagenes/gimnasia1.jpg", descripcion: "Practicas gimnasticas expresivas I y II." },
        { titulo: "Torneo interno de futbol", imagen: "../imagenes/torneofulbo.jpg", descripcion: "Los estudiantes de 6° año organizaron un torneo de futbol para los estudiantes" },
        { titulo: "Caminata al Parque Pereyra", imagen: "../imagenes/parquepereyra.jpg", descripcion: "Organizamos una caminata al Parque pereyra." },
        { titulo: "Video 1", video: "../imagenes/video.mp4", descripcion: "" },
        { titulo: "Video 2", video: "../imagenes/video2.mp4", descripcion: "" },
        { titulo: "Video 3", video: "../imagenes/video3.mp4", descripcion: "" },
        { titulo: "Video 4", video: "../imagenes/video4.mp4", descripcion: "" },

      ];

      const newsList = document.getElementById("newsList");
    const videoModal = document.getElementById("videoModal");
    const modalVideo = document.getElementById("modalVideo");
    const closeModal = document.getElementById("closeModal");

    novedades.forEach((novedad) => {
      const card = document.createElement("article");
      card.className = "bg-white rounded-lg shadow-md overflow-hidden w-full h-[340px] flex flex-col";

      if (novedad.video) {
  const videoId = `video-${Math.random().toString(36).substr(2, 9)}`;
  card.innerHTML = `
    <div class="relative cursor-pointer">
      <video id="${videoId}" src="${novedad.video}" class="w-full h-48 object-cover object-center" muted playsinline preload="metadata"></video>
      <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-100">
        <div class="text-white text-5xl bg-black bg-opacity-60 rounded-full p-3 pointer-events-none"><i class="fas fa-play"></i></div>
      </div>
    </div>
    <div class="p-4">
      <h3 class="text-xl font-bold text-amber-900 mb-1 line-clamp-2">${novedad.titulo}</h3>
      <p class="text-gray-700 line-clamp-4">${novedad.descripcion}</p>
    </div>
  `;
  newsList.appendChild(card);

  const previewVideo = card.querySelector(`#${videoId}`);
  const videoContainer = card.querySelector('.relative');

  videoContainer.addEventListener("click", () => {
    modalVideo.src = novedad.video;
    videoModal.classList.remove("hidden");
    modalVideo.play();
  });
}
else {
        card.innerHTML = `
          <img src="${novedad.imagen}" alt="${novedad.titulo}" class="w-full h-48 object-cover object-center" />
          <div class="p-4">
            <h3 class="text-xl font-bold text-amber-900 mb-1 line-clamp-2">${novedad.titulo}</h3>
            <p class="text-gray-700 line-clamp-4">${novedad.descripcion}</p>
          </div>
        `;
        newsList.appendChild(card);
      }
    });

    closeModal.addEventListener("click", () => {
      modalVideo.pause();
      modalVideo.src = "";
      videoModal.classList.add("hidden");
    });

    // También cerrar al hacer clic afuera del video
    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal) {
        modalVideo.pause();
        modalVideo.src = "";
        videoModal.classList.add("hidden");
      }
    });
  });
  