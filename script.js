// ========================================
// Shafaet's Planet - JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  // --- Scroll to Top Button ---
  const scrollTopBtn = document.getElementById('scrollTop');
  
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Mobile Hamburger Menu ---
  const menuToggle = document.getElementById('menuToggle');
  const navList = document.getElementById('navList');

  if (menuToggle && navList) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('open');
      const icon = menuToggle.querySelector('i');
      if (navList.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });

    // Close menu when clicking a nav link
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('open');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      });
    });
  }

  // --- Intersection Observer for Post Card Animations ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe algo-section items for animation on algorithms page
  document.querySelectorAll('.algo-section').forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = `all 0.5s ease ${index * 0.08}s`;
    observer.observe(section);
  });

  // --- Header scroll effect ---
  const header = document.querySelector('.site-header');
  let lastScrollY = 0;
  
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Add subtle parallax to hero
    const heroBanner = document.querySelector('.hero-banner');
    if (heroBanner && currentScrollY < 600) {
      heroBanner.style.transform = `translateY(${currentScrollY * 0.3}px)`;
      heroBanner.style.opacity = Math.max(0, 1 - currentScrollY / 500);
    }
    
    lastScrollY = currentScrollY;
  });

  // --- Smooth hover for sidebar links ---
  document.querySelectorAll('.sidebar-widget .link-list li a').forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.25s ease';
    });
  });
});
