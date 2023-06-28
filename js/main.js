"use strict";

const navbarCollapse = document.querySelector("#navbarCollapse");
const navbarToggler = document.querySelector(".navbar-toggler");
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem("theme");

document.addEventListener("click", function (event) {
  const target = event.target;
  const isClickInsideNavbar = navbarCollapse.contains(target);
  const isClickNavbarToggler = navbarToggler.contains(target);

  if (!isClickInsideNavbar && !isClickNavbarToggler) {
    navbarCollapse.classList.remove("show");
  }
});

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  } else {
    toggleSwitch.checked = false;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", function (e) {
  e.preventDefault();
  const scrollDuration = 700;
  const scrollStep = -window.scrollY / (scrollDuration / 15);
  const scrollInterval = setInterval(function () {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
});

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

const typedText = document.querySelector(".typed-text");
const typedTextOutput = document.querySelector(".typed-text-output");
if (typedText && typedTextOutput) {
  const typed = new Typed(typedTextOutput, {
    strings: typedText.textContent.split(", "),
    typeSpeed: 100,
    backSpeed: 20,
    smartBackspace: false,
    loop: false,
  });
}

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
