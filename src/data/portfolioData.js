// ============================================================================
// CONFIGURACION DEL PORTAFOLIO // ESTILO PERSONA
// Sin emojis. Todo el contenido de tus paginas web y contacto se edita aqui.
// ============================================================================

export const personalInfo = {
  name: "Alexander Eastman Galindo",
  shortName: "ALEXANDER EASTMAN",
  codename: "EASTMAN",
  arcana: "EL CREADOR // ARCANO I",
  level: "NV. 99",
  role: "Estudiante de Ingenieria civil Informatica",
  location: "CHILE",
  available: true,
  availabilityText: "DISPONIBLE PARA NUEVOS PROYECTOS",
  heroHeadline: "DISEÑO Y DESARROLLO PAGINAS WEB",
  heroSubheadline:
    "Soy un estudiante en tercer año de Ingenieria civil Informatica, me encanta la ciberseguridad y el desarrollo de aplicaciones web.",
  aboutText:
    "Diseño aplicaciones web, Ciberseguridad, IA",
  contact: {
    whatsappNumber: "56934014520",
    whatsappDisplay: "+56 9 3401 4520",
    whatsappDefaultMessage:
      "Hola Alexander, vi tu portafolio web y me gustaria conversar contigo sobre un proyecto.",
    email: "alexandereag2@gmail.com",
    linkedin: "https://www.linkedin.com/in/alexander-eastman-galindo-7a3595299/",
    linkedinHandle: "alexander-eastman-galindo",
  },
};

// ============================================================================
// TUS PAGINAS WEB (ARCHIVOS DE MISION / PROYECTOS)
// ============================================================================
export const projects = [
  {
    id: "mision-01",
    code: "ARCHIVO #01",
    title: "AngelitoStudy",
    category: "Aplicacion Web",
    arcanaTag: "CONOCIMIENTO",
    year: "2026",
    url: "https://angelito-study-jfpnlufaq-educaresponde.vercel.app/", // Reemplaza con el link desplegado de AngelitoStudy
    description:
      "Plataforma interactiva de estudio y organizacion academica para estudiantes de ingenieria.",
    challengeAndSolution:
      "Ayudar a estudiantes de ingenieria a acceder a resolucion de ejercicios tipo prueba para complementar su estudio.",
    features: [
      "Interfaz inspirada en el sistema de menus de Persona",
      "Organizacion de material de estudio por asignatura",
      "Diseño adaptable a dispositivos moviles y escritorio",
      "Transiciones rapidas sin recargas de pagina en React",
    ],
    technologies: ["React", "JavaScript ES6+", "CSS Avanzado", "Diseño UI/UX", "SupaBase"],
    metrics: {
      status: "OPERATIVO",
    },
  },
  {
    id: "mision-02",
    code: "ARCHIVO #02",
    title: "EducaResponde",
    category: "Software educativo",
    arcanaTag: "Capacitaciones",
    year: "2026",
    url: "https://Nodisponibletodavia.com", // Reemplaza con el link real de tu pagina
    description:
      "Pagina web + plataforma tipo SIGA para establecimiento dedicado a capacitaciones a profesores",
    challengeAndSolution:
      "Crear un sistema que permita a la empresa entregar capacitaciones online a sus clientes",
    features: [
      "Diseño 100% adaptable a telefonos moviles y computadores",
      "Conexion directa con WhatsApp para cotizaciones instantaneas",
      "Carrito de compra)",
      "Secciones claras de servicios, preguntas frecuentes y contacto",
    ],
    technologies: ["React", "HTML5", "CSS3", "SQL"],
    metrics: {
      status: "En progreso",
    },
  },
];

// ============================================================================
// SERVICIOS (QUE INCLUYE CADA DESARROLLO WEB)
// ============================================================================
export const services = [
  {
    code: "MODULO 01",
    title: "LANDING PAGES Y SITIOS COMERCIALES",
    description:
      "Paginas diseñadas para presentar un negocio, producto o servicio y convertir visitantes en mensajes directos a tu WhatsApp o correo.",
    highlights: ["ALTA CONVERSION", "CARGA RAPIDA", "CONTACTO DIRECTO"],
  },
  {
    code: "MODULO 02",
    title: "APLICACIONES WEB EN REACT",
    description:
      "Plataformas interactivas como AngelitoStudy, paneles de control, catalogos con filtros dinamicos y sistemas web sin recargas lentas.",
    highlights: ["INTERFAZ DINAMICA", "REACT + VITE", "DISEÑO UNICO"],
  },
  {
    code: "MODULO 03",
    title: "PORTAFOLIOS",
    description:
      "Presencia profesional en internet adaptable a celulares, tablets y computadores, con identidad visual memorable y estructura optimizada.",
    highlights: ["100% RESPONSIVE", "IDENTIDAD PROPIA", "SEO BASICO"],
  },
];

