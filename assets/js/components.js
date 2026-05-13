// ============================================================
// SAES Consulting — Shared components (header + footer)
// ============================================================

const NAV_LINKS = [
  { href: "index.html",       label: "Inicio" },
  { href: "nosotros.html",    label: "Nosotros" },
  { href: "servicios.html",   label: "Servicios" },
  { href: "metodologia.html", label: "Metodología" },
  { href: "clientes.html",    label: "Clientes" },
  { href: "contacto.html",    label: "Contacto" },
];

function renderHeader() {
  const currentPage = location.pathname.split("/").pop() || "index.html";

  const navLinks = NAV_LINKS.map(({ href, label }) => {
    const active = href === currentPage || (currentPage === "" && href === "index.html")
      ? ' class="active"' : '';
    return `<a href="${href}"${active}>${label}</a>`;
  }).join("");

  const mobileLinks = NAV_LINKS.map(({ href, label }) =>
    `<a href="${href}">${label}</a>`
  ).join("");

  document.getElementById("site-header").innerHTML = `
    <div class="container-page inner">
      <a href="index.html" class="logo" aria-label="SAES Consulting — Inicio">
        <img src="assets/images/logo-saes.png" alt="SAES Consulting" />
      </a>
      <nav class="site-nav">${navLinks}</nav>
      <a href="contacto.html" class="btn-dark header-cta">Agendar reunión</a>
      <button class="mobile-menu-btn" id="menuToggle" aria-label="Menú">
        <svg id="iconMenu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
        <svg id="iconClose" style="display:none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
    <div class="mobile-nav" id="mobileNav">
      <nav>${mobileLinks}</nav>
    </div>
  `;

  document.getElementById("menuToggle").addEventListener("click", () => {
    const nav = document.getElementById("mobileNav");
    const open = nav.classList.toggle("open");
    document.getElementById("iconMenu").style.display = open ? "none" : "";
    document.getElementById("iconClose").style.display = open ? "" : "none";
  });
}

function renderFooter() {
  const year = new Date().getFullYear();
  document.getElementById("site-footer").innerHTML = `
    <div class="container-page grid">
      <div class="footer-brand">
        <div class="footer-logo-wrap">
          <img src="assets/images/logo-saes.png" alt="SAES Consulting" />
        </div>
        <p class="footer-desc">Más de 30 años identificando líderes para empresas líderes en México y Latinoamérica.</p>
      </div>
      <div class="footer-col">
        <h4>Navegación</h4>
        <ul>
          <li><a href="nosotros.html">Nosotros</a></li>
          <li><a href="servicios.html">Servicios</a></li>
          <li><a href="metodologia.html">Metodología</a></li>
          <li><a href="clientes.html">Clientes</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contacto</h4>
        <ul>
          <li class="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            eloisa@saescon.com.mx
          </li>
          <li class="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.92 12 19.79 19.79 0 0 1 1.82 3.18 2 2 0 0 1 3.82 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            +52 55 3040 8627
          </li>
          <li class="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Ciudad de México
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container-page inner">
        <span>© ${year} SAES Consulting. Todos los derechos reservados.</span>
        <span>Head Hunting · Ejecutivos · Liderazgo</span>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
});
