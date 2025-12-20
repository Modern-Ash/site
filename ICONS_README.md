<!-- Este archivo contiene instrucciones para generar los iconos de la app -->

# Generación de Iconos para ModernAsh

El favicon.svg ya está creado con el diseño corporativo de ModernAsh.

## Para generar los archivos PNG/ICO necesarios:

### Opción 1: Usando herramientas online
1. Abre https://realfavicongenerator.net/
2. Sube el archivo `public/favicon.svg`
3. Genera todos los tamaños necesarios
4. Descarga el paquete y copia los archivos a `public/`

### Opción 2: Usando ImageMagick (desde terminal)

```bash
# Instalar ImageMagick si no lo tienes
# Ubuntu/Debian: sudo apt-get install imagemagick
# macOS: brew install imagemagick

# Desde el directorio public/
cd /home/faguero/modernash/site/modernash/public

# Generar favicon.ico (múltiples tamaños en un archivo)
convert favicon.svg -define icon:auto-resize=16,32,48 favicon.ico

# Generar apple-touch-icon
convert favicon.svg -resize 180x180 apple-touch-icon.png

# Generar icon-192.png (Android)
convert favicon.svg -resize 192x192 icon-192.png

# Generar icon-512.png (Android)
convert favicon.svg -resize 512x512 icon-512.png
```

## Iconos que se deben generar:

- `favicon.ico` (16x16, 32x32, 48x48) - Para navegadores antiguos
- `apple-touch-icon.png` (180x180) - Para iOS
- `icon-192.png` (192x192) - Para Android/PWA
- `icon-512.png` (512x512) - Para Android/PWA

## Actualización del HTML

Los meta tags para los iconos ya están incluidos en `MainLayout.astro`.

