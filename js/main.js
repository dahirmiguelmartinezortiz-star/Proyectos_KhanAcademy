/**
 * main.js - Lógica general y utilidades de la interfaz
 */

document.addEventListener('DOMContentLoaded', () => {
  // Resaltar automáticamente el enlace activo en la barra de navegación
  const navLinks = document.querySelectorAll('nav a');
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    // Normalizar rutas relativas
    const href = link.getAttribute('href');
    if (currentPath.endsWith(href) || (href === 'index.html' && (currentPath.endsWith('/') || currentPath === ''))) {
      link.classList.add('active');
    }
  });

  // Configuración de accesibilidad o consola
  console.log('Laboratorio de Gráficos Web inicializado correctamente.');
});