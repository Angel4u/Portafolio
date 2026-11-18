// ============================================================================
// CONFIGURACIÓN DEL PORTAFOLIO — ALEXANDER EASTMAN GALINDO
// Textos profesionales, claros y con ortografía cuidada (sin emojis).
// ============================================================================

export const personalInfo = {
  name: "Alexander Eastman Galindo",
  shortName: "Alexander Eastman",
  role: "Desarrollador Web & Frontend",
  location: "Chile",
  available: true,
  availabilityText: "Disponible para nuevos proyectos",
  heroHeadline: "HOLA, SOY ALEXANDER EASTMAN",
  heroSubheadline:
    "Diseño y desarrollo páginas web modernas, rápidas y enfocadas en resultados. Construyo desde sitios comerciales y catálogos hasta aplicaciones interactivas en React, listas para conectar con tus clientes.",
  aboutText:
    "Soy desarrollador web especializado en crear interfaces modernas, intuitivas y con identidad visual propia. Mi enfoque combina un diseño limpio y atractivo con un código rápido y adaptable a cualquier dispositivo, asegurando que cada página cumpla su objetivo comercial o profesional.",
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
    id: "proyecto-01",
    number: "01",
    title: "AngelitoStudy",
    category: "Aplicación Web",
    year: "2026",
    url: "https://angelitostudy.com", // Reemplaza con el enlace real de AngelitoStudy
    description:
      "Plataforma interactiva de estudio y organización académica con una interfaz dinámica de alto contraste. Incluye herramientas de concentración, gestión de sesiones y seguimiento de avance.",
    challengeAndSolution:
      "El objetivo fue transformar la rutina de estudio en una experiencia visualmente atractiva, fluida y sin tiempos de carga entre secciones.",
    features: [
      "Interfaz moderna e intuitiva con navegación instantánea en React",
      "Organización de sesiones de estudio y seguimiento de metas",
      "Diseño completamente adaptable a celulares, tablets y escritorio",
      "Optimización de rendimiento para uso continuo sin recargas",
    ],
    technologies: ["React", "JavaScript ES6+", "CSS Moderno", "Diseño UI/UX"],
    metrics: {
      speed: "99/100",
      responsive: "100% Responsive",
      status: "En línea",
    },
  },
  {
    id: "proyecto-02",
    number: "02",
    title: "Landing Page Comercial de Alta Conversión",
    category: "Landing Page",
    year: "2026",
    url: "https://ejemplo-landing.com", // Reemplaza con el enlace real de tu página
    description:
      "Sitio web comercial diseñado para presentar servicios profesionales de forma clara, generar confianza inmediata y convertir visitantes en consultas directas por WhatsApp.",
    challengeAndSolution:
      "Estructurar la propuesta de valor para que cualquier cliente entienda el servicio en segundos y pueda cotizar con un solo clic desde su teléfono.",
    features: [
      "Diseño adaptable a dispositivos móviles y pantallas de escritorio",
      "Integración directa con botones de atención por WhatsApp",
      "Carga ultrarrápida y estructura optimizada para buscadores (SEO)",
      "Secciones claras de beneficios, muestras de trabajo y preguntas frecuentes",
    ],
    technologies: ["React", "HTML5", "CSS3", "Integración WhatsApp"],
    metrics: {
      speed: "100/100",
      responsive: "Mobile First",
      status: "En línea",
    },
  },
  {
    id: "proyecto-03",
    number: "03",
    title: "Catálogo Digital & Tienda Interactiva",
    category: "E-Commerce",
    year: "2026",
    url: "https://ejemplo-catalogo.com", // Reemplaza con el enlace real de tu página
    description:
      "Vitrina digital con catálogo de productos filtrable por categorías, buscador en tiempo real, resumen de pedido y envío directo de la orden por WhatsApp.",
    challengeAndSolution:
      "Facilitar que los clientes exploren el catálogo desde su celular, armen su carrito sin complicaciones y envíen el pedido listo para coordinar el pago y entrega.",
    features: [
      "Filtros dinámicos por categoría y buscador instantáneo",
      "Carrito de compras interactivo con cálculo automático del total",
      "Envío automático del detalle del pedido hacia WhatsApp",
      "Interfaz limpia y cómoda de usar en cualquier pantalla",
    ],
    technologies: ["React", "JavaScript", "Estado Dinámico", "Responsive Design"],
    metrics: {
      speed: "98/100",
      responsive: "100% Responsive",
      status: "En línea",
    },
  },
  {
    id: "proyecto-04",
    number: "04",
    title: "Portal Web Corporativo & Servicios",
    category: "Web Corporativa",
    year: "2026",
    url: "https://ejemplo-corporativo.com", // Reemplaza con el enlace real de tu página
    description:
      "Sitio institucional para empresas y profesionales que buscan consolidar su presencia en internet, mostrar su experiencia y facilitar el contacto por correo o teléfono.",
    challengeAndSolution:
      "Proyectar solidez profesional mediante una arquitectura ordenada, lectura clara y múltiples canales de contacto accesibles en todo momento.",
    features: [
      "Presentación estructurada de servicios, equipo y trayectoria",
      "Accesos directos a correo electrónico, LinkedIn y WhatsApp",
      "Código semántico preparado para indexación en Google",
      "Diseño sobrio con excelente contraste y legibilidad",
    ],
    technologies: ["React", "HTML5 Semántico", "CSS3", "SEO Técnico"],
    metrics: {
      speed: "99/100",
      responsive: "Multiplataforma",
      status: "En línea",
    },
  },
];

// ============================================================================
// SERVICIOS DE DESARROLLO WEB
// ============================================================================
export const services = [
  {
    number: "01",
    title: "Landing Pages y Sitios Comerciales",
    description:
      "Páginas diseñadas estratégicamente para promocionar tu negocio, producto o servicio y transformar las visitas en mensajes directos a tu WhatsApp o correo.",
    highlights: ["Enfoque en ventas", "Carga rápida", "Contacto en un clic"],
  },
  {
    number: "02",
    title: "Aplicaciones Web en React",
    description:
      "Plataformas interactivas como AngelitoStudy, catálogos dinámicos con filtros en tiempo real y paneles modernos que funcionan con fluidez sin recargar la página.",
    highlights: ["Interfaz dinámica", "React + Vite", "Experiencia fluida"],
  },
  {
    number: "03",
    title: "Sitios Corporativos y Portafolios",
    description:
      "Sitios web profesionales y adaptables a celulares, tablets y computadores, creados para dar respaldo a tu marca y destacar tu trabajo en internet.",
    highlights: ["100% Responsive", "Diseño a medida", "Optimizado para Google"],
  },
];

// ============================================================================
// HABILIDADES Y TECNOLOGÍAS
// ============================================================================
export const skills = [
  { name: "React.js y Componentes Modernos", category: "Frontend", level: 95 },
  { name: "JavaScript (ES6+)", category: "Lógica", level: 92 },
  { name: "Diseño UI/UX y CSS Avanzado", category: "Diseño", level: 96 },
  { name: "HTML5 Semántico y Accesibilidad", category: "Estructura", level: 98 },
  { name: "Diseño Responsive (Mobile First)", category: "Adaptabilidad", level: 96 },
  { name: "Integración con WhatsApp y Correo", category: "Conversión", level: 95 },
  { name: "Git, GitHub y Despliegue en Vercel", category: "Herramientas", level: 90 },
  { name: "Optimización de Velocidad y SEO", category: "Rendimiento", level: 93 },
];
