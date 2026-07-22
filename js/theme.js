/* theme.js — alternar tema oscuro / claro
   ---------------------------------------------------------------- */

(function () {
  const STORAGE_KEY = "portfolio-theme";
  const root = document.documentElement;

  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    const btn = document.querySelector("[data-theme-toggle]");
    if (btn) {
      btn.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
      btn.setAttribute(
        "aria-label",
        theme === "dark"
          ? "Cambiar a tema claro"
          : "Cambiar a tema oscuro"
      );
    }
  }

  function initTheme() {
    applyTheme(getPreferredTheme());
  }

  function toggleTheme() {
    const current = root.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  // Aplicar lo antes posible para evitar parpadeo
  initTheme();

  // Exponer API
  window.Theme = { toggle: toggleTheme, apply: applyTheme, init: initTheme };

  // Vincular botón al cargar el DOM
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("[data-theme-toggle]");
    if (btn) btn.addEventListener("click", toggleTheme);
  });
})();
