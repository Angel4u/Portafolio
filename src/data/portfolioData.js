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
  role: "Desarrollador Web & Frontend Creator",
  location: "CHILE",
  available: true,
  availabilityText: "DISPONIBLE PARA NUEVOS PROYECTOS",
  heroHeadline: "DISEÑO Y DESARROLLO PAGINAS WEB QUE ROBAN LA ATENCION",
  heroSubheadline:
    "Construyo sitios web modernos, aplicaciones interactivas en React y plataformas digitales con identidad visual fuerte, alto rendimiento y contacto directo.",
  aboutText:
    "Desarrollador web enfocado en crear interfaces con personalidad propia, navegación fluida y código limpio. Desde plataformas interactivas de estudio hasta sitios comerciales de alta conversión, cada proyecto está diseñado para destacar y funcionar a la perfección en celulares y escritorio.",
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
    url: "https://angelitostudy.com", // Reemplaza con el link desplegado de AngelitoStudy
    description:
      "Plataforma interactiva de estudio y organizacion academica ambientada con estetica de Persona. Incluye interfaz gamificada, seguimiento de progreso y herramientas de concentracion.",
    challengeAndSolution:
      "Transformar la rutina de estudio en una experiencia visualmente estimulante y dinamica mediante menus estilizados, alto contraste y navegacion instantanea.",
    features: [
      "Interfaz inspirada en el sistema de menus de Persona",
      "Organizacion de sesiones de estudio y seguimiento de objetivos",
      "Diseño adaptable a dispositivos moviles y escritorio",
      "Transiciones rapidas sin recargas de pagina en React",
    ],
    technologies: ["React", "JavaScript ES6+", "CSS Avanzado", "Diseño UI/UX"],
    metrics: {
      speed: "99 / 100",
      responsive: "ADAPTABLE",
      status: "OPERATIVO",
    },
  },
  {
    id: "mision-02",
    code: "ARCHIVO #02",
    title: "Landing Page Comercial de Alta Conversion",
    category: "Landing Page",
    arcanaTag: "IMPACTO",
    year: "2026",
    url: "https://ejemplo-landing.com", // Reemplaza con el link real de tu pagina
    description:
      "Sitio web promocional diseñado para captar clientes potenciales, presentar servicios de forma directa y canalizar consultas inmediatamente hacia WhatsApp.",
    challengeAndSolution:
      "Captar la atencion del visitante en los primeros segundos con una estructura clara de beneficios, pruebas de calidad y llamado a la accion directo.",
    features: [
      "Diseño 100% adaptable a telefonos moviles y computadores",
      "Conexion directa con WhatsApp para cotizaciones instantaneas",
      "Optimizacion de velocidad de carga y posicionamiento web (SEO)",
      "Secciones claras de servicios, preguntas frecuentes y contacto",
    ],
    technologies: ["React", "HTML5", "CSS3", "Integracion WhatsApp"],
    metrics: {
      speed: "100 / 100",
      responsive: "MOBILE FIRST",
      status: "OPERATIVO",
    },
  },
  {
    id: "mision-03",
    code: "ARCHIVO #03",
    title: "Catalogo Digital & E-Commerce Interactivo",
    category: "E-Commerce",
    arcanaTag: "FORTUNA",
    year: "2026",
    url: "https://ejemplo-catalogo.com", // Reemplaza con el link real de tu pagina
    description:
      "Vitrina digital con catalogo de productos filtrable por categorias, buscador en tiempo real, armado de carrito y envio de pedido estructurado por WhatsApp.",
    challengeAndSolution:
      "Permitir que los clientes revisen productos desde su celular, seleccionen cantidades y envien su pedido listo en un solo paso.",
    features: [
      "Filtros instantaneos por categoria y barra de busqueda",
      "Carrito de compras interactivo con calculo automatico",
      "Generacion automatica del resumen de compra para WhatsApp",
      "Panel visual limpio y rapido de recorrer",
    ],
    technologies: ["React", "JavaScript", "Estado Dinamico", "Responsive"],
    metrics: {
      speed: "98 / 100",
      responsive: "ADAPTABLE",
      status: "OPERATIVO",
    },
  },
  {
    id: "mision-04",
    code: "ARCHIVO #04",
    title: "Portal Web Corporativo & Servicios",
    category: "Web Corporativa",
    arcanaTag: "EMPERADOR",
    year: "2026",
    url: "https://ejemplo-corporativo.com", // Reemplaza con el link real de tu pagina
    description:
      "Sitio institucional profesional para empresas y especialistas que necesitan respaldar su marca, presentar su equipo y recibir solicitudes por correo o telefono.",
    challengeAndSolution:
      "Consolidar la presencia digital de la empresa con una navegacion ordenada, formularios de contacto directos y excelente presentacion visual.",
    features: [
      "Arquitectura multipagina clara y facil de navegar",
      "Canales directos de atencion por correo, LinkedIn y WhatsApp",
      "Estructura semantica preparada para buscadores (Google)",
      "Rendimiento optimizado y carga inmediata",
    ],
    technologies: ["React", "HTML5 Semantico", "CSS Moderno", "SEO"],
    metrics: {
      speed: "99 / 100",
      responsive: "MULTIPLATAFORMA",
      status: "OPERATIVO",
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
    title: "SITIOS CORPORATIVOS Y PORTAFOLIOS",
    description:
      "Presencia profesional en internet adaptable a celulares, tablets y computadores, con identidad visual memorable y estructura optimizada.",
    highlights: ["100% RESPONSIVE", "IDENTIDAD PROPIA", "SEO BASICO"],
  },
];

// ============================================================================
// HABILIDADES Y ESTADISTICAS (ESTILO PARAMETROS DE PERSONA)
// ============================================================================
export const skills = [
  { name: "REACT.JS & COMPONENTES", category: "FRONTEND", level: 95, rank: "RANGO MAX" },
  { name: "JAVASCRIPT (ES6+)", category: "LOGICA", level: 92, rank: "RANGO 9" },
  { name: "DISEÑO UI & CSS AVANZADO", category: "ESTETICA", level: 96, rank: "RANGO MAX" },
  { name: "HTML5 & ESTRUCTURA WEB", category: "BASE", level: 98, rank: "RANGO MAX" },
  { name: "RESPONSIVE & MOBILE FIRST", category: "ADAPTABILIDAD", level: 95, rank: "RANGO MAX" },
  { name: "INTEGRACION WHATSAPP / CORREO", category: "CONEXION", level: 94, rank: "RANGO 9" },
  { name: "GIT, GITHUB & DESPLIEGUE", category: "HERRAMIENTAS", level: 90, rank: "RANGO 8" },
  { name: "OPTIMIZACION DE RENDIMIENTO", category: "VELOCIDAD", level: 93, rank: "RANGO 9" },
];
