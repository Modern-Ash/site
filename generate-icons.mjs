// Script para generar todos los iconos de la app desde favicon.svg
import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = join(__dirname, 'public');
const svgPath = join(publicDir, 'favicon.svg');

// Leer el SVG
const svgBuffer = readFileSync(svgPath);

async function generateIcons() {
  console.log('🎨 Generando iconos para ModernAsh...\n');

  try {
    // Favicon ICO (32x32)
    console.log('📦 Generando favicon-32x32.png...');
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile(join(publicDir, 'favicon-32x32.png'));

    // Favicon ICO (16x16)
    console.log('📦 Generando favicon-16x16.png...');
    await sharp(svgBuffer)
      .resize(16, 16)
      .png()
      .toFile(join(publicDir, 'favicon-16x16.png'));

    // Apple Touch Icon (180x180)
    console.log('🍎 Generando apple-touch-icon.png...');
    await sharp(svgBuffer)
      .resize(180, 180)
      .png()
      .toFile(join(publicDir, 'apple-touch-icon.png'));

    // Android Chrome Icons
    console.log('🤖 Generando icon-192.png...');
    await sharp(svgBuffer)
      .resize(192, 192)
      .png()
      .toFile(join(publicDir, 'icon-192.png'));

    console.log('🤖 Generando icon-512.png...');
    await sharp(svgBuffer)
      .resize(512, 512)
      .png()
      .toFile(join(publicDir, 'icon-512.png'));

    // Favicon PNG estándar
    console.log('📦 Generando favicon.png...');
    await sharp(svgBuffer)
      .resize(64, 64)
      .png()
      .toFile(join(publicDir, 'favicon.png'));

    console.log('\n✅ Todos los iconos generados exitosamente!');
    console.log('\nArchivos creados:');
    console.log('  - favicon-16x16.png');
    console.log('  - favicon-32x32.png');
    console.log('  - favicon.png');
    console.log('  - apple-touch-icon.png');
    console.log('  - icon-192.png');
    console.log('  - icon-512.png');

  } catch (error) {
    console.error('❌ Error generando iconos:', error);
    process.exit(1);
  }
}

generateIcons();

