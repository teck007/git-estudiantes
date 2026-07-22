/* projects.js — renderiza la lista de proyectos desde data.js
   ---------------------------------------------------------------- */

(function () {
  function escapeHTML(str) {
    return String(str).replace(/[&<>"']/g, (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c])
    );
  }

  function projectCard(project, index) {
    const num = String(index + 1).padStart(2, "0");
    return `
      <article class="project-card reveal" data-reveal aria-label="${escapeHTML(
        project.title
      )}">
        <a class="thumb" href="${escapeHTML(
          project.demo || project.repo || "#"
        )}" target="_blank" rel="noopener" tabindex="-1">
          <span class="index">N° ${num}</span>
          <img loading="lazy" src="${escapeHTML(
            project.image
          )}" alt="Vista previa de ${escapeHTML(project.title)}" />
        </a>
        <div class="body">
          <div class="head">
            <h3>${escapeHTML(project.title)}</h3>
            <span class="year">${escapeHTML(project.year)}</span>
          </div>
          <p class="desc">${escapeHTML(project.description)}</p>
          <ul class="stack">
            ${project.stack
              .map((s) => `<li>${escapeHTML(s)}</li>`)
              .join("")}
          </ul>
          <div class="actions">
            ${
              project.demo
                ? `<a href="${escapeHTML(
                    project.demo
                  )}" target="_blank" rel="noopener">Demo ↗</a>`
                : ""
            }
            ${project.demo && project.repo ? '<span class="sep">/</span>' : ""}
            ${
              project.repo
                ? `<a href="${escapeHTML(
                    project.repo
                  )}" target="_blank" rel="noopener">Código ↗</a>`
                : ""
            }
          </div>
        </div>
      </article>
    `;
  }

  function render() {
    const grid = document.querySelector("[data-projects-grid]");
    if (!grid || !window.PORTFOLIO_DATA) return;
    const projects = window.PORTFOLIO_DATA.projects || [];
    grid.innerHTML = projects.map(projectCard).join("");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
