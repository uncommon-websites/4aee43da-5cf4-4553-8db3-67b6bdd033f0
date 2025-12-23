import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const staticDir = join(__dirname, '..', 'static');

// SVG with the R logo centered in the viewBox, no background
const createSvg = (size) => `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(${size * 0.1}, ${size * 0.05}) scale(${size / 100})">
    <path d="M45.5105 63.889C63.2296 63.889 77.5938 49.5868 77.5938 31.9444C77.5938 14.302 63.2296 0 45.5105 0H0.59375V63.889H45.5105Z" fill="black"/>
    <path d="M0.59375 0L77.5938 95.8333H26.2605L0.59375 63.889L0.59375 0Z" fill="black"/>
    <path d="M51.4831 63.3363C49.5479 63.6992 47.5515 63.889 45.5105 63.889H0.59375V0L51.4831 63.3363Z" fill="black"/>
  </g>
</svg>
`;

async function generateFavicons() {
  // Generate favicon-96x96.png
  await sharp(Buffer.from(createSvg(96)))
    .resize(96, 96)
    .png()
    .toFile(join(staticDir, 'favicon-96x96.png'));
  console.log('Generated favicon-96x96.png');

  // Generate apple-touch-icon.png (180x180)
  await sharp(Buffer.from(createSvg(180)))
    .resize(180, 180)
    .png()
    .toFile(join(staticDir, 'apple-touch-icon.png'));
  console.log('Generated apple-touch-icon.png');

  // Generate web-app-manifest-192x192.png
  await sharp(Buffer.from(createSvg(192)))
    .resize(192, 192)
    .png()
    .toFile(join(staticDir, 'web-app-manifest-192x192.png'));
  console.log('Generated web-app-manifest-192x192.png');

  // Generate web-app-manifest-512x512.png
  await sharp(Buffer.from(createSvg(512)))
    .resize(512, 512)
    .png()
    .toFile(join(staticDir, 'web-app-manifest-512x512.png'));
  console.log('Generated web-app-manifest-512x512.png');

  // Generate 32x32 and 16x16 for ICO
  const favicon32 = await sharp(Buffer.from(createSvg(32)))
    .resize(32, 32)
    .png()
    .toBuffer();

  const favicon16 = await sharp(Buffer.from(createSvg(16)))
    .resize(16, 16)
    .png()
    .toBuffer();

  // Create ICO file
  const icoBuffer = createIco([
    { size: 16, buffer: favicon16 },
    { size: 32, buffer: favicon32 }
  ]);

  writeFileSync(join(staticDir, 'favicon.ico'), icoBuffer);
  console.log('Generated favicon.ico');

  console.log('\nAll favicons generated successfully!');
}

// Simple ICO file creator
function createIco(images) {
  const numImages = images.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = dirEntrySize * numImages;

  let dataOffset = headerSize + dirSize;
  const entries = [];

  for (const img of images) {
    entries.push({
      size: img.size,
      buffer: img.buffer,
      offset: dataOffset
    });
    dataOffset += img.buffer.length;
  }

  const totalSize = dataOffset;
  const ico = Buffer.alloc(totalSize);

  // ICO header
  ico.writeUInt16LE(0, 0);
  ico.writeUInt16LE(1, 2);
  ico.writeUInt16LE(numImages, 4);

  // Directory entries
  let offset = headerSize;
  for (const entry of entries) {
    ico.writeUInt8(entry.size === 256 ? 0 : entry.size, offset);
    ico.writeUInt8(entry.size === 256 ? 0 : entry.size, offset + 1);
    ico.writeUInt8(0, offset + 2);
    ico.writeUInt8(0, offset + 3);
    ico.writeUInt16LE(1, offset + 4);
    ico.writeUInt16LE(32, offset + 6);
    ico.writeUInt32LE(entry.buffer.length, offset + 8);
    ico.writeUInt32LE(entry.offset, offset + 12);
    offset += dirEntrySize;
  }

  // Image data
  for (const entry of entries) {
    entry.buffer.copy(ico, entry.offset);
  }

  return ico;
}

generateFavicons().catch(console.error);
