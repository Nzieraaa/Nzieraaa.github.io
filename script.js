/* ============================================
   NANCY AKISYA PORTFOLIO - SCRIPT.JS
   All JavaScript interactions & animations
   ============================================ */

/* ============================================
   1. PROJECTS DATA
   ============================================ */
const projectsData = [
  { title: 'FinTrack', icon: 'fas fa-wallet', badge: 'Mobile App', desc: 'Smart personal finance tracker. Savings goals, expense tracking, and monthly spending list management.', tags: ['HTML/CSS/JS', 'Finance'], link: 'https://fintrack-app-xi.vercel.app/' },
  { title: 'School API Docs', icon: 'fas fa-key', badge: 'Coming Soon', badgeColor: '#d97706', desc: 'Comprehensive docs for school API — covering API key & no-key endpoints with examples.', tags: ['REST API', 'Docs'], disabled: true },
  { title: 'API Material & NASA', icon: 'fas fa-moon', badge: 'Web App', desc: 'Educational API content with NASA Open API integration. Moon phase data based on birth dates.', tags: ['PHP', 'NASA API'], link: 'https://nzieraaa.github.io/API.html' },
  { title: 'Batik Heritage Database', icon: 'fas fa-palette', badge: 'Web', desc: 'Database of 36 batik patterns with history, techniques, and cultural significance.', tags: ['HTML/CSS/JS'], link: 'https://nzieraaa.github.io/v5.html' },
  { title: 'Void Scavenge Maze', icon: 'fas fa-gem', badge: 'Game', desc: 'Strategic maze game where players collect 10 specific gems from 15 treasures.', tags: ['Construct 3', 'JavaScript'], link: 'http://103.186.167.18:8002/rpl1/game/void-scavenge/' },
  { title: 'School Management System', icon: 'fas fa-school', badge: 'Full-Stack', desc: '4-role system with Google Auth for parents, students, teachers, and staff.', tags: ['PHP', 'Tailwind', 'MVC'], link: 'http://103.186.167.18:8001/rpl1/kel1/' },
  { title: 'Florist E-Commerce', icon: 'fas fa-seedling', badge: 'E-Commerce', desc: 'Full-featured flower shop with dual-role system and sales management.', tags: ['Laravel', 'MySQL'], link: 'http://103.186.167.18:8002/rpl1/laravel/florist/public' },
  { title: 'K13 Learning Portal', icon: 'fas fa-book-open', badge: 'Education', desc: 'K13 curriculum materials for grades 7–9 with practice questions.', tags: ['Blogger', 'HTML/CSS'], link: 'https://ncy13.blogspot.com/?m=1' },
  { title: 'Framework Masterclass', icon: 'fas fa-code-branch', badge: 'Docs', desc: 'Guide covering 7+ frameworks including CodeIgniter, Laravel, and modern web tech.', tags: ['WordPress', 'Documentation'], link: 'https://ncyakisya13.wordpress.com/' },
  { title: 'News Reader Pro', icon: 'fas fa-newspaper', badge: 'Mobile', desc: 'Multi-language news app with dark mode, topic search, and category filtering.', tags: ['Flutter', 'REST API'], link: 'https://github.com/Nzieraaa/news_reader_pro' },
  { title: 'QuickNote Flutter', icon: 'fas fa-sticky-note', badge: 'Mobile', desc: 'Xiaomi-inspired notes app with swipe shortcuts and task reminders.', tags: ['Flutter', 'Local DB'], link: 'https://github.com/Nzieraaa/notes-app-flutter' },
  { title: 'UMKM E-Commerce', icon: 'fas fa-store', badge: 'E-Commerce', desc: 'Single-store marketplace with catalog, reviews, cart, checkout, and payment.', tags: ['Laravel 10', 'Payment API'], link: 'https://github.com/Nzieraaa/umkm-ecommerce-web' },
  { title: 'Warehouse Inventory', icon: 'fas fa-warehouse', badge: 'System', desc: 'Complete warehouse system with analytics and sender/receiver reports.', tags: ['PHP', 'MySQL'], link: 'https://youtu.be/7z2S-cyWyD4' },
  { title: 'CI Library System', icon: 'fas fa-book', badge: 'Private', badgeColor: '#9c67b0', desc: 'Library management system built with CodeIgniter for book management.', tags: ['CodeIgniter', 'MySQL'], disabled: true },
  { title: 'Geometry Calculator', icon: 'fas fa-calculator', badge: 'Private', badgeColor: '#9c67b0', desc: 'Calculate area and perimeter of 2D shapes with interactive interface.', tags: ['HTML/CSS/JS'], disabled: true },
  { title: 'FinTrack Savings Design', icon: 'fas fa-piggy-bank', badge: 'UI/UX', desc: 'Full Figma UI/UX design for FinTrack app — savings goals and expense tracking.', tags: ['Figma', 'UI/UX'], link: 'https://www.figma.com/design/LBFfWnSr73hJZVgBVDGxR6/' },
  { title: 'Kaggle Learning Hub', icon: 'fas fa-language', badge: 'Education', desc: 'Translated Kaggle tutorials for SQL and Python learning in Indonesian.', tags: ['Laravel', 'Translation'], link: 'http://103.186.167.18:8002/rpl1/laravel/KaggleNancy/' },
  { title: 'YouTube Recommender ML', icon: 'fas fa-brain', badge: 'Web App', desc: 'Machine Learning video recommendation system using K-Means clustering algorithm.', tags: ['Python', 'K-Means', 'ML', 'Vite'], link: 'https://yt-recommender.vercel.app/' },
];

/* ============================================
   2. DOM READY
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  initMobileSplash();
  initLoading();
  initThemeToggle();
  initScrollProgress();
  initScrollReveal();
  initTypedText();
  initCounters();
  initGalaxy();
  initSmoothScroll();
  initBottomNav();
  initBackTop();
  initContactForm();
  renderProjects();
});

/* ============================================
   3. MOBILE SPLASH SCREEN
   ============================================ */
function initMobileSplash() {
  const splash = document.getElementById('mobile-splash');
  if (!splash || window.innerWidth > 768) return;
  
  splash.classList.remove('hidden');
  let countdown = 10;
  const countdownEl = document.getElementById('splash-countdown');
  
  const timer = setInterval(() => {
    countdown--;
    if (countdownEl) countdownEl.textContent = countdown;
    if (countdown <= 0) {
      clearInterval(timer);
      hideSplash();
    }
  }, 1000);
  
  splash.addEventListener('click', () => {
    clearInterval(timer);
    hideSplash();
  });
  
  function hideSplash() {
    splash.classList.add('hidden');
    setTimeout(() => splash.remove(), 600);
  }
}

/* ============================================
   4. LOADING SCREEN
   ============================================ */
function initLoading() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const loading = document.getElementById('loading-screen');
      if (loading) {
        loading.style.opacity = '0';
        loading.style.pointerEvents = 'none';
        setTimeout(() => loading.remove(), 600);
      }
      checkReveal();
    }, 1400);
  });
}

/* ============================================
   5. THEME TOGGLE
   ============================================ */
function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  const body = document.body;
  
  // Check saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    html.classList.add('dark');
    body.classList.add('dark');
  }
  
  if (toggle) {
    toggle.addEventListener('click', () => {
      html.classList.toggle('dark');
      body.classList.toggle('dark');
      
      // Save theme
      const isDark = html.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      
      // Recreate twinkling stars if switching to dark
      if (isDark) {
        createTwinkleStars();
      }
    });
  }
}

/* ============================================
   6. SCROLL PROGRESS BAR
   ============================================ */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }
  });
}

/* ============================================
   7. SCROLL REVEAL ANIMATION
   ============================================ */
function initScrollReveal() {
  window.addEventListener('scroll', checkReveal);
  checkReveal(); // Initial check
}

function checkReveal() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top < windowHeight - 60) {
      el.classList.add('visible');
    }
  });
}

/* ============================================
   8. TYPED TEXT EFFECT
   ============================================ */
function initTypedText() {
  const roles = [
    'Software Developer 💻',
    'Game Developer 🎮',
    'UI/UX Enthusiast 🎨',
    'PPLG Student 🚀',
    'Full-Stack Dev ⚡'
  ];
  
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typedEl = document.getElementById('typed');
  
  if (!typedEl) return;
  
  function type() {
    const current = roles[roleIndex];
    
    if (!isDeleting) {
      typedEl.textContent = current.slice(0, ++charIndex);
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(type, 2200);
        return;
      }
    } else {
      typedEl.textContent = current.slice(0, --charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    
    setTimeout(type, isDeleting ? 55 : 100);
  }
  
  setTimeout(type, 1800);
}

/* ============================================
   9. COUNTER ANIMATION
   ============================================ */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  let animated = false;
  
  function animateCounters() {
    if (animated) return;
    
    counters.forEach(el => {
      const target = parseInt(el.getAttribute('data-count'));
      let count = 0;
      const step = Math.ceil(target / 30);
      
      const interval = setInterval(() => {
        count = Math.min(count + step, target);
        el.textContent = count + (target >= 20 ? '+' : '');
        if (count >= target) clearInterval(interval);
      }, 50);
    });
    
    animated = true;
  }
  
  // Animate when hero is visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
      }
    });
  }, { threshold: 0.5 });
  
  const hero = document.getElementById('hero');
  if (hero) observer.observe(hero);
}

/* ============================================
   10. GALAXY EFFECTS (DARK MODE)
   ============================================ */
function initGalaxy() {
  createTwinkleStars();
  setInterval(createShootingStar, 4000);
}

function createTwinkleStars() {
  const container = document.getElementById('twinkle-container');
  if (!container) return;
  
  // Clear existing stars
  container.innerHTML = '';
  
  // Only create if dark mode
  if (!document.body.classList.contains('dark')) return;
  
  for (let i = 0; i < 120; i++) {
    const star = document.createElement('div');
    star.className = 'twinkle-star';
    const size = Math.random() * 2.5;
    star.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation-duration: ${2 + Math.random() * 5}s;
      animation-delay: ${Math.random() * 5}s;
    `;
    container.appendChild(star);
  }
}

function createShootingStar() {
  if (!document.body.classList.contains('dark')) return;
  
  const star = document.createElement('div');
  star.className = 'shooting-star';
  star.style.cssText = `
    top: ${Math.random() * 60}%;
    left: ${Math.random() * 70}%;
    width: ${80 + Math.random() * 80}px;
    animation-duration: ${2 + Math.random() * 2}s;
  `;
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 5000);
}

/* ============================================
   11. SMOOTH SCROLL
   ============================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* ============================================
   12. BOTTOM NAV ACTIVE STATE
   ============================================ */
function initBottomNav() {
  window.addEventListener('scroll', updateBottomNav);
  updateBottomNav(); // Initial check
}

function updateBottomNav() {
  const sections = ['hero', 'about', 'skills', 'edu-exp', 'projects', 'contact'];
  const navMap = {
    'hero': 'hero',
    'about': 'about',
    'skills': 'skills',
    'edu-exp': 'skills',
    'projects': 'projects',
    'contact': 'contact'
  };
  
  let current = 'hero';
  
  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section && window.scrollY >= section.offsetTop - 100) {
      current = navMap[id] || id;
    }
  });
  
  document.querySelectorAll('.bottom-nav-item').forEach(item => {
    const section = item.getAttribute('data-section');
    item.classList.toggle('active', section === current);
  });
  
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href) {
      const section = href.substring(1);
      link.classList.toggle('active', section === current);
    }
  });
}

/* ============================================
   13. BACK TO TOP BUTTON
   ============================================ */
function initBackTop() {
  const btn = document.getElementById('back-top');
  
  window.addEventListener('scroll', () => {
    if (btn) {
      if (window.scrollY > 400) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    }
  });
  
  if (btn) {
    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/* ============================================
   14. CONTACT FORM
   ============================================ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const submitText = document.getElementById('submitText');
    const submitSpinner = document.getElementById('submitSpinner');
    const formMsg = document.getElementById('formMsg');
    
    if (submitText) submitText.classList.add('hidden');
    if (submitSpinner) submitSpinner.classList.remove('hidden');
    if (submitBtn) submitBtn.disabled = true;
    if (formMsg) formMsg.textContent = '';
    
    const formData = {
      name: this.querySelector('[name="name"]').value,
      email: this.querySelector('[name="email"]').value,
      subject: this.querySelector('[name="subject"]').value,
      message: this.querySelector('[name="message"]').value
    };
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwZLbFWgGNzEFyaaoJ9ZnyDbK997WDqdRDCpUc_i0w_E946enukNxqWnnaNm9WpyfddCQ/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      
      const data = await response.json();
      
      if (data.result === 'success') {
        this.reset();
        if (formMsg) {
          formMsg.innerHTML = '<span style="color:#22c55e">✅ Message sent! I\'ll get back to you soon.</span>';
        }
      } else {
        throw new Error(data.error || 'Unknown error');
      }
    } catch (error) {
      if (formMsg) {
        formMsg.innerHTML = `<span style="color:#ef4444">❌ ${error.message}. Please try WhatsApp instead!</span>`;
      }
    } finally {
      if (submitText) submitText.classList.remove('hidden');
      if (submitSpinner) submitSpinner.classList.add('hidden');
      if (submitBtn) submitBtn.disabled = false;
      setTimeout(() => {
        if (formMsg) formMsg.textContent = '';
      }, 6000);
    }
  });
}

/* ============================================
   15. RENDER PROJECTS
   ============================================ */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  
  projectsData.forEach((project, index) => {
    const card = document.createElement('a');
    card.className = `project-card reveal${project.disabled ? ' project-card-disabled' : ''}`;
    if (project.link && !project.disabled) {
      card.href = project.link;
      card.target = '_blank';
    } else {
      card.style.cursor = 'default';
      card.onclick = (e) => e.preventDefault();
    }
    
    const badgeColor = project.badgeColor || '';
    const badgeStyle = badgeColor ? `style="background:rgba(${hexToRgb(badgeColor)}, 0.15);color:${badgeColor}"` : '';
    
    card.innerHTML = `
      <div class="card">
        <div class="project-header">
          <div class="project-icon-wrap">
            <i class="${project.icon}"></i>
          </div>
          <span class="badge project-badge" ${badgeStyle}>${project.badge}</span>
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.desc}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="badge project-tag">${tag}</span>`).join('')}
        </div>
      </div>
    `;
    
    card.style.transitionDelay = `${index * 0.03}s`;
    grid.appendChild(card);
  });
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 
    `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
    '123, 77, 184';
}

/* END OF SCRIPT */