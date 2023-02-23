// Toggle language
const buttonBritish = document.querySelector("#en-lang");
const buttonSpanish = document.querySelector("#es-lang");
const homeText = document.querySelector("#homeText");
const aboutNavText = document.querySelector("#aboutNavText");
const imText = document.querySelector("#imText");
const curriculumText = document.querySelector("#curriculumText");
const aboutText = document.querySelector("#aboutText");
const aboutMeText = document.querySelector("#aboutMeText");
const professionText = document.querySelector("#professionText");
const descriptionText = document.querySelector("#descriptionText");
const nameTitle = document.querySelector("#nameTitle");
const birthdateTitle = document.querySelector("#birthdateTitle");
const phoneTitle = document.querySelector("#phoneTitle");
const addressTitle = document.querySelector("#addressTitle");
const experienceTitle = document.querySelector("#experienceTitle");
const birthdateText = document.querySelector("#birthdateText");
const addressText = document.querySelector("#addressText");
const experienceText = document.querySelector("#experienceText");
const mySkillsText = document.querySelector("#mySkillsText");
const galleryText = document.querySelector("#galleryText");
const myPortfolioText = document.querySelector("#myPortfolioText");
const boomTitle = document.querySelector("#boomTitle");
const instaPetsTitle = document.querySelector("#instaPetsTitle");
const soonTitle = document.querySelector("#soonTitle");

buttonBritish.addEventListener("click", function () {
  changeLanguage("eng");
});

buttonSpanish.addEventListener("click", function () {
  changeLanguage("es");
});

function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

var language = {
  es: {
    home: "Inicio",
    about: "Sobre",
    im: "Soy",
    curriculum: "Descargar CV",
    aboutMe: "Sobre mí",
    profession: "Desarrolladora FullStack",
    description:
      "Soy una persona adaptable y confiable, con excelentes habilidades y un enfoque responsable hacia mi trabajo. Tengo una mentalidad flexible que me permite manejar eficazmente diversas situaciones y desafíos. Además, disfruto trabajando en equipo y estoy comprometida con el éxito del grupo.",
    nameTitle: "Nombre:",
    birthdateTitle: "Fecha de nacimiento:",
    birthdateText: "14/10/1993",
    phoneTitle: "Teléfono:",
    addressTitle: "Dirección:",
    addressText: "San Sebastián, Gipuzkoa",
    experienceTitle: "Experiencia: ",
    experienceText: "8 Meses",
    mySkills: "Mis Skills",
    gallery: "Galería",
    myPortfolio: "Mi portfolio",
    boomTitle: "Boom! - Juego de preguntas",
    instaPetsTitle: "Instapets - API (en producción)",
    soonTitle: "Pronto...",
  },
};

if (window.location.hash == "#es") {
  homeText.textContent = language.es.home;
  aboutNavText.textContent = language.es.aboutMe;
  imText.textContent = language.es.im;
  curriculumText.textContent = language.es.curriculum;
  aboutText.textContent = language.es.about;
  aboutMeText.textContent = language.es.aboutMe;
  professionText.textContent = language.es.profession;
  descriptionText.textContent = language.es.description;
  nameTitle.textContent = language.es.nameTitle;
  birthdateTitle.textContent = language.es.birthdateTitle;
  birthdateText.textContent = language.es.birthdateText;
  phoneTitle.textContent = language.es.phoneTitle;
  addressTitle.textContent = language.es.addressTitle;
  addressText.textContent = language.es.addressText;
  experienceTitle.textContent = language.es.experienceTitle;
  experienceText.textContent = language.es.experienceText;
  mySkillsText.textContent = language.es.mySkills;
  galleryText.textContent = language.es.gallery;
  myPortfolioText.textContent = language.es.myPortfolio;
  boomTitle.textContent = language.es.boomTitle;
  instaPetsTitle.textContent = language.es.instaPetsTitle;
  soonTitle.textContent = language.es.soonTitle;
}
