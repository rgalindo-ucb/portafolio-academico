import type { Project, ProjectType } from "@/types/project";

// Convencion para assets locales del portafolio:
// - No incluir "/public" en las rutas.
// - Imagen principal: /portfolio/subjects/<subject-slug>/images/<project-slug>-cover.png
// - Archivo principal: /portfolio/subjects/<subject-slug>/files/<project-slug>.pdf
// - Galeria: /portfolio/subjects/<subject-slug>/images/<project-slug>-detalle-01.png
// - Evidencias: usar la misma base segun corresponda dentro de images/ o files/

const programmingAssetsBase =
  "/portfolio/subjects/introduccion-a-la-programacion";
const dataScienceAssetsBase =
  "/portfolio/subjects/introduccion-a-ciencia-de-datos";
const businessAssetsBase = "/portfolio/subjects/empresa-y-entorno";
const leadershipAssetsBase = "/portfolio/subjects/desarrollo-de-liderazgo";

const programmingImage = (filename: string) =>
  `${programmingAssetsBase}/images/${filename}`;

const programmingFile = (filename: string) =>
  `${programmingAssetsBase}/files/${filename}`;

const dataScienceImage = (filename: string) =>
  `${dataScienceAssetsBase}/images/${filename}`;

const dataScienceFile = (filename: string) =>
  `${dataScienceAssetsBase}/files/${filename}`;

const businessImage = (filename: string) =>
  `${businessAssetsBase}/images/${filename}`;

const businessFile = (filename: string) =>
  `${businessAssetsBase}/files/${filename}`;

const leadershipImage = (filename: string) =>
  `${leadershipAssetsBase}/images/${filename}`;

const leadershipFile = (filename: string) =>
  `${leadershipAssetsBase}/files/${filename}`;

function programmingGallery(
  assetSlug: string,
  captions: string[],
): NonNullable<Project["gallery"]> {
  return captions.map((caption, index) => ({
    src: programmingImage(
      `${assetSlug}-${String(index + 1).padStart(2, "0")}.png`,
    ),
    alt: caption,
    caption,
  }));
}

function dataScienceGallery(
  assetSlug: string,
  captions: string[],
): NonNullable<Project["gallery"]> {
  return captions.map((caption, index) => ({
    src: dataScienceImage(
      `${assetSlug}-${String(index + 1).padStart(2, "0")}.png`,
    ),
    alt: caption,
    caption,
  }));
}

const laBocaDelLoboPoster =
  "https://upload.wikimedia.org/wikipedia/en/3/3e/The_Mouth_of_the_Wolf_%281988_film%29_poster.jpg";
const hitlerPortrait =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/1938%20portrait%20photograph%20of%20Adolf%20Hitler.jpg";
const evoMoralesPortrait =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Evo%20Morales%20Ayma.%20De%20Troya%2C%20Eneas.%202018%2C%20Legislative%20Palace%2C%20La%20Paz.jpg";
const robinSharmaPortrait =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Robin%20Sharma.jpg";
const systemsThinkingDiagram =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Systems%20Thinking%20Diagram.png";
const empathyReferenceImage =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Empathy%20-%2020619425286.jpg";
const acesPyramidDiagram =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/ACEs%20Pyramid.png";
const learningCurveDiagram =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Learning%20curve.svg";
const leadershipStylesDiagram =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Hou710%20LeadershipStyles.svg";
const plutchikWheel =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Plutchik-wheel.svg";
const johariWindowDiagram =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Johari%20Window.PNG";
const upliftingTeamworkPhoto =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Uplifting%20Teamwork%20%2815081195234%29.jpg";
const conchShellReference =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Conch%20shell.jpg";

export const projectTypes: ProjectType[] = [
  "Informe",
  "Presentación",
  "Investigación",
  "Proyecto",
  "Práctica",
  "Ensayo",
];

export const projects: Project[] = [
  {
    id: "programacion-01",
    slug: "taller-frontend-mi-primera-pagina-web-html-css-js-ia",
    title: "Taller Frontend - Mi Primera Página Web con HTML, CSS, JS, IA",
    subject: "Introducción a la Programación",
    date: "2026-05-17",
    type: "Proyecto",
    description:
      "Desarrollo de una primera página web utilizando HTML, CSS, JavaScript y apoyo de herramientas de inteligencia artificial.",
    context:
      "Este taller integró conceptos básicos de desarrollo frontend, permitiendo construir una página web funcional y comprender la relación entre estructura, estilos e interactividad.",
    objective:
      "Crear una página web inicial aplicando HTML para la estructura, CSS para el diseño, JavaScript para la interacción y herramientas de IA como apoyo al desarrollo.",
    process:
      "Se trabajó en la construcción progresiva de una página web, definiendo la estructura HTML, aplicando estilos visuales con CSS, agregando comportamiento con JavaScript y utilizando IA para resolver dudas, mejorar código y acelerar el aprendizaje.",
    result:
      "Se obtuvo una página web funcional como primera experiencia práctica de desarrollo frontend.",
    keyLearnings: [
      "Comprensión de la estructura básica de una página web.",
      "Relación entre HTML, CSS y JavaScript.",
      "Uso de IA como apoyo en el proceso de programación.",
    ],
    tools: ["HTML", "CSS", "JavaScript", "IA", "VSCode"],
    tags: ["Frontend", "HTML", "CSS", "JavaScript", "IA"],
    featured: true,
    imageUrl:
      "/portfolio/subjects/introduccion-a-la-programacion/images/taller-frontend-html-css-js-ia-cover.png",
    gallery: programmingGallery("taller-frontend-html-css-js-ia", [
      "Captura del desarrollo de la pagina web con HTML, CSS y JavaScript.",
      "Evidencia visual de la estructura y estilos aplicados en el taller.",
      "Registro del resultado frontend construido con apoyo de IA.",
    ]),
  },
  {
    id: "programacion-02",
    slug: "backend-basico-ia-express-sequelize-sqlite",
    title: "Taller: Crear un Backend Básico con IA, Express.js, Sequelize y SQLite",
    subject: "Introducción a la Programación",
    date: "2026-05-10",
    type: "Proyecto",
    description:
      "Construcción de un backend básico utilizando Express.js, Sequelize y SQLite con apoyo de inteligencia artificial.",
    context:
      "El taller introdujo conceptos fundamentales del desarrollo backend, incluyendo rutas, modelos, base de datos y comunicación entre cliente y servidor.",
    objective:
      "Crear un backend funcional básico aplicando Express.js, Sequelize y SQLite, utilizando IA como herramienta de apoyo para comprender y generar código.",
    process:
      "Se configuró un proyecto backend, se crearon rutas, modelos de datos y conexión con una base de datos SQLite mediante Sequelize.",
    result:
      "Se desarrolló una base funcional de backend capaz de gestionar datos mediante una estructura simple de servidor y base de datos.",
    keyLearnings: [
      "Comprensión básica del funcionamiento de un servidor backend.",
      "Uso de Express.js para crear rutas y endpoints.",
      "Relación entre modelos, ORM y base de datos.",
    ],
    tools: ["Node.js", "Express.js", "Sequelize", "SQLite", "IA", "VSCode"],
    tags: ["Backend", "Express.js", "Sequelize", "SQLite", "API"],
    featured: true,
    imageUrl:
      "/portfolio/subjects/introduccion-a-la-programacion/images/backend-express-sequelize-sqlite-cover.png",
    fileUrl: programmingFile("backend-express-sequelize-sqlite.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Presentacion del backend con Express, Sequelize y SQLite",
        url: programmingFile("backend-express-sequelize-sqlite.pdf"),
      },
    ],
  },
  {
    id: "programacion-03",
    slug: "mapa-mental-apis-modernas",
    title: "Mapa Mental de APIs Modernas",
    subject: "Introducción a la Programación",
    date: "2026-04-26",
    type: "Práctica",
    description:
      "Elaboración de un mapa mental sobre APIs modernas y su importancia en el desarrollo de aplicaciones.",
    context:
      "La actividad permitió organizar visualmente conceptos relacionados con APIs, endpoints, métodos HTTP, intercambio de datos y arquitectura web moderna.",
    objective:
      "Comprender el concepto de API y representar sus elementos principales mediante un mapa mental.",
    process:
      "Se identificaron conceptos clave sobre APIs modernas y se organizaron de forma visual para facilitar su comprensión.",
    result:
      "Se obtuvo un mapa mental que sintetiza los principales elementos de una API moderna.",
    keyLearnings: [
      "Comprensión del rol de las APIs en aplicaciones modernas.",
      "Identificación de métodos HTTP y endpoints.",
      "Organización visual de conceptos técnicos.",
    ],
    tools: ["Mapa mental", "Investigación", "Conceptos de API"],
    tags: ["API", "Mapa mental", "HTTP", "Desarrollo web"],
    featured: false,
    imageUrl:
      "/portfolio/subjects/introduccion-a-la-programacion/images/mapa-mental-apis-modernas-cover.png",
    fileUrl: programmingFile("mapa-mental-apis-modernas.png"),
    evidence: [
      {
        type: "image",
        label: "Mapa mental completo de APIs modernas",
        url: programmingFile("mapa-mental-apis-modernas.png"),
      },
    ],
  },
  {
    id: "programacion-04",
    slug: "modelado-er-usando-ia",
    title: "Actividad - Modelado ER usando IA",
    subject: "Introducción a la Programación",
    date: "2026-04-26",
    type: "Proyecto",
    description:
      "Actividad de modelado entidad-relación utilizando inteligencia artificial como apoyo para diseñar estructuras de datos.",
    context:
      "El trabajo permitió comprender cómo representar entidades, atributos y relaciones dentro de un sistema, conectando programación con diseño de bases de datos.",
    objective:
      "Diseñar un modelo entidad-relación con apoyo de IA, identificando entidades, atributos, relaciones y cardinalidades.",
    process:
      "Se analizaron requerimientos de un sistema, se identificaron entidades principales y se utilizó IA para apoyar la construcción y validación del modelo ER.",
    result:
      "Se obtuvo un modelo entidad-relación estructurado como base para comprender el diseño de bases de datos.",
    keyLearnings: [
      "Identificación de entidades y relaciones.",
      "Comprensión de cardinalidades.",
      "Uso de IA para apoyar el modelado de datos.",
    ],
    tools: ["Modelado ER", "IA", "Diagramación", "Bases de datos"],
    tags: ["Modelo ER", "Base de datos", "IA", "Cardinalidad"],
    featured: true,
    imageUrl:
      "/portfolio/subjects/introduccion-a-la-programacion/images/modelado-er-usando-ia-cover.png",
    gallery: programmingGallery("modelado-er-usando-ia", [
      "Modelo entidad-relacion construido con apoyo de inteligencia artificial.",
    ]),
  },
  {
    id: "programacion-05",
    slug: "exploracion-api-publica-postman",
    title: "Exploración de una API Pública con Postman",
    subject: "Introducción a la Programación",
    date: "2026-04-19",
    type: "Práctica",
    description:
      "Exploración de una API pública utilizando Postman para realizar solicitudes y analizar respuestas.",
    context:
      "La actividad introdujo el uso práctico de APIs, permitiendo observar cómo las aplicaciones solicitan, reciben e interpretan datos desde servicios externos.",
    objective:
      "Explorar una API pública mediante Postman, realizando peticiones y analizando las respuestas obtenidas.",
    process:
      "Se seleccionó una API pública, se realizaron solicitudes HTTP en Postman y se revisaron los datos devueltos en formato estructurado.",
    result:
      "Se comprendió el funcionamiento básico de una API pública y la interacción mediante solicitudes HTTP.",
    keyLearnings: [
      "Uso básico de Postman.",
      "Comprensión de solicitudes y respuestas HTTP.",
      "Interpretación de datos recibidos desde una API.",
    ],
    tools: ["Postman", "API pública", "HTTP", "JSON"],
    tags: ["Postman", "API", "HTTP", "JSON"],
    featured: true,
    imageUrl:
      "/portfolio/subjects/introduccion-a-la-programacion/images/api-publica-postman-cover.png",
    fileUrl: programmingFile("api-publica-postman.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Presentacion de exploracion de API publica en Postman",
        url: programmingFile("api-publica-postman.pdf"),
      },
    ],
  },
  {
    id: "programacion-08",
    slug: "practica-algoritmos",
    title: "Práctica Algoritmos",
    subject: "Introducción a la Programación",
    date: "2026-03-29",
    type: "Práctica",
    description:
      "Ejercicios orientados al desarrollo de algoritmos y resolución lógica de problemas.",
    context:
      "La práctica permitió fortalecer la capacidad de descomponer problemas y construir soluciones paso a paso.",
    objective:
      "Aplicar conceptos de algoritmos para resolver ejercicios de programación de manera estructurada.",
    process:
      "Se resolvieron problemas mediante pasos lógicos, identificando entradas, procesos y salidas.",
    result:
      "Se desarrollaron soluciones algorítmicas para distintos ejercicios prácticos.",
    keyLearnings: [
      "Pensamiento lógico y secuencial.",
      "Descomposición de problemas.",
      "Construcción de soluciones paso a paso.",
    ],
    tools: ["Algoritmos", "Python"],
    tags: ["Algoritmos", "Lógica", "Python", "Resolución de problemas"],
    featured: false,
    imageUrl:
      "/portfolio/subjects/introduccion-a-la-programacion/images/practica-algoritmos-cover.png",
    fileUrl: programmingFile("practica-algoritmos.zip"),
    evidence: [
      {
        type: "zip",
        label: "Archivo comprimido de la practica de algoritmos",
        url: programmingFile("practica-algoritmos.zip"),
      },
    ],
    gallery: programmingGallery("practica-algoritmos", [
      "Evidencia de ejercicios resueltos con logica algoritmica.",
      "Registro del proceso de solucion paso a paso.",
      "Captura de resultados de la practica de algoritmos.",
    ]),
  },
  {
    id: "programacion-11",
    slug: "ejercicios-bucles-y-patrones",
    title: "Ejercicios Bucles y Patrones",
    subject: "Introducción a la Programación",
    date: "2026-03-22",
    type: "Práctica",
    description:
      "Ejercicios enfocados en el uso de bucles para generar patrones y resolver problemas repetitivos.",
    context:
      "El trabajo permitió comprender cómo las estructuras repetitivas facilitan la automatización de procesos dentro de un programa.",
    objective:
      "Aplicar bucles para resolver ejercicios y construir patrones mediante programación.",
    process:
      "Se utilizaron estructuras repetitivas para generar secuencias, patrones y soluciones a problemas con repetición.",
    result:
      "Se desarrollaron ejercicios que demuestran el uso práctico de bucles en programación.",
    keyLearnings: [
      "Uso de estructuras repetitivas.",
      "Construcción de patrones con bucles.",
      "Comprensión de la lógica de iteración.",
    ],
    tools: ["Python", "Bucles", "Ejercicios prácticos"],
    tags: ["Bucles", "Patrones", "Python", "Iteración"],
    featured: false,
    imageUrl:
      "/portfolio/subjects/introduccion-a-la-programacion/images/ejercicios-bucles-patrones-cover.png",
    fileUrl: programmingFile("ejercicios-bucles-patrones.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Documento de ejercicios de bucles y patrones",
        url: programmingFile("ejercicios-bucles-patrones.pdf"),
      },
    ],
    gallery: programmingGallery("ejercicios-bucles-patrones", [
      "Captura de patrones generados con estructuras repetitivas.",
      "Evidencia de ejercicios aplicando bucles en Python.",
      "Registro visual de soluciones con iteraciones.",
    ]),
  },
  {
    id: "programacion-12",
    slug: "practica-opcional-22-marzo",
    title: "Práctica Opcional",
    subject: "Introducción a la Programación",
    date: "2026-03-22",
    type: "Práctica",
    description:
      "Práctica adicional orientada a reforzar ejercicios de programación básica.",
    context:
      "La actividad funcionó como una oportunidad complementaria para fortalecer habilidades de resolución de problemas.",
    objective:
      "Reforzar contenidos de programación mediante una práctica opcional.",
    process:
      "Se resolvieron ejercicios adicionales relacionados con los temas trabajados en clase.",
    result:
      "Se fortaleció la práctica y comprensión de fundamentos de programación.",
    keyLearnings: [
      "Refuerzo de lógica de programación.",
      "Importancia de la práctica autónoma.",
      "Mejora progresiva en resolución de ejercicios.",
    ],
    tools: ["Python", "Ejercicios prácticos", "VSCode"],
    tags: ["Práctica opcional", "Python", "Ejercicios", "Lógica"],
    featured: false,
    imageUrl:
      "/portfolio/subjects/introduccion-a-la-programacion/images/practica-opcional-22-marzo-cover.png",
    fileUrl: programmingFile("practica-opcional-22-marzo.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Documento de la practica opcional del 22 de marzo",
        url: programmingFile("practica-opcional-22-marzo.pdf"),
      },
    ],
    gallery: programmingGallery("practica-opcional-22-marzo", [
      "Evidencia de ejercicios adicionales de programacion.",
      "Registro de la practica opcional como refuerzo autonomo.",
      "Captura de resultados de la practica complementaria.",
    ]),
  },
  {
    id: "programacion-13",
    slug: "ejercicios-condicionales",
    title: "Ejercicios Condicionales",
    subject: "Introducción a la Programación",
    date: "2026-03-15",
    type: "Práctica",
    description:
      "Ejercicios orientados al uso de estructuras condicionales para la toma de decisiones en programas.",
    context:
      "El trabajo permitió comprender cómo un programa puede ejecutar diferentes acciones según condiciones específicas.",
    objective:
      "Aplicar estructuras condicionales para resolver problemas con toma de decisiones.",
    process:
      "Se resolvieron ejercicios utilizando condiciones simples y compuestas para controlar el flujo del programa.",
    result:
      "Se desarrollaron soluciones que aplican condicionales en diferentes escenarios de programación.",
    keyLearnings: [
      "Uso de estructuras if, else y elif.",
      "Comprensión del flujo de decisión.",
      "Aplicación de lógica condicional en problemas prácticos.",
    ],
    tools: ["Python", "Condicionales", "VSCode"],
    tags: ["Condicionales", "Python", "Lógica", "Flujo de control"],
    featured: false,
    imageUrl:
      "/portfolio/subjects/introduccion-a-la-programacion/images/ejercicios-condicionales-cover.png",
    fileUrl: programmingFile("ejercicios-condicionales.zip"),
    evidence: [
      {
        type: "zip",
        label: "Archivo comprimido de ejercicios condicionales",
        url: programmingFile("ejercicios-condicionales.zip"),
      },
    ],
    gallery: programmingGallery("ejercicios-condicionales", [
      "Captura de ejercicios con estructuras if, else y elif.",
      "Evidencia de soluciones con toma de decisiones.",
      "Registro visual de practica de flujo condicional.",
    ]),
  },
  {
    id: "programacion-14",
    slug: "ejercicios-strings",
    title: "Ejercicios Strings",
    subject: "Introducción a la Programación",
    date: "2026-03-08",
    type: "Práctica",
    description:
      "Ejercicios enfocados en el manejo de cadenas de texto dentro de programación.",
    context:
      "La actividad permitió comprender cómo manipular texto, acceder a caracteres y aplicar operaciones básicas sobre strings.",
    objective:
      "Practicar el uso de strings mediante ejercicios de manipulación de texto.",
    process:
      "Se resolvieron ejercicios relacionados con cadenas de texto, operaciones básicas y lógica aplicada a datos textuales.",
    result:
      "Se fortaleció la comprensión del manejo de datos tipo string.",
    keyLearnings: [
      "Manipulación básica de cadenas de texto.",
      "Uso de operaciones con strings.",
      "Aplicación de lógica a datos textuales.",
    ],
    tools: ["Python", "Strings", "Ejercicios prácticos"],
    tags: ["Strings", "Python", "Texto", "Fundamentos"],
    featured: false,
    imageUrl:
      "/portfolio/subjects/introduccion-a-la-programacion/images/ejercicios-strings-cover.png",
    fileUrl: programmingFile("ejercicios-strings.zip"),
    evidence: [
      {
        type: "zip",
        label: "Archivo comprimido de ejercicios de strings",
        url: programmingFile("ejercicios-strings.zip"),
      },
    ],
    gallery: programmingGallery("ejercicios-strings", [
      "Captura de ejercicios de manipulacion de cadenas de texto.",
      "Evidencia de operaciones basicas con strings en Python.",
      "Registro de soluciones aplicadas a datos textuales.",
      "Captura adicional del trabajo con cadenas de texto.",
    ]),
  },
  {
    id: "programacion-15",
    slug: "reto-codewars",
    title: "Reto Codewars",
    subject: "Introducción a la Programación",
    date: "2026-03-01",
    type: "Práctica",
    description:
      "Resolución de retos de programación en la plataforma Codewars para practicar lógica y solución de problemas.",
    context:
      "Codewars permitió aplicar conocimientos básicos de programación en desafíos breves, fomentando la práctica autónoma y el pensamiento lógico.",
    objective:
      "Resolver retos de programación para fortalecer la lógica computacional y la práctica de código.",
    process:
      "Se trabajó en la resolución de ejercicios propuestos por la plataforma, analizando problemas y planteando soluciones en código.",
    result:
      "Se completaron retos de programación orientados al fortalecimiento de habilidades lógicas.",
    keyLearnings: [
      "Práctica autónoma de programación.",
      "Resolución de problemas en plataformas externas.",
      "Mejora de la lógica computacional.",
    ],
    tools: ["Codewars", "Python", "Resolución de problemas"],
    tags: ["Codewars", "Retos", "Python", "Lógica"],
    featured: false,
    imageUrl:
      "/portfolio/subjects/introduccion-a-la-programacion/images/reto-codewars-cover.png",
    fileUrl: programmingFile("reto-codewars.zip"),
    evidence: [
      {
        type: "zip",
        label: "Archivo comprimido del reto Codewars",
        url: programmingFile("reto-codewars.zip"),
      },
    ],
    gallery: programmingGallery("reto-codewars", [
      "Captura de reto resuelto en la plataforma Codewars.",
      "Evidencia del proceso de practica de logica computacional.",
      "Registro visual de ejercicios completados en Codewars.",
    ]),
  },
  {
    id: "programacion-16",
    slug: "ejercicios-variables-y-tipos-de-dato",
    title: "Ejercicios Variables y Tipos de Dato",
    subject: "Introducción a la Programación",
    date: "2026-02-22",
    type: "Práctica",
    description:
      "Ejercicios introductorios sobre variables y tipos de datos en programación.",
    context:
      "La actividad permitió comprender conceptos fundamentales como almacenamiento de información, nombres de variables y tipos básicos de datos.",
    objective:
      "Practicar el uso de variables y tipos de dato mediante ejercicios básicos de programación.",
    process:
      "Se resolvieron ejercicios aplicando variables, asignaciones y tipos de datos simples.",
    result:
      "Se consolidó una base inicial para trabajar con datos dentro de programas.",
    keyLearnings: [
      "Comprensión del concepto de variable.",
      "Identificación de tipos de datos básicos.",
      "Uso de asignaciones en programación.",
    ],
    tools: ["Python", "Variables", "Tipos de datos"],
    tags: ["Variables", "Tipos de dato", "Python", "Fundamentos"],
    featured: false,
    imageUrl:
      "/portfolio/subjects/introduccion-a-la-programacion/images/ejercicios-variables-tipos-dato-cover.png",
    fileUrl: programmingFile("ejercicios-variables-tipos-dato.zip"),
    evidence: [
      {
        type: "zip",
        label: "Archivo comprimido de variables y tipos de dato",
        url: programmingFile("ejercicios-variables-tipos-dato.zip"),
      },
    ],
    gallery: programmingGallery("ejercicios-variables-tipos-dato", [
      "Captura de ejercicios introductorios sobre variables.",
      "Evidencia de practica con tipos de datos basicos.",
      "Registro visual de soluciones de fundamentos de programacion.",
    ]),
  },
  {
    id: "programacion-17",
    slug: "algoritmos-diagramas-de-flujo-python",
    title: "Algoritmos, Diagramas de Flujo y Python",
    subject: "Introducción a la Programación",
    date: "2026-02-18",
    type: "Práctica",
    description:
      "Actividad introductoria sobre algoritmos, diagramas de flujo y primeros pasos en Python.",
    context:
      "El trabajo permitió conectar el pensamiento lógico con la representación gráfica de procesos y su posterior implementación en código.",
    objective:
      "Comprender la relación entre algoritmos, diagramas de flujo y programación básica en Python.",
    process:
      "Se revisaron conceptos iniciales de algoritmos, se representaron procesos mediante diagramas de flujo y se relacionaron con instrucciones básicas en Python.",
    result:
      "Se obtuvo una primera aproximación a la lógica de programación y a la representación de soluciones mediante diagramas.",
    keyLearnings: [
      "Comprensión inicial de algoritmos.",
      "Uso de diagramas de flujo para representar procesos.",
      "Relación entre lógica y código en Python.",
    ],
    tools: ["Python", "Diagramas de flujo", "Algoritmos"],
    tags: ["Algoritmos", "Diagramas de flujo", "Python", "Lógica"],
    featured: false,
    imageUrl:
      "/portfolio/subjects/introduccion-a-la-programacion/images/algoritmos-diagramas-flujo-python-cover.png",
    fileUrl: programmingFile("algoritmos-diagramas-flujo-python.zip"),
    evidence: [
      {
        type: "zip",
        label: "Archivo comprimido de algoritmos, diagramas y Python",
        url: programmingFile("algoritmos-diagramas-flujo-python.zip"),
      },
    ],
    gallery: programmingGallery("algoritmos-diagramas-flujo-python", [
      "Evidencia de algoritmos representados antes de programar.",
      "Captura de diagramas de flujo aplicados a problemas basicos.",
      "Registro de primeros ejercicios conectando logica y Python.",
      "Captura adicional del proceso de trabajo con algoritmos.",
    ]),
  },
  {
    id: "programacion-18",
    slug: "configuracion-entorno-trabajo",
    title: "Configuración del Entorno de Trabajo",
    subject: "Introducción a la Programación",
    date: "2026-02-08",
    type: "Práctica",
    description:
      "Configuración inicial del entorno de trabajo para el desarrollo de actividades de programación.",
    context:
      "La actividad permitió preparar las herramientas necesarias para programar, ejecutar código y organizar el trabajo durante la materia.",
    objective:
      "Instalar y configurar el entorno de programación requerido para el desarrollo de la materia.",
    process:
      "Se configuraron herramientas básicas como editor de código, extensiones y entorno necesario para ejecutar ejercicios de programación.",
    result:
      "Se dejó listo el entorno de trabajo para comenzar las prácticas de programación.",
    keyLearnings: [
      "Importancia de contar con un entorno de desarrollo preparado.",
      "Configuración básica de herramientas de programación.",
      "Organización inicial para trabajar con código.",
    ],
    tools: ["VSCode", "Python", "Extensiones", "Entorno de desarrollo"],
    tags: ["Configuración", "VSCode", "Python", "Entorno de trabajo"],
    featured: false,
    imageUrl:
      "/portfolio/subjects/introduccion-a-la-programacion/images/configuracion-entorno-trabajo-cover.png",
  },
  {
    id: "ciencia-datos-01",
    slug: "retos-northwind-r-odata",
    title: "Retos Northwind - R - OData",
    subject: "Introducción a Ciencia de Datos",
    date: "2026-05-08",
    type: "Práctica",
    description:
      "Resolución de retos de análisis de datos utilizando el conjunto Northwind mediante R y acceso a datos vía OData.",
    context:
      "El trabajo permitió aplicar herramientas de análisis de datos sobre una base estructurada, explorando información comercial mediante consultas, transformación y análisis en R.",
    objective:
      "Resolver retos prácticos de análisis de datos utilizando R y datos provenientes de Northwind a través de OData.",
    process:
      "Se trabajó con datos estructurados, realizando carga, exploración, limpieza y análisis mediante R para responder preguntas específicas sobre la información disponible.",
    result:
      "Se desarrollaron respuestas analíticas a los retos planteados, fortaleciendo el uso de R para explorar datos empresariales.",
    keyLearnings: [
      "Uso de R para análisis de datos.",
      "Exploración de datos estructurados mediante OData.",
      "Aplicación de análisis sobre información comercial.",
    ],
    tools: ["R", "OData", "R Studio", "Análisis de datos"],
    tags: ["R", "Northwind", "OData", "Análisis de datos", "Datos empresariales"],
    featured: true,
  },
  {
    id: "ciencia-datos-02",
    slug: "analisis-casos-coffeeshop-netflix",
    title: "Análisis sobre los Casos CoffeeShop y Netflix",
    subject: "Introducción a Ciencia de Datos",
    date: "2026-03-06",
    type: "Informe",
    description:
      "Análisis comparativo de los casos CoffeeShop y Netflix desde una perspectiva introductoria de ciencia de datos.",
    context:
      "La actividad permitió observar cómo distintos tipos de organizaciones pueden utilizar datos para comprender clientes, patrones de consumo y toma de decisiones.",
    objective:
      "Analizar los casos CoffeeShop y Netflix para identificar el papel de los datos en la comprensión del comportamiento del consumidor y la estrategia empresarial.",
    process:
      "Se revisaron ambos casos, identificando variables relevantes, posibles patrones y formas en que los datos pueden apoyar decisiones organizacionales.",
    result:
      "Se elaboró un análisis que conecta el uso de datos con decisiones comerciales y comprensión del mercado.",
    keyLearnings: [
      "Los datos permiten comprender mejor el comportamiento del cliente.",
      "Empresas de distintos sectores pueden aplicar análisis de datos.",
      "La interpretación de patrones apoya la toma de decisiones.",
    ],
    tools: ["Análisis de casos", "Interpretación de datos", "Excel", "Power Query", "Redacción académica"],
    tags: ["CoffeeShop", "Netflix", "Casos", "Datos", "Clientes"],
    featured: false,
  },
  {
    id: "ciencia-datos-03",
    slug: "analisis-iquattro-records",
    title: "Análisis IQuattro Records",
    subject: "Introducción a Ciencia de Datos",
    date: "2026-03-05",
    type: "Informe",
    description:
      "Análisis inicial del caso IQuattro Records desde una perspectiva de interpretación de datos y toma de decisiones.",
    context:
      "El trabajo permitió iniciar la aplicación de conceptos de ciencia de datos a un caso empresarial, observando información disponible y posibles conclusiones.",
    objective:
      "Realizar un primer análisis del caso IQuattro Records para interpretar datos relevantes y extraer conclusiones útiles.",
    process:
      "Se revisó la información del caso, se identificaron datos importantes y se formularon observaciones iniciales sobre la situación analizada.",
    result:
      "Se elaboró una primera versión del análisis, posteriormente mejorada en una entrega corregida.",
    keyLearnings: [
      "Primer acercamiento al análisis de datos aplicado a casos empresariales.",
      "Importancia de formular conclusiones a partir de información disponible.",
      "Necesidad de revisar y mejorar los análisis iniciales.",
    ],
    tools: ["Análisis de datos", "Excel", "Power Query", "Redacción académica"],
    tags: ["IQuattro Records", "Análisis inicial", "Datos", "Empresa"],
    featured: false,
  },
  {
    id: "ciencia-datos-04",
    slug: "mapa-tesoro-olist",
    title: "Misión de Fin de Semana - El Mapa del Tesoro de Olist",
    subject: "Introducción a Ciencia de Datos",
    date: "2026-02-27",
    type: "Proyecto",
    description:
      "Actividad práctica basada en el análisis del caso Olist Brasil, orientada a explorar datos y encontrar patrones relevantes.",
    context:
      "El trabajo permitió abordar un conjunto de datos desde una perspectiva exploratoria, relacionando información comercial con oportunidades de análisis.",
    objective:
      "Explorar datos del caso Olist para identificar patrones, hallazgos o relaciones útiles dentro de la información disponible.",
    process:
      "Se revisaron datos relacionados con el caso, se exploraron variables relevantes y se buscaron relaciones que permitieran construir una interpretación inicial.",
    result:
      "Se desarrolló una exploración inicial de datos orientada a encontrar hallazgos relevantes dentro del caso Olist.",
    keyLearnings: [
      "Exploración inicial de conjuntos de datos.",
      "Identificación de patrones y relaciones.",
      "Aplicación de pensamiento analítico en un caso empresarial.",
    ],
    tools: ["Análisis exploratorio", "Datos Olist", "Excel", "Power Query", "Interpretación de datos"],
    tags: ["Olist", "Análisis exploratorio", "Datos", "E-commerce"],
    featured: true,
    imageUrl:
      "/portfolio/subjects/introduccion-a-ciencia-de-datos/images/mapa-tesoro-olist-cover.png",
    fileUrl: dataScienceFile("mapa-tesoro-olist.html"),
    evidence: [
      {
        type: "external",
        label: "Version HTML del mapa del tesoro de Olist",
        url: dataScienceFile("mapa-tesoro-olist.html"),
      },
      {
        type: "zip",
        label: "Archivo comprimido del caso Olist",
        url: dataScienceFile("mapa-tesoro-olist.zip"),
      },
    ],
    gallery: dataScienceGallery("mapa-tesoro-olist", [
      "Vista inicial del analisis exploratorio del caso Olist.",
      "Evidencia de navegacion y estructura del proyecto de datos.",
      "Captura de hallazgos visuales del caso Olist.",
      "Registro del trabajo con datos y observaciones del caso.",
      "Visualizacion complementaria del mapa del tesoro de Olist.",
      "Evidencia de analisis aplicado sobre el conjunto de datos.",
      "Captura del recorrido de exploracion y patrones encontrados.",
      "Cierre visual del proyecto de analisis del caso Olist.",
    ]),
  },
  {
    id: "empresa-entorno-01",
    slug: "cv-curriculum-vitae",
    title: "CV - Curriculum Vitae",
    subject: "Empresa y Entorno",
    date: "2026-02-12",
    type: "Proyecto",
    description:
      "Elaboracion del Curriculum Vitae del estudiante como herramienta de presentacion personal, academica y profesional.",
    context:
      "Este trabajo permitio organizar la informacion personal, academica y laboral personal en un formato claro y profesional.",
    objective:
      "Construir una presentación personal estructurada que refleje mi perfil, experiencia, habilidades y objetivos.",
    process:
      "Se recopilo informacion personal, academica y profesional, organizandola en secciones relevantes para la presentacion del perfil.",
    result:
      "Se obtuvo un CV inicial que funciona como documento base para futuras postulaciones academicas o profesionales.",
    keyLearnings: [
      "Importancia de una presentación personal clara y profesional.",
      "Organizacion de informacion academica y laboral.",
      "Valor del CV como herramienta de comunicacion profesional.",
    ],
    tools: ["Word", "Redaccion profesional", "Organizacion de informacion"],
    tags: ["Perfil profesional", "Presentación personal", "Comunicacion"],
    featured: false,
    imageUrl: businessImage("cv-curriculum-vitae-cover.png"),
    fileUrl: businessFile("cv-curriculum-vitae.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Curriculum Vitae completo",
        url: businessFile("cv-curriculum-vitae.pdf"),
      },
    ],
  },
  {
    id: "empresa-entorno-02",
    slug: "presentacion-empresas-bolivianas-soboce",
    title: "Presentaciones Empresas Bolivianas - SOBOCE",
    subject: "Empresa y Entorno",
    date: "2026-02-24",
    type: "Investigación",
    description:
      "Investigacion introductoria sobre la empresa boliviana SOBOCE, considerando aspectos generales de su actividad empresarial.",
    context:
      "El trabajo permitio aproximarse al analisis de una empresa boliviana real, observando su presencia en el mercado y su relevancia dentro del entorno empresarial nacional.",
    objective:
      "Realizar una investigacion general sobre SOBOCE para comprender sus caracteristicas principales como empresa boliviana.",
    process:
      "Se realizo una busqueda de informacion basica sobre la empresa, su actividad, sector y principales caracteristicas organizacionales.",
    result:
      "Se elaboro una presentacion general sobre SOBOCE como caso de empresa boliviana.",
    keyLearnings: [
      "Reconocimiento de empresas relevantes dentro del contexto boliviano.",
      "Comprension inicial del analisis empresarial.",
      "Importancia de investigar el entorno real de las organizaciones.",
    ],
    tools: ["Investigacion bibliografica", "Word", "Trabajo academico"],
    tags: ["Empresa boliviana", "SOBOCE", "Investigacion", "Entorno empresarial"],
    featured: false,
    imageUrl: businessImage("presentacion-soboce-cover.png"),
    fileUrl: businessFile("presentacion-soboce.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Presentacion de SOBOCE",
        url: businessFile("presentacion-soboce.pdf"),
      },
    ],
  },
  {
    id: "empresa-entorno-03",
    slug: "crea-tu-empresa-chasquidog",
    title: "Crea tu Empresa",
    subject: "Empresa y Entorno",
    date: "2026-02-24",
    type: "Proyecto",
    description:
      "Proyecto grupal orientado a la creacion de una empresa imaginaria, dando origen a la propuesta empresarial ChasquiDog.",
    context:
      "La actividad permitio aplicar conceptos basicos de creacion empresarial mediante el desarrollo de una idea de negocio propia.",
    objective:
      "Disenar una empresa imaginaria considerando su idea central, proposito, propuesta inicial y orientacion de mercado.",
    process:
      "El trabajo fue desarrollado en equipo, mediante lluvia de ideas, definicion del concepto empresarial y construccion inicial de la identidad de ChasquiDog.",
    result:
      "Se creo la empresa ficticia ChasquiDog como base para futuros trabajos de la materia.",
    keyLearnings: [
      "Comprension inicial del proceso de creacion de una empresa.",
      "Importancia del trabajo colaborativo en el desarrollo de ideas de negocio.",
      "Relacion entre una idea empresarial y su propuesta de valor.",
    ],
    tools: ["Trabajo en equipo", "Ideacion"],
    tags: ["Emprendimiento", "ChasquiDog", "Creacion de empresa", "Trabajo en equipo"],
    featured: false,
    imageUrl: businessImage("crea-tu-empresa-chasquidog-cover.png"),
    fileUrl: businessFile("crea-tu-empresa-chasquidog.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Proyecto Crea tu Empresa - ChasquiDog",
        url: businessFile("crea-tu-empresa-chasquidog.pdf"),
      },
    ],
  },
  {
    id: "empresa-entorno-04",
    slug: "metas-empresariales-chasquidog",
    title: "Metas Empresariales",
    subject: "Empresa y Entorno",
    date: "2026-03-03",
    type: "Práctica",
    description:
      "Presentacion de objetivos SMART a corto y largo plazo para la empresa ficticia ChasquiDog.",
    context:
      "A partir de la empresa creada en clase, se trabajo en la formulacion de metas empresariales claras, medibles y orientadas al desarrollo del proyecto.",
    objective:
      "Crear objetivos SMART para orientar el crecimiento y organizacion de la empresa ChasquiDog.",
    process:
      "El trabajo fue desarrollado en grupo, definiendo metas especificas, medibles, alcanzables, relevantes y con limite temporal.",
    result:
      "Se establecieron objetivos empresariales para guiar el desarrollo inicial de ChasquiDog.",
    keyLearnings: [
      "Aplicacion de la metodologia SMART.",
      "Importancia de definir metas empresariales claras.",
      "Relacion entre objetivos y planificacion estrategica.",
    ],
    tools: ["Trabajo en equipo", "Metodologia SMART"],
    tags: ["Objetivos SMART", "Planificacion", "ChasquiDog", "Gestion empresarial"],
    featured: false,
    imageUrl: businessImage("metas-empresariales-chasquidog-cover.png"),
    fileUrl: businessFile("metas-empresariales-chasquidog.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Metas empresariales de ChasquiDog",
        url: businessFile("metas-empresariales-chasquidog.pdf"),
      },
    ],
  },
  {
    id: "empresa-entorno-05",
    slug: "metas-personales-semestre",
    title: "Metas Personales",
    subject: "Empresa y Entorno",
    date: "2026-03-03",
    type: "Proyecto",
    description:
      "Definicion de metas personales para cumplir durante el semestre, con limite establecido hasta el 28 de mayo.",
    context:
      "El trabajo permitio trasladar la metodologia de planificacion al ambito personal, conectando objetivos academicos y desarrollo individual.",
    objective: "Trazar metas SMART personales para el semestre academico.",
    process:
      "Se identificaron objetivos personales relevantes y se estructuraron bajo criterios de especificidad, medicion, alcance, relevancia y temporalidad.",
    result:
      "Se establecieron metas personales concretas para orientar el desempeno durante el semestre.",
    keyLearnings: [
      "Aplicacion de objetivos SMART al desarrollo personal.",
      "Importancia de establecer metas con limite temporal.",
      "Relacion entre planificacion personal y rendimiento academico o profesional.",
    ],
    tools: ["Metodologia SMART", "Reflexion personal", "Planificacion"],
    tags: ["Metas personales", "SMART", "Planificacion personal"],
    featured: false,
    imageUrl: businessImage("metas-personales-semestre-cover.png"),
  },
  {
    id: "empresa-entorno-06",
    slug: "procesos-empresariales-chasquidog",
    title: "Procesos Empresariales",
    subject: "Empresa y Entorno",
    date: "2026-03-17",
    type: "Proyecto",
    description:
      "Analisis y organizacion de los procesos estrategicos, operativos y de apoyo de la empresa ficticia ChasquiDog.",
    context:
      "El trabajo permitio comprender como una empresa puede organizar sus actividades internas mediante la identificacion de procesos clave.",
    objective:
      "Visualizar los procesos estrategicos, operativos y de apoyo necesarios para el funcionamiento de ChasquiDog.",
    process:
      "El trabajo fue desarrollado en grupo, identificando las principales actividades de la empresa y clasificandolas segun su funcion dentro del modelo organizacional.",
    result:
      "Se construyo una representacion de los procesos empresariales de ChasquiDog.",
    keyLearnings: [
      "Diferenciacion entre procesos estrategicos, operativos y de apoyo.",
      "Comprension de la organizacion interna de una empresa.",
      "Importancia de los procesos para el funcionamiento empresarial.",
    ],
    tools: ["Trabajo en equipo", "Analisis de procesos", "Diagramacion"],
    tags: ["Procesos empresariales", "ChasquiDog", "Gestion", "Organizacion"],
    featured: false,
    imageUrl: businessImage("procesos-empresariales-chasquidog-cover.png"),
  },
  {
    id: "empresa-entorno-07",
    slug: "lienzo-propuesta-valor-restaurante",
    title: "Lienzo de Propuesta de Valor",
    subject: "Empresa y Entorno",
    date: "2026-03-31",
    type: "Práctica",
    description:
      "Creacion del Lienzo de Propuesta de Valor aplicado al sector gastronomico, especificamente para un restaurante.",
    context:
      "La actividad permitio analizar la relacion entre las necesidades del cliente y la propuesta de valor que una empresa puede ofrecer.",
    objective:
      "Construir un Lienzo de Propuesta de Valor identificando trabajos del cliente, dolores, ganancias, productos, aliviadores de dolor y creadores de ganancia.",
    process:
      "Se analizo el perfil del cliente de un restaurante y se relacionaron sus necesidades con una propuesta de valor coherente.",
    result:
      "Se desarrollo un lienzo que permitio visualizar como un restaurante puede responder mejor a las expectativas de sus clientes.",
    keyLearnings: [
      "Comprension del perfil del cliente.",
      "Relacion entre necesidades del cliente y propuesta de valor.",
      "Aplicacion practica del Value Proposition Canvas.",
    ],
    tools: ["Value Proposition Canvas", "Analisis de cliente", "Trabajo academico"],
    tags: ["Propuesta de valor", "Cliente", "Restaurante", "Modelo de negocio"],
    featured: true,
    imageUrl: businessImage("lienzo-propuesta-valor-restaurante-cover.png"),
  },
  {
    id: "empresa-entorno-08",
    slug: "metas-personales-riesgos-progreso",
    title: "Metas Personales - Riesgos y Progreso",
    subject: "Empresa y Entorno",
    date: "2026-04-14",
    type: "Proyecto",
    description:
      "Analisis de riesgos asociados a las metas personales del semestre y revision del progreso alcanzado.",
    context:
      "Este trabajo permitio evaluar los factores internos y externos que podian afectar el cumplimiento de las metas personales previamente definidas.",
    objective:
      "Analizar riesgos que podrian impedir el cumplimiento de metas personales y proponer acciones para mitigarlos.",
    process:
      "Se revisaron las metas establecidas, se identificaron posibles obstaculos y se evaluo el avance logrado durante el periodo academico.",
    result:
      "Se obtuvo una matriz basica de riesgos, acciones de mitigacion y progreso personal.",
    keyLearnings: [
      "Importancia de anticipar riesgos en la planificacion personal.",
      "Relacion entre metas, obstaculos y acciones correctivas.",
      "Seguimiento del progreso como parte del proceso de mejora.",
    ],
    tools: ["Analisis de riesgos", "Planificacion personal", "Reflexion academica"],
    tags: ["Riesgos", "Metas personales", "Progreso", "Planificacion"],
    featured: false,
    imageUrl: businessImage("metas-personales-riesgos-progreso-cover.png"),
    fileUrl: businessFile("metas-personales-riesgos-progreso.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Analisis de riesgos y progreso personal",
        url: businessFile("metas-personales-riesgos-progreso.pdf"),
      },
    ],
  },
  {
    id: "empresa-entorno-09",
    slug: "business-model-canvas-spotify",
    title: "Business Model Canvas - Spotify",
    subject: "Empresa y Entorno",
    date: "2026-04-07",
    type: "Presentación",
    description:
      "Presentacion del Business Model Canvas de Spotify, analizando los nueve bloques principales de su modelo de negocio.",
    context:
      "El trabajo permitio aplicar una herramienta estrategica a una empresa global reconocida, comprendiendo como genera, entrega y captura valor.",
    objective:
      "Analizar el modelo de negocio de Spotify mediante los nueve bloques del Business Model Canvas.",
    process:
      "El trabajo fue desarrollado en grupo, investigando la empresa y organizando la informacion en los bloques del modelo: segmentos, propuesta de valor, canales, relacion con clientes, ingresos, recursos, actividades, socios y estructura de costos.",
    result:
      "Se elaboro una presentacion estructurada sobre el modelo de negocio de Spotify.",
    keyLearnings: [
      "Comprension integral del Business Model Canvas.",
      "Analisis de una empresa digital global.",
      "Identificacion de la relacion entre propuesta de valor, clientes e ingresos.",
    ],
    tools: ["Business Model Canvas", "PowerPoint", "Investigacion empresarial", "Trabajo en equipo"],
    tags: ["Spotify", "Business Model Canvas", "Modelo de negocio", "Estrategia"],
    featured: true,
    imageUrl: businessImage("business-model-canvas-spotify-cover..png"),
    fileUrl: businessFile("business-model-canvas-spotify.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Business Model Canvas de Spotify",
        url: businessFile("business-model-canvas-spotify.pdf"),
      },
    ],
  },
  {
    id: "empresa-entorno-10",
    slug: "empresas-que-fracasaron-yahoo",
    title: "Empresas que Fracasaron",
    subject: "Empresa y Entorno",
    date: "2026-04-21",
    type: "Informe",
    description:
      "Informe academico sobre el fracaso empresarial de Yahoo y los factores estrategicos que contribuyeron a su perdida de competitividad.",
    context:
      "El analisis permitio estudiar como una empresa lider puede perder relevancia frente a cambios tecnologicos, decisiones estrategicas debiles y nuevos competidores.",
    objective:
      "Analizar las causas del fracaso de Yahoo desde una perspectiva empresarial y estrategica.",
    process:
      "Se investigo la trayectoria de Yahoo, sus principales decisiones, el contexto competitivo y los factores que explican su deterioro en el mercado digital.",
    result:
      "Se elaboro un informe que identifica errores estrategicos, falta de direccion clara y perdida de ventaja competitiva como elementos centrales del caso.",
    keyLearnings: [
      "Importancia de la adaptacion estrategica.",
      "Riesgos de perder ventaja competitiva en mercados dinamicos.",
      "Relacion entre innovacion, liderazgo y sostenibilidad empresarial.",
    ],
    tools: ["Word", "Investigacion bibliografica", "Analisis estrategico"],
    tags: ["Yahoo", "Fracaso empresarial", "Estrategia", "Competitividad"],
    featured: true,
    imageUrl: businessImage("empresas-que-fracasaron-yahoo-cover.png"),
    fileUrl: businessFile("empresas-que-fracasaron-yahoo.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Informe sobre el fracaso empresarial de Yahoo",
        url: businessFile("empresas-que-fracasaron-yahoo.pdf"),
      },
    ],
  },
  {
    id: "empresa-entorno-11",
    slug: "admiracion-referentes-personales",
    title: "Admiración",
    subject: "Empresa y Entorno",
    date: "2026-04-28",
    type: "Práctica",
    description:
      "Ejercicio de reflexion personal basado en la eleccion de dos personas admiradas y los aprendizajes que se desean tomar de ellas.",
    context:
      "La actividad permitio conectar el desarrollo personal con referentes de inspiracion, identificando valores, cualidades y aprendizajes aplicables al crecimiento academico y profesional.",
    objective:
      "Identificar personas admiradas, explicar las razones de admiracion y reconocer aprendizajes personales a partir de sus cualidades.",
    process:
      "Se seleccionaron dos referentes, uno conocido y otro no conocido personalmente, analizando las razones de admiracion y los aprendizajes que podian aportar.",
    result:
      "Se construyo una reflexion personal sobre referentes, valores y aspiraciones de desarrollo.",
    keyLearnings: [
      "Reconocimiento de referentes personales y profesionales.",
      "Identificacion de valores admirables.",
      "Reflexion sobre el aprendizaje a partir de otras personas.",
    ],
    tools: ["Reflexion personal", "Redaccion academica", "Analisis personal"],
    tags: ["Admiracion", "Desarrollo personal", "Valores", "Referentes"],
    featured: false,
    imageUrl: businessImage("admiracion-referentes-personales-cover.png"),
    fileUrl: businessFile("admiracion-referentes-personales.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Reflexion sobre referentes personales",
        url: businessFile("admiracion-referentes-personales.pdf"),
      },
    ],
  },
  {
    id: "empresa-entorno-12",
    slug: "oceano-azul-y-rojo",
    title: "Oceano Azul y Rojo",
    subject: "Empresa y Entorno",
    date: "2026-04-30",
    type: "Informe",
    description:
      "Informe orientado a identificar empresas ubicadas en oceanos azules y oceanos rojos, analizando sus diferencias estrategicas.",
    context:
      "El trabajo permitio comparar entornos competitivos saturados con espacios de mercado mas innovadores, aplicando conceptos de estrategia empresarial.",
    objective:
      "Identificar y analizar empresas que representen estrategias de oceano azul y oceano rojo.",
    process:
      "Se investigaron empresas e industrias, comparando niveles de competencia, diferenciacion, innovacion y creacion de valor.",
    result:
      "Se elaboro un informe comparativo que distingue entre empresas que compiten en mercados saturados y aquellas que buscan crear nuevos espacios de mercado.",
    keyLearnings: [
      "Diferencia entre oceano azul y oceano rojo.",
      "Importancia de la innovacion estrategica.",
      "Comprension de la competencia y la diferenciacion empresarial.",
    ],
    tools: ["Word", "Investigacion estrategica", "Analisis comparativo"],
    tags: ["Oceano azul", "Oceano rojo", "Estrategia", "Innovacion", "Competencia"],
    featured: true,
    imageUrl: businessImage("oceano-azul-y-rojo-cover.png"),
    fileUrl: businessFile("oceano-azul-y-rojo.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Informe principal sobre oceano azul y rojo",
        url: businessFile("oceano-azul-y-rojo.pdf"),
      },
      {
        type: "pdf",
        label: "Version complementaria del analisis",
        url: businessFile("oceano-azul-y-rojo-01.pdf"),
      },
    ],
  },
  {
    id: "liderazgo-01",
    slug: "el-lider-sin-cargo",
    title: "El Líder sin Cargo",
    subject: "Desarrollo de Liderazgo",
    date: "2026-05-18",
    type: "Práctica",
    description:
      "Resumen de clase sobre el concepto de liderazgo sin cargo formal y su importancia en los entornos organizacionales.",
    context:
      "El trabajo permitió reflexionar sobre la idea de que el liderazgo no depende exclusivamente de una posición jerárquica, sino de la capacidad de influir, aportar valor y asumir responsabilidad.",
    objective:
      "Comprender cómo una persona puede ejercer liderazgo desde cualquier posición dentro de una organización o equipo.",
    process:
      "Se elaboró un resumen de los principales conceptos abordados en clase, organizando las ideas centrales sobre liderazgo, influencia y responsabilidad personal.",
    result:
      "Se obtuvo una síntesis académica sobre el liderazgo ejercido desde la acción y no únicamente desde el cargo.",
    keyLearnings: [
      "El liderazgo puede ejercerse sin autoridad formal.",
      "La influencia personal es clave en los equipos de trabajo.",
      "La responsabilidad y la iniciativa son componentes esenciales del liderazgo.",
    ],
    tools: ["Resumen académico", "Análisis de clase", "Redacción"],
    tags: ["Liderazgo", "Influencia", "Responsabilidad", "Autoliderazgo"],
    featured: false,
    imageUrl: robinSharmaPortrait,
    fileUrl: leadershipFile("el-lider-sin-cargo.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Resumen sobre liderazgo sin cargo",
        url: leadershipFile("el-lider-sin-cargo.pdf"),
      },
    ],
  },
  {
    id: "liderazgo-02",
    slug: "pelicula-la-boca-del-lobo-liderazgo-adaptativo",
    title: "Película La Boca del Lobo",
    subject: "Desarrollo de Liderazgo",
    date: "2026-05-12",
    type: "Ensayo",
    description:
      "Análisis de la película La Boca del Lobo integrando conceptos de liderazgo adaptativo.",
    context:
      "La actividad permitió estudiar situaciones de autoridad, conflicto, incertidumbre y toma de decisiones en un entorno de alta presión.",
    objective:
      "Analizar la película La Boca del Lobo desde la perspectiva del liderazgo adaptativo, identificando desafíos técnicos, desafíos adaptativos y dinámicas de autoridad.",
    process:
      "Se revisaron escenas clave de la película y se relacionaron con conceptos de liderazgo adaptativo, autoridad, resistencia al cambio y gestión de conflictos.",
    result:
      "Se elaboró un análisis que conecta los conflictos de la película con la necesidad de aprendizaje, adaptación y toma de responsabilidad en contextos complejos.",
    keyLearnings: [
      "Diferencia entre desafíos técnicos y adaptativos.",
      "Relación entre autoridad, miedo e incertidumbre.",
      "Importancia del liderazgo adaptativo en contextos de conflicto.",
    ],
    tools: ["Análisis cinematográfico", "Liderazgo adaptativo", "Redacción académica"],
    tags: ["La Boca del Lobo", "Liderazgo adaptativo", "Conflicto", "Autoridad"],
    featured: false,
    imageUrl: laBocaDelLoboPoster,
    fileUrl: leadershipFile("pelicula-la-boca-del-lobo.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Analisis de La Boca del Lobo",
        url: leadershipFile("pelicula-la-boca-del-lobo.pdf"),
      },
    ],
    gallery: [
      {
        src: laBocaDelLoboPoster,
        alt: "Poster de la pelicula La boca del lobo (1988)",
        caption:
          "Referencia visual directa a la pelicula peruana analizada desde el liderazgo adaptativo.",
      },
    ],
  },
  {
    id: "liderazgo-03",
    slug: "liderazgo-sistemico",
    title: "Liderazgo Sistémico",
    subject: "Desarrollo de Liderazgo",
    date: "2026-05-11",
    type: "Práctica",
    description:
      "Trabajo académico sobre el liderazgo sistémico y su aplicación en la comprensión de equipos, relaciones y dinámicas organizacionales.",
    context:
      "El liderazgo sistémico permite observar a las organizaciones como redes de relaciones interdependientes, donde las decisiones de un actor afectan al conjunto.",
    objective:
      "Comprender el liderazgo desde una perspectiva sistémica, considerando la relación entre personas, equipos, contexto y organización.",
    process:
      'Se revisaron conceptos centrales del liderazgo sistémico y se organizaron en una síntesis orientada a la comprensión de dinámicas grupales y organizacionales, junto con el análisis del cuento "¿Dónde están las monedas?".',
    result:
      "Se desarrolló una aproximación conceptual al liderazgo sistémico como herramienta para gestionar relaciones y comprender problemas complejos.",
    keyLearnings: [
      "Comprensión de la organización como sistema.",
      "Importancia de las relaciones e interdependencias.",
      "Valor del pensamiento sistémico en el liderazgo.",
    ],
    tools: ["Resumen académico", "Análisis conceptual", "Redacción"],
    tags: ["Liderazgo sistémico", "Organización", "Equipos", "Pensamiento sistémico"],
    featured: false,
    imageUrl: systemsThinkingDiagram,
    fileUrl: leadershipFile("liderazgo-sistemico.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Trabajo sobre liderazgo sistemico",
        url: leadershipFile("liderazgo-sistemico.pdf"),
      },
    ],
  },
  {
    id: "liderazgo-04",
    slug: "lider-vs-jefe",
    title: "Líder vs. Jefe",
    subject: "Desarrollo de Liderazgo",
    date: "2026-05-08",
    type: "Práctica",
    description:
      "Comparación entre las características de un líder y un jefe, considerando sus diferencias en la gestión de personas.",
    context:
      "El trabajo permitió reflexionar sobre estilos de dirección, influencia, autoridad y formas de relacionarse con los equipos.",
    objective:
      "Diferenciar el rol de un líder y el de un jefe, identificando comportamientos que favorecen o limitan el desarrollo de los equipos.",
    process:
      "Se organizaron conceptos comparativos sobre liderazgo y jefatura, destacando diferencias en comunicación, motivación, autoridad y acompañamiento.",
    result:
      "Se obtuvo una síntesis comparativa sobre dos formas distintas de ejercer dirección dentro de un equipo.",
    keyLearnings: [
      "Diferencia entre autoridad formal e influencia positiva.",
      "Importancia de la comunicación en el liderazgo.",
      "El liderazgo se orienta al desarrollo de personas, no solo al cumplimiento de tareas.",
    ],
    tools: ["Cuadro comparativo", "Análisis conceptual", "Redacción"],
    tags: ["Líder", "Jefe", "Gestión de equipos", "Comunicación"],
    featured: false,
    imageUrl: leadershipImage("lider-vs-jefe-cover.png"),
    fileUrl: leadershipFile("lider-vs-jefe.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Comparacion entre lider y jefe",
        url: leadershipFile("lider-vs-jefe.pdf"),
      },
      {
        type: "image",
        label: "Version visual de lider vs. jefe",
        url: leadershipFile("lider-vs-jefe.png"),
      },
    ],
  },
  {
    id: "liderazgo-05",
    slug: "empatia-en-el-liderazgo",
    title: "Empatía en el Liderazgo",
    subject: "Desarrollo de Liderazgo",
    date: "2026-04-22",
    type: "Práctica",
    description:
      "Resumen sobre la importancia de la empatía como competencia esencial en el ejercicio del liderazgo.",
    context:
      "La empatía permite comprender mejor a los integrantes de un equipo, fortalecer relaciones y mejorar la comunicación dentro de las organizaciones.",
    objective:
      "Analizar la empatía como una habilidad clave para liderar personas y construir relaciones laborales más humanas y efectivas.",
    process:
      "Se elaboró un resumen de los conceptos principales, relacionando la empatía con comunicación, escucha activa y gestión de equipos.",
    result:
      "Se construyó una síntesis sobre el valor de la empatía en el liderazgo contemporáneo.",
    keyLearnings: [
      "La empatía fortalece la relación entre líder y equipo.",
      "La escucha activa es una herramienta clave de liderazgo.",
      "El liderazgo efectivo requiere comprender las emociones y necesidades de otros.",
    ],
    tools: ["Resumen académico", "Reflexión", "Redacción"],
    tags: ["Empatía", "Liderazgo", "Comunicación", "Equipos"],
    featured: false,
    imageUrl: empathyReferenceImage,
    fileUrl: leadershipFile("empatia-en-el-liderazgo.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Resumen sobre empatia en el liderazgo",
        url: leadershipFile("empatia-en-el-liderazgo.pdf"),
      },
    ],
  },
  {
    id: "liderazgo-06",
    slug: "liderar-desde-las-heridas-de-la-infancia",
    title: "Liderar desde las Heridas de la Infancia",
    subject: "Desarrollo de Liderazgo",
    date: "2026-04-21",
    type: "Ensayo",
    description:
      "Ejercicio individual de autoconocimiento orientado a identificar patrones defensivos que pueden limitar el liderazgo personal.",
    context:
      "El trabajo se basó en los conceptos de las heridas emocionales de Lise Bourbeau, aplicados a la gestión, la toma de decisiones y la conexión con equipos de trabajo.",
    objective:
      "Identificar patrones de conducta defensivos que limitan la capacidad de gestión, toma de decisiones y conexión con equipos, generando un plan de acción de autoliderazgo.",
    process:
      "Se realizó una reflexión individual sobre máscaras, heridas emocionales y patrones de conducta, conectándolos con situaciones de liderazgo y gestión personal.",
    result:
      "Se construyó una reflexión personal orientada al autoconocimiento y a la mejora del liderazgo desde una perspectiva emocional.",
    keyLearnings: [
      "Importancia del autoconocimiento en el liderazgo.",
      "Relación entre heridas emocionales y patrones defensivos.",
      "Necesidad de trabajar el autoliderazgo para mejorar la gestión de equipos.",
    ],
    tools: ["Reflexión personal", "Autodiagnóstico", "Redacción académica"],
    tags: ["Autoliderazgo", "Heridas emocionales", "Lise Bourbeau", "Gestión personal"],
    featured: false,
    imageUrl: acesPyramidDiagram,
    fileUrl: leadershipFile("liderar-desde-las-heridas-infancia.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Ensayo sobre heridas de la infancia y liderazgo",
        url: leadershipFile("liderar-desde-las-heridas-infancia.pdf"),
      },
    ],
  },
  {
    id: "liderazgo-07",
    slug: "aprender-a-desaprender-enemigos-del-aprendizaje",
    title: "Aprender a Desaprender y Enemigos del Aprendizaje",
    subject: "Desarrollo de Liderazgo",
    date: "2026-04-08",
    type: "Práctica",
    description:
      "Trabajo académico sobre la importancia de desaprender creencias, hábitos o patrones que limitan el aprendizaje y el desarrollo personal.",
    context:
      "La actividad permitió reflexionar sobre las barreras internas que dificultan el aprendizaje, especialmente en procesos de cambio, liderazgo y crecimiento personal.",
    objective:
      "Identificar los principales enemigos del aprendizaje y comprender la importancia de desaprender para desarrollar nuevas capacidades.",
    process:
      "Se analizaron conceptos vinculados al aprendizaje, desaprendizaje, resistencia al cambio y apertura personal al desarrollo.",
    result:
      "Se elaboró una reflexión estructurada sobre las barreras que impiden aprender y las actitudes necesarias para superarlas.",
    keyLearnings: [
      "El aprendizaje requiere apertura al cambio.",
      "Desaprender es necesario para superar patrones limitantes.",
      "Los enemigos del aprendizaje afectan el liderazgo y el desarrollo personal.",
    ],
    tools: ["Análisis conceptual", "Reflexión personal", "Redacción"],
    tags: ["Aprendizaje", "Desaprender", "Cambio", "Desarrollo personal"],
    featured: true,
    imageUrl: learningCurveDiagram,
    fileUrl: leadershipFile("aprender-desaprender-enemigos-aprendizaje.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Trabajo sobre desaprender y enemigos del aprendizaje",
        url: leadershipFile("aprender-desaprender-enemigos-aprendizaje.pdf"),
      },
    ],
  },
  {
    id: "liderazgo-08",
    slug: "la-etica-en-el-liderazgo",
    title: "La Ética en el Liderazgo",
    subject: "Desarrollo de Liderazgo",
    date: "2026-04-06",
    type: "Ensayo",
    description:
      "Análisis sobre la ética en el liderazgo a partir de un artículo académico, el caso de Adolf Hitler desde la perspectiva del liderazgo adaptativo y la revisión de líderes bolivianos recientes.",
    context:
      "El trabajo permitió reflexionar críticamente sobre la diferencia entre liderazgo efectivo y liderazgo ético, considerando casos históricos y políticos.",
    objective:
      "Analizar la dimensión ética del liderazgo y su relación con la influencia, la autoridad, la responsabilidad y el impacto social.",
    process:
      "Se analizó el artículo “Hacia un liderazgo ético: Adolf Hitler desde la perspectiva del liderazgo adaptativo”, se revisaron dos líderes bolivianos de los últimos 20 años y se elaboró una reflexión crítica.",
    result:
      "Se desarrolló un análisis que diferencia la capacidad de influencia de la legitimidad ética del liderazgo.",
    keyLearnings: [
      "No todo liderazgo efectivo es necesariamente ético.",
      "La influencia debe analizarse junto con la responsabilidad moral.",
      "Según el liderazgo adaptativo si el líder no eleva al grupo a un nivel superior no puede ser considerado como tal.",
    ],
    tools: ["Análisis de artículo", "Investigación", "Reflexión crítica", "Redacción académica"],
    tags: ["Ética", "Liderazgo adaptativo", "Responsabilidad", "Política", "Reflexión crítica"],
    featured: true,
    imageUrl: hitlerPortrait,
    fileUrl: leadershipFile("etica-en-el-liderazgo.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Analisis sobre etica en el liderazgo",
        url: leadershipFile("etica-en-el-liderazgo.pdf"),
      },
    ],
    gallery: [
      {
        src: hitlerPortrait,
        alt: "Retrato historico de Adolf Hitler",
        caption:
          "Referencia visual del caso historico analizado para discutir la diferencia entre influencia y legitimidad etica.",
      },
      {
        src: evoMoralesPortrait,
        alt: "Retrato oficial de Evo Morales",
        caption:
          "Referencia visual del contexto boliviano incorporado al analisis comparativo sobre etica y liderazgo.",
      },
    ],
  },
  {
    id: "liderazgo-09",
    slug: "mapa-conceptual-cinco-as-del-liderazgo",
    title: "Mapa Conceptual - Las 5 A’s del Liderazgo",
    subject: "Desarrollo de Liderazgo",
    date: "2026-03-29",
    type: "Presentación",
    description:
      "Mapa conceptual elaborado para una exposición sobre las 5 A’s del liderazgo.",
    context:
      "La actividad permitió organizar visualmente conceptos clave relacionados con el liderazgo, facilitando su comprensión y exposición.",
    objective:
      "Sintetizar los elementos principales de las 5 A’s del liderazgo mediante un mapa conceptual claro y ordenado.",
    process:
      "Se identificaron ideas centrales, relaciones entre conceptos y elementos clave para construir una representación visual del tema.",
    result:
      "Se elaboró un mapa conceptual útil como apoyo para la exposición académica.",
    keyLearnings: [
      "Organización visual de conceptos de liderazgo.",
      "Importancia de sintetizar ideas para comunicar mejor.",
      "Relación entre conceptos teóricos y exposición académica.",
    ],
    tools: ["Mapa conceptual", "PowerPoint", "Trabajo expositivo"],
    tags: ["5 A’s del liderazgo", "Mapa conceptual", "Exposición", "Síntesis"],
    featured: false,
    imageUrl: leadershipStylesDiagram,
    fileUrl: leadershipFile("mapa-conceptual-cinco-as-liderazgo.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Mapa conceptual de las 5 A's del liderazgo",
        url: leadershipFile("mapa-conceptual-cinco-as-liderazgo.pdf"),
      },
    ],
  },
  {
    id: "liderazgo-10",
    slug: "resumen-liderazgo-expansivo",
    title: "Resumen Liderazgo Expansivo",
    subject: "Desarrollo de Liderazgo",
    date: "2026-03-29",
    type: "Práctica",
    description:
      "Resumen académico sobre el liderazgo expansivo y su relación con el crecimiento personal y organizacional.",
    context:
      "El liderazgo expansivo propone una mirada orientada al desarrollo de capacidades, apertura al cambio y ampliación de posibilidades dentro de los equipos.",
    objective:
      "Comprender los principales conceptos del liderazgo expansivo y su aplicación en contextos personales y organizacionales.",
    process:
      "Se sintetizaron las ideas centrales del tema, relacionándolas con el desarrollo de personas, equipos y liderazgo consciente.",
    result:
      "Se obtuvo un resumen estructurado sobre liderazgo expansivo y sus implicaciones para el desarrollo del líder.",
    keyLearnings: [
      "El liderazgo puede ampliar posibilidades de acción.",
      "El desarrollo personal influye en la forma de liderar.",
      "Los equipos crecen cuando el liderazgo promueve aprendizaje y apertura.",
    ],
    tools: ["Resumen académico", "Análisis conceptual", "Redacción"],
    tags: ["Liderazgo expansivo", "Desarrollo personal", "Equipos", "Aprendizaje"],
    featured: false,
    imageUrl: upliftingTeamworkPhoto,
    fileUrl: leadershipFile("resumen-liderazgo-expansivo.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Resumen sobre liderazgo expansivo",
        url: leadershipFile("resumen-liderazgo-expansivo.pdf"),
      },
    ],
  },
  {
    id: "liderazgo-11",
    slug: "analisis-pelicula-el-senor-de-las-moscas",
    title: "Análisis Película El Señor de las Moscas",
    subject: "Desarrollo de Liderazgo",
    date: "2026-03-23",
    type: "Ensayo",
    description:
      "Análisis de la película El Señor de las Moscas desde la perspectiva del liderazgo, la autoridad, la conducta grupal y la toma de decisiones.",
    context:
      "La película permitió observar cómo surgen formas de liderazgo, poder, conflicto y organización social en un grupo enfrentado a una situación extrema.",
    objective:
      "Analizar las dinámicas de liderazgo y poder presentes en El Señor de las Moscas, relacionándolas con conceptos vistos en clase.",
    process:
      "Se revisaron escenas clave de la película, identificando estilos de liderazgo, conflictos grupales, toma de decisiones y pérdida de normas compartidas.",
    result:
      "Se elaboró un análisis que evidencia cómo el liderazgo puede construir orden o generar conflicto según la forma en que se ejerce la autoridad.",
    keyLearnings: [
      "El liderazgo influye en la conducta colectiva.",
      "La ausencia de normas puede generar conflictos de poder.",
      "Los estilos de liderazgo afectan la cohesión y dirección de un grupo.",
    ],
    tools: ["Análisis cinematográfico", "Redacción académica", "Conceptos de liderazgo"],
    tags: ["El Señor de las Moscas", "Liderazgo", "Poder", "Conducta grupal", "Autoridad"],
    featured: true,
    imageUrl: conchShellReference,
    fileUrl: leadershipFile("analisis-senor-de-las-moscas.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Analisis de El Senor de las Moscas",
        url: leadershipFile("analisis-senor-de-las-moscas.pdf"),
      },
    ],
    gallery: [
      {
        src: conchShellReference,
        alt: "Caracola asociada a la simbolica de El Senor de las Moscas",
        caption:
          "Referencia visual a la caracola, uno de los simbolos centrales de autoridad, orden y voz colectiva en la obra analizada.",
      },
    ],
  },
  {
    id: "liderazgo-12",
    slug: "mapa-conceptual-estilos-de-liderazgo",
    title: "Mapa Conceptual - Estilos de Liderazgo",
    subject: "Desarrollo de Liderazgo",
    date: "2026-03-16",
    type: "Presentación",
    description:
      "Mapa conceptual elaborado para una exposición sobre diferentes estilos de liderazgo.",
    context:
      "El trabajo permitió organizar de manera visual los principales estilos de liderazgo y sus características.",
    objective:
      "Sintetizar los estilos de liderazgo mediante una estructura visual clara para apoyar una exposición académica.",
    process:
      "Se identificaron estilos de liderazgo, características principales y relaciones entre conceptos para elaborar un mapa conceptual.",
    result:
      "Se obtuvo un recurso visual útil para explicar los distintos estilos de liderazgo.",
    keyLearnings: [
      "Diferenciación entre estilos de liderazgo.",
      "Uso de mapas conceptuales para comunicar ideas complejas.",
      "Relación entre estilo de liderazgo y comportamiento del equipo.",
    ],
    tools: ["Mapa conceptual", "PowerPoint", "Síntesis académica"],
    tags: ["Estilos de liderazgo", "Mapa conceptual", "Exposición", "Equipos"],
    featured: false,
    imageUrl: leadershipStylesDiagram,
    fileUrl: leadershipFile("mapa-conceptual-estilos-liderazgo.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Mapa conceptual sobre estilos de liderazgo",
        url: leadershipFile("mapa-conceptual-estilos-liderazgo.pdf"),
      },
    ],
  },
  {
    id: "liderazgo-13",
    slug: "resumen-liderazgo-y-emociones",
    title: "Resumen Exposición Liderazgo y Emociones",
    subject: "Desarrollo de Liderazgo",
    date: "2026-03-16",
    type: "Práctica",
    description:
      "Resumen académico sobre la relación entre liderazgo y emociones.",
    context:
      "El trabajo permitió comprender cómo las emociones influyen en la forma de liderar, tomar decisiones y relacionarse con los equipos.",
    objective:
      "Analizar el papel de las emociones en el liderazgo y su impacto en la gestión de personas.",
    process:
      "Se sintetizaron los conceptos centrales de la exposición, conectando liderazgo emocional, autoconocimiento y manejo de equipos.",
    result:
      "Se elaboró un resumen que destaca la importancia de la gestión emocional en el liderazgo efectivo.",
    keyLearnings: [
      "Las emociones influyen en la toma de decisiones.",
      "El líder debe desarrollar autoconocimiento emocional.",
      "La gestión emocional mejora la relación con los equipos.",
    ],
    tools: ["Resumen académico", "Análisis de exposición", "Redacción"],
    tags: ["Liderazgo emocional", "Emociones", "Autoconocimiento", "Equipos"],
    featured: false,
    imageUrl: plutchikWheel,
    fileUrl: leadershipFile("resumen-liderazgo-y-emociones.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Resumen sobre liderazgo y emociones",
        url: leadershipFile("resumen-liderazgo-y-emociones.pdf"),
      },
    ],
  },
  {
    id: "liderazgo-14",
    slug: "ventana-de-johari",
    title: "Ventana de Johari",
    subject: "Desarrollo de Liderazgo",
    date: "2026-03-08",
    type: "Práctica",
    description:
      "Aplicación de la Ventana de Johari como herramienta de autoconocimiento y mejora de la comunicación interpersonal.",
    context:
      "La Ventana de Johari permite analizar la relación entre lo que una persona conoce de sí misma y lo que los demás perciben, favoreciendo el desarrollo personal y grupal.",
    objective:
      "Comprender la Ventana de Johari como herramienta para fortalecer el autoconocimiento, la retroalimentación y la comunicación en equipos.",
    process:
      "Se revisaron los cuadrantes de la herramienta y se reflexionó sobre su aplicación en el liderazgo y las relaciones interpersonales.",
    result:
      "Se elaboró una práctica orientada a identificar áreas de autoconocimiento y oportunidades de mejora en la comunicación.",
    keyLearnings: [
      "El autoconocimiento fortalece el liderazgo.",
      "La retroalimentación permite ampliar la zona abierta.",
      "La comunicación mejora cuando existe mayor conciencia personal y grupal.",
    ],
    tools: ["Ventana de Johari", "Reflexión personal", "Análisis interpersonal"],
    tags: ["Ventana de Johari", "Autoconocimiento", "Comunicación", "Retroalimentación"],
    featured: false,
    imageUrl: johariWindowDiagram,
    fileUrl: leadershipFile("ventana-de-johari.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Trabajo sobre la ventana de Johari",
        url: leadershipFile("ventana-de-johari.pdf"),
      },
    ],
  },
  {
    id: "liderazgo-15",
    slug: "tarea-grupal-estilos-de-liderazgo",
    title: "Tarea Grupal: Estilos de Liderazgo",
    subject: "Desarrollo de Liderazgo",
    date: "2026-03-08",
    type: "Proyecto",
    description:
      "Trabajo grupal sobre estilos de liderazgo y su aplicación en diferentes contextos organizacionales.",
    context:
      "La actividad permitió trabajar colaborativamente en la comprensión de distintos estilos de liderazgo, sus ventajas, limitaciones y efectos sobre los equipos.",
    objective:
      "Analizar los principales estilos de liderazgo y comprender cómo influyen en la gestión de personas y equipos.",
    process:
      "El trabajo fue desarrollado en grupo, organizando información sobre estilos de liderazgo y preparando una entrega académica colaborativa.",
    result:
      "Se consolidó una explicación grupal sobre estilos de liderazgo y su relevancia en la dirección de equipos.",
    keyLearnings: [
      "Diferenciación entre estilos de liderazgo.",
      "Importancia del trabajo colaborativo.",
      "Relación entre estilo de liderazgo y desempeño del equipo.",
    ],
    tools: ["Trabajo en equipo", "Investigación", "PowerPoint"],
    tags: ["Estilos de liderazgo", "Trabajo en equipo", "Gestión de equipos", "Dirección"],
    featured: false,
    imageUrl: leadershipStylesDiagram,
    fileUrl: leadershipFile("tarea-grupal-estilos-liderazgo.pdf"),
    evidence: [
      {
        type: "pdf",
        label: "Tarea grupal sobre estilos de liderazgo",
        url: leadershipFile("tarea-grupal-estilos-liderazgo.pdf"),
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectSubjects = Array.from(
  new Set(projects.map((project) => project.subject)),
).sort();

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);

  if (currentIndex === -1) {
    return {
      previousProject: undefined,
      nextProject: undefined,
    };
  }

  return {
    previousProject: projects[currentIndex - 1],
    nextProject: projects[currentIndex + 1],
  };
}
