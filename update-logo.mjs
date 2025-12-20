// Script para convertir la imagen PNG del logo a un logo SVG limpio
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = join(__dirname, 'public');
const sourceImage = join(publicDir, 'logo-original.png');

async function createLogoSVG() {
  console.log('🎨 Creando logo SVG desde la imagen original...\n');

  try {
    // Obtener metadata de la imagen
    const metadata = await sharp(sourceImage).metadata();
    console.log(`📏 Dimensiones originales: ${metadata.width}x${metadata.height}`);

    // Crear versión optimizada del logo para web
    console.log('📦 Generando logo.png optimizado...');
    await sharp(sourceImage)
      .resize(120, 120, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(join(publicDir, 'logo.png'));

    // Crear versión SVG embedding el PNG (mejor que intentar vectorizar)
    const svgContent = `<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- ModernAsh Logo - Flame Symbol -->
  <image href="/logo.png" x="0" y="0" width="120" height="120"/>
</svg>`;

    writeFileSync(join(publicDir, 'logo.svg'), svgContent);
    console.log('✅ logo.svg creado (embeds logo.png)');

    console.log('\n✅ Logo actualizado exitosamente!');
    console.log('\nArchivos creados:');
    console.log('  - logo.png (120x120)');
    console.log('  - logo.svg (embeds logo.png)');

  } catch (error) {
    console.error('❌ Error creando logo:', error);
    process.exit(1);
  }
}

createLogoSVG();

