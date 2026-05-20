# Convencion de assets del portafolio

Todas las imagenes y archivos del portafolio se guardan dentro de:

`/portfolio/subjects/<subject-slug>/`

Subcarpetas:

- `images/`: portadas, capturas, galeria y evidencias visuales.
- `files/`: PDF, DOCX, PPTX u otros archivos descargables.

Reglas de nombres:

- usar minusculas
- no usar espacios
- no usar tildes
- usar guiones
- incluir el slug del proyecto cuando sea posible

Ejemplos:

- `/portfolio/subjects/empresa-y-entorno/images/business-model-canvas-spotify-cover.png`
- `/portfolio/subjects/empresa-y-entorno/images/business-model-canvas-spotify-detalle-01.png`
- `/portfolio/subjects/empresa-y-entorno/files/business-model-canvas-spotify.pdf`

Referencia desde `data/projects.ts`:

```ts
imageUrl: "/portfolio/subjects/empresa-y-entorno/images/business-model-canvas-spotify-cover.png",
fileUrl: "/portfolio/subjects/empresa-y-entorno/files/business-model-canvas-spotify.pdf",
gallery: [
  {
    src: "/portfolio/subjects/empresa-y-entorno/images/business-model-canvas-spotify-detalle-01.png",
    alt: "Vista general del canvas",
  },
],
evidence: [
  {
    type: "pdf",
    label: "Entrega final",
    url: "/portfolio/subjects/empresa-y-entorno/files/business-model-canvas-spotify.pdf",
  },
],
```
