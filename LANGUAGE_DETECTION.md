# Detección Automática de Idioma - ModernAsh

## ✅ Implementación Completada

Se ha implementado la **detección automática de idioma** basada en la localización del navegador del usuario.

## 🌐 Cómo Funciona

### 1. **Detección Automática**
El sistema detecta automáticamente el idioma preferido del usuario mediante:

1. **Primera prioridad**: Preferencia guardada en `localStorage` (cuando el usuario ha cambiado el idioma manualmente)
2. **Segunda prioridad**: Idioma del navegador (`navigator.language`)
3. **Por defecto**: Inglés si no se puede detectar

### 2. **Redirección Inteligente**
- En la **primera visita** de la sesión, el usuario es redirigido automáticamente a la versión del sitio en su idioma
- Las redirecciones solo ocurren una vez por sesión (usando `sessionStorage`)
- Mapeo completo de rutas entre español e inglés:
  - `/` ↔ `/en`
  - `/servicios` ↔ `/en/services`
  - `/nosotros` ↔ `/en/about`
  - `/blog` ↔ `/en/blog`
  - `/contacto` ↔ `/en/contact`
  - `/devengage` ↔ `/en/devengage`

### 3. **Memoria de Preferencia**
Cuando el usuario **cambia manualmente** el idioma usando las banderas 🇪🇸/🇺🇸:
- La preferencia se guarda en `localStorage`
- En visitas futuras, se respeta la elección manual del usuario
- No se fuerza redirección si el usuario ha elegido específicamente un idioma

## 📁 Archivos Creados

### 1. **`src/utils/languageDetector.ts`**
Funciones de utilidad para:
- Detectar idioma del navegador
- Guardar/cargar preferencias
- Mapear rutas entre idiomas

### 2. **`src/components/LanguageRedirect.astro`**
Componente que:
- Se ejecuta en todas las páginas
- Realiza la detección y redirección automática
- Solo actúa en la primera visita de la sesión

### 3. **Actualización de `MainLayout.astro`**
- Incluye el componente `LanguageRedirect`
- Se ejecuta en todas las páginas del sitio

### 4. **Actualización de `Navigation.astro`**
- Selector de idioma guarda la preferencia en `localStorage`
- Permite al usuario anular la detección automática

## 🎯 Ejemplo de Uso

### Usuario con navegador en Español:
1. Primera visita a `modernash.com` → Redirige a `/` (español)
2. Primera visita a `modernash.com/en` → Redirige a `/` (español)
3. Usuario hace clic en 🇺🇸 → Va a `/en` y guarda preferencia
4. Próxima visita a `modernash.com` → Permanece en inglés (respeta preferencia)

### Usuario con navegador en Inglés:
1. Primera visita a `modernash.com` → Redirige a `/en` (inglés)
2. Primera visita a `modernash.com/servicios` → Redirige a `/en/services`
3. Usuario hace clic en 🇪🇸 → Va a `/` y guarda preferencia
4. Próxima visita → Permanece en español (respeta preferencia)

## 🔧 Tecnología Utilizada

- **TypeScript** para lógica de detección
- **localStorage** para persistencia de preferencias
- **sessionStorage** para control de redirecciones por sesión
- **navigator.language** API del navegador
- **Astro components** para integración

## ✨ Beneficios

- ✅ Experiencia personalizada automática
- ✅ Sin configuración manual requerida
- ✅ Respeta la elección del usuario
- ✅ No molesta con redirecciones repetidas
- ✅ Funciona en todas las páginas del sitio
- ✅ Compatible con SEO (páginas estáticas separadas)

## 🚀 Despliegue

La funcionalidad está completamente integrada y lista para producción. Al desplegar el sitio:
- Los usuarios verán automáticamente el contenido en su idioma preferido
- El cambio manual de idioma siempre será respetado
- No requiere configuración adicional del servidor

