# PROJECT_SPEC.md - MICELIO ARTEWEB

## 1. Información General del Proyecto

- **Nombre de la Empresa:** MICELIO ARTEWEB
- **Tipo de Sitio:** Landing Page corporativa y de exhibición de servicios.
- **Objetivo Principal:** Exponer los servicios de diseño y desarrollo web premium (Diseño Grafico, desarrollo Web, Marketing Digital), posicionando a la agencia bajo el concepto de "Galería de Arte Digital".
- **Enfoque Visual:** Estética sofisticada, sobria, limpia e iluminada como una sala de exposición de arte donde cada proyecto web es tratado como una obra.

---

## 2. Stack Tecnológico

- **Framework:** Astro.js (SSG / Sitio Estático)
- **Estilos:** Tailwind CSS
- **Animaciones & Interacciones:** GSAP + ScrollTrigger (animaciones suaves de entrada, efectos de revelado al hacer scroll y microinteracciones de alta gama)
- **Iconografía:** Lucide Icons (`lucide-astro`)

---

## 3. Identidad Visual y Sistema de Diseño

### Logo Micelio: svg disponible en `public/brand/logo-micelio.svg` y "ArteWeb" en `public/brand/arteweb.svg`

### Concepto Estético: _Neoclasicismo & Tecnología Minimalista_

Inspirado en esculturas y arquitectura clásica de mármol/travertino combinadas con hardware moderno en acabado negro mate.

### Paleta de Colores

- **Fondo Principal (Travertino / Galería):** `#EFECE6` / `#E5DFD5` _(Tono piedra cálido, luminoso pero mate)_
- **Negro Mate (Pantallas / Módulos):** `#141414` / `#1A1A1A` _(Aportando contraste profundo y elegancia)_
- **Blanco Hueso / Mármol:** `#F9F8F6` _(Para tarjetas, textos destacados y pedestales)_
- **Acento Marfil / Bronce Falso (Detalles / Bordes):** `#C8BCAC` / `#8C7B6B` _(Para líneas divisorias sutiles e iconos)_

### Tipografía

- **Titulares (Display):** Serif de corte clásico/elegante (ej. _Playfair Display_, _Cinzel_ o _Instrument Serif_) o Sans-serif geométrica extendida y limpia.
- **Cuerpo y UI:** Sans-serif sobria, legible y moderna en minúsculas (ej. _Inter_, _Plus Jakarta Sans_ o _Outfit_), imitando la marca gráfica `micelio`.

---

## 4. Estructura de Secciones (Propuesta Recomendada)

### 1. Header / Navegación Superior

- Logo `micelio arteweb` minimalista a la izquierda.
- Enlaces de navegación rápida: _Manifiesto_, _Exposición_, _Servicios_, _Proceso_.
- Botón de acción (CTA): "Iniciar Obra" / "Contacto".
- Fijación sutil al hacer scroll con efecto de desenfoque (_glassmorphism_ suave).

### 2. Hero Section (El Salón Principal)

- **Titular Principal:** Frase de alto impacto sobre la necesidad de optimizar la identidad visual y digital de las marcas.
- **Subtítulo:** Breve propuesta de valor sobre soluciones únicas y a medida.
- **Composición Visual:** Mockup interactivo similar a las imágenes de referencia (en `public/reference-images/`)
- **CTA Principal:** Botón de exploración con animación GSAP.

### 3. Manifiesto / Sobre Nosotros ("El Concepto")

- Breve bloque editorial con tipografía de gran tamaño.
- Filosofía de trabajo: Tratar el desarrollo web como una disciplina artística donde el rendimiento técnico es la estructura y el diseño es la escultura.

### 4. Exposición de Obras / Portfolio

- Grid de proyectos estilo galería de arte.
- Cada tarjeta de proyecto representa un "cuadro/escultura web" sobre fondo claro o dentro de marcadores estilo marco de galería.
- Efecto de _hover_ enriquecido con GSAP (zooms suaves, revelado de ficha técnica con cliente, año y stack usado).

### 5. Servicios / Pedestales de Especialidad

Tarjetas en formato vertical (simulando columnas o pedestales):

1. **Diseño de Identidad Visual:** Dirección de arte, prototipado y sistemas de diseño.
2. **Desarrollo Web:** Soluciones a medida, uso de tecnologías modernas y mantenimiento continuo.
3. **Marketing Digital:** Estrategias de promoción online, SEO avanzado y gestión de campañas en redes sociales.

### 6. Proceso Creativo ("Curaduría")

Línea de tiempo o pasos numerados de forma sutil

- **Paso 1:** Investigación y comprensión de la visión del cliente.
- **Paso 2:** Diseño conceptual y prototipado.
- **Paso 3:** Desarrollo y optimización técnica.
- **Paso 4:** Revisión y ajustes finales.
- **Paso 5:** Presentación y entrega del proyecto.

### 7. Llamado a la Acción (CTA) / Formulario Estético

- Banner de alto contraste en **Negro Mate (`#141414`)**.
- Invitación a "Agendar una consulta / Iniciar tu proyecto".
- Formulario visual limpio (Inputs de texto minimalistas con bordes sutiles).

### 8. Footer

- Créditos de la agencia, links a redes sociales, derechos reservados y tipografía en minúsculas sobria.

---

## 5. Integraciones y Funcionalidades (Fase 1)

- **Interatividad:** 100% cliente / visual.
- **Sin Backend:** Por el momento no se procesarán envíos de formularios a servicios externos; la sección de contacto mostrará estados visuales o links directos (email/WhatsApp).

---

## 6. Arquitectura de Archivos (Astro)

```text
src/
├── components/
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Manifesto.astro
│   ├── PortfolioGrid.astro
│   ├── ServiceCard.astro
│   ├── ContactVisual.astro
│   └── Footer.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
├── styles/
│   └── global.css
└── scripts/
    └── gsap-animations.js
```
