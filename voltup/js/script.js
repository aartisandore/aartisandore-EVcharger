// scripts.js

// Toggle mobile menu
document.querySelector(".menu-toggle").addEventListener("click", () => {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
});

// Smooth scroll for links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
