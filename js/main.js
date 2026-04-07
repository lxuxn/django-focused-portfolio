/* ============================================================
   carl.dev — Portfolio Scripts
   js/main.js
   ============================================================ */

(function () {
  'use strict';

  /* ── Scroll Reveal ──────────────────────────────────────── */
  const reveals = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.1 }
  );
  reveals.forEach(r => revealObs.observe(r));

  /* ── Skill Bar Animation ────────────────────────────────── */
  const skillBars = document.querySelectorAll('.skill-bar');
  const barObs = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('animated'); }),
    { threshold: 0.3 }
  );
  skillBars.forEach(b => barObs.observe(b));

  /* ── Experience Tab Switcher ────────────────────────────── */
  window.switchExp = function (el, targetId) {
    document.querySelectorAll('.exp-nav-item').forEach(i => i.classList.remove('active'));
    document.querySelectorAll('.exp-entry').forEach(i => i.classList.remove('active'));
    el.classList.add('active');
    const target = document.getElementById(targetId);
    if (target) target.classList.add('active');
  };

  /* ── Mobile Nav Toggle ──────────────────────────────────── */
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open);
      navToggle.textContent = open ? '✕' : '☰';
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', false);
        navToggle.textContent = '☰';
      });
    });
  }

  /* ── Active Nav Highlight on Scroll ────────────────────── */
  const sections   = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  const highlightNav = () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 130) current = s.id;
    });
    navAnchors.forEach(a => {
      const isActive = a.getAttribute('href') === '#' + current;
      a.style.color = isActive ? 'var(--text)' : '';
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });

  /* ── Typing cursor keeps blinking — nothing needed ──────── */

  /* ── Smooth scroll polyfill for older Safari ────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

})();
