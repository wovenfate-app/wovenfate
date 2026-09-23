// Builds a single self-contained, playable HTML preview of a story file,
// for reviewing a rewrite before it's seeded into the database:
//   node scripts/build-story-preview.mjs ember-court [out.html]
import { writeFileSync } from 'fs';
import { pathToFileURL } from 'url';

const id = process.argv[2];
const out = process.argv[3] || `story-preview-${id}.html`;
const mod = await import(pathToFileURL(`${process.cwd()}/src/data/stories/${id}.js`).href);
const story = Object.values(mod).find((v) => v && v.nodes);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${id} — story preview</title>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  :root { --bg:#17141f; --surface:#1f1a2c; --raised:#261f38; --ink:#ece4d6; --dim:#a89dbd; --ember:#c97a3d; --violet:#8a6aa8; --border:#33293f; }
  * { box-sizing: border-box; }
  html { background: var(--bg); }
  body { margin: 0; color: var(--ink); font-family: Inter, sans-serif; background: radial-gradient(ellipse 120% 80% at 50% -10%, #241c33 0%, var(--bg) 55%); min-height: 100vh; }
  main { max-width: 640px; margin: 0 auto; padding: 20px 16px 60px; }
  header { display: flex; justify-content: space-between; align-items: center; gap: 10px; margin-bottom: 14px; font-size: 13px; color: var(--dim); }
  button { font: inherit; cursor: pointer; }
  .tool { background: none; border: 1px solid var(--border); color: var(--dim); border-radius: 8px; padding: 8px 12px; }
  .page { background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 30px 22px; }
  .meta { font-size: 12px; color: var(--ember); letter-spacing: .04em; text-transform: uppercase; margin: 0 0 6px; }
  h1 { font-family: Fraunces, serif; font-size: 22px; margin: 0 0 20px; }
  .text p { font-family: Fraunces, serif; font-size: 18px; line-height: 1.7; margin: 0 0 16px; }
  .choices { display: flex; flex-direction: column; gap: 10px; margin-top: 26px; }
  .choice { text-align: left; background: var(--raised); color: var(--ink); border: 1px solid var(--border); border-left: 3px solid var(--violet); border-radius: 0 8px 8px 0; padding: 14px 16px; font-size: 15px; }
  .choice:hover { border-left-color: var(--ember); }
  .ending { display: inline-block; margin-top: 24px; color: var(--ember); background: rgba(201,122,61,.16); padding: 6px 12px; border-radius: 4px; }
  .found { margin-top: 18px; font-size: 13px; color: var(--dim); }
</style>
</head>
<body>
<main>
  <header>
    <span id="crumbs"></span>
    <span>
      <button class="tool" id="back">Back</button>
      <button class="tool" id="restart">Restart</button>
    </span>
  </header>
  <div class="page" id="page"></div>
</main>
<script>
const story = ${JSON.stringify(story)};
const endingsTotal = Object.values(story.nodes).reduce((s, n) => n.ending ? s.add(n.tag) : s, new Set()).size;
let found = new Set(JSON.parse(localStorage.getItem('found-${id}') || '[]'));
let history = [];
let state = { node: story.startNode, flags: {}, chapter: 1 };

function paragraphs(text) {
  return text.split(/\\n\\n+/).map((p) => '<p>' + p
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/\\*([^*]+)\\*/g, '<em>$1</em>') + '</p>').join('');
}
function render() {
  const n = story.nodes[state.node];
  const page = document.getElementById('page');
  document.getElementById('crumbs').textContent = (n.locked ? 'Paid · ' : 'Free · ') + 'scene ' + state.node;
  let html = '<p class="meta">' + (n.locked ? 'Unlocked chapter' : 'Free chapter') + '</p>'
    + '<h1>' + n.chapter + '</h1><div class="text">' + paragraphs(n.text) + '</div>';
  if (n.ending) {
    found.add(n.tag); localStorage.setItem('found-${id}', JSON.stringify([...found]));
    html += '<span class="ending">' + n.tag + '</span><p class="found">Endings found in this preview: ' + found.size + ' of ' + endingsTotal + '</p>';
  } else {
    html += '<div class="choices">' + n.choices.map((c, i) => '<button class="choice" data-i="' + i + '">' + c.label + '</button>').join('') + '</div>';
  }
  page.innerHTML = html;
  page.querySelectorAll('.choice').forEach((b) => b.onclick = () => choose(n.choices[+b.dataset.i]));
  window.scrollTo(0, 0);
}
function choose(c) {
  history.push(JSON.parse(JSON.stringify(state)));
  const flags = { ...state.flags };
  let next = c.next;
  if (c.branchOn) next = state.flags[c.branchOn.flag] ? c.branchOn.ifTrue : c.branchOn.ifFalse;
  if (c.setFlag) flags[c.setFlag.name] = c.setFlag.value;
  state = { node: next, flags };
  render();
}
document.getElementById('back').onclick = () => { if (history.length) { state = history.pop(); render(); } };
document.getElementById('restart').onclick = () => { history = []; state = { node: story.startNode, flags: {} }; render(); };
render();
</script>
</body>
</html>`;

writeFileSync(out, html);
console.log('wrote', out);
