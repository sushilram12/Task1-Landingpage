// Change navbar background when scrolled
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Toggle mobile menu
const menuIcon = document.getElementById("menu-icon");
const nav = document.getElementById("nav");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("show");
});
