// Toggle the hamburger open/close state
document.addEventListener("DOMContentLoaded", () => {
  const navIcon = document.getElementById("nav-icon2");
  if (!navIcon) return;

  const menuOverlay = document.getElementById("menu-overlay");
  const navLogo = document.getElementById("nav-logo");
  const menuLinks = document.querySelectorAll(".menu-link");

  navIcon.addEventListener("click", () => {
    navIcon.classList.toggle("open");

    // Toggle colors for header elements
    navIcon.classList.toggle("text-primary-900");
    navIcon.classList.toggle("text-primary-400");

    if (navLogo) {
      navLogo.classList.toggle("text-primary-900");
      navLogo.classList.toggle("text-primary-400");
    }

    // open menu
    if (menuOverlay) {
      menuOverlay.classList.toggle("translate-x-full");
      document.body.classList.toggle("overflow-hidden");
    }
  });

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      navIcon.classList.remove("open");
      navIcon.classList.toggle("text-primary-900");
      navIcon.classList.toggle("text-primary-400");

      if (navLogo) {
        navLogo.classList.toggle("text-primary-900");
        navLogo.classList.toggle("text-primary-400");
      }

      if (menuOverlay) {
        menuOverlay.classList.toggle("translate-x-full");
        document.body.classList.remove("overflow-hidden");
      }
    })
  })
});
