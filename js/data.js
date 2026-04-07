/* ============================================================
   carl.dev — Portfolio Data
   js/data.js
   Edit this file to update your projects, skills, and experience.
   ============================================================ */

const PORTFOLIO_DATA = {

  projects: [
    {
      num: '01', icon: '📋',
      title: 'Client Task Management App',
      desc: 'Full-stack Django application with a kanban board, client login portal, ticketing system, and billing/invoicing. Deployed on Hetzner with Nginx + Gunicorn + PostgreSQL.',
      stack: ['Django', 'PostgreSQL', 'Nginx', 'Gunicorn', 'Hetzner'],
      link: '#'
    },
    {
      num: '02', icon: '🎓',
      title: 'WP Developer Training System',
      desc: 'Django-based training platform for a WordPress developer trainee — task lifecycle tracker with timer functionality and a six-phase training roadmap.',
      stack: ['Django', 'JavaScript', 'SQLite', 'Bootstrap'],
      link: '#'
    },
    {
      num: '03', icon: '🧾',
      title: 'WooCommerce PDF Invoice System',
      desc: 'Custom invoice template system for LME Coaching Pty Ltd using the PDF Invoices & Packing Slips plugin. Pixel-perfect PDF generation matching brand guidelines.',
      stack: ['WooCommerce', 'PHP', 'CSS', 'WordPress'],
      link: '#'
    },
    {
      num: '04', icon: '🎬',
      title: 'YouTube Tab Manager',
      desc: 'Chrome extension in vanilla JS solving the problem of too many open YouTube tabs. Lightweight, CSP-compliant, and designed for a seamless browser experience.',
      stack: ['JavaScript', 'Chrome API', 'CSS', 'Manifest V3'],
      link: '#'
    },
    {
      num: '05', icon: '⚡',
      title: 'Local LLM Inference Setup',
      desc: 'Optimized llama.cpp inference with Vulkan backend on a Ryzen 5000 APU (iGPU + RX 580). Tested Qwen3 variants and explored quantization strategies for consumer hardware.',
      stack: ['llama.cpp', 'Vulkan', 'Python', 'Ubuntu'],
      link: '#'
    },
    {
      num: '06', icon: '🌿',
      title: 'Renewable Energy Concept — PH',
      desc: 'Mission-driven research and business concept targeting renewable energy access for underserved communities in the Philippines, grounded in RA 9513.',
      stack: ['Research', 'RA 9513', 'Strategy'],
      link: '#'
    },
  ],

  skills: {
    backend: [
      { name: 'Django / Python',      pct: 90 },
      { name: 'PostgreSQL',           pct: 78 },
      { name: 'PHP / WooCommerce',    pct: 82 },
      { name: 'WordPress / REST API', pct: 92 },
      { name: 'Nginx / Gunicorn',     pct: 72 },
    ],
    devops: [
      { name: 'Ubuntu / Linux',  pct: 88 },
      { name: 'Git / GitHub',    pct: 85 },
      { name: 'Hetzner / VPS',   pct: 70 },
      { name: 'Docker / QEMU',   pct: 65 },
    ],
    frontend: [
      { name: 'HTML / CSS / JS',    pct: 90 },
      { name: 'React',              pct: 72 },
      { name: 'Figma',              pct: 85 },
      { name: 'Photoshop',          pct: 80 },
      { name: 'Shopify / Maropost', pct: 75 },
    ],
    ai: [
      { name: 'llama.cpp / LLM Inference', pct: 78 },
      { name: 'Prompt Engineering',        pct: 82 },
      { name: 'VSCode + Continue',         pct: 85 },
      { name: 'RunPod / Serverless AI',    pct: 60 },
    ],
  },

  experience: [
    {
      id: 'also',
      company: 'ALSO',
      period: 'Current',
      role: 'Technical Graphics Designer',
      location: 'Remote',
      duties: [
        'Design and maintain technical graphics and visual assets for enterprise-scale digital products.',
        'Collaborate with international teams across remote-first workflows using Jira, Wrike, and Microsoft Teams.',
        'Apply Figma and Photoshop for UI design deliverables and digital marketing assets.',
        'Bridge design and development — translating mockups into pixel-perfect implementation.',
        'Work within agile processes, contributing to sprints and design system maintenance.',
      ],
    },
    {
      id: 'freelance',
      company: 'Freelance',
      period: 'Ongoing',
      role: 'Django & WP Developer',
      location: 'PH',
      duties: [
        'Built a full-stack Django client task management app with kanban, ticketing, and invoicing on Hetzner.',
        'Developed a WooCommerce PDF invoice system for LME Coaching Pty Ltd with custom template design.',
        'Created a Django developer training platform with task lifecycle tracking and structured training phases.',
        'Built and published a YouTube Tab Manager Chrome extension in vanilla JS and Chrome Extension API.',
        'Consulting on WooCommerce store setup, care plans, and WordPress maintenance for small businesses.',
      ],
    },
    {
      id: 'agency',
      company: 'Agency Work',
      period: 'Previous',
      role: 'WordPress & E-Commerce Developer',
      location: 'Remote',
      duties: [
        'Developed and maintained WordPress and WooCommerce sites for clients across multiple industries.',
        'Worked with Shopify and Maropost platforms for e-commerce build-outs and integrations.',
        'Handled mobile-first responsive design, custom theme development, and plugin customization.',
        'Explored Laravel and PHP API development for food delivery and service platform prototypes.',
        'Applied Gaussian Splatting and WebGL research for experimental web projects.',
      ],
    },
  ],

};
