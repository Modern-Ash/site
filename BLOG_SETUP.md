# Configuración del Blog y Comentarios con Giscus - ModernAsh

## 📝 Dónde dejar los posts del blog

Los posts del blog se crean en la carpeta:

```
/home/faguero/modernash/site/modernash/src/content/blog/
```

### Estructura de carpetas:

```
src/content/blog/
├── es/                          # Posts en español
│   ├── mi-post.md
│   └── otro-post.md
└── en/                          # Posts en inglés
    ├── my-post.md
    └── another-post.md
```

### Formato de un post:

Cada archivo debe ser un `.md` (Markdown) con frontmatter al principio:

```markdown
---
title: "Título del artículo"
description: "Descripción breve del artículo"
pubDate: 2025-01-15
author: "ModernAsh Team"
tags: ["modernización", "AWS", "legacy"]
---

Contenido del artículo en Markdown...

## Sección 1

Texto del artículo...
```

### URLs generadas automáticamente:

- Post español en `src/content/blog/es/mi-articulo.md` → `https://modern-ash.com/blog/mi-articulo`
- Post inglés en `src/content/blog/en/my-article.md` → `https://modern-ash.com/en/blog/my-article`

---

## 💬 Configuración de Comentarios con Giscus

### 1. Activar GitHub Discussions en tu repositorio

1. Ve a tu repositorio en GitHub (por ejemplo: `faguero/modernash-comments`)
2. Ve a **Settings** → **Features**
3. Activa **Discussions**
4. Crea una categoría para comentarios (por ejemplo "General" o "Comments")

### 2. Configurar Giscus

1. Ve a https://giscus.app
2. Ingresa el nombre de tu repositorio: `faguero/modernash-comments`
3. Selecciona la categoría de Discussions que creaste
4. Elige el mapeo: **pathname** (recomendado)
5. Copia los valores que te da giscus:
   - `data-repo`
   - `data-repo-id`
   - `data-category`
   - `data-category-id`

### 3. Crear archivo de variables de entorno

Crea o actualiza el archivo `.env` en la raíz del proyecto:

```bash
# /home/faguero/modernash/site/modernash/.env

PUBLIC_GISCUS_REPO=faguero/modernash-comments
PUBLIC_GISCUS_REPO_ID=R_kgDOxxx  # Obtener de giscus.app
PUBLIC_GISCUS_CATEGORY=General
PUBLIC_GISCUS_CATEGORY_ID=DIC_kwDOxxx  # Obtener de giscus.app
```

⚠️ **Importante**: Agrega `.env` al `.gitignore` si tiene valores sensibles, o usa `.env.example` para la documentación.

### 4. Variables de entorno en producción (Cloudflare Pages)

En tu panel de Cloudflare Pages:

1. Ve a tu proyecto → **Settings** → **Environment variables**
2. Agrega las variables:
   - `PUBLIC_GISCUS_REPO`
   - `PUBLIC_GISCUS_REPO_ID`
   - `PUBLIC_GISCUS_CATEGORY`
   - `PUBLIC_GISCUS_CATEGORY_ID`

---

## 🚀 Ejemplo de Post Nuevo

### Crear un post en español:

```bash
# Crear archivo
nano /home/faguero/modernash/site/modernash/src/content/blog/es/nuevo-articulo.md
```

Contenido:
```markdown
---
title: "Cómo modernizar COBOL a Java en AWS"
description: "Guía práctica para migrar aplicaciones COBOL legacy a Java moderno usando AWS y IA"
pubDate: 2025-01-22
author: "ModernAsh Team"
tags: ["COBOL", "Java", "AWS", "Modernización"]
---

## Introducción

La modernización de aplicaciones COBOL es uno de los desafíos más comunes...

## Paso 1: Análisis

Primero analizamos el código legacy...
```

### Crear el mismo post en inglés:

```bash
nano /home/faguero/modernash/site/modernash/src/content/blog/en/new-article.md
```

```markdown
---
title: "How to Modernize COBOL to Java on AWS"
description: "Practical guide to migrate legacy COBOL applications to modern Java using AWS and AI"
pubDate: 2025-01-22
author: "ModernAsh Team"
tags: ["COBOL", "Java", "AWS", "Modernization"]
---

## Introduction

Modernizing COBOL applications is one of the most common challenges...
```

---

## 🔧 Compilar y Ver los Cambios

```bash
# En desarrollo
cd /home/faguero/modernash/site/modernash
npm run dev

# Compilar para producción
npm run build
```

---

## ✅ Resumen

1. **Posts**: Crear archivos `.md` en `src/content/blog/es/` o `src/content/blog/en/`
2. **Comentarios**: 
   - Activar GitHub Discussions en tu repositorio
   - Configurar en https://giscus.app
   - Agregar variables de entorno en `.env` y Cloudflare Pages
3. **Deploy**: Los comentarios aparecerán automáticamente en cada post

El componente `GiscusComments` ya está integrado en ambas versiones del blog (español e inglés). Solo necesitas configurar las variables de entorno para que funcione.

