(function () {
  "use strict";

  // Navbar on scrolling (barra de navegacion)
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      document.querySelector(".navbar").style.display = "flex";
    } else {
      document.querySelector(".navbar").style.display = "none";
    }
  });

  // Scroll to Bottom
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      document.querySelector(".scroll-to-bottom").style.display = "none";
    } else {
      document.querySelector(".scroll-to-bottom").style.display = "block";
    }
  });

  // Back to top button
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      document.querySelector(".back-to-top").style.display = "block";
    } else {
      document.querySelector(".back-to-top").style.display = "none";
    }
  });
  document.querySelector(".back-to-top").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  });

  // Smooth scrolling on the navbar links (scroll del menu)
  const navbarLinks = document.querySelectorAll(".navbar-nav a");
  navbarLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      if (link.hash !== "") {
        event.preventDefault();

        const target = document.querySelector(link.hash);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  // Typed Initiate (texto del inicio)
  const typedText = document.querySelector(".typed-text");
  const typedTextOutput = document.querySelector(".typed-text-output");
  if (typedText && typedTextOutput) {
    const typed = new Typed(typedTextOutput, {
      strings: typedText.textContent.split(", "),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true,
    });
  }
})();
