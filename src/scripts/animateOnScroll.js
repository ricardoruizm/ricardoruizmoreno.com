function setupScrollAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Cuando el elemento entra en la pantalla
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Una vez visible, dejamos de "observarlo" para mejorar el rendimiento
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // El 10% del elemento debe ser visible
  });

  // Buscamos todos los elementos que queremos animar
  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
  elementsToAnimate.forEach(el => {
    observer.observe(el);
  });
}

// Nos aseguramos de que el HTML esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', setupScrollAnimation);