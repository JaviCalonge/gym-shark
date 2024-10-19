document.addEventListener('DOMContentLoaded', function() {
  var autoDialog = document.getElementById('autoDialog');
  
  // Mostrar el diálogo al cargar la página
  autoDialog.style.opacity = '1';

  // Ocultar el diálogo después de 3 segundos
  setTimeout(function() {
    autoDialog.style.opacity = '0';
  }, 2000);
});