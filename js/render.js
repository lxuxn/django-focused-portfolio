/* ============================================================
   carl.dev — Portfolio Renderer
   js/render.js
   Reads PORTFOLIO_DATA from data.js and populates the DOM.
   ============================================================ */

(function () {
  'use strict';

  /* ── Projects ─────────────────────────────────────────── */
  const projectGrid = document.getElementById('projectGrid');
  if (projectGrid) {
    const total = PORTFOLIO_DATA.projects.length;
    projectGrid.innerHTML = PORTFOLIO_DATA.projects.map(p => `
      <a class="project-card" href="${p.link}">
        <div class="project-num">${p.num} / ${String(total).padStart(2, '0')}</div>
        <span class="project-icon">${p.icon}</span>
        <span class="project-arrow">↗</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-stack">
          ${p.stack.map(t => `<span class="stack-pill">${t}</span>`).join('')}
        </div>
      </a>
    `).join('');
  }

  /* ── Skills ───────────────────────────────────────────── */
  function renderSkillGroup(containerId, skills, barClass = '') {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = skills.map(s => `
      <div class="skill-item">
        <span class="skill-name">${s.name}</span>
        <div class="skill-bar-wrap">
          <div class="skill-bar ${barClass}" style="width:${s.pct}%"></div>
        </div>
      </div>
    `).join('');
  }

  renderSkillGroup('skillsBackend',  PORTFOLIO_DATA.skills.backend);
  renderSkillGroup('skillsDevops',   PORTFOLIO_DATA.skills.devops);
  renderSkillGroup('skillsFrontend', PORTFOLIO_DATA.skills.frontend, 'cyan');
  renderSkillGroup('skillsAi',       PORTFOLIO_DATA.skills.ai,       'pink');

  /* ── Experience ───────────────────────────────────────── */
  const expNav     = document.getElementById('expNav');
  const expEntries = document.getElementById('expEntries');

  if (expNav && expEntries) {
    expNav.innerHTML = PORTFOLIO_DATA.experience.map((e, i) => `
      <div class="exp-nav-item ${i === 0 ? 'active' : ''}"
           onclick="switchExp(this, 'exp-${e.id}')">
        <div class="exp-nav-company">${e.company}</div>
        <div class="exp-nav-period">${e.period}</div>
      </div>
    `).join('');

    expEntries.innerHTML = PORTFOLIO_DATA.experience.map((e, i) => `
      <div class="exp-entry ${i === 0 ? 'active' : ''}" id="exp-${e.id}">
        <div class="exp-role">${e.role}</div>
        <div class="exp-company-name">${e.company}${e.location ? ' — ' + e.location : ''}</div>
        <ul class="exp-duties">
          ${e.duties.map(d => `<li>${d}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

})();
