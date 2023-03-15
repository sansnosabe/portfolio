"use strict";

const buttonBritish = document.querySelector("#en-lang");
const buttonSpanish = document.querySelector("#es-lang");

buttonBritish.addEventListener("click", function () {
	translateTo("en");
});

buttonSpanish.addEventListener("click", function () {
	translateTo("es");
});

function translateTo(newLang) {
	var elements = document.querySelectorAll("[data-translate]");

	Array.from(elements).map(function (element) {
		var key = element.getAttribute("data-translate");
		element.textContent = translations[newLang][key];
	});

	document.documentElement.lang = newLang;
	lang = newLang;
}

var translations = {
	es: {
		homeText: "Inicio",
		aboutNavText: "Sobre",
		imText: "Soy",
		curriculumText: "Descargar CV",
		aboutText: "Sobre",
		aboutMeText: "Sobre mí",
		professionText: "Desarrolladora FullStack",
		descriptionText:
			"Soy una persona adaptable y confiable, con excelentes habilidades y un enfoque responsable hacia mi trabajo. Tengo una mentalidad flexible que me permite manejar eficazmente diversas situaciones y desafíos. Además, disfruto trabajando en equipo y estoy comprometida con el éxito del grupo.",
		nameTitle: "Nombre:",
		birthdateTitle: "Fecha:",
		birthdateText: "14/10/1993",
		addressTitle: "Dirección:",
		addressText: "San Sebastián, Gipuzkoa",
		experienceTitle: "Experiencia: ",
		experienceText: "8 Meses",
		phoneTitle: "Teléfono:",
		mySkillsText: "Mis Skills",
		galleryText: "Galería",
		myPortfolioText: "Mi portfolio",
		boomTitle: "Boom! - Juego de preguntas",
		instaPetsTitle: "Instapets - API",
		soonTitle: "Pronto...",
	},
	en: {
		homeText: "Home",
		aboutNavText: "About",
		imText: "I'm",
		curriculumText: "Download CV",
		aboutText: "About",
		aboutMeText: "About me",
		professionText: "FullStack Developer",
		descriptionText:
			"I am an adaptable and reliable person with excellent skills and a responsible approach to my work. I have a flexible mindset that enables me to effectively handle diverse situations and challenges. Additionally, I enjoy working in a team and I am committed to the group's success.",
		nameTitle: "Name:",
		birthdateTitle: "Birthday:",
		birthdateText: "14/10/1993",
		addressTitle: "Address:",
		addressText: "St Sebastian, Guipuzcoa",
		experienceTitle: "Experience: ",
		experienceText: "8 Months",
		phoneTitle: "Phone:",
		mySkillsText: "My Skills",
		galleryText: "Gallery",
		myPortfolioText: "My portfolio",
		boomTitle: "Boom! - Quiz game",
		instaPetsTitle: "Instapets - API",
		soonTitle: "Soon...",
	},
};
