/* main.js — entry point: cursor, formulario, año dinámico
   ---------------------------------------------------------------- */

(function () {
  function initCursor() {
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.innerWidth < 900) return;

    const dot = document.createElement("div");
    const ring = document.createElement("div");
    dot.className = "cursor-dot";
    ring.className = "cursor-ring";
    document.body.append(dot);
    document.body.append(ring);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    function loop() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    }
    loop();

    const hoverables = "a, button, [data-cursor-hover], input, textarea, .project-card";
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(hoverables)) ring.classList.add("is-hover");
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(hoverables)) ring.classList.remove("is-hover");
    });
  }

  function initMarquee() {
    const track = document.querySelector("[data-marquee-track]");
    if (!track || !window.PORTFOLIO_DATA) return;
    const items = window.PORTFOLIO_DATA.marquee || [];
    const html = items
      .map((t) => `<span>${t}</span>`)
      .concat(items.map((t) => `<span>${t}</span>`))
      .join("");
    track.innerHTML = html;
  }

  function initForm() {
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;
    const status = form.querySelector("[data-form-status]");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll(".field").forEach((f) =>
        f.classList.remove("is-error")
      );
      const data = new FormData(form);
      const name = (data.get("name") || "").toString().trim();
      const email = (data.get("email") || "").toString().trim();
      const message = (data.get("message") || "").toString().trim();

      if (!name) {
        form.querySelector('[data-field="name"]').classList.add("is-error");
        valid = false;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        form.querySelector('[data-field="email"]').classList.add("is-error");
        valid = false;
      }
      if (message.length < 8) {
        form.querySelector('[data-field="message"]').classList.add("is-error");
        valid = false;
      }

      if (!valid) {
        status.textContent = "Revisa los campos marcados.";
        status.className = "form-status is-err";
        return;
      }

      const subject = encodeURIComponent(
        `[Portafolio] Mensaje de ${name}`
      );
      const body = encodeURIComponent(
        `Nombre: ${name}\nEmail: ${email}\n\n${message}`
      );
      const profile = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.profile) || {};
      const to = profile.email || "tu.correo@ejemplo.com";
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

      status.textContent = "Abriendo tu cliente de correo…";
      status.className = "form-status is-ok";
      form.reset();
    });
  }

  function initYear() {
    const el = document.querySelector("[data-year]");
    if (el) el.textContent = new Date().getFullYear();
  }

  function init() {
    initCursor();
    initMarquee();
    initForm();
    initYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
