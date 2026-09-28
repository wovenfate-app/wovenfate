// Runs after `vite build` (see the build script in package.json).
//
// Link previews (WhatsApp, iMessage, Facebook, X…) are read from a page's
// HTML without running any JavaScript, so the app's per-book <title> and
// meta tags, set at runtime, are invisible to them — every shared book link
// previewed as the generic site. This writes a copy of dist/index.html for
// each book at dist/book/<id>/index.html and dist/read/<id>/index.html, with
// that book's title, description, canonical URL and preview image. Vercel
// serves these files before its SPA rewrites, and they boot the same app.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { TITLES } from '../src/data/titles.js';

const SITE = 'https://www.wovenfate.app';
const DIST = 'dist';
const html = readFileSync(`${DIST}/index.html`, 'utf8');
const attr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// Replaces the content of one existing tag, and fails the build if the tag
// isn't there, so a renamed tag in index.html can't silently break previews.
function setTag(page, pattern, replacement, label) {
  if (!pattern.test(page)) throw new Error(`prerender-book-meta: couldn't find ${label} in index.html`);
  return page.replace(pattern, replacement);
}

for (const t of TITLES) {
  const free = t.price_cents === 0;
  const title = `${t.name} — Interactive Romantasy | Wovenfate`;
  const offer = free ? 'Free to read in full.' : 'The first 3 chapters are free.';
  const description = `${t.tagline} A romantasy you play: your choices decide how it ends. ${offer}`;
  const image = `${SITE}/og/${t.id}.jpg`;
  if (!existsSync(`public/og/${t.id}.jpg`)) throw new Error(`prerender-book-meta: missing public/og/${t.id}.jpg (run scripts/build-og-images.mjs)`);

  for (const route of ['book', 'read']) {
    const url = `${SITE}/book/${t.id}`; // /read/ shares the book page as its canonical URL
    let page = html;
    page = setTag(page, /<title>[^<]*<\/title>/, `<title>${attr(title)}</title>`, '<title>');
    page = setTag(page, /<meta name="description" content="[^"]*"/, `<meta name="description" content="${attr(description)}"`, 'meta description');
    page = setTag(page, /<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`, 'canonical');
    page = setTag(page, /<meta property="og:type" content="[^"]*"/, '<meta property="og:type" content="book"', 'og:type');
    page = setTag(page, /<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${attr(t.name)}"`, 'og:title');
    page = setTag(page, /<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${attr(description)}"`, 'og:description');
    page = setTag(page, /<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${url}"`, 'og:url');
    page = setTag(page, /<meta property="og:image" content="[^"]*"/, `<meta property="og:image" content="${image}"`, 'og:image');
    page = setTag(page, /<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${attr(t.name)}"`, 'twitter:title');
    page = setTag(page, /<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${attr(description)}"`, 'twitter:description');
    page = setTag(page, /<meta name="twitter:image" content="[^"]*"/, `<meta name="twitter:image" content="${image}"`, 'twitter:image');

    mkdirSync(`${DIST}/${route}/${t.id}`, { recursive: true });
    writeFileSync(`${DIST}/${route}/${t.id}/index.html`, page);
  }
}
console.log(`prerender-book-meta: wrote link-preview pages for ${TITLES.length} books`);
