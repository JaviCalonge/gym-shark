document.addEventListener('DOMContentLoaded', function () {
  const anuncios = document.querySelectorAll('.anuncio > div');
  let currentIndex = 0;

  function showNextAnuncio() {
    // Ocultar todos los anuncios
    anuncios.forEach(anuncio => anuncio.classList.remove('visible'));

    // Mostrar el siguiente anuncio
    anuncios[currentIndex].classList.add('visible');

    // Incrementar el índice para el siguiente anuncio
    currentIndex = (currentIndex + 1) % anuncios.length;
  }

  // Mostrar el primer anuncio inicialmente
  showNextAnuncio();

  // Configurar el intervalo para cambiar el anuncio cada 3 segundos
  setInterval(showNextAnuncio, 2000);
});