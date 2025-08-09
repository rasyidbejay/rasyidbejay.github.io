document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const themeToggle = document.getElementById('theme-toggle');
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
  const glowCursor = document.getElementById('glow-cursor');

  /* ===== Mobile menu ===== */
  mobileToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
  });
  document.querySelectorAll('.mobile-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const route = link.dataset.route;
      showPage(route);
      mobileNav.classList.add('hidden');
    });
  });

  /* ===== Theme toggle + persistence ===== */
  const setThemeFromStorage = () => {
    const currentTheme =
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
  };
  setThemeFromStorage();

  const updateThemeStorage = () => {
    const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  };
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    updateThemeStorage();
  });
  mobileThemeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    updateThemeStorage();
  });

  /* ===== Glow cursor ===== */
  document.addEventListener('mousemove', (e) => {
    if (!glowCursor) return;
    glowCursor.style.transform = `translate(${e.clientX - 70}px, ${e.clientY - 70}px)`;
  });

  /* ===== SPA Router: one page visible at a time ===== */
  const pages = Array.from(document.querySelectorAll('.page'));
  const navItems = Array.from(document.querySelectorAll('.nav-item'));

  function showPage(id) {
    // hide all
    pages.forEach(sec => sec.classList.add('hidden'));
    // show selected
    const target = document.getElementById(id);
    if (target) target.classList.remove('hidden');

    // mark active
    navItems.forEach(item => {
      const route = item.dataset.route;
      if (route) item.classList.toggle('active', route === id);
      // also update icon button (logo has no icon highlight)
    });

    // update hash (for shareable URL)
    if (location.hash !== `#${id}`) history.replaceState(null, '', `#${id}`);
    // scroll to top of viewport for new "page"
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  // Intercept desktop nav clicks
  navItems.forEach((a) => {
    const route = a.dataset.route;
    if (!route) return;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      showPage(route);
    });
  });

  // Also intercept any .router-link buttons
  document.querySelectorAll('.router-link').forEach((a) => {
    a.addEventListener('click', (e) => {
      const route = a.dataset.route;
      if (!route) return;
      e.preventDefault();
      showPage(route);
    });
  });

  // Initial route
  const initial = (location.hash || '#home').replace('#', '');
  showPage(initial);

  /* ===== Contact form (kept) ===== */
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
