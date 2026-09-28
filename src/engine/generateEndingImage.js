import { COVER_IMAGES } from '../data/covers.js';
import { endingName } from './shareEnding.js';

// The ending share card: a 9:16 image a reader posts or sends after
// finishing a book. It has to look good in a story/feed AND sell the book
// to whoever receives it, so it ends on the offer and the address.
const W = 1080;
const H = 1920;
const EMBER = '#ff8a3d';
const GOLD_TOP = '#f6d9a8';
const GOLD_BOTTOM = '#c98a45';
const CREAM = '#f1e7d8';
const DIM = '#b9aecb';

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function roundRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// Draws `img` to fill (x, y, w, h), cropping to keep its aspect ratio.
function drawCover(ctx, img, x, y, w, h) {
  const scale = Math.max(w / img.width, h / img.height);
  const dw = img.width * scale, dh = img.height * scale;
  ctx.drawImage(img, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
}

// A heavy blur that works everywhere (iOS Safari lacks ctx.filter): draw the
// image tiny, then scale it back up with smoothing.
function blurredBackdrop(ctx, img) {
  const small = document.createElement('canvas');
  small.width = 27; small.height = 48;
  const s = small.getContext('2d');
  drawCover(s, img, 0, 0, small.width, small.height);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(small, 0, 0, W, H);
}

// Word-wraps `text` to `maxWidth`, at most `maxLines` lines (last one ellipsised).
function wrapLines(ctx, text, maxWidth, maxLines) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = '';
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (ctx.measureText(test).width > maxWidth && line) { lines.push(line); line = w; } else line = test;
  }
  if (line) lines.push(line);
  if (lines.length > maxLines) {
    const kept = lines.slice(0, maxLines);
    kept[maxLines - 1] = kept[maxLines - 1].replace(/\s*\S*$/, '') + '…';
    return kept;
  }
  return lines;
}

// Largest font size (down to `min`) at which `text` fits `maxWidth`.
function fitFont(ctx, text, family, weight, start, min, maxWidth) {
  let size = start;
  ctx.font = `${weight} ${size}px ${family}`;
  while (size > min && ctx.measureText(text).width > maxWidth) {
    size -= 4;
    ctx.font = `${weight} ${size}px ${family}`;
  }
  return size;
}

// A thin gold rule with a small diamond in the middle.
function ornament(ctx, cy, half = 150) {
  ctx.save();
  ctx.strokeStyle = 'rgba(232, 190, 130, 0.7)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(W / 2 - half, cy); ctx.lineTo(W / 2 - 16, cy);
  ctx.moveTo(W / 2 + 16, cy); ctx.lineTo(W / 2 + half, cy);
  ctx.stroke();
  ctx.fillStyle = GOLD_TOP;
  ctx.beginPath();
  ctx.moveTo(W / 2, cy - 8); ctx.lineTo(W / 2 + 8, cy); ctx.lineTo(W / 2, cy + 8); ctx.lineTo(W / 2 - 8, cy);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

/**
 * Renders the share card to an offscreen canvas and resolves with a PNG
 * Blob. The caller decides whether to use the Web Share API or fall back
 * to a download — this only draws.
 */
export async function generateEndingImage({ titleId, titleName, endingTag, endingLine = '', endingsTotal, isFree }) {
  // Canvas text only uses a webfont once it's loaded, and it only loads
  // the weights/styles something has asked for, so ask for these ones.
  await Promise.all([
    "600 90px 'Fraunces'", "400 40px 'Fraunces'", "italic 500 40px 'Fraunces'",
    "500 30px 'Inter'", "600 30px 'Inter'",
  ].map((f) => document.fonts.load(f).catch(() => null)));
  await document.fonts.ready;

  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  ctx.textAlign = 'center';

  const coverSrc = COVER_IMAGES[titleId];
  const cover = coverSrc ? await loadImage(coverSrc).catch(() => null) : null;

  // 1. Backdrop: the cover, blurred and darkened, with an ember glow.
  ctx.fillStyle = '#120e18';
  ctx.fillRect(0, 0, W, H);
  if (cover) {
    blurredBackdrop(ctx, cover);
    ctx.fillStyle = 'rgba(10, 7, 14, 0.62)';
    ctx.fillRect(0, 0, W, H);
  }
  const glow = ctx.createRadialGradient(W / 2, 700, 40, W / 2, 700, 620);
  glow.addColorStop(0, 'rgba(255, 138, 61, 0.28)');
  glow.addColorStop(1, 'rgba(255, 138, 61, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);
  const vignette = ctx.createLinearGradient(0, 0, 0, H);
  vignette.addColorStop(0, 'rgba(8, 6, 12, 0.55)');
  vignette.addColorStop(0.3, 'rgba(8, 6, 12, 0)');
  vignette.addColorStop(0.62, 'rgba(8, 6, 12, 0.35)');
  vignette.addColorStop(1, 'rgba(8, 6, 12, 0.92)');
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, W, H);

  // 2. Wordmark.
  ctx.fillStyle = 'rgba(241, 231, 216, 0.85)';
  ctx.font = "600 30px 'Inter', sans-serif";
  ctx.letterSpacing = '10px';
  ctx.fillText('WOVENFATE', W / 2 + 5, 130);
  ctx.letterSpacing = '0px';

  // 3. The poster, whole (2:3), floating on its glow.
  const pw = 572, ph = 858, px = (W - pw) / 2, py = 185;
  if (cover) {
    ctx.save();
    ctx.shadowColor = 'rgba(255, 138, 61, 0.45)';
    ctx.shadowBlur = 90;
    roundRectPath(ctx, px, py, pw, ph, 22);
    ctx.fillStyle = '#000';
    ctx.fill();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
    ctx.shadowBlur = 50;
    ctx.shadowOffsetY = 24;
    ctx.fill();
    ctx.restore();
    ctx.save();
    roundRectPath(ctx, px, py, pw, ph, 22);
    ctx.clip();
    drawCover(ctx, cover, px, py, pw, ph);
    ctx.restore();
    ctx.strokeStyle = 'rgba(246, 217, 168, 0.35)';
    ctx.lineWidth = 2;
    roundRectPath(ctx, px, py, pw, ph, 22);
    ctx.stroke();
  } else {
    ctx.fillStyle = CREAM;
    ctx.font = "600 64px 'Fraunces', serif";
    ctx.fillText(titleName, W / 2, py + ph / 2);
  }

  // 4. "MY ENDING" and the ending's name in gold.
  let y = py + ph + 110;
  ctx.fillStyle = DIM;
  ctx.font = "600 28px 'Inter', sans-serif";
  ctx.letterSpacing = '8px';
  ctx.fillText('MY ENDING', W / 2 + 4, y);
  ctx.letterSpacing = '0px';

  const name = endingName(endingTag);
  y += 108;
  const nameSize = fitFont(ctx, name, "'Fraunces', serif", 600, 104, 60, W - 140);
  const gold = ctx.createLinearGradient(0, y - nameSize, 0, y);
  gold.addColorStop(0, GOLD_TOP);
  gold.addColorStop(1, GOLD_BOTTOM);
  ctx.fillStyle = gold;
  ctx.save();
  ctx.shadowColor = 'rgba(255, 138, 61, 0.45)';
  ctx.shadowBlur = 30;
  ctx.fillText(name, W / 2, y);
  ctx.restore();

  y += 52;
  ornament(ctx, y);

  // 5. The ending's last line, quoted.
  if (endingLine) {
    ctx.fillStyle = CREAM;
    ctx.font = "italic 500 42px 'Fraunces', serif";
    const lines = wrapLines(ctx, `“${endingLine}”`, W - 200, 3);
    y += 76;
    for (const l of lines) { ctx.fillText(l, W / 2, y); y += 56; }
  }

  // 6. The tease and the offer.
  ctx.fillStyle = DIM;
  ctx.font = "500 32px 'Inter', sans-serif";
  const tease = endingsTotal > 1 ? `1 of ${endingsTotal} endings. Which will you get?` : 'Which ending will you get?';
  ctx.fillText(tease, W / 2, H - 230);

  const cta = `${isFree ? 'READ IT FREE' : 'START FREE'}  ·  wovenfate.app`;
  ctx.font = "600 38px 'Inter', sans-serif";
  const bw = ctx.measureText(cta).width + 110, bh = 92, bx = (W - bw) / 2, by = H - 185;
  const pill = ctx.createLinearGradient(bx, 0, bx + bw, 0);
  pill.addColorStop(0, '#ffa15c');
  pill.addColorStop(1, EMBER);
  ctx.save();
  ctx.shadowColor = 'rgba(255, 138, 61, 0.5)';
  ctx.shadowBlur = 40;
  roundRectPath(ctx, bx, by, bw, bh, bh / 2);
  ctx.fillStyle = pill;
  ctx.fill();
  ctx.restore();
  ctx.fillStyle = '#1a0d05';
  ctx.fillText(cta, W / 2, by + bh / 2 + 13);

  return new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
}
