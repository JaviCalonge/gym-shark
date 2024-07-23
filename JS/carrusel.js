let currentIndex = 0;

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const galleryContainer = document.querySelector('.carrusel-productos');
const totalImages = document.querySelectorAll('.carrusel-link').length;

prevButton.addEventListener('click', () => {
  navigate(-5);
});

nextButton.addEventListener('click', () => {
  navigate(5);
});

function navigate(direction) {
  currentIndex += direction;

  // Check the boundaries
  if (currentIndex <= 0) {
    currentIndex = 0;
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (currentIndex >= totalImages - 1) {
    currentIndex = totalImages - 1;
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }

  const offset = -currentIndex * 3.8; // Adjust this value according to your layout
  galleryContainer.style.transform = `translateX(${offset}%)`;
}

// Initialize buttons state
prevButton.disabled = currentIndex === 0;
nextButton.disabled = currentIndex === totalImages - 1;