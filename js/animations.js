export function typeWriter(element, text, speed = 50, callback) {
  let i = 0;
  element.textContent = "";
  element.style.opacity = "1";

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i += 1;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }

  type();
}

export function initTyping() {
  const heroTitle = document.querySelector(".hero-title");
  const heroSubtitle = document.querySelector(".hero-subtitle");
  if (!heroTitle || !heroSubtitle) return;

  typeWriter(heroTitle, heroTitle.dataset.text || "", 70, () => {
    typeWriter(heroSubtitle, heroSubtitle.dataset.text || "", 35);
  });
}

export function initRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => observer.observe(el));
}

export function initMagneticButtons() {
  document.querySelectorAll(".btn-magnetic").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0, 0)";
    });
  });
}

export function initCursorGlow() {
  const cursor = document.getElementById("cursor-glow");
  if (!cursor) return;

  let cursorX = 0;
  let cursorY = 0;
  let targetX = 0;
  let targetY = 0;

  document.addEventListener("mousemove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  function animate() {
    cursorX += (targetX - cursorX) * 0.15;
    cursorY += (targetY - cursorY) * 0.15;
    cursor.style.transform = `translate(${cursorX - 75}px, ${cursorY - 75}px)`;
    requestAnimationFrame(animate);
  }

  animate();
}

export function initScrollSpy() {
  const links = Array.from(document.querySelectorAll(".nav-link"));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", active);
      });
    });
  }, { threshold: 0.45 });

  sections.forEach((section) => observer.observe(section));
}
