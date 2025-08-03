document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const projects = document.querySelectorAll('[data-category]');

  if (filterButtons.length === 0 || projects.length === 0) {
    return;
  }

  // Activar el botón "All" por defecto
  const allButton = document.querySelector('[data-filter="all"]');
  if (allButton) {
    allButton.classList.add('bg-green-500', 'text-gray-900');
    allButton.classList.remove('text-green-400');
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Actualizar estilos de los botones
      filterButtons.forEach(btn => {
        btn.classList.remove('bg-green-500', 'text-gray-900');
        btn.classList.add('text-green-400');
      });
      button.classList.add('bg-green-500', 'text-gray-900');
      button.classList.remove('text-green-400');

      // Filtrar proyectos
      projects.forEach(project => {
        const categories = project.getAttribute('data-category');
        if (filter === 'all' || categories.includes(filter)) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    });
  });
});