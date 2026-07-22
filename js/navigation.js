/* navigation.js — scroll spy, smooth scroll, menú móvil
   ---------------------------------------------------------------- */

(function () {
  function initScrollSpy() {
    const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
    const sections = navLinks
      .map((link) => {
        const id = link.getAttribute("href");
        if (!id || !id.startsWith("#")) return null;
        const target = document.querySelector(id);
        return target ? { id, target, link } : null;
      })
      .filter(Boolean);

    if (!sections.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sections.find((s) => s.target === entry.target);
            if (!match) return;
            navLinks.forEach((l) => l.classList.remove("is-active"));
            match.link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s.target));
  }

  function initScrollState() {
    const header = document.querySelector("[data-header]");
    if (!header) return;

    const onScroll = () => {
      if (window.scrollY > 12) header.classList.add("is-scrolled");
      else header.classList.remove("is-scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initReadingProgress() {
    const bar = document.querySelector("[data-progress]");
    if (!bar) return;
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      const pct = total > 0 ? (h.scrollTop / total) * 100 : 0;
      bar.style.width = pct + "%";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initMobileMenu() {
    const toggle = document.querySelector("[data-menu-toggle]");
    const menu = document.querySelector("[data-mobile-menu]");
    if (!toggle || !menu) return;

    function close() {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
    function open() {
      menu.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }

    toggle.addEventListener("click", () => {
      if (menu.classList.contains("is-open")) close();
      else open();
    });

    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", close)
    );
  }

  function init() {
    initScrollSpy();
    initScrollState();
    initReadingProgress();
    initMobileMenu();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
