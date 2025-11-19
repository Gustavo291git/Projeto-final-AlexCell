document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const btnAbrir = document.getElementById("btn-menu-abrir");
    const btnFechar = document.getElementById("btn-menu-fechar");
    const navLinks = document.getElementById("nav-links");

    if (btnAbrir && btnFechar && navLinks) {
      btnAbrir.addEventListener("click", () => {
        navLinks.classList.add("aberto");
        btnAbrir.setAttribute("aria-expanded", "true");
      });

      btnFechar.addEventListener("click", () => {
        navLinks.classList.remove("aberto");
        btnAbrir.setAttribute("aria-expanded", "false");
      });
    }
    const btnBackToTop = document.getElementById("btn-back-to-top");

    if (btnBackToTop) {
      window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          btnBackToTop.classList.add("show");
        } else {
          btnBackToTop.classList.remove("show");
        }
      };
      btnBackToTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth", 
        });
      });
    }

  }, 500);
});