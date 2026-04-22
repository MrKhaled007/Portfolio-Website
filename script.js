/* ─────────────────────────────────────────────────────────
   Mohammed Khaled — personal site
   Vanilla JS: typing, nav state, reveal, mobile menu, smooth scroll
   ───────────────────────────────────────────────────────── */

(() => {
  'use strict';

  const prefersReducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Year in footer ─────────────────────────────────────
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Theme toggle ───────────────────────────────────────
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    const syncLabel = () => {
      const cur = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = cur === 'dark' ? 'retro' : 'dark';
      themeBtn.setAttribute('aria-label', `Switch to ${next} theme`);
      themeBtn.setAttribute('title', `Switch to ${next} theme`);
    };
    syncLabel();
    themeBtn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = cur === 'dark' ? 'retro' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('mk-theme', next); } catch (e) {}
      syncLabel();
    });
  }

  // ── Typing animation ───────────────────────────────────
  const typed = document.getElementById('typed');
  const phrase = 'building intelligent systems that turn data into action.';

  if (typed) {
    if (prefersReducedMotion) {
      typed.textContent = phrase;
    } else {
      let i = 0;
      const speed = 42; // ms per char
      const start = 350;
      const tick = () => {
        if (i <= phrase.length) {
          typed.textContent = phrase.slice(0, i);
          i++;
          setTimeout(tick, speed + (Math.random() * 30 - 15));
        }
      };
      setTimeout(tick, start);
    }
  }

  // ── Nav scroll state ───────────────────────────────────
  const nav = document.getElementById('nav');
  const setNavState = () => {
    if (!nav) return;
    nav.dataset.state = window.scrollY > 24 ? 'scrolled' : 'top';
  };
  setNavState();
  window.addEventListener('scroll', setNavState, { passive: true });

  // ── Mobile menu ────────────────────────────────────────
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('mobileMenu');

  const setMenu = (open) => {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (open) {
      menu.hidden = false;
      document.body.style.overflow = 'hidden';
    } else {
      menu.hidden = true;
      document.body.style.overflow = '';
    }
  };

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      setMenu(!expanded);
    });
    menu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') setMenu(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  // ── IntersectionObserver reveal ────────────────────────
  const revealEls = document.querySelectorAll('.section, .terminal, .project');
  revealEls.forEach(el => el.classList.add('reveal'));

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

    revealEls.forEach(el => io.observe(el));
  }

  // ── Smooth anchor scroll (honours reduced motion) ──────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
      // Move keyboard focus for a11y
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      setTimeout(() => target.removeAttribute('tabindex'), 1000);
    });
  });
})();
