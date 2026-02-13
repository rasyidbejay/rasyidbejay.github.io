import { loadPortfolioData, renderPortfolio } from "./data-renderer.js";
import {
  initCursorGlow,
  initMagneticButtons,
  initRevealAnimations,
  initScrollSpy,
  initTyping
} from "./animations.js";

function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const saved = localStorage.getItem("theme");
  if (saved) {
    root.setAttribute("data-theme", saved);
  }

  toggle?.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

function initMobileMenu() {
  const toggle = document.getElementById("mobile-menu-toggle");
  const nav = document.getElementById("primary-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.querySelector(".menu-open").style.display = isOpen ? "none" : "inline";
    toggle.querySelector(".menu-close").style.display = isOpen ? "inline" : "none";
  });
}

async function bootstrap() {
  initTheme();
  initMobileMenu();

  const data = await loadPortfolioData();
  renderPortfolio(data);

  initTyping();
  initRevealAnimations();
  initMagneticButtons();
  initCursorGlow();
  initScrollSpy();
}

bootstrap().catch((error) => {
  console.error(error);
  document.body.insertAdjacentHTML("beforeend", "<p style='padding:2rem'>Failed to load portfolio data.</p>");
});
