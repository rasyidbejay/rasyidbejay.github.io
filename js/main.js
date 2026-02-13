(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');

  const refreshIcons = () => {
    if (window.lucide?.createIcons) {
      window.lucide.createIcons();
    }
  };

  const updateThemeIcons = (theme) => {
    document.querySelectorAll('#theme-toggle i, #theme-toggle-mobile i').forEach((icon) => {
      icon.setAttribute('data-lucide', theme === 'dark' ? 'sun' : 'moon');
    });
    refreshIcons();
  };

  const savedTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  root.setAttribute('data-theme', savedTheme);
  updateThemeIcons(savedTheme);

  const toggleTheme = () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcons(next);
  };

  themeToggle?.addEventListener('click', toggleTheme);
  themeToggleMobile?.addEventListener('click', toggleTheme);

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .tab-item').forEach((link) => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  refreshIcons();
})();
