# Portafolio — Axel Pincheira

Sitio web personal tipo portafolio para programadores. Diseño sobrio y moderno, construido con HTML, CSS y JavaScript vanilla (sin frameworks).

## Vista previa
Abre `index.html` directamente en tu navegador, o sirve el directorio raíz con cualquier servidor estático:

```bash
# Opción 1: abrir directamente
open index.html

# Opción 2: servidor local con Python
python3 -m http.server 8000
# luego visita http://localhost:8000
```

## Personalización

Toda la información del portafolio se controla desde [`js/data.js`](js/data.js). Edita:

- `profile`: nombre, rol, email, redes sociales.
- `about`: párrafos de la sección "Sobre mí".
- `skills`: stack técnico agrupado por categorías.
- `projects`: lista de proyectos (título, descripción, stack, links, imagen).
- `experience`: roles previos.
- `marquee`: texto del marquee inferior.

## Estructura

```
├── index.html              # Página principal
├── css/
│   ├── reset.css           # Reset/normalize
│   ├── variables.css       # Variables (colores, tipografía, espaciado)
│   ├── base.css            # Tipografía, body, cursor
│   ├── layout.css          # Header, secciones, grids
│   ├── components.css      # Botones, cards, formulario
│   └── animations.css      # Keyframes y reveal
├── js/
│   ├── data.js             # Información editable
│   ├── theme.js            # Toggle dark/light
│   ├── navigation.js       # Scroll spy + menú móvil
│   ├── reveal.js           # Animaciones de entrada
│   ├── projects.js         # Render de proyectos
│   └── main.js             # Cursor + formulario + año
└── assets/
    └── images/             # Imágenes de proyectos (opcional)
```

## Características

- Tema claro/oscuro con persistencia en `localStorage` y respeto a `prefers-color-scheme`.
- Tipografía editorial: **Fraunces** (display), **Inter Tight** (cuerpo), **JetBrains Mono** (técnica).
- Cursor personalizado con efecto hover.
- Animaciones de entrada con `IntersectionObserver`.
- Barra de progreso de lectura.
- Grid asimétrico de proyectos.
- Formulario de contacto con validación y `mailto:`.
- Textura de grano sutil sobre todo el sitio.
- 100% responsivo (desktop-first, mobile-adaptive).
- Accesible: roles ARIA, foco visible, soporte de `prefers-reduced-motion`.

## Despliegue

Sitio 100% estático. Sube el contenido del directorio a:

- GitHub Pages
- Netlify (drag & drop)
- Vercel
- Cualquier servidor con soporte para archivos estáticos

No requiere build step ni dependencias.
