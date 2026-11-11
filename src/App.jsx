import React, { useState, useEffect } from 'react';
import {
  Globe,
  ExternalLink,
  MessageSquare,
  Mail,
  Linkedin,
  Copy,
  Check,
  Code2,
  Layout,
  CheckSquare,
  ArrowUpRight,
  Eye,
  X,
  Send,
  Layers,
  Zap,
  HelpCircle,
  Terminal,
  Shield,
} from 'lucide-react';
import { personalInfo, projects, services, skills } from './data/portfolioData';

export default function App() {
  const [personaTheme, setPersonaTheme] = useState('p5'); // 'p5' (Crimson Red) or 'p3r' (Dark Hour Blue)
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [copiedItem, setCopiedItem] = useState('');

  // Estado para el formulario "Carta de Aviso" (Calling Card)
  const [visitorName, setVisitorName] = useState('');
  const [projectType, setProjectType] = useState('Landing Page / Sitio Comercial');
  const [visitorMessage, setVisitorMessage] = useState('');

  useEffect(() => {
    document.documentElement.setAttribute('data-persona-theme', personaTheme);
  }, [personaTheme]);

  const toggleTheme = () => {
    setPersonaTheme((prev) => (prev === 'p5' ? 'p3r' : 'p5'));
  };

  const categories = ['Todos', ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    selectedCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const buildWhatsAppUrl = (customText) => {
    const text = customText || personalInfo.contact.whatsappDefaultMessage;
    return `https://wa.me/${personalInfo.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const buildMailtoUrl = (subject, body) => {
    const s = subject || 'Contacto desde tu Portafolio Web';
    const b =
      body ||
      'Hola Alexander, vi tu portafolio web y me gustaria conversar contigo sobre un proyecto.';
    return `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(b)}`;
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(''), 2500);
  };

  const handleSendViaWhatsApp = (e) => {
    e.preventDefault();
    const intro = visitorName.trim()
      ? `Hola Alexander, soy ${visitorName.trim()}.`
      : 'Hola Alexander.';
    const details = visitorMessage.trim() ? `\n\nDetalles: ${visitorMessage.trim()}` : '';
    const fullMessage = `${intro} Vi tu portafolio web y me interesa: *${projectType}*.${details}`;
    window.open(buildWhatsAppUrl(fullMessage), '_blank', 'noopener,noreferrer');
  };

  const handleSendViaEmail = (e) => {
    e.preventDefault();
    const subject = `Solicitud Portafolio Web: ${projectType}${visitorName ? ` - ${visitorName}` : ''}`;
    const body = `Hola Alexander,\n\n${visitorName ? `Nombre: ${visitorName}\n` : ''}Proyecto de interes: ${projectType}\n\n${visitorMessage || 'Me gustaria conversar sobre este proyecto.'}`;
    window.location.href = buildMailtoUrl(subject, body);
  };

  return (
    <div>
      {/* BARRA DE COMANDO SUPERIOR (HUD PERSONA) */}
      <header className="p-navbar">
        <div className="container p-navbar-inner">
          <a href="#inicio" className="p-brand">
            <span className="p-brand-box">AE</span>
            <div className="p-brand-text">
              <span className="p-brand-title">{personalInfo.shortName}</span>
              <span className="p-brand-sub">// PORTAFOLIO WEB</span>
            </div>
          </a>

          <nav className="p-nav-links">
            <a href="#proyectos" className="p-nav-item">
              WEBS
            </a>
            <a href="#servicios" className="p-nav-item">
              SERVICIOS
            </a>
            <a href="#parametros" className="p-nav-item">
              ENFOQUE
            </a>
            <a href="#contacto" className="p-nav-item">
              CONTACTO
            </a>
          </nav>

          <div className="p-nav-actions">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-theme-switch"
              title="Cambiar paleta visual de Persona"
            >
              {personaTheme === 'p5' ? 'TEMA: P5 ROJO' : 'TEMA: P3R AZUL'}
            </button>

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-icon-btn"
              title="Ver mi LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href={buildMailtoUrl()}
              className="p-icon-btn"
              title={`Enviar correo a ${personalInfo.contact.email}`}
              aria-label="Correo"
            >
              <Mail size={18} />
            </a>

            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-btn p-btn-primary p-btn-sm"
            >
              <MessageSquare size={16} />
              <span>WHATSAPP</span>
            </a>
          </div>
        </div>
      </header>

      {/* SECCION PRINCIPAL (HERO HUD) */}
      <section id="inicio" className="p-hero">
        <div className="container p-hero-grid">
          <div>
            <div className="p-date-hud">
              <span className="p-date-box">11 / 10 // MAR</span>
              <span className="p-status-tag">{personalInfo.availabilityText}</span>
            </div>

            <div>
              <span className="p-ransom-eyebrow">
                {personalInfo.arcana} // {personalInfo.role}
              </span>
            </div>

            <h1 className="p-hero-title">
              HOLA, SOY
              <br />
              <span className="p-title-highlight">{personalInfo.name}</span>
            </h1>

            <p className="p-hero-desc">{personalInfo.heroSubheadline}</p>

            <div className="p-hero-cta">
              <a href="#proyectos" className="p-btn p-btn-primary">
                <Globe size={18} />
                <span>EXPLORAR MIS PAGINAS WEB</span>
              </a>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-btn p-btn-white"
              >
                <MessageSquare size={18} />
                <span>HABLAR AL WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* EXPEDIENTE DE JUGADOR / ACCESO RAPIDO A REDES */}
          <div className="p-dossier-card">
            <span className="p-dossier-stamp">{personalInfo.level}</span>

            <div className="p-dossier-header">
              <div className="p-emblem-box">AE</div>
              <div>
                <div className="p-dossier-role">EXPEDIENTE DE DESARROLLADOR</div>
                <h2 className="p-dossier-name">{personalInfo.name}</h2>
              </div>
            </div>

            <p style={{ color: '#e4e4e7', fontSize: '0.92rem' }}>
              Selecciona un canal de comunicacion directa para cotizar un sitio web, revisar mi
              trayectoria o enviarme una propuesta:
            </p>

            <div className="p-coop-list">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-coop-item"
              >
                <div className="p-coop-left">
                  <div className="p-coop-icon">
                    <MessageSquare size={20} />
                  </div>
                  <div className="p-coop-meta">
                    <span>CANAL DIRECTO // WHATSAPP</span>
                    <strong>{personalInfo.contact.whatsappDisplay}</strong>
                  </div>
                </div>
                <ArrowUpRight size={20} />
              </a>

              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-coop-item"
              >
                <div className="p-coop-left">
                  <div className="p-coop-icon">
                    <Linkedin size={20} />
                  </div>
                  <div className="p-coop-meta">
                    <span>RED PROFESIONAL // LINKEDIN</span>
                    <strong>Alexander Eastman Galindo</strong>
                  </div>
                </div>
                <ArrowUpRight size={20} />
              </a>

              <a href={buildMailtoUrl()} className="p-coop-item">
                <div className="p-coop-left">
                  <div className="p-coop-icon">
                    <Mail size={20} />
                  </div>
                  <div className="p-coop-meta">
                    <span>CORREO ELECTRONICO</span>
                    <strong>{personalInfo.contact.email}</strong>
                  </div>
                </div>
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCION DE PROYECTOS WEB (EXPEDIENTES DE MISION) */}
      <section id="proyectos" className="p-section">
        <div className="container">
          <div className="p-section-header">
            <div className="p-banner-strip">
              <Terminal size={16} />
              <span>ARCHIVOS DE PROYECTO // TRABAJOS REALIZADOS</span>
            </div>
            <h2 className="p-section-title">MIS PAGINAS WEB Y DESARROLLOS</h2>
            <p className="p-section-desc">
              Cada expediente muestra el enlace directo a la pagina web, su proposito y las
              funciones implementadas.
            </p>
          </div>

          {/* Barra de Filtros */}
          <div className="p-filter-bar">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`p-filter-tab ${selectedCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grilla de Expedientes Web */}
          <div className="p-projects-grid">
            {filteredProjects.map((project) => (
              <article key={project.id} className="p-project-card">
                {/* Barra de Direccion del Proyecto */}
                <div className="p-browser-bar">
                  <span className="p-file-code">{project.code}</span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-url-strip"
                    title="Abrir sitio web en nueva pestaña"
                  >
                    <span>{project.url.replace(/^https?:\/\//, '')}</span>
                    <ExternalLink size={13} />
                  </a>
                </div>

                {/* Pantalla de Presentacion del Proyecto */}
                <div className="p-project-screen">
                  <div className="p-screen-top">
                    <span className="p-arcana-badge">ARCANO // {project.arcanaTag}</span>
                    <span className="p-category-label">{project.category}</span>
                  </div>

                  <div className="p-screen-title-box">
                    <h3 className="p-screen-title">{project.title}</h3>
                    <div className="p-metrics-row">
                      <span className="p-metric-chip">VELOCIDAD: {project.metrics.speed}</span>
                      <span className="p-metric-chip">{project.metrics.responsive}</span>
                      <span className="p-metric-chip">ESTADO: {project.metrics.status}</span>
                    </div>
                  </div>
                </div>

                {/* Detalles del Proyecto */}
                <div className="p-project-body">
                  <p className="p-project-desc">{project.description}</p>

                  <ul className="p-feature-list">
                    {project.features.map((feat, idx) => (
                      <li key={idx}>
                        <CheckSquare
                          size={15}
                          style={{ flexShrink: 0, marginTop: '3px', color: 'var(--p-accent-bright)' }}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-tech-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="p-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="p-project-actions">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-btn p-btn-primary p-btn-sm"
                    >
                      <span>VISITAR WEB</span>
                      <ExternalLink size={15} />
                    </a>

                    <button
                      type="button"
                      onClick={() => setActiveProjectModal(project)}
                      className="p-btn p-btn-dark p-btn-sm"
                    >
                      <Eye size={15} />
                      <span>EXPEDIENTE</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECCION DE SERVICIOS (MODULOS DE DESARROLLO) */}
      <section id="servicios" className="p-section">
        <div className="container">
          <div className="p-section-header">
            <div className="p-banner-strip">
              <Layers size={16} />
              <span>CAPACIDADES DE DESARROLLO // SERVICIOS</span>
            </div>
            <h2 className="p-section-title">QUE INCLUYE MI TRABAJO WEB</h2>
            <p className="p-section-desc">
              Soluciones enfocadas en resolver de manera agil los problemas que presenta el usuario.
            </p>
          </div>

          <div className="p-services-grid">
            {services.map((service) => (
              <div key={service.code} className="p-service-card">
                <span className="p-service-code">{service.code}</span>
                <h3 className="p-service-title">{service.title}</h3>
                <p style={{ color: '#e4e4e7', fontSize: '0.94rem', marginBottom: '1.2rem' }}>
                  {service.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {service.highlights.map((item) => (
                    <span key={item} className="p-tech-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCION DE PARAMETROS Y SOBRE MI */}
      <section id="parametros" className="p-section">
        <div className="container p-stats-grid">
          <div className="p-panel-box">
            <div className="p-banner-strip">
              <Shield size={16} />
              <span>PERFIL DEL DESARROLLADOR</span>
            </div>
            <h2 className="p-section-title" style={{ fontSize: '2.1rem' }}>
              SOBRE MI ENFOQUE
            </h2>
            <p style={{ color: '#e4e4e7', marginBottom: '1.1rem', fontSize: '0.96rem' }}>
              {personalInfo.aboutText}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-btn p-btn-dark p-btn-sm"
              >
                <Linkedin size={16} />
                <span>VER LINKEDIN</span>
              </a>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-btn p-btn-primary p-btn-sm"
              >
                <MessageSquare size={16} />
                <span>ESCRIBIR AL WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCION DE CONTACTO (CONFIDENTES Y CARTA DE AVISO) */}
      <section id="contacto" className="p-section">
        <div className="container">
          <div className="p-section-header">
            <div className="p-banner-strip">
              <Zap size={16} />
              <span>CONTACTO DIRECTO</span>
            </div>
            <h2 className="p-section-title">CONTACTAME AHORA</h2>
            <p className="p-section-desc">
              Hablame directamente a mi WhatsApp, conecta conmigo en LinkedIn o enviame un correo
              electronico con un solo clic.
            </p>
          </div>

          <div className="p-contact-grid">
            {/* Tarjetas de Confidente */}
            <div className="p-confidant-stack">
              {/* WhatsApp */}
              <div className="p-confidant-card">
                <div className="p-confidant-header">
                  <span className="p-arcana-label">CONFIDENTE // WHATSAPP DIRECTO</span>
                  <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.8rem', fontWeight: 700 }}>
                    RANGO MAX
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    marginBottom: '0.4rem',
                  }}
                >
                  {personalInfo.contact.whatsappDisplay}
                </h3>
                <p style={{ color: '#e4e4e7', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  Via mas rapida para hablar sobre proyectos web, presupuestos o consultas
                  directas.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-btn p-btn-primary p-btn-sm"
                  >
                    <MessageSquare size={15} />
                    <span>ABRIR CHAT DE WHATSAPP</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('+56934014520', 'wsp')}
                    className="p-btn p-btn-dark p-btn-sm"
                  >
                    {copiedItem === 'wsp' ? <Check size={15} /> : <Copy size={15} />}
                    <span>{copiedItem === 'wsp' ? 'NUMERO COPIADO' : 'COPIAR NUMERO'}</span>
                  </button>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="p-confidant-card">
                <div className="p-confidant-header">
                  <span className="p-arcana-label">CONFIDENTE // LINKEDIN OFICIAL</span>
                  <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.8rem', fontWeight: 700 }}>
                    RANGO MAX
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    marginBottom: '0.4rem',
                  }}
                >
                  ALEXANDER EASTMAN GALINDO
                </h3>
                <p style={{ color: '#e4e4e7', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  Revisa mi perfil profesional, experiencia y conecta conmigo en LinkedIn.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                  <a
                    href={personalInfo.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-btn p-btn-white p-btn-sm"
                  >
                    <Linkedin size={15} />
                    <span>IR A MI LINKEDIN</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Correo */}
              <div className="p-confidant-card">
                <div className="p-confidant-header">
                  <span className="p-arcana-label">CONFIDENTE // CORREO ELECTRONICO</span>
                  <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.8rem', fontWeight: 700 }}>
                    RANGO MAX
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.45rem',
                    marginBottom: '0.4rem',
                  }}
                >
                  {personalInfo.contact.email}
                </h3>
                <p style={{ color: '#e4e4e7', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  Canal formal para propuestas detalladas, documentos o contacto laboral.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                  <a href={buildMailtoUrl()} className="p-btn p-btn-primary p-btn-sm">
                    <Mail size={15} />
                    <span>ENVIAR CORREO</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(personalInfo.contact.email, 'email')}
                    className="p-btn p-btn-dark p-btn-sm"
                  >
                    {copiedItem === 'email' ? <Check size={15} /> : <Copy size={15} />}
                    <span>{copiedItem === 'email' ? 'CORREO COPIADO' : 'COPIAR CORREO'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PIE DE PAGINA */}
      <footer className="p-footer">
        <div className="container p-footer-inner">
          <div>
            <strong>{personalInfo.name}</strong> // PORTAFOLIO
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--p-white)' }}
            >
              WSP: {personalInfo.contact.whatsappDisplay}
            </a>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--p-white)' }}
            >
              LINKEDIN
            </a>
            <a href={buildMailtoUrl()} style={{ color: 'var(--p-white)' }}>
              {personalInfo.contact.email}
            </a>
          </div>
        </div>
      </footer>

      {/* BOTON FLOTANTE DE WHATSAPP */}
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="p-floating-wsp"
        title="Hablame por WhatsApp"
      >
        <MessageSquare size={19} />
        <span>WHATSAPP DIRECTO</span>
      </a>

      {/* MODAL DE EXPEDIENTE DE PROYECTO */}
      {activeProjectModal && (
        <div className="p-modal-backdrop" onClick={() => setActiveProjectModal(null)}>
          <div className="p-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="p-modal-close"
              onClick={() => setActiveProjectModal(null)}
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            <div className="p-banner-strip" style={{ marginBottom: '0.6rem' }}>
              <span>
                {activeProjectModal.code} // {activeProjectModal.category} //{' '}
                {activeProjectModal.year}
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.1rem',
                marginBottom: '0.85rem',
                textTransform: 'uppercase',
              }}
            >
              {activeProjectModal.title}
            </h2>

            <div
              style={{
                background: 'var(--p-black)',
                border: '2px solid var(--p-accent)',
                padding: '1rem',
                marginBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-hud)',
                  fontSize: '0.76rem',
                  color: 'var(--p-muted)',
                  marginBottom: '0.25rem',
                }}
              >
                ENLACE DIRECTO AL SITIO DESPLEGADO:
              </div>
              <a
                href={activeProjectModal.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-hud)',
                  fontWeight: 700,
                  color: 'var(--p-white)',
                  textDecoration: 'underline',
                }}
              >
                <Globe size={16} />
                <span>{activeProjectModal.url}</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                letterSpacing: '0.04em',
                marginBottom: '0.35rem',
              }}
            >
              DESCRIPCION GENERAL
            </h4>
            <p style={{ color: '#e4e4e7', marginBottom: '1rem', fontSize: '0.94rem' }}>
              {activeProjectModal.description}
            </p>

            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                letterSpacing: '0.04em',
                marginBottom: '0.35rem',
              }}
            >
              OBJETIVO Y SOLUCION
            </h4>
            <p style={{ color: '#e4e4e7', marginBottom: '1.1rem', fontSize: '0.94rem' }}>
              {activeProjectModal.challengeAndSolution}
            </p>

            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                letterSpacing: '0.04em',
                marginBottom: '0.5rem',
              }}
            >
              CARACTERISTICAS IMPLEMENTADAS
            </h4>
            <ul className="p-feature-list" style={{ marginBottom: '1.25rem' }}>
              {activeProjectModal.features.map((feat, i) => (
                <li key={i}>
                  <CheckSquare
                    size={16}
                    style={{ flexShrink: 0, marginTop: '2px', color: 'var(--p-accent-bright)' }}
                  />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="p-tech-tags" style={{ marginBottom: '1.5rem' }}>
              {activeProjectModal.technologies.map((tech) => (
                <span key={tech} className="p-tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
              <a
                href={activeProjectModal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-btn p-btn-primary"
              >
                <Globe size={17} />
                <span>VISITAR SITIO WEB</span>
                <ExternalLink size={15} />
              </a>

              <a
                href={buildWhatsAppUrl(
                  `Hola Alexander, vi en tu portafolio el proyecto "${activeProjectModal.title}" y me gustaria consultar por un desarrollo similar.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="p-btn p-btn-white"
              >
                <MessageSquare size={17} />
                <span>COTIZAR SIMILAR POR WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MODAL GUIA DEL PORTAFOLIO */}
      {showGuideModal && (
        <div className="p-modal-backdrop" onClick={() => setShowGuideModal(false)}>
          <div className="p-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="p-modal-close"
              onClick={() => setShowGuideModal(false)}
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
