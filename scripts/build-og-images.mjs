// Draws each book's link-preview image (1200x630, what WhatsApp, iMessage,
// Facebook etc. show when a /book/:id link is shared) into public/og/.
//   node scripts/build-og-images.mjs
// Run it again after changing a title's name, tagline, cover or price (the
// badge says FREE TO READ for a free title). The images are committed, so
// the Vercel build doesn't need sharp.
import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { TITLES } from '../src/data/titles.js';
import { BOOK_DETAILS } from '../src/data/bookDetails.js';

const W = 1200, H = 630;
const OUT = 'public/og';
mkdirSync(OUT, { recursive: true });
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function wrap(text, max) {
  const lines = [];
  let line = '';
  for (const w of text.split(' ')) {
    if ((line + ' ' + w).trim().length > max) { lines.push(line.trim()); line = w; } else line += ' ' + w;
  }
  if (line.trim()) lines.push(line.trim());
  return lines;
}

for (const t of TITLES) {
  const cover = `public/covers/${t.id}.jpg`;
  const free = t.price_cents === 0;
  const endings = BOOK_DETAILS[t.id]?.endings;

  // Backdrop: the cover, blurred and darkened, with an ember glow on the left.
  const bg = await sharp(cover).resize(W, H, { fit: 'cover' }).blur(28).modulate({ brightness: 0.4, saturation: 1.15 }).toBuffer();
  const glow = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs>
      <radialGradient id="g" cx="0.23" cy="0.5" r="0.45"><stop offset="0" stop-color="#ff8a3d" stop-opacity=".32"/><stop offset="1" stop-color="#ff8a3d" stop-opacity="0"/></radialGradient>
      <linearGradient id="v" x1="0" y1="0" x2="1" y2="0"><stop offset=".35" stop-color="#0a070e" stop-opacity="0"/><stop offset="1" stop-color="#0a070e" stop-opacity=".55"/></linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#g)"/><rect width="${W}" height="${H}" fill="url(#v)"/></svg>`);

  // The poster, whole, on the left.
  const ph = 540, pw = Math.round(ph * 2 / 3), px = 90, py = (H - ph) / 2;
  const poster = await sharp(cover).resize(pw, ph, { fit: 'cover' })
    .composite([{ input: Buffer.from(`<svg width="${pw}" height="${ph}"><rect width="${pw}" height="${ph}" rx="18" fill="#fff"/></svg>`), blend: 'dest-in' }])
    .png().toBuffer();
  const shadow = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><defs><filter id="s" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="22"/></filter></defs>
    <rect x="${px}" y="${py + 14}" width="${pw}" height="${ph}" rx="18" fill="#000" opacity=".7" filter="url(#s)"/></svg>`);

  // Text on the right.
  const tx = px + pw + 70, tw = W - tx - 70;
  const nameLines = wrap(t.name, 20);
  const nameSize = nameLines.length > 1 ? 58 : 66;
  const tagLines = wrap(t.tagline, 44).slice(0, 4);
  let y = 150;
  let text = `<text x="${tx}" y="${y}" font-family="'Segoe UI', Arial, sans-serif" font-weight="700" font-size="22" letter-spacing="6" fill="#f1e7d8" opacity=".8">WOVENFATE</text>`;
  y += 66;
  for (const l of nameLines) {
    text += `<text x="${tx}" y="${y}" font-family="Georgia, serif" font-weight="700" font-size="${nameSize}" fill="url(#gold)">${esc(l)}</text>`;
    y += nameSize * 1.12;
  }
  y += 14;
  for (const l of tagLines) {
    text += `<text x="${tx}" y="${y}" font-family="Georgia, serif" font-style="italic" font-size="27" fill="#e9dfcf">${esc(l)}</text>`;
    y += 38;
  }
  const badge = free ? 'FREE TO READ' : 'FIRST 3 CHAPTERS FREE';
  const bw = badge.length * 17 + 60, by = H - 118;
  text += `<rect x="${tx}" y="${by}" width="${bw}" height="58" rx="29" fill="#ff8a3d"/>` +
    `<text x="${tx + bw / 2}" y="${by + 38}" text-anchor="middle" font-family="'Segoe UI', Arial, sans-serif" font-weight="900" font-size="25" letter-spacing="2" fill="#1a0d05">${badge}</text>`;
  if (endings) {
    text += `<text x="${tx + bw + 24}" y="${by + 38}" font-family="'Segoe UI', Arial, sans-serif" font-weight="600" font-size="25" fill="#cfc4dd">${endings} endings</text>`;
  }
  const overlay = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs><linearGradient id="gold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6d9a8"/><stop offset="1" stop-color="#d09350"/></linearGradient></defs>${text}</svg>`);

  await sharp(bg)
    .composite([{ input: glow }, { input: shadow }, { input: poster, left: px, top: py }, { input: overlay }])
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(`${OUT}/${t.id}.jpg`);
  console.log('wrote', `${OUT}/${t.id}.jpg`);
}
