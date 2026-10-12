// ── NAV UNIVERSAL NEUROLUMENS ──────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav-universal');
  if (!nav) return;

  nav.innerHTML = `
    <div class="nav__inner">
      <a href="/" class="nav__logo">
        <img
          src="https://res.cloudinary.com/de2t5oifa/image/upload/q_auto/f_auto/v1780865691/Nombre_png_vdojx4.png"
          alt="NeuroLumens"
          style="height:28px; width:auto; display:block;"
        />
      </a>
      <ul class="nav__links">
        <li><a href="/#que-es">¿Qué es TMS?</a></li>
        <li><a href="/#como-funciona">Cómo funciona</a></li>
        <li><a href="/#condiciones">Condiciones</a></li>
        <li><a href="/#quienes-somos">Nosotros</a></li>
        <li><a href="/#testimonios">Testimonios</a></li>
        <li><a href="/#faq">FAQ</a></li>
        <li><a href="/#ubicacion">Ubicación</a></li>
        <li><a href="/nancy.html">Dra. Nancy</a></li>
        <li><a href="/blog.html">Blog</a></li>
      </ul>
      <a class="nav__cta" href="https://wa.me/522213580031?text=Hola%2C%20quiero%20información%20sobre%20TMS" target="_blank" rel="noopener">
        Contáctanos
      </a>
    </div>
  `;

  // Marca el link activo según la página actual
  const path = window.location.pathname;
  nav.querySelectorAll('.nav__links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '/' && href === '/')) {
      link.style.color = '#c4a5ce';
    }
  });
});
