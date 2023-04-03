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
		element.innerHTML = translations[newLang][key];
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
		descriptionText: "Persona adaptable y confiable. <strong>Mentalidad flexible</strong> que me permite manejar eficazmente diversas situaciones y desafíos. Siempre comprometida con el <strong>éxito del grupo</strong>.",
		descriptionText2: "Viviendo en <strong>San Sebastián, Gipúzcoa</strong>. +1 año de experiencia.",
		galleryText: "Galería",
		myPortfolioText: "Mi portfolio",
		boomDescription: "Boom! es un juego con 50 preguntas sobre cine.",
		photoPetsDescription: "Photopets es una copia de Instagram, pero los usuarios son animales.",
		crudDescription: "Es un CRUD de clientes hecho con Vue y el backend con node, express y MySQL.",
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
			"Adaptable and reliable person. <strong>Flexible mindset</strong> that enables me to effectively handle diverse situations and challenges. Always committed to the <strong>group's success</strong>.",
		descriptionText2: "Living in <strong>San Sebastián, Gipúzcoa</strong>. +1 year experience.",
		galleryText: "Gallery",
		myPortfolioText: "My portfolio",
		boomDescription: "Boom! is a game with 50 questions about cinema.",
		photoPetsDescription: "Photopets is a copy of Instagram, but the users are animals.",
		crudDescription: "It's a customer CRUD built with Vue on the front-end and with Node.js, Express, and MySQL on the back-end.",
		soonTitle: "Soon...",
	},
};
