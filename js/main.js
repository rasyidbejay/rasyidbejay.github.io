(() => {
  if (window.lucide?.createIcons) {
    window.lucide.createIcons();
  }

  const getTheme = () => localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (window.lucide?.createIcons) {
      window.lucide.createIcons();
    }
  };

  setTheme(getTheme());

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  };

  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  document.getElementById('theme-toggle-mobile')?.addEventListener('click', toggleTheme);

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-item, .dock-item').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });

  document.querySelectorAll('a[href]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');

      if (!href || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('#') || link.getAttribute('target') === '_blank') {
        return;
      }

      event.preventDefault();
      const pageWrapper = document.querySelector('.page-wrapper');

      if (pageWrapper) {
        pageWrapper.style.animation = 'pageExit 0.3s ease forwards';
        setTimeout(() => {
          window.location.href = href;
        }, 250);
      } else {
        window.location.href = href;
      }
    });
  });

  const style = document.createElement('style');
  style.textContent = `
    @keyframes pageExit {
      from { opacity: 1; transform: translateY(0); }
      to { opacity: 0; transform: translateY(-10px); }
    }
  `;
  document.head.appendChild(style);
})();
