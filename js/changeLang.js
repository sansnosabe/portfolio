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
    home: "Inicio",
    about: "Sobre",
    career: "Carrera",
    imText: "Soy",
    curriculumText: "Descargar CV",
    aboutMeTitle: "Sobre mí",
    aboutText:
      "Persona adaptable y confiable. <strong>Mentalidad flexible</strong> que me permite manejar eficazmente diversas situaciones y desafíos. Siempre comprometida con el <strong>éxito del grupo</strong>.",
    aboutText2: "Viviendo en <strong>San Sebastián, Gipúzcoa</strong>. +6 meses de experiencia.",
    skills: "Habilidades",
    educationAndExperienceTitle: "Educación & Experiencia",
    educationTitle: "Mi Educación",
    education1: "GM Sistemas Microinformáticos y Redes",
    education1description:
      "Instalación y configuración de software y redes, montaje y configuración de ordenadores y periféricos, gestión de servicios y aplicaciones en red, logística en sistemas microinformáticos: instalación y mantenimiento, diagnóstico de problemas en sistemas y redes, replanteo y conexión de redes locales y externas, recuperación de datos y aplicaciones ante fallos y elaboración de documentación técnica, presupuestos y asesoramiento al cliente.",
    education2: "Confección y publicación de páginas web",
    education2description:
      "Diseñar y desarrollar páginas web funcionales utilizando HTML, CSS y JavaScript o PHP, siguiendo estándares de usabilidad. Implementarlas en el servidor correspondiente después de realizar los procedimientos de instalación y verificación. Realizar pruebas exhaustivas para asegurar su correcto funcionamiento y optimización.",
    education3: "Desarrollo de Aplicaciones con Node y Express",
    education3description:
      "Conceptos avanzados de JavaScript, aprender a instalar Node.js, configurar editores y utilidades, utilizar 'npm' como gestor de paquetes, entender el archivo package.json, instalar paquetes básicos y Express, trabajar con el loop de eventos de Node.js, utilizar EventEmitter y módulos, generar una estructura MVC con Express, implementar enrutamiento con rutas estáticas y parametrizadas, crear APIs REST, aplicar middleware, gestionar sesiones, conectar a bases de datos, diseñar vistas y templates.",
    education4: "Bootcamp de Programación Web Fullstack",
    education4description:
      "HTML para estructurar contenido, CSS para dar estilo y hacerlo responsive, JavaScript para programar funcionalidades, el DOM para interactuar con la estructura de la página, bases de datos SQL para almacenar y consultar información, Node.js y Express.js para crear servidores y APIs, y ReactJS para diseñar interfaces dinámicas y eficientes. Maquetación, programación, manipulación de elementos, interacción con bases de datos y desarrollo de aplicaciones web, con el objetivo de crear proyectos completos y optimizados. Además, se enfatiza en la importancia de implementar las páginas en el servidor adecuado, realizar pruebas exhaustivas y optimizar su funcionamiento.",
    experienceTitle: "Mi Experiencia",
    experience1: "Desarrolladora FullStack",
    experience1description:
      "Desarrollé una plataforma integral utilizando Vue.js que abarca la gestión del fichaje de empleados, la administración de vacaciones y la asignación de permisos de acceso a proyectos según roles y responsabilidades. Además, implementé funciones para el seguimiento y asignación de proyectos, ofreciendo una visión clara de su progreso. También incluí características para la administración de usuarios y la creación de bases de datos robustas. Asimismo, incorporé herramientas de análisis de datos y generación de gráficas intuitivas para obtener información visualmente representativa.",
    gallery: "Galería",
    myPortfolioTitle: "Mi portfolio",
    boomDescription: "Boom! es un juego con 50 preguntas sobre cine.",
    crudDescription: "Es un CRUD de clientes hecho con Vue y el backend con node, express y MySQL.",
    photoPetsDescription: "Photopets es una copia de Instagram, pero los usuarios son animales.",
    movieTitle: "Buscador de peliculas",
    movieDescription: "Buscador de peliculas.",
    soonTitle: "Pronto...",
  },
  en: {
    home: "Home",
    about: "About",
    career: "Career",
    imText: "I'm",
    curriculumText: "Download CV",
    aboutMeTitle: "About me",
    aboutText:
      "Adaptable and reliable person. <strong>Flexible mindset</strong> that enables me to effectively handle diverse situations and challenges. Always committed to the <strong>group's success</strong>.",
    aboutText2: "Living in <strong>San Sebastián, Gipúzcoa</strong>. +6 months experience.",
    skills: "Skills",
    educationAndExperienceTitle: "Education & Expericence",
    educationTitle: "My Education",
    education1: "NVQ level 2 Microcomputer Systems and Networks",
    education1description:
      "Installation and configuration of software and networks, assembly and configuration of computers and peripherals, management of services and applications in a network, logistics in microcomputer systems: installation and maintenance, diagnosis of problems in systems and networks, layout and connection of local and external networks, data and application recovery in case of failures, and preparation of technical documentation, budgets, and customer advisory.",
    education2: "Design and publication of web pages",
    education2description:
      "Design and develop functional web pages using HTML, CSS, and JavaScript or PHP, following usability standards. Implement them on the corresponding server after performing installation and verification procedures. Conduct thorough testing to ensure proper functionality and optimization.",
    education3: "Development of Applications with Node and Express",
    education3description:
      "Advanced concepts of JavaScript, learning to install Node.js, configuring editors and utilities, using 'npm' as a package manager, understanding the package.json file, installing basic packages and Express, working with the Node.js event loop, using EventEmitter and modules, creating an MVC structure with Express, implementing routing with static and parameterized routes, creating REST APIs, applying middleware, managing sessions, connecting to databases, designing views and templates.",
    education4: "Fullstack Web Development Bootcamp",
    education4description:
      "HTML for structuring content, CSS for styling and making it responsive, JavaScript for programming functionalities, the DOM for interacting with the page structure, SQL databases for storing and querying information, Node.js and Express.js for creating servers and APIs, and ReactJS for designing dynamic and efficient interfaces. Layout, programming, element manipulation, database interaction, and web application development, with the goal of creating complete and optimized projects. Additionally, emphasis is placed on the importance of implementing pages on the appropriate server, conducting thorough testing, and optimizing their performance.",
    experienceTitle: "Mi Expericence",
    experience1: "Fullstack Developer",
    experience1description:
      "I developed a comprehensive platform using Vue.js that covers employee time tracking, vacation administration, and assignment of project access permissions based on roles and responsibilities. Additionally, I implemented functions for project tracking and assignment, providing a clear view of their progress. I also included features for user administration and the creation of robust databases. Furthermore, I incorporated data analysis tools and intuitive chart generation for visually representative information.",
    gallery: "Gallery",
    myPortfolioTitle: "My portfolio",
    boomDescription: "Boom! is a game with 50 questions about cinema.",
    crudDescription: "It's a customer CRUD built with Vue on the front-end and with Node.js, Express, and MySQL on the back-end.",
    photoPetsDescription: "Photopets is a copy of Instagram, but the users are animals.",
    movieTitle: "Movie finder",
    movieDescription: "Movie finder.",
    soonTitle: "Soon...",
  },
};
