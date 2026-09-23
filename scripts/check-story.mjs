// Structural + style lint for a story file: node scripts/check-story.mjs ember-court
import { pathToFileURL } from 'url';
const id = process.argv[2];
const mod = await import(pathToFileURL(`${process.cwd()}/src/data/stories/${id}.js`).href);
const story = Object.values(mod).find((v) => v && v.nodes);
const { nodes, startNode } = story;
const problems = [];
const targets = (c) => (c.branchOn ? [c.branchOn.ifTrue, c.branchOn.ifFalse] : [c.next]);
const words = (t) => t.split(/\s+/).filter(Boolean).length;
const chNum = (ch) => ['One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve'].indexOf(ch.split(' —')[0]) + 1;

for (const [nid, n] of Object.entries(nodes)) {
  if (!n.chapter || !n.text) problems.push(`${nid}: missing chapter/text`);
  const num = chNum(n.chapter);
  if (num >= 4 && !n.locked) problems.push(`${nid}: chapter ${num} should be locked`);
  if (num <= 3 && n.locked) problems.push(`${nid}: chapter ${num} should be free`);
  if (n.ending && n.choices) problems.push(`${nid}: ending with choices`);
  if (!n.ending && !(n.choices || []).length) problems.push(`${nid}: dead end`);
  for (const c of n.choices || []) {
    if (!/ — /.test(c.label)) problems.push(`${nid}: choice label missing " — ": ${c.label.slice(0, 40)}`);
    for (const t of targets(c)) if (!nodes[t]) problems.push(`${nid}: choice → missing node ${t}`);
    for (const t of targets(c)) if (nodes[t] && chNum(nodes[t].chapter) !== num + 1) problems.push(`${nid} (ch${num}) → ${t} (ch${chNum(nodes[t].chapter)}) skips/repeats a chapter`);
  }
}
// reachability + every path's length and word count
const seen = new Set(); const paths = [];
const walk = (nid, acc) => { seen.add(nid); const n = nodes[nid]; const a = [...acc, nid];
  if (n.ending) { paths.push(a); return; }
  for (const c of n.choices || []) for (const t of new Set(targets(c))) if (nodes[t] && !acc.includes(t)) walk(t, a); };
walk(startNode, []);
for (const nid of Object.keys(nodes)) if (!seen.has(nid)) problems.push(`${nid}: unreachable`);
const pw = (p) => p.reduce((s, x) => s + words(nodes[x].text), 0);
const allText = Object.values(nodes).map((n) => n.text + ' ' + (n.choices || []).map((c) => c.label).join(' ')).join('\n');
const us = allText.match(/\b(color\w*|gray|realiz\w*|apologiz\w*|memoriz\w*|recogniz\w*|harbor|favor\w*|honor\w*|armor\w*|center\w*|smolder\w*|catalog|paralyz\w*|theater|toward|mom)\b/gi) || [];
const tics = ['held breath', 'infuriatingly', 'That\'s not an apology', 'unexpectedly reasonable', 'Try and stop me', 'root and branch', 'No dramatic', 'You don\'t have a ready answer', 'dressed up as'].filter((t) => allText.includes(t));
const qComma = (allText.match(/"(What|Why|How|Who|Where|When|Did|Do|Does|Is|Are|Can|Will|Would|Have|Has)\b[^"?]{2,80}," (you|he|she|they|I) (ask|asks|say|says)/g) || []).filter((q) => !/^"(What a |How \w+,)/.test(q)); // exclamations, not questions
const endings = Object.entries(nodes).filter(([, n]) => n.ending);
const total = Object.values(nodes).reduce((s, n) => s + words(n.text), 0);
const freeWords = Object.values(nodes).filter((n) => !n.locked).reduce((s, n) => s + words(n.text), 0);
console.log(`${id}: ${Object.keys(nodes).length} scenes, ${endings.length} endings, ${total} words total`);
console.log(`  read-through: ${Math.min(...paths.map((p) => p.length))}–${Math.max(...paths.map((p) => p.length))} chapters, ${Math.min(...paths.map(pw))}–${Math.max(...paths.map(pw))} words ≈ ${Math.round(Math.min(...paths.map(pw)) / 230)}–${Math.round(Math.max(...paths.map(pw)) / 230)} min (${paths.length} routes)`);
console.log(`  free chapters: ${freeWords} words across all free scenes; per scene: ${Object.entries(nodes).map(([k, n]) => `${k}=${words(n.text)}`).join(' ')}`);
console.log(`  "three years": ${(allText.match(/three years/gi) || []).length}×`);
console.log(`  endings: ${endings.map(([k, n]) => n.tag).join(' | ')}`);
if (us.length) problems.push(`US spellings: ${[...new Set(us.map((s) => s.toLowerCase()))].join(', ')}`);
if (tics.length) problems.push(`old template phrases: ${tics.join(', ')}`);
if (qComma.length) problems.push(`questions ending in a comma: ${qComma.join(' | ')}`);
console.log(problems.length ? '  PROBLEMS:\n   - ' + problems.join('\n   - ') : '  no problems found');
