import React, { useState, useEffect } from 'react';
import {
  Globe,
  ExternalLink,
  MessageSquare,
  Mail,
  Linkedin,
  Copy,
  Check,
  CheckCircle2,
  ArrowUpRight,
  Eye,
  X,
  Layers,
  Shield,
} from 'lucide-react';
import { personalInfo, projects, services } from './data/portfolioData';

export default function App() {
  const [personaTheme, setPersonaTheme] = useState('p5');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [copiedItem, setCopiedItem] = useState('');

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
              Webs
            </a>
            <a href="#servicios" className="nav-link">
              Servicios
            </a>
            <a href="#parametros" className="nav-link">
              Enfoque
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
              title="Cambiar paleta visual"
            >
              {personaTheme === 'p5' ? 'Tema: P5 Rojo' : 'Tema: P3R Azul'}
            </button>

            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              title="Ver mi LinkedIn"
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
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Sección Principal (Hero) */}
      <section id="inicio" className="hero-section">
        <div className="container hero-grid">
          <div>
            <div className="status-badge">
              <span className="status-dot" />
              <span>{personalInfo.availabilityText}</span>
            </div>

            <div className="section-kicker" style={{ marginBottom: '0.5rem' }}>
              <span>{personalInfo.role}</span>
            </div>

            <h1 className="hero-display-title">
              HOLA, SOY
              <br />
              <span className="hero-display-accent">{personalInfo.name}</span>
            </h1>

            <p className="hero-description">{personalInfo.heroSubheadline}</p>

            <div className="hero-actions">
              <a href="#proyectos" className="btn btn-cta">
                <Globe size={18} />
                <span>Explorar mis páginas web</span>
              </a>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <MessageSquare size={18} />
                <span>Hablar al WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Tarjeta Derecha: Perfil Profesional y Acceso Rápido */}
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-avatar">AE</div>
              <div>
                <div className="profile-eyebrow">Perfil Profesional</div>
                <h2 className="profile-name">{personalInfo.name}</h2>
              </div>
            </div>

            <p className="profile-summary">
              Selecciona un canal de comunicación directa para cotizar un sitio web, revisar mi
              trayectoria o enviarme una propuesta:
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
                    <span className="channel-label">Contacto directo // WhatsApp</span>
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
                    <span className="channel-label">Red profesional // LinkedIn</span>
                    <strong className="channel-value">Alexander Eastman Galindo</strong>
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

      {/* Sección de Proyectos Web */}
      <section id="proyectos" className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-kicker">
              <Globe size={16} />
              <span>Trabajos realizados</span>
            </div>
            <h2 className="section-display-title">MIS PÁGINAS WEB Y DESARROLLOS</h2>
            <p className="section-subtitle">
              Cada proyecto muestra el enlace directo a la página web, su propósito y las
              funciones implementadas.
            </p>
          </div>

          {/* Barra de Filtros */}
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
                  <span className="project-number">{project.code}</span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-url-link"
                    title="Abrir sitio web en nueva pestaña"
                  >
                    <span>{project.url.replace(/^https?:\/\//, '')}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>

                <div className="project-banner">
                  <div className="project-meta-row">
                    <span className="project-category-badge">{project.category}</span>
                    <span className="project-year">
                      Estado: {project.metrics.status} • {project.year}
                    </span>
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
                      <span>Visitar web</span>
                      <ExternalLink size={15} />
                    </a>

                    <button
                      type="button"
                      onClick={() => setActiveProjectModal(project)}
                      className="btn btn-secondary btn-sm"
                    >
                      <Eye size={15} />
                      <span>Ver detalles</span>
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
              <span>Servicios</span>
            </div>
            <h2 className="section-display-title">QUÉ INCLUYE MI TRABAJO WEB</h2>
            <p className="section-subtitle">
              Soluciones enfocadas en resolver de manera ágil los problemas que presenta el
              usuario.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.code} className="service-card">
                <span className="service-number">{service.code}</span>
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

      {/* Sección Sobre Mi Enfoque (sin la columna de barras que habías quitado) */}
      <section id="parametros" className="section">
        <div className="container">
          <div className="panel-card" style={{ maxWidth: '820px' }}>
            <div className="section-kicker">
              <Shield size={16} />
              <span>Perfil Profesional</span>
            </div>
            <h2 className="section-display-title" style={{ fontSize: '2.3rem' }}>
              SOBRE MI ENFOQUE
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.05rem',
                marginBottom: '2rem',
              }}
            >
              {personalInfo.aboutText}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <Linkedin size={16} />
                <span>Ver LinkedIn</span>
              </a>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cta btn-sm"
              >
                <MessageSquare size={16} />
                <span>Escribir al WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contacto Directo (solo tus 3 canales directos, sin el formulario que habías quitado) */}
      <section id="contacto" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="section-kicker">
              <MessageSquare size={16} />
              <span>Contacto Directo</span>
            </div>
            <h2 className="section-display-title">CONTÁCTAME AHORA</h2>
            <p className="section-subtitle">
              Me puedes hablar por Whatsapp, ubicarme en mi linkedin o mandar un correo electronico.
            </p>
          </div>

          <div className="services-grid">
            {/* WhatsApp */}
            <div className="contact-card">
              <span className="contact-card-label">Contacto directo</span>
              <h3 className="contact-card-title">{personalInfo.contact.whatsappDisplay}</h3>
              <p className="contact-card-desc">
                Vía más rápida para hablar sobre proyectos web, presupuestos o consultas directas.
              </p>
              <div className="contact-card-actions">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-cta btn-sm"
                >
                  <MessageSquare size={15} />
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
              <span className="contact-card-label">Perfil profesional</span>
              <h3 className="contact-card-title">Alexander Eastman Galindo</h3>
              <p className="contact-card-desc">
                Revisa mi perfil profesional, experiencia y conecta conmigo en LinkedIn.
              </p>
              <div className="contact-card-actions">
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <Linkedin size={15} />
                  <span>Ir a mi LinkedIn</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Correo */}
            <div className="contact-card">
              <span className="contact-card-label">Correo electrónico</span>
              <h3 className="contact-card-title">{personalInfo.contact.email}</h3>
              <p className="contact-card-desc">
                Canal formal para propuestas detalladas, documentos o contacto laboral.
              </p>
              <div className="contact-card-actions">
                <a href={buildMailtoUrl()} className="btn btn-cta btn-sm">
                  <Mail size={15} />
                  <span>Enviar correo</span>
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
        </div>
      </section>

      {/* Pie de Página */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>{personalInfo.name}</strong> // Portafolio
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              WSP: {personalInfo.contact.whatsappDisplay}
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

      {/* Botón Flotante de WhatsApp */}
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-cta"
        title="Háblame por WhatsApp"
      >
        <MessageSquare size={18} />
        <span>WhatsApp directo</span>
      </a>

      {/* Modal de Detalles de Proyecto */}
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

            <span
              className="project-category-badge"
              style={{ display: 'inline-block', marginBottom: '0.75rem' }}
            >
              {activeProjectModal.code} • {activeProjectModal.category} •{' '}
              {activeProjectModal.year}
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
                Enlace directo al sitio desplegado:
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

            <h4 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>Objetivo y solución</h4>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              {activeProjectModal.challengeAndSolution}
            </p>

            <h4 style={{ fontSize: '1.05rem', marginBottom: '0.65rem' }}>
              Características implementadas
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
                  `Hola Alexander, vi en tu portafolio el proyecto "${activeProjectModal.title}" y me gustaría consultar por un desarrollo similar.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <MessageSquare size={17} />
                <span>Cotizar similar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
