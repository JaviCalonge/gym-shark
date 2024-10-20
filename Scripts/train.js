let currentIndexTrain = 0;

const prevButtonTrain = document.querySelector(".prev-button-train");
const nextButtonTrain = document.querySelector(".next-button-train");
const galleryContainerTrain = document.querySelector(".train-lista");
const totalImagesTrain = document.querySelectorAll(".train-li-imagen").length;

prevButtonTrain.addEventListener("click", () => {
  navigateTrain(-2);
});

nextButtonTrain.addEventListener("click", () => {
  navigateTrain(2);
});

function navigateTrain(direction) {
  currentIndexTrain += direction;

  // Check the boundaries
  if (currentIndexTrain <= 0) {
    currentIndexTrain = 0;
    prevButtonTrain.disabled = true;
  } else {
    prevButtonTrain.disabled = false;
  }

  if (currentIndexTrain >= totalImagesTrain - 1) {
    currentIndexTrain = totalImagesTrain - 1;
    nextButtonTrain.disabled = true;
  } else {
    nextButtonTrain.disabled = false;
  }

  const offsetTrain = -currentIndexTrain * 5.7; // Adjust this value according to your layout
  galleryContainerTrain.style.transform = `translateX(${offsetTrain}%)`;
}

// Initialize buttons state
prevButtonTrain.disabled = currentIndexTrain === 0;
nextButtonTrain.disabled = currentIndexTrain === totalImagesTrain - 1;
