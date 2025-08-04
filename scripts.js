document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const themeToggle = document.getElementById('theme-toggle');
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
  const glowCursor = document.getElementById('glow-cursor');

  // Show/hide mobile menu
  mobileToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
  });

  // Close mobile menu when clicking on any link
  document.querySelectorAll('.mobile-link').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.add('hidden');
    });
  });

  // Toggle dark mode (desktop)
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    updateThemeStorage();
  });

  // Toggle dark mode (mobile)
  mobileThemeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    updateThemeStorage();
  });

  // Glowing Cursor Movement
  document.addEventListener('mousemove', (e) => {
    glowCursor.style.transform = `translate(${e.clientX - 50}px, ${e.clientY - 50}px)`;
  });

  // Check for saved user preference, if any
  const currentTheme =
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  if (currentTheme) {
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  function updateThemeStorage() {
    const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  }

  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    if (anchor.classList.contains('nav-item')) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Update active nav item
        document.querySelectorAll('.nav-item').forEach((item) => {
          item.classList.remove('active');
        });
        this.classList.add('active');

        // Scroll to section
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth',
          });
        }
      });
    }
  });

  // Smooth scroll to top when logo is clicked
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  // Update active nav item on scroll
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 100;

    document.querySelectorAll('section').forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-item').forEach((item) => {
          item.classList.remove('active');
        });
        const correspondingNav = document.querySelector(`.nav-item[href="#${sectionId}"]`);
        if (correspondingNav) {
          correspondingNav.classList.add('active');
        }
      }
    });
  });

  // Contact form submission handler
  const form = document.getElementById('contactForm');
  const popup = document.getElementById('thankYouPopup');

  if (form && popup) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: 'application/json' },
      })
        .then((response) => {
          if (response.ok) {
            popup.classList.remove('hidden');
            document.body.classList.add('popup-active');
            form.reset();

            setTimeout(() => {
              popup.classList.add('hidden');
              document.body.classList.remove('popup-active');
            }, 4000);
          } else {
            alert('Oops! Something went wrong.');
          }
        })
        .catch(() => {
          alert('Something went wrong. Please try again later.');
        });
    });
  }
});
