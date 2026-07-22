/* data.js — Información del portafolio
   Edita libremente estos datos para personalizar tu portafolio.
   ---------------------------------------------------------------- */

window.PORTFOLIO_DATA = {
  profile: {
    name: "Axel Pincheira",
    shortName: "Axel",
    role: "Backend Developer",
    location: "Santiago, Chile",
    email: "tu.correo@ejemplo.com",
    tagline:
      "Diseño y construyo APIs, sistemas distribuidos y herramientas que otros programadores realmente disfrutan usar.",
    availability: "Disponible para nuevos proyectos",
    social: {
      github: "https://github.com/tu-usuario",
      linkedin: "https://linkedin.com/in/tu-usuario",
      twitter: "https://x.com/tu-usuario",
    },
  },

  about: {
    paragraphs: [
      "Soy un ingeniero de software con foco en <em>backend</em> y <em>arquitecturas distribuidas</em>. Disfruto tomar problemas ambiguos y transformarlos en sistemas simples, observables y agradables de operar.",
      "Trabajo principalmente con <em>Python, Go y TypeScript</em>. Me importa el código que se lee, los logs que se entienden y los deploys que no te quitan el sueño.",
      "Actualmente me interesa la intersección entre <em>LLMs aplicados</em> y la ingeniería de plataforma: hacer que la IA sea una herramienta confiable en producción, no una demo vistosa.",
    ],
    stats: [
      { value: "6", suffix: "+", label: "Años de experiencia" },
      { value: "40", suffix: "+", label: "Proyectos entregados" },
      { value: "12", suffix: "", label: "Clientes / equipos" },
      { value: "∞", suffix: "", label: "Café en sangre" },
    ],
  },

  skills: [
    {
      category: "Lenguajes",
      items: ["Python", "TypeScript", "Go", "SQL", "Bash"],
    },
    {
      category: "Frameworks",
      items: ["FastAPI", "Node.js", "Express", "NestJS", "React"],
    },
    {
      category: "Datos & Infra",
      items: ["PostgreSQL", "Redis", "Docker", "Kubernetes", "Terraform"],
    },
    {
      category: "Plataforma",
      items: ["AWS", "GCP", "GitHub Actions", "Datadog", "OpenTelemetry"],
    },
  ],

  experience: [
    {
      role: "Senior Backend Engineer",
      company: "Empresa Anterior",
      period: "2023 — Presente",
      description:
        "Lideré el rediseño de la plataforma de pagos: pasarela, antifraude y reconciliación. Reduje latencia p95 un 38% y mejoré la cobertura de tests a 92%.",
    },
    {
      role: "Backend Engineer",
      company: "Startup SaaS",
      period: "2021 — 2023",
      description:
        "Construí desde cero un servicio multi-tenant en FastAPI + Postgres. Diseñé el modelo de datos, el sistema de jobs y la estrategia de observabilidad.",
    },
    {
      role: "Fullstack Developer",
      company: "Agencia de Producto",
      period: "2019 — 2021",
      description:
        "Desarrollé APIs, dashboards y sitios para clientes en educación, salud y finanzas. Mucho Postgres, mucho testing, mucho aprender.",
    },
  ],

  projects: [
    {
      title: "Nimbus Gateway",
      description:
        "API gateway ligero con rate-limiting, autenticación JWT y enrutamiento dinámico. Pensado para microservicios en Kubernetes.",
      stack: ["Go", "Redis", "Kubernetes", "OpenTelemetry"],
      year: "2024",
      demo: "https://ejemplo.com/nimbus",
      repo: "https://github.com/tu-usuario/nimbus",
      image:
        "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=minimalist%20dark%20ui%20dashboard%20api%20gateway%20with%20subtle%20data%20flow%20lines%2C%20deep%20charcoal%20background%2C%20lime%20green%20accents%2C%20modern%20product%20photography%2C%20clean&image_size=landscape_16_9",
    },
    {
      title: "Atlas Logs",
      description:
        "Servicio de ingestión y búsqueda de logs con OpenTelemetry y ClickHouse. Indexa 5M eventos/día en hardware modesto.",
      stack: ["Python", "FastAPI", "ClickHouse", "Docker"],
      year: "2024",
      demo: "https://ejemplo.com/atlas",
      repo: "https://github.com/tu-usuario/atlas-logs",
      image:
        "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=developer%20console%20terminal%20with%20streaming%20logs%20and%20soft%20green%20accents%2C%20dark%20monochrome%20ui%2C%20editorial%20product%20photography%2C%20no%20people&image_size=landscape_16_9",
    },
    {
      title: "Forge CLI",
      description:
        "CLI en Go para scaffold de proyectos, con generadores reproducibles y configuración declarativa en YAML.",
      stack: ["Go", "Cobra", "GitHub Actions"],
      year: "2023",
      demo: "https://ejemplo.com/forge",
      repo: "https://github.com/tu-usuario/forge",
      image:
        "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=close%20up%20of%20a%20sleek%20terminal%20window%20floating%20over%20dark%20gradient%20background%2C%20lime%20green%20syntax%20highlights%2C%20monochrome%2C%20product%20photography%20style&image_size=landscape_16_9",
    },
    {
      title: "Ledger Lite",
      description:
        "Sistema de doble entrada con sincronización offline-first. Backend en FastAPI, app móvil en React Native.",
      stack: ["Python", "PostgreSQL", "React Native"],
      year: "2023",
      demo: "https://ejemplo.com/ledger",
      repo: "https://github.com/tu-usuario/ledger-lite",
      image:
        "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=editorial%20still%20life%20of%20a%20slim%20notebook%20with%20handwritten%20financial%20ledger%2C%20dark%20moody%20lighting%2C%20single%20lime%20green%20pen%2C%20minimalist%20composition&image_size=landscape_16_9",
    },
    {
      title: "Pulse Monitor",
      description:
        "Monitor de uptime y healthchecks con notificaciones a Slack/Discord. Alertas en menos de 30s.",
      stack: ["Go", "Postgres", "Fly.io"],
      year: "2022",
      demo: "https://ejemplo.com/pulse",
      repo: "https://github.com/tu-usuario/pulse",
      image:
        "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=abstract%20heartbeat%20waveform%20visualization%20on%20deep%20black%20background%2C%20single%20neon%20lime%20green%20line%2C%20minimal%20data%20art%2C%20editorial%20style&image_size=landscape_16_9",
    },
    {
      title: "Quill Docs",
      description:
        "Editor colaborativo tipo Notion con markdown, versionado y permisos granulares. Backend con CRDTs.",
      stack: ["TypeScript", "Node.js", "Yjs", "PostgreSQL"],
      year: "2022",
      demo: "https://ejemplo.com/quill",
      repo: "https://github.com/tu-usuario/quill",
      image:
        "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=open%20minimalist%20notebook%20on%20a%20dark%20desk%2C%20soft%20lime%20highlight%20on%20a%20sentence%2C%20monochrome%20editorial%20photography%2C%20no%20people&image_size=landscape_16_9",
    },
  ],

  marquee: [
    "TypeScript",
    "Python",
    "Go",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "AWS",
    "FastAPI",
    "Node.js",
    "Redis",
    "Terraform",
    "OpenTelemetry",
  ],
};
