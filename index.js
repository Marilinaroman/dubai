const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".navbar");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("navbar_visible");
    if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
}
});