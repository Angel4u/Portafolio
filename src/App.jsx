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
  CheckCircle2,
  ArrowUpRight,
  Eye,
  X,
  Send,
  Layers,
  User,
} from 'lucide-react';
import { personalInfo, projects, services, skills } from './data/portfolioData';

export default function App() {
  const [personaTheme, setPersonaTheme] = useState('p5');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [copiedItem, setCopiedItem] = useState('');

  // Estado del formulario de contacto
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
      'Hola Alexander, vi tu portafolio web y me gustaría conversar contigo sobre un proyecto.';
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
    const fullMessage = `${intro} Vi tu portafolio web y me interesa consultar por: *${projectType}*.${details}`;
    window.open(buildWhatsAppUrl(fullMessage), '_blank', 'noopener,noreferrer');
  };

  const handleSendViaEmail = (e) => {
    e.preventDefault();
    const subject = `Consulta Portafolio Web: ${projectType}${visitorName ? ` - ${visitorName}` : ''}`;
    const body = `Hola Alexander,\n\n${visitorName ? `Nombre: ${visitorName}\n` : ''}Proyecto de interés: ${projectType}\n\n${visitorMessage || 'Me gustaría conversar sobre este proyecto.'}`;
    window.location.href = buildMailtoUrl(subject, body);
  };

  return (
    <div>
      {/* Navegación Principal */}
      <header className="navbar">
        <div className="container navbar-inner">
          <a href="#inicio" className="brand">
            <span className="brand-mark">AE</span>
            <div className="brand-info">
              <span className="brand-name">{personalInfo.shortName}</span>
              <span className="brand-role">{personalInfo.role}</span>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#proyectos" className="nav-link">
              Proyectos Web
            </a>
            <a href="#servicios" className="nav-link">
              Servicios
            </a>
            <a href="#sobre-mi" className="nav-link">
              Sobre mí
            </a>
            <a href="#contacto" className="nav-link">
              Contacto
            </a>
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-pill-btn"
              title="Cambiar acento de color"
            >
              {personaTheme === 'p5' ? 'Acento: Rojo' : 'Acento: Azul'}
            </button>

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              title="Ver perfil en LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href={buildMailtoUrl()}
              className="icon-btn"
              title={`Enviar correo a ${personalInfo.contact.email}`}
              aria-label="Correo"
            >
              <Mail size={18} />
            </a>

            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-cta btn-sm"
            >
              <MessageSquare size={16} />
              <span>Hablemos por WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Sección de Inicio (Hero) */}
      <section id="inicio" className="hero-section">
        <div className="container hero-grid">
          <div>
            <div className="status-badge">
              <span className="status-dot" />
              <span>{personalInfo.availabilityText}</span>
            </div>

            <h1 className="hero-display-title">
              HOLA, SOY{' '}
              <span className="hero-display-accent">{personalInfo.name}</span>
            </h1>

            <p className="hero-description">{personalInfo.heroSubheadline}</p>

            <div className="hero-actions">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cta"
              >
                <MessageSquare size={18} />
                <span>Hablemos por WhatsApp</span>
              </a>

              <a href="#proyectos" className="btn btn-secondary">
                <Globe size={18} />
                <span>Ver mis páginas web</span>
              </a>
            </div>
          </div>

          {/* Tarjeta Derecha: Perfil Profesional y Contacto Rápido */}
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-avatar">AE</div>
              <div>
                <div className="profile-eyebrow">Perfil Profesional</div>
                <h2 className="profile-name">{personalInfo.name}</h2>
              </div>
            </div>

            <p className="profile-summary">
              ¿Necesitas cotizar un sitio web para tu negocio, revisar mis proyectos en línea o
              contactarme por una oportunidad laboral? Elige tu canal directo:
            </p>

            <div className="quick-channels">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-item"
              >
                <div className="channel-item-left">
                  <div className="channel-icon-box">
                    <MessageSquare size={19} />
                  </div>
                  <div>
                    <span className="channel-label">Contacto directo por WhatsApp</span>
                    <strong className="channel-value">
                      {personalInfo.contact.whatsappDisplay}
                    </strong>
                  </div>
                </div>
                <ArrowUpRight size={18} color="#b4b4be" />
              </a>

              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-item"
              >
                <div className="channel-item-left">
                  <div className="channel-icon-box">
                    <Linkedin size={19} />
                  </div>
                  <div>
                    <span className="channel-label">Red profesional en LinkedIn</span>
                    <strong className="channel-value">
                      {personalInfo.contact.linkedinHandle}
                    </strong>
                  </div>
                </div>
                <ArrowUpRight size={18} color="#b4b4be" />
              </a>

              <a href={buildMailtoUrl()} className="channel-item">
                <div className="channel-item-left">
                  <div className="channel-icon-box">
                    <Mail size={19} />
                  </div>
                  <div>
                    <span className="channel-label">Correo electrónico</span>
                    <strong className="channel-value">{personalInfo.contact.email}</strong>
                  </div>
                </div>
                <ArrowUpRight size={18} color="#b4b4be" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Proyectos (Mis Páginas Web) */}
      <section id="proyectos" className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-kicker">
              <Globe size={16} />
              <span>Portafolio de trabajos realizados</span>
            </div>
            <h2 className="section-display-title">MIS PÁGINAS WEB</h2>
            <p className="section-subtitle">
              Explora los sitios y aplicaciones web que he desarrollado. En cada tarjeta encontrarás
              el enlace directo al sitio, sus características principales y las tecnologías
              empleadas.
            </p>
          </div>

          {/* Filtros por categoría */}
          <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grilla de Proyectos */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article key={project.id} className="project-card">
                <div className="project-topbar">
                  <span className="project-number">PROYECTO {project.number}</span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-url-link"
                    title="Abrir página web en una nueva pestaña"
                  >
                    <span>{project.url.replace(/^https?:\/\//, '')}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>

                <div className="project-banner">
                  <div className="project-meta-row">
                    <span className="project-category-badge">{project.category}</span>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                </div>

                <div className="project-content">
                  <p className="project-description">{project.description}</p>

                  <ul className="project-features">
                    {project.features.map((feat, idx) => (
                      <li key={idx}>
                        <CheckCircle2
                          size={16}
                          style={{
                            flexShrink: 0,
                            marginTop: '4px',
                            color: 'var(--accent-red-bright)',
                          }}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="tech-list">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-cta btn-sm"
                    >
                      <span>Visitar sitio web</span>
                      <ExternalLink size={15} />
                    </a>

                    <button
                      type="button"
                      onClick={() => setActiveProjectModal(project)}
                      className="btn btn-secondary btn-sm"
                    >
                      <Eye size={15} />
                      <span>Ver más detalles</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section id="servicios" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="section-kicker">
              <Layers size={16} />
              <span>Soluciones a medida</span>
            </div>
            <h2 className="section-display-title">SERVICIOS DE DESARROLLO WEB</h2>
            <p className="section-subtitle">
              Diseño y programo sitios pensados para destacar visualmente, cargar rápido y facilitar
              que tus clientes se comuniquen contigo.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.number} className="service-card">
                <span className="service-number">{service.number}</span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {service.highlights.map((item) => (
                    <span key={item} className="tech-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Sobre Mí y Habilidades */}
      <section id="sobre-mi" className="section">
        <div className="container about-grid">
          <div className="panel-card">
            <div className="section-kicker">
              <User size={16} />
              <span>Sobre mí</span>
            </div>
            <h2 className="section-display-title" style={{ fontSize: '2.3rem' }}>
              PERFIL PROFESIONAL
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              {personalInfo.aboutText}
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', marginBottom: '2rem' }}>
              Si deseas actualizar o agregar nuevas páginas web a este portafolio en el futuro,
              puedes hacerlo fácilmente editando el archivo{' '}
              <code>src/data/portfolioData.js</code>.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <Linkedin size={16} />
                <span>Ver mi LinkedIn</span>
              </a>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cta btn-sm"
              >
                <MessageSquare size={16} />
                <span>Conversar por WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="panel-card">
            <div className="section-kicker">
              <Code2 size={16} />
              <span>Competencias técnicas</span>
            </div>
            <h3 className="section-display-title" style={{ fontSize: '2.1rem' }}>
              TECNOLOGÍAS Y HABILIDADES
            </h3>

            <div className="skills-list">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span>{skill.name}</span>
                    <span className="skill-category">{skill.category}</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contacto Directo */}
      <section id="contacto" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="section-kicker">
              <MessageSquare size={16} />
              <span>Canales de comunicación</span>
            </div>
            <h2 className="section-display-title">CONTACTO DIRECTO</h2>
            <p className="section-subtitle">
              Escríbeme directamente a mi WhatsApp, revisa mi perfil en LinkedIn o envíame un
              correo electrónico para conversar sobre tu proyecto.
            </p>
          </div>

          <div className="contact-grid">
            {/* Tarjetas de canales directos */}
            <div className="contact-cards-column">
              {/* WhatsApp */}
              <div className="contact-card">
                <span className="contact-card-label">Respuesta rápida</span>
                <h3 className="contact-card-title">
                  WhatsApp: {personalInfo.contact.whatsappDisplay}
                </h3>
                <p className="contact-card-desc">
                  La vía más rápida para cotizar una página web, resolver dudas o coordinar una
                  reunión.
                </p>
                <div className="contact-card-actions">
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-cta btn-sm"
                  >
                    <MessageSquare size={16} />
                    <span>Hablemos por WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('+56934014520', 'wsp')}
                    className="btn btn-secondary btn-sm"
                  >
                    {copiedItem === 'wsp' ? <Check size={15} /> : <Copy size={15} />}
                    <span>{copiedItem === 'wsp' ? 'Número copiado' : 'Copiar número'}</span>
                  </button>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="contact-card">
                <span className="contact-card-label">Red profesional</span>
                <h3 className="contact-card-title">LinkedIn — Alexander Eastman Galindo</h3>
                <p className="contact-card-desc">
                  Conecta conmigo en LinkedIn para conocer más sobre mi perfil profesional y
                  experiencia.
                </p>
                <div className="contact-card-actions">
                  <a
                    href={personalInfo.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <Linkedin size={16} />
                    <span>Ir a mi perfil de LinkedIn</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Correo Electrónico */}
              <div className="contact-card">
                <span className="contact-card-label">Correo electrónico</span>
                <h3 className="contact-card-title">{personalInfo.contact.email}</h3>
                <p className="contact-card-desc">
                  Ideal para enviarme propuestas detalladas, requerimientos de un proyecto o
                  contacto laboral.
                </p>
                <div className="contact-card-actions">
                  <a href={buildMailtoUrl()} className="btn btn-secondary btn-sm">
                    <Mail size={16} />
                    <span>Enviar un correo</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(personalInfo.contact.email, 'email')}
                    className="btn btn-secondary btn-sm"
                  >
                    {copiedItem === 'email' ? <Check size={15} /> : <Copy size={15} />}
                    <span>{copiedItem === 'email' ? 'Correo copiado' : 'Copiar correo'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Formulario de Mensaje Rápido */}
            <div className="contact-form-card">
              <div className="section-kicker" style={{ marginBottom: '0.4rem' }}>
                <Send size={15} />
                <span>Mensaje rápido</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Envíame una consulta directa
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  marginBottom: '1.75rem',
                }}
              >
                Completa estos datos y elige si prefieres enviarme tu mensaje por WhatsApp o por
                correo electrónico:
              </p>

              <form onSubmit={handleSendViaWhatsApp}>
                <div className="form-group">
                  <label htmlFor="visitorName">Tu nombre o empresa</label>
                  <input
                    id="visitorName"
                    type="text"
                    className="form-control"
                    placeholder="Ej: Juan Pérez / Mi Empresa"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="projectType">¿En qué te puedo ayudar?</label>
                  <select
                    id="projectType"
                    className="form-control"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                  >
                    <option value="Landing Page / Sitio Comercial">
                      Cotizar una Landing Page / Sitio Comercial
                    </option>
                    <option value="Aplicación Web en React">
                      Desarrollo de Aplicación Web en React
                    </option>
                    <option value="Catálogo Digital / E-Commerce">
                      Catálogo Digital / Tienda Online
                    </option>
                    <option value="Oportunidad Laboral / Colaboración">
                      Oportunidad Laboral / Reclutamiento
                    </option>
                    <option value="Consulta General">Otra consulta</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="visitorMessage">Mensaje o detalles del proyecto</label>
                  <textarea
                    id="visitorMessage"
                    rows={4}
                    className="form-control"
                    placeholder="Cuéntame brevemente qué tienes en mente..."
                    value={visitorMessage}
                    onChange={(e) => setVisitorMessage(e.target.value)}
                  />
                </div>

                <div className="form-buttons">
                  <button type="submit" className="btn btn-cta">
                    <MessageSquare size={17} />
                    <span>Enviar por WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaEmail}
                    className="btn btn-secondary"
                  >
                    <Mail size={17} />
                    <span>Enviar por Correo</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Pie de página */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>{personalInfo.name}</strong> — Portafolio de Desarrollo Web
          </div>
          <div style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap' }}>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              WhatsApp: {personalInfo.contact.whatsappDisplay}
            </a>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              LinkedIn
            </a>
            <a href={buildMailtoUrl()} className="nav-link">
              {personalInfo.contact.email}
            </a>
          </div>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-cta"
        title="Hablemos por WhatsApp"
      >
        <MessageSquare size={18} />
        <span>Hablemos por WhatsApp</span>
      </a>

      {/* Modal con detalles del proyecto */}
      {activeProjectModal && (
        <div className="modal-backdrop" onClick={() => setActiveProjectModal(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close"
              onClick={() => setActiveProjectModal(null)}
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            <span className="project-category-badge" style={{ display: 'inline-block', marginBottom: '0.75rem' }}>
              {activeProjectModal.category} • {activeProjectModal.year}
            </span>

            <h2
              style={{
                fontSize: '1.85rem',
                fontWeight: 700,
                marginBottom: '1.25rem',
                color: 'var(--text-primary)',
              }}
            >
              {activeProjectModal.title}
            </h2>

            <div
              style={{
                background: 'var(--bg-main)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.1rem 1.35rem',
                marginBottom: '1.5rem',
              }}
            >
              <div
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  marginBottom: '0.25rem',
                }}
              >
                Enlace directo al sitio web:
              </div>
              <a
                href={activeProjectModal.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: 600,
                  color: 'var(--accent-red-bright)',
                }}
              >
                <Globe size={16} />
                <span>{activeProjectModal.url}</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <h4 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>Descripción general</h4>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              {activeProjectModal.description}
            </p>

            <h4 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>Objetivo del proyecto</h4>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              {activeProjectModal.challengeAndSolution}
            </p>

            <h4 style={{ fontSize: '1.05rem', marginBottom: '0.65rem' }}>
              Características incluidas
            </h4>
            <ul className="project-features" style={{ marginBottom: '1.5rem' }}>
              {activeProjectModal.features.map((feat, i) => (
                <li key={i}>
                  <CheckCircle2
                    size={16}
                    style={{
                      flexShrink: 0,
                      marginTop: '4px',
                      color: 'var(--accent-red-bright)',
                    }}
                  />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="tech-list" style={{ marginBottom: '1.75rem' }}>
              {activeProjectModal.technologies.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a
                href={activeProjectModal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cta"
              >
                <Globe size={17} />
                <span>Visitar sitio web</span>
                <ExternalLink size={15} />
              </a>

              <a
                href={buildWhatsAppUrl(
                  `Hola Alexander, vi en tu portafolio el proyecto "${activeProjectModal.title}" y me gustaría cotizar un desarrollo similar.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <MessageSquare size={17} />
                <span>Cotizar algo similar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
