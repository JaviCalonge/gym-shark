document.addEventListener("DOMContentLoaded", function() {
  // Muestra la lista de productos para mujeres al cargar la página
    mostrarProductos('mujer');
  });
  
    function mostrarProductos(categoria) {
      // Oculta todas las listas de productos
      document.querySelector('.populares-productos-mujer').classList.add('hidden');
      document.querySelector('.populares-productos-hombre').classList.add('hidden');
      document.querySelector('.populares-productos-complementos').classList.add('hidden');
  
      // Muestra la lista de productos de la categoría seleccionada
      document.querySelector('.populares-productos-' + categoria).classList.remove('hidden');
  
      
      const buttons = document.querySelectorAll('.populares-btn');
      buttons.forEach(button => button.classList.remove('active'));
  
      // Añade la clase active al botón clicado
      document.querySelector('.btn-populares-' + categoria).classList.add('active');
  }