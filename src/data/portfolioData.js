// ============================================================================
// CONFIGURACIÓN DEL PORTAFOLIO — ALEXANDER EASTMAN GALINDO
// ============================================================================

export const personalInfo = {
  name: "Alexander Eastman Galindo",
  shortName: "Alexander Eastman",
  role: "Estudiante de Ingeniería Civil Informática",
  location: "Chile",
  available: true,
  availabilityText: "Disponible para nuevos proyectos",
  heroHeadline: "DISEÑO Y DESARROLLO PÁGINAS WEB",
  heroSubheadline:
    "Soy un estudiante en tercer año de Ingeniería Civil Informática, me encanta la ciberseguridad y el desarrollo de aplicaciones web.",
  aboutText: "Diseño aplicaciones web, Ciberseguridad, IA",
  contact: {
    whatsappNumber: "56934014520",
    whatsappDisplay: "+56 9 3401 4520",
    whatsappDefaultMessage:
      "Hola Alexander, vi tu portafolio web y me gustaría conversar contigo sobre un proyecto.",
    email: "alexandereag2@gmail.com",
    linkedin: "https://www.linkedin.com/in/alexander-eastman-galindo-7a3595299/",
    linkedinHandle: "Alexander Eastman Galindo",
  },
};

// ============================================================================
// TUS PÁGINAS WEB (PROYECTOS)
// ============================================================================
export const projects = [
  {
    id: "mision-01",
    code: "Proyecto 01",
    title: "AngelitoStudy",
    category: "Aplicación Web",
    year: "2026",
    url: "https://angelito-study.vercel.app/",
    description:
      "Plataforma interactiva de estudio y organización académica para estudiantes de ingeniería.",
    challengeAndSolution:
      "Ayudar a estudiantes de ingeniería a acceder a resolución de ejercicios tipo prueba para complementar su estudio.",
    features: [
      "Interfaz inspirada en el sistema de menús de Persona",
      "Organización de material de estudio por asignatura",
      "Diseño adaptable a dispositivos móviles y escritorio",
      "Transiciones rápidas sin recargas de página en React",
    ],
    technologies: ["React", "JavaScript ES6+", "CSS Avanzado", "Diseño UI/UX", "Bases de Datos"],
    metrics: {
      status: "Operativo",
    },
  },
  {
    id: "mision-02",
    code: "Proyecto 02",
    title: "EducaResponde",
    category: "Software educativo",
    year: "2026",
    url: "https://Nodisponibletodavia.com",
    description:
      "Página web + plataforma tipo SIGA para establecimiento dedicado a capacitaciones a profesores.",
    challengeAndSolution:
      "Crear un sistema que permita a la empresa entregar capacitaciones online a sus clientes.",
    features: [
      "Diseño 100% adaptable a teléfonos móviles y computadores",
      "Conexión directa con WhatsApp para cotizaciones instantáneas",
      "Carrito de compra",
      "Secciones claras de servicios, preguntas frecuentes y contacto",
    ],
    technologies: ["React", "HTML5", "CSS3", "SQL"],
    metrics: {
      status: "En progreso",
    },
  },
];

// ============================================================================
// SERVICIOS (QUÉ INCLUYE CADA DESARROLLO WEB)
// ============================================================================
export const services = [
  {
    code: "01",
    title: "Landing Pages y Sitios Comerciales",
    description:
      "Páginas diseñadas para presentar un negocio, producto o servicio y convertir visitantes en mensajes directos a tu WhatsApp o correo.",
    highlights: ["Alta conversión", "Carga rápida", "Contacto directo"],
  },
  {
    code: "02",
    title: "Aplicaciones Web en React",
    description:
      "Plataformas interactivas como AngelitoStudy, paneles de control, catálogos con filtros dinámicos y sistemas web sin recargas lentas.",
    highlights: ["Interfaz dinámica", "React + Vite", "Diseño único"],
  },
  {
    code: "03",
    title: "Portafolios",
    description:
      "Presencia profesional en internet adaptable a celulares, tablets y computadores, con identidad visual memorable y estructura optimizada.",
    highlights: ["100% Responsive", "Identidad propia", "SEO básico"],
  },
];
