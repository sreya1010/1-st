// Navbar shadow and background on scroll
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Hamburger menu
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');
navbarToggle.addEventListener('click', function() {
  const isOpen = navbarMenu.classList.toggle('open');
  navbarToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// Close menu on link click (mobile)
document.querySelectorAll('.navbar-menu .nav-link').forEach(link => {
  link.addEventListener('click', function() {
    if (window.innerWidth <= 700) {
      navbarMenu.classList.remove('open');
      navbarToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Highlight active menu item as you scroll
function setActiveLink() {
  const links = document.querySelectorAll('.navbar-menu .nav-link');
  let index = 0;
  const scrollPos = window.scrollY + 100;
  const sections = ['home', 'features', 'about', 'contact'];
  for (let i = 0; i < sections.length; i++) {
    const sec = document.getElementById(sections[i]);
    if (sec && sec.offsetTop <= scrollPos) index = i;
  }
  links.forEach((link, i) => link.classList.toggle('active', i === index));
}
window.addEventListener('scroll', setActiveLink);
window.addEventListener('resize', setActiveLink);
window.addEventListener('DOMContentLoaded', setActiveLink);

// Smooth scrolling for nav links (for browsers that don't support scroll-behavior)
document.querySelectorAll('.navbar-menu .nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Scroll-to-top button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});
scrollTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fade-in content on scroll
function revealOnScroll() {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);