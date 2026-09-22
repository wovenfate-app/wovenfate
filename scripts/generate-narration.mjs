#!/usr/bin/env node
/**
 * Generates pre-rendered narration audio for a Wovenfate title and writes
 * the manifest.json that useAudioNarration.js reads at runtime.
 *
 * Two backends:
 *   --backend silence     No API, no cost. Generates short tone clips
 *                         with ffmpeg (must be on PATH) instead of real
 *                         speech — narrator/base clips at one pitch,
 *                         "his"/"her" character clips at a different
 *                         pitch each, so toggling multi-voice on/off is
 *                         audibly obvious even without real narration.
 *                         This is what proves the playback + toggle
 *                         architecture actually works before spending
 *                         anything on ElevenLabs.
 *   --backend elevenlabs  Real narration via the ElevenLabs REST API.
 *                         Requires ELEVENLABS_API_KEY in the environment
 *                         and the --yes flag (see below) — this spends
 *                         account credits/character quota for real.
 *
 * Usage:
 *   node scripts/generate-narration.mjs --story ember-court --backend silence
 *   ELEVENLABS_API_KEY=... node scripts/generate-narration.mjs \
 *     --story ember-court --backend elevenlabs --yes
 *   node scripts/generate-narration.mjs --story all --backend elevenlabs
 *     (no --yes: prints a dry-run character/cost estimate and exits
 *      without calling the API or spending anything)
 *   node scripts/generate-narration.mjs --story ember-court \
 *     --backend elevenlabs --nodes n2a --yes
 *     (--nodes restricts generation to specific chapters — handy for
 *      previewing real voice quality, or checking a small ElevenLabs
 *      quota is enough, before spending it on a whole book)
 *
 * Safe to re-run: existing clips are skipped unless --force is passed,
 * so an interrupted run (or adding a title later) just fills in the gaps.
 */

import { existsSync, mkdirSync, writeFileSync, statSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

import { buildSpeechQueue } from '../src/engine/textSegments.js';
import { NARRATOR_VOICE_ID, characterVoiceIdFor } from '../src/data/voiceCasts.js';

// path.join (not string concatenation) so this normalizes correctly on
// Windows, where fileURLToPath returns a "C:\..." path.
const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const STORIES = {
  'ember-court': { file: 'ember-court.js', exportName: 'emberCourt' },
  'binding-oath': { file: 'binding-oath.js', exportName: 'bindingOath' },
  'salt-and-drowning': { file: 'salt-and-drowning.js', exportName: 'saltAndDrowning' },
  'wardens-heir': { file: 'wardens-heir.js', exportName: 'wardensHeir' },
  ashbound: { file: 'ashbound.js', exportName: 'ashbound' },
};

function parseArgs(argv) {
  const args = { story: null, backend: 'silence', out: 'public/narration', yes: false, force: false, model: 'eleven_multilingual_v2', nodes: null };
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === '--story') args.story = argv[++i];
    else if (a === '--backend') args.backend = argv[++i];
    else if (a === '--out') args.out = argv[++i];
    else if (a === '--yes') args.yes = true;
    else if (a === '--force') args.force = true;
    else if (a === '--model') args.model = argv[++i];
    else if (a === '--nodes') args.nodes = argv[++i].split(',').map((s) => s.trim()).filter(Boolean);
    else throw new Error(`Unknown argument: ${a}`);
  }
  if (!args.story) throw new Error('--story <title-id|all> is required (e.g. ember-court, or "all")');
  if (args.nodes && args.story === 'all') {
    throw new Error('--nodes only makes sense with a single --story, not "all"');
  }
  if (args.backend !== 'silence' && args.backend !== 'elevenlabs') {
    throw new Error(`--backend must be "silence" or "elevenlabs", got "${args.backend}"`);
  }
  return args;
}

async function loadStory(titleId) {
  const entry = STORIES[titleId];
  if (!entry) throw new Error(`Unknown title id "${titleId}". Known: ${Object.keys(STORIES).join(', ')}`);
  // A raw Windows path ("C:\...") isn't a valid dynamic-import specifier —
  // Node's ESM loader reads "C:" as a URL scheme and rejects it. A
  // file:// URL works identically on every platform, so that's what
  // actually gets imported here rather than the bare filesystem path.
  const filePath = path.join(ROOT, 'src/data/stories', entry.file);
  const mod = await import(pathToFileURL(filePath).href);
  return mod[entry.exportName];
}

/**
 * Every { nodeId, index, speaker, text } this title needs a clip for.
 * `onlyNodeIds`, when given, restricts this to a specific chapter or two
 * — useful for previewing real narration quality (or checking remaining
 * ElevenLabs quota is enough) on a small sample before committing a
 * whole book's worth of credits.
 */
function planTitle(story, onlyNodeIds = null) {
  const plan = [];
  for (const [nodeId, node] of Object.entries(story.nodes)) {
    if (onlyNodeIds && !onlyNodeIds.includes(nodeId)) continue;
    const queue = buildSpeechQueue(node);
    queue.forEach((seg, index) => plan.push({ nodeId, index, speaker: seg.speaker, text: seg.text }));
  }
  if (onlyNodeIds) {
    const missing = onlyNodeIds.filter((id) => !story.nodes[id]);
    if (missing.length) throw new Error(`Unknown node id(s) for this title: ${missing.join(', ')}`);
  }
  return plan;
}

function pad3(n) {
  return String(n).padStart(3, '0');
}

// ---- silence backend: audible-tone placeholders, no API/cost ----

// Distinct pitches per role so toggling multi-voice on/off is audibly
// obvious in a quick manual test even without real speech: the base
// track (Adam Stone, used for every segment when the toggle is off) is
// one tone throughout; the character overlay clips are a different tone
// per role, only heard when the toggle is on.
const TONE_HZ = { base: 300, his: 200, her: 500 };

function synthesizeTone(outPath, text, toneKey) {
  // Rough, deliberately simple pacing: about 13 characters/second (a
  // brisk audiobook reading pace), clamped so even a one-word line is
  // audible and even a long paragraph doesn't take unreasonably long to
  // sit through during a manual test.
  const seconds = Math.min(30, Math.max(0.6, text.length / 13));
  execFileSync('ffmpeg', [
    '-y', '-loglevel', 'error',
    '-f', 'lavfi', '-i', `sine=frequency=${TONE_HZ[toneKey]}:sample_rate=22050:duration=${seconds.toFixed(2)}`,
    '-q:a', '9', '-acodec', 'libmp3lame',
    outPath,
  ]);
}

// ---- elevenlabs backend: real narration ----

async function synthesizeElevenLabs(outPath, text, voiceId, model) {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) throw new Error('ELEVENLABS_API_KEY is not set in the environment.');

  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: 'POST',
    headers: { 'xi-api-key': apiKey, 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, model_id: model }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`ElevenLabs API error ${res.status} for voice ${voiceId}: ${body.slice(0, 300)}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(outPath, buf);
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function generateForTitle(titleId, args) {
  const story = await loadStory(titleId);
  const plan = planTitle(story, args.nodes);
  const titleOutDir = path.join(ROOT, args.out, titleId);
  mkdirSync(titleOutDir, { recursive: true });

  // Every "his"/"her" segment needs a base clip (Adam Stone — the
  // toggle-off fallback) AND a character clip (that title's cast voice
  // — the toggle-on overlay). Every narrator segment only ever needs a
  // base clip, since there is no "narrator's own character voice" to
  // overlay it with.
  const jobs = [];
  for (const seg of plan) {
    const nodeDir = path.join(titleOutDir, seg.nodeId);
    jobs.push({ ...seg, kind: 'base', voiceId: NARRATOR_VOICE_ID, outPath: path.join(nodeDir, `${pad3(seg.index)}-base.mp3`) });
    const charVoiceId = characterVoiceIdFor(titleId, seg.speaker);
    if (charVoiceId) {
      jobs.push({ ...seg, kind: 'char', voiceId: charVoiceId, outPath: path.join(nodeDir, `${pad3(seg.index)}-char.mp3`) });
    }
  }

  // Placeholder (silence) and real (elevenlabs) clips land at the exact
  // same filenames, so "skip what already exists" must not survive a
  // backend switch — otherwise regenerating a title with real narration
  // after testing it with tone placeholders would silently keep the
  // placeholders forever. Only trust the skip-cache when the previous
  // manifest for this title used the same backend we're running now.
  const existingManifestPath = path.join(titleOutDir, 'manifest.json');
  const previousBackend = existsSync(existingManifestPath)
    ? JSON.parse(readFileSync(existingManifestPath, 'utf8')).backend
    : null;
  const backendChanged = previousBackend && previousBackend !== args.backend;
  if (backendChanged) {
    console.log(`[${titleId}] previously generated with "${previousBackend}", now running "${args.backend}" — regenerating everything for this title.`);
  }
  const forceThisTitle = args.force || backendChanged;

  const pending = forceThisTitle ? jobs : jobs.filter((j) => !existsSync(j.outPath) || statSync(j.outPath).size === 0);
  const totalChars = pending.reduce((sum, j) => sum + j.text.length, 0);

  console.log(`\n[${titleId}] ${plan.length} segments across ${Object.keys(story.nodes).length} nodes — ${pending.length}/${jobs.length} clips to generate (${totalChars} characters).`);

  if (args.backend === 'elevenlabs' && !args.yes) {
    console.log(`[${titleId}] DRY RUN (pass --yes to actually call the ElevenLabs API and spend quota) — nothing generated.`);
    return { titleId, plan, generated: 0, skipped: jobs.length - pending.length, dryRun: true };
  }

  for (const job of pending) {
    mkdirSync(path.dirname(job.outPath), { recursive: true });
    try {
      if (args.backend === 'silence') {
        synthesizeTone(job.outPath, job.text, job.kind === 'char' ? job.speaker : 'base');
      } else {
        await synthesizeElevenLabs(job.outPath, job.text, job.voiceId, args.model);
        await sleep(300); // gentle pacing against rate limits — this is a batch job, not a latency-sensitive one
      }
    } catch (err) {
      // Keep going on a single bad segment rather than aborting the whole
      // title's batch — the manifest step below only includes nodes
      // where every segment actually has a base clip, so a node with a
      // real failure here is correctly excluded (falls back to the
      // browser voice) rather than silently shipping a gap.
      console.error(`[${titleId}] FAILED ${job.nodeId}#${job.index} (${job.kind}, voice ${job.voiceId}): ${err.message}`);
    }
  }

  return { titleId, plan, generated: pending.length, skipped: jobs.length - pending.length, dryRun: false };
}

function buildManifest(titleId, plan, args) {
  const titleOutDir = path.join(ROOT, args.out, titleId);
  const nodeIds = [...new Set(plan.map((s) => s.nodeId))];

  // Start from whatever manifest already exists (e.g. a full-book
  // placeholder run, or an earlier --nodes preview) rather than an empty
  // object — a --nodes run only touches the chapters it was asked to
  // regenerate, so every OTHER chapter's already-generated entries must
  // survive untouched. Without this, running e.g. `--nodes n2a` would
  // silently wipe every other chapter's audio out of the manifest, even
  // though their clips are still sitting on disk.
  const existingManifestPath = path.join(titleOutDir, 'manifest.json');
  const byNode = existsSync(existingManifestPath)
    ? JSON.parse(readFileSync(existingManifestPath, 'utf8')).nodes || {}
    : {};

  for (const nodeId of nodeIds) {
    const nodeSegs = plan.filter((s) => s.nodeId === nodeId);
    const entries = nodeSegs.map((seg) => {
      const baseRel = path.join(nodeId, `${pad3(seg.index)}-base.mp3`);
      const charRel = path.join(nodeId, `${pad3(seg.index)}-char.mp3`);
      const basePath = path.join(titleOutDir, baseRel);
      const charPath = path.join(titleOutDir, charRel);
      if (!existsSync(basePath) || statSync(basePath).size === 0) return null; // base clip missing/failed — node isn't safely playable
      const entry = { base: baseRel.split(path.sep).join('/') };
      if (existsSync(charPath) && statSync(charPath).size > 0) entry.char = charRel.split(path.sep).join('/');
      return entry;
    });
    // A node with a missing/failed clip anywhere in it is left out of the
    // manifest entirely — useAudioNarration's length check would reject a
    // partial entry anyway, so it falls back to the browser voice instead
    // of shipping a gap.
    if (entries.every((e) => e !== null)) byNode[nodeId] = entries;
  }

  const manifest = {
    titleId,
    backend: args.backend,
    generatedAt: new Date().toISOString(),
    nodes: byNode,
  };
  const manifestPath = path.join(titleOutDir, 'manifest.json');
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`[${titleId}] manifest written: ${Object.keys(byNode).length}/${nodeIds.length} nodes covered -> ${path.relative(ROOT, manifestPath)}`);
  return manifest;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const titleIds = args.story === 'all' ? Object.keys(STORIES) : [args.story];

  for (const titleId of titleIds) {
    const result = await generateForTitle(titleId, args);
    if (result.dryRun) continue;
    buildManifest(titleId, result.plan, args);
  }

  console.log('\nDone.');
}

main().catch((err) => {
  console.error(`generate-narration failed: ${err.message}`);
  process.exit(1);
});
