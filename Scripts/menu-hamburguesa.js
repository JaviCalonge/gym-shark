const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-top");

// Asegúrate de que el menú esté oculto al cargar la página
nav.style.display = "none";

menuToggle.addEventListener("click", () => {
  // Alterna la visibilidad del menú
  nav.style.display =
    nav.style.display === "none" || nav.style.display === "" ? "flex" : "none";

  // Cambia el icono del menú hamburguesa a 'X' cuando esté abierto, y vuelve a '≡' cuando esté cerrado
  menuToggle.innerHTML = nav.style.display === "flex" ? "✖" : "&#9776;";
});
