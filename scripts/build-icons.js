// One-off: regenerate icon set from logo-mark-1024.png and place into
// the app-router conventional paths (app/icon.png, app/apple-icon.png,
// app/favicon.ico). Also refreshes public/ android-chrome PNGs.
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const pngToIco = require('png-to-ico').default;

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'public', 'logo-mark-1024.png');
const app = path.join(root, 'app');
const pub = path.join(root, 'public');

async function main() {
  if (!fs.existsSync(src)) throw new Error('missing ' + src);

  // App router conventional icons. Next.js auto-generates correct
  // <link rel="icon"> / <link rel="apple-touch-icon"> tags from these.
  await sharp(src).resize(512, 512).png().toFile(path.join(app, 'icon.png'));
  await sharp(src).resize(180, 180).png().toFile(path.join(app, 'apple-icon.png'));

  // PWA/manifest sources. site.webmanifest already points at these names.
  await sharp(src).resize(192, 192).png().toFile(path.join(pub, 'android-chrome-192x192.png'));
  await sharp(src).resize(512, 512).png().toFile(path.join(pub, 'android-chrome-512x512.png'));
  await sharp(src).resize(180, 180).png().toFile(path.join(pub, 'apple-touch-icon.png'));

  // Multi-resolution favicon.ico (16/32/48). Goes in app/ so Next serves
  // it from /favicon.ico via the icon-file convention.
  const tmpDir = path.join(__dirname, '_tmp_ico');
  fs.mkdirSync(tmpDir, { recursive: true });
  const sizes = [16, 32, 48];
  const pngs = [];
  for (const s of sizes) {
    const p = path.join(tmpDir, `f${s}.png`);
    await sharp(src).resize(s, s).png().toFile(p);
    pngs.push(p);
  }
  const ico = await pngToIco(pngs);
  fs.writeFileSync(path.join(app, 'favicon.ico'), ico);
  // Also keep public/ copies for compatibility; size variants used by older
  // browsers if they bypass the link tags.
  for (const s of sizes) {
    await sharp(src).resize(s, s).png().toFile(path.join(pub, `favicon-${s}x${s}.png`));
  }
  fs.rmSync(tmpDir, { recursive: true, force: true });

  console.log('icons regenerated');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
