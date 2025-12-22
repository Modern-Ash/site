---
title: "Cómo activar comentarios gratis con giscus en ModernAsh"
description: "Integramos comentarios en los posts usando giscus (GitHub Discussions), 100% open-source y sin publicidad."
pubDate: 2025-01-10
author: "ModernAsh Team"
tags: ["comentarios", "giscus", "blog"]
---

ModernAsh ahora soporta comentarios de forma nativa en los artículos del blog usando **giscus**, una integración gratuita que almacena los mensajes como *Discussions* en un repositorio de GitHub. Es ideal para audiencias técnicas porque los lectores comentan con su cuenta de GitHub y no hay anuncios ni tracking.

## ¿Por qué giscus?

- 100% open-source, sin costos ni publicidad.
- Los comentarios quedan versionados como Discussions (fáciles de moderar).
- Excelente experiencia para usuarios técnicos: autenticación con GitHub.
- Soporte de reacciones, modo oscuro automático y metadata opcional.

## Qué necesitamos

1. Un repositorio público o privado con Discussions activado (recomendado: **modern-ash-comments**).
2. Crear una categoría para los comentarios (por ejemplo, `General`).
3. Obtener los identificadores en [giscus.app](https://giscus.app): `repo`, `repoId`, `categoryId` y la `category`.

## Cómo se vincula cada post

giscus crea (o reutiliza) la Discussion basándose en un mapping. Aquí usamos `pathname` para que cada ruta `/blog/[slug]` genere su propio hilo de comentarios.

## Configuración en ModernAsh

El componente `GiscusComments` carga el script de giscus con los datos de configuración. Solo tenés que definir estas variables públicas en tu entorno (por ejemplo, en `.env`):

```
PUBLIC_GISCUS_REPO=modernash/modern-ash-comments
PUBLIC_GISCUS_REPO_ID=TU_REPO_ID
PUBLIC_GISCUS_CATEGORY=General
PUBLIC_GISCUS_CATEGORY_ID=TU_CATEGORY_ID
```

> Tip: Los IDs los obtenés directamente desde el configurador de giscus luego de conectar el repositorio.

## Flujo de uso

1. El lector abre un post y giscus busca (o crea) la Discussion usando el `pathname`.
2. Si ya existe, carga los comentarios previos; si no, crea el hilo automáticamente en el repositorio de comentarios.
3. Los usuarios escriben desde su cuenta GitHub y pueden reaccionar con emojis.

## Alternativas

- **utterances**: también es libre y guarda los comentarios como *Issues*.
- **Disqus**: opción conocida, pero el plan gratuito muestra anuncios (no recomendado para ModernAsh).

Con esta integración, cada artículo de ModernAsh puede recibir feedback de la comunidad sin fricción y sin costos adicionales.
