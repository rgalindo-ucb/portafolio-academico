# Portafolio Universitario

Portafolio academico personal construido con Next.js, TypeScript y Tailwind CSS para organizar, presentar y navegar los trabajos desarrollados durante el semestre.

El proyecto esta pensado para:

- mostrar una home editorial con resumen del semestre;
- navegar por materias con identidad visual propia;
- abrir una pagina individual por trabajo;
- explorar el archivo completo con filtros y paginacion;
- visualizar evidencias, galerias, archivos y reflexiones en una sola experiencia.

## Estado actual

- Framework: `Next.js 15` con `App Router`
- Lenguaje: `TypeScript`
- Estilos: `Tailwind CSS` + CSS global
- Animacion: `framer-motion`, `gsap`, `lenis`
- UI base: componentes utilitarios inspirados en `shadcn/ui`
- Linter: `ESLint 9`
- Build final verificado con `npm run build`

Contenido actual:

- `5` materias
- `45` proyectos
- `13` proyectos destacados
- `1` materia sin trabajos cargados todavia:
  `Desarrollo de la Creatividad`

## Objetivo del proyecto

Este repositorio no es una landing comercial. Es un portafolio academico estructurado para documentar el proceso formativo del semestre y presentar trabajos reales con contexto, objetivos, proceso, resultados, aprendizajes y evidencias.

La experiencia esta organizada en tres niveles:

1. `Home`
   Presenta una lectura general del semestre.
2. `Materia`
   Agrupa los trabajos de una asignatura, su enfoque academico, competencias y reflexion.
3. `Proyecto`
   Muestra el caso completo de cada trabajo con narrativa, recursos y galeria.

## Stack y dependencias

### Dependencias principales

- `next`
  Framework principal. Maneja rutas, renderizado estatico, build y optimizacion.
- `react` y `react-dom`
  Base de la interfaz.
- `framer-motion`
  Animaciones declarativas para reveals, cards, modales y transiciones.
- `gsap`
  Animacion de scroll y efectos mas controlados en secciones visuales.
- `lenis`
  Scroll suave global.
- `lucide-react`
  Libreria de iconos del sistema.
- `clsx`
  Composicion condicional de clases.
- `tailwind-merge`
  Fusiona clases Tailwind sin conflictos.
- `class-variance-authority`
  Manejo de variantes en componentes reutilizables como botones y badges.
- `@radix-ui/react-slot`
  Permite patrones como `asChild` en componentes UI.
- `tailwindcss-animate`
  Utilidades de animacion integradas con Tailwind.

### Dependencias de desarrollo

- `typescript`
  Tipado estricto del proyecto.
- `eslint`
  Reglas de calidad del codigo.
- `eslint-config-next`
  Configuracion de lint especifica para Next.js.
- `tailwindcss`
  Motor de estilos utility-first.
- `postcss` y `autoprefixer`
  Pipeline CSS.
- `@types/node`, `@types/react`, `@types/react-dom`
  Tipos para desarrollo con TypeScript.

## Scripts disponibles

```bash
npm install
npm run dev
npm run lint
npm run build
npm run start
```

Descripcion:

- `npm run dev`
  Levanta el entorno local.
- `npm run lint`
  Ejecuta ESLint en el proyecto.
- `npm run build`
  Genera el build de produccion. Este es el chequeo principal antes de deploy.
- `npm run start`
  Sirve el build ya generado.

## Arquitectura general

### Rutas principales

- `/`
  Home del portafolio.
- `/materias/[slug]`
  Paginas individuales por materia.
- `/proyectos/[slug]`
  Paginas individuales por proyecto.

### Estructura del repositorio

```text
app/
  layout.tsx
  page.tsx
  globals.css
  materias/[slug]/page.tsx
  proyectos/[slug]/page.tsx

components/
  layout/
  motion/
  navigation/
  projects/
  sections/
  subjects/
  ui/

data/
  projects.ts
  subjects.ts

lib/
  projects.ts
  subjects.ts
  utils.ts

types/
  project.ts
  subject.ts

public/
  portfolio/
```

### Responsabilidad por carpeta

- `app/`
  Define las rutas, el layout global y el punto de entrada visual de cada pagina.
- `components/layout/`
  Navbar y footer.
- `components/motion/`
  Componentes reutilizables de animacion y scroll.
- `components/navigation/`
  Comportamiento transversal de navegacion.
- `components/projects/`
  Cards, hero, modal preview, galeria, lightbox y navegacion entre proyectos.
- `components/sections/`
  Secciones de la home.
- `components/subjects/`
  Bloques especializados para paginas de materia.
- `components/ui/`
  Primitivas UI reutilizables como `Button`, `Badge`, `Input`, `Card`.
- `data/`
  Fuente principal del contenido del portafolio.
- `lib/`
  Helpers para derivar estadisticas, relaciones y utilidades.
- `types/`
  Contratos TypeScript compartidos.
- `public/portfolio/`
  Assets locales del contenido real.

## Flujo de renderizado

### Home

La home usa estas secciones principales:

- `HeroSection`
- `SemesterSummary`
- `SubjectsSection`
- `FeaturedProjects`
- `CrossLearningSection`
- `ProjectArchive`
- `HomeFinalReflection`

Todo se monta desde [app/page.tsx](/mnt/Games/PryectoPortafolio/app/page.tsx).

### Pagina de materia

Cada materia se genera de forma estatica usando `generateStaticParams` y toma su contenido desde `data/subjects.ts`.

La pagina de materia combina:

- hero tematico;
- estadisticas de la materia;
- proyectos destacados;
- archivo de proyectos de esa materia;
- competencias;
- reflexion final;
- navegacion hacia otras materias.

Todo se monta desde [app/materias/[slug]/page.tsx](/mnt/Games/PryectoPortafolio/app/materias/[slug]/page.tsx).

### Pagina de proyecto

Cada proyecto tambien se genera de forma estatica. Su pagina resuelve:

- materia relacionada;
- proyecto anterior y siguiente;
- narrativa del caso;
- aprendizajes;
- evidencias y archivo principal;
- galeria;
- herramientas y tags.

Todo se monta desde [app/proyectos/[slug]/page.tsx](/mnt/Games/PryectoPortafolio/app/proyectos/[slug]/page.tsx).

## Modelo de datos

### Materias

Las materias viven en [data/subjects.ts](/mnt/Games/PryectoPortafolio/data/subjects.ts) y siguen el tipo definido en [types/subject.ts](/mnt/Games/PryectoPortafolio/types/subject.ts).

Cada materia contiene:

- `id`
- `slug`
- `name`
- `shortName`
- `description`
- `academicFocus`
- `reflection`
- `competencies`
- `color`
- `gradient`
- `visuals`
- `icon`
- `featured`

Las materias actuales son:

- `Empresa y Entorno`
- `Desarrollo de Liderazgo`
- `Desarrollo de la Creatividad`
- `Introducción a Ciencia de Datos`
- `Introducción a la Programación`

### Proyectos

Los proyectos viven en [data/projects.ts](/mnt/Games/PryectoPortafolio/data/projects.ts) y siguen el tipo definido en [types/project.ts](/mnt/Games/PryectoPortafolio/types/project.ts).

Cada proyecto contiene:

- `id`
- `slug`
- `title`
- `subject`
- `date`
- `type`
- `description`
- `context`
- `objective`
- `process`
- `result`
- `keyLearnings`
- `tools`
- `tags`
- `featured`
- `imageUrl`
- `fileUrl`
- `evidence`
- `gallery`

Tipos de proyecto disponibles:

- `Informe`
- `Presentación`
- `Investigación`
- `Proyecto`
- `Práctica`
- `Ensayo`

## Sistema de contenido

El proyecto esta construido como una capa de presentacion sobre datos estaticos.

Eso significa que:

- no usa CMS;
- no usa base de datos;
- no necesita variables de entorno para su funcionamiento actual;
- el contenido se actualiza editando `data/projects.ts`, `data/subjects.ts` y `public/portfolio/`.

Ventajas de este enfoque:

- deploy simple;
- build estable;
- contenido completamente versionable;
- control total sobre la estructura.

## Convencion de assets

Todos los assets locales del portafolio viven en `public/portfolio/`.

Ruta base por materia:

```text
/portfolio/subjects/<subject-slug>/
```

Subcarpetas:

- `images/`
  Portadas, capturas, galerias y evidencias visuales.
- `files/`
  PDFs, ZIP, imagenes descargables u otros archivos adjuntos.

Reglas importantes:

- no incluir `/public` al referenciar archivos desde el codigo;
- usar minusculas;
- no usar espacios;
- no usar tildes;
- usar guiones;
- reutilizar el slug del proyecto cuando sea posible.

Ejemplos validos:

```ts
imageUrl: "/portfolio/subjects/empresa-y-entorno/images/business-model-canvas-spotify-cover.png"
fileUrl: "/portfolio/subjects/empresa-y-entorno/files/business-model-canvas-spotify.pdf"
```

Mas detalle en [public/portfolio/README.md](/mnt/Games/PryectoPortafolio/public/portfolio/README.md).

## Utilidades importantes

### [lib/projects.ts](/mnt/Games/PryectoPortafolio/lib/projects.ts)

Funciones principales:

- `getPortfolioStats()`
  Calcula estadisticas globales.
- `getProjectSubjectMeta(project)`
  Relaciona un proyecto con su materia.
- `getProjectPlaceholderImage(project)`
  Genera imagen fallback a partir de visuals de la materia.
- `getProjectDisplayImage(project)`
  Devuelve imagen principal o fallback.
- `getHomeFeaturedProjects(limit)`
  Obtiene destacados para home.
- `getProjectTypeBreakdown()`
  Resume distribucion por tipo.

### [lib/subjects.ts](/mnt/Games/PryectoPortafolio/lib/subjects.ts)

Funciones principales:

- `getSubjectBySlug(slug)`
- `getProjectsBySubject(subjectName)`
- `getFeaturedProjectsBySubject(subjectName)`
- `getSubjectStats(subjectName)`
- `getSubjectsOverview()`

### [lib/utils.ts](/mnt/Games/PryectoPortafolio/lib/utils.ts)

Funciones principales:

- `cn(...)`
  Fusiona clases con `clsx` + `tailwind-merge`.
- `formatProjectDate(date)`
  Formatea fechas en `es-BO`.

## Componentes criticos

Estos componentes son parte central de la experiencia y conviene tratarlos con especial cuidado:

- [components/layout/Navbar.tsx](/mnt/Games/PryectoPortafolio/components/layout/Navbar.tsx)
- [components/projects/ProjectCard.tsx](/mnt/Games/PryectoPortafolio/components/projects/ProjectCard.tsx)
- [components/projects/ProjectPreviewModal.tsx](/mnt/Games/PryectoPortafolio/components/projects/ProjectPreviewModal.tsx)
- [components/projects/ProjectGallery.tsx](/mnt/Games/PryectoPortafolio/components/projects/ProjectGallery.tsx)
- [components/projects/ProjectGalleryLightbox.tsx](/mnt/Games/PryectoPortafolio/components/projects/ProjectGalleryLightbox.tsx)
- [components/sections/ProjectArchive.tsx](/mnt/Games/PryectoPortafolio/components/sections/ProjectArchive.tsx)
- [components/subjects/SubjectArchive.tsx](/mnt/Games/PryectoPortafolio/components/subjects/SubjectArchive.tsx)

Motivo:

- concentran navegacion, filtros, previews, accesibilidad y relaciones de datos;
- cualquier cambio en ellos impacta varias rutas;
- suelen ser los primeros candidatos a revisar si algo "aparentemente pequeno" rompe la experiencia.

## Animacion y experiencia visual

El proyecto combina tres capas de movimiento:

- `framer-motion`
  Para animaciones locales de componentes.
- `gsap`
  Para scroll effects y reveals mas controlados.
- `lenis`
  Para scroll suave global.

Esto se articula con:

- `SmoothScrollProvider`
- `SectionReveal`
- `ParallaxBlock`
- `AnimatedText`
- `Reveal`

Si se detectan problemas de scroll o interacciones raras con modales, estos archivos son el primer lugar a revisar.

## Como agregar una nueva materia

1. Crear la entrada en `data/subjects.ts`.
2. Definir `slug`, `name`, `shortName`, `description`, `reflection`, `competencies` y paleta visual.
3. Verificar que el `slug` sea unico.
4. Crear la carpeta de assets:

```text
public/portfolio/subjects/<subject-slug>/
  images/
  files/
```

5. Si la materia aun no tiene proyectos, no hace falta agregar nada a `data/projects.ts`.

Comportamiento esperado:

- la ruta `/materias/[slug]` se genera automaticamente;
- si no tiene proyectos, la materia sigue existiendo y puede quedar como pendiente.

## Como agregar un nuevo proyecto

1. Subir los assets a `public/portfolio/subjects/<subject-slug>/`.
2. Agregar el objeto del proyecto en `data/projects.ts`.
3. Confirmar que:

- `slug` sea unico;
- `subject` coincida exactamente con `subject.name` en `data/subjects.ts`;
- `imageUrl`, `fileUrl`, `evidence` y `gallery` apunten a rutas existentes;
- no haya campos vacios visibles;
- el `type` pertenezca a `projectTypes`.

4. Ejecutar:

```bash
npm run lint
npm run build
```

## Checklist de mantenimiento

Antes de cerrar cambios grandes conviene revisar:

- `npm run lint`
- `npm run build`
- que no existan imports no usados;
- que no existan `console.log`;
- que no existan rutas con `/public`;
- que los slugs sean unicos;
- que las imagenes y archivos existan en `public/portfolio`;
- que las galerias tengan `alt`;
- que los filtros y la paginacion sigan funcionando;
- que navbar mobile, modal y lightbox no hayan perdido accesibilidad.

## Deploy en Vercel

El proyecto esta preparado para deploy estatico/SSR en Vercel sin configuracion especial adicional.

Flujo recomendado:

1. Subir el repositorio.
2. Importarlo en Vercel.
3. Usar:

- Install command: `npm install`
- Build command: `npm run build`
- Output: automatico de Next.js

4. Confirmar que el dominio final reemplace el placeholder de metadata.

## Nota importante antes de produccion

En [app/layout.tsx](/mnt/Games/PryectoPortafolio/app/layout.tsx) la propiedad `metadataBase` aun esta en:

```ts
new URL("https://example.com")
```

Antes del deploy publico conviene cambiarla por el dominio real del proyecto.

## Calidad y validaciones realizadas

Durante la limpieza final del codebase se verifico que:

- el build de produccion funcione;
- las rutas principales se generen correctamente;
- no haya componentes muertos en uso;
- no haya rutas locales rotas en datos;
- no haya slugs duplicados;
- `Desarrollo de la Creatividad` se mantenga como materia pendiente sin romper la navegacion;
- el proyecto use `eslint .` con configuracion moderna compatible con Next 15 y ESLint 9.

## Pendientes deliberadamente fuera de alcance

Estas areas no forman parte del estado actual documentado:

- SEO avanzado
- CMS o panel de administracion
- internacionalizacion
- persistencia externa o base de datos
- testing automatizado con framework dedicado

## Creditos tecnicos

Proyecto construido sobre:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- Lenis
- Lucide React

## Resumen corto

Este repositorio contiene un portafolio universitario tematico, estatico y mantenible, donde el contenido vive en archivos TypeScript y assets locales. Su arquitectura prioriza claridad, navegacion por materias, paginas de proyecto bien estructuradas y un deploy simple en Vercel.
