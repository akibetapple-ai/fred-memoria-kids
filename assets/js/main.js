(() => {
  'use strict';
  const cfg = window.FRED_CONFIG || {};
  const email = String(cfg.supportEmail || 'soporte@ejemplo.com').trim();
  const isExample = !email || email.toLowerCase().endsWith('@ejemplo.com');
  const subject = encodeURIComponent(cfg.supportSubject || 'Soporte Fred Memoria Kids');
  const mailHref = `mailto:${encodeURIComponent(email).replace('%40', '@')}?subject=${subject}`;

  document.querySelectorAll('[data-support-email]').forEach(el => {
    el.textContent = email;
  });
  document.querySelectorAll('[data-support-link]').forEach(el => {
    el.setAttribute('href', mailHref);
  });
  document.querySelectorAll('[data-config-warning]').forEach(el => {
    el.hidden = !isExample;
  });
  document.querySelectorAll('#current-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  const nav = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.menu-toggle');
  if (nav && navToggle) {
    const closeMenu = () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
    };
    navToggle.addEventListener('click', () => {
      const opened = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(opened));
      navToggle.setAttribute('aria-label', opened ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  }

  const track = document.getElementById('gallery-track');
  if (track) {
    document.getElementById('gallery-prev')?.addEventListener('click', () => {
      track.scrollBy({left: -270, behavior: 'smooth'});
    });
    document.getElementById('gallery-next')?.addEventListener('click', () => {
      track.scrollBy({left: 270, behavior: 'smooth'});
    });
  }

  const dialog = document.getElementById('image-dialog');
  if (dialog) {
    const dialogImage = document.getElementById('dialog-image');
    const dialogCaption = document.getElementById('dialog-caption');
    document.querySelectorAll('.gallery-item[data-src]').forEach(button => {
      button.addEventListener('click', () => {
        const image = button.querySelector('img');
        dialogImage.src = button.dataset.src;
        dialogImage.alt = image?.alt || 'Captura ampliada';
        dialogCaption.textContent = button.dataset.caption || '';
        if (typeof dialog.showModal === 'function') dialog.showModal();
      });
    });
    document.getElementById('dialog-close')?.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  }
})();
