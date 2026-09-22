/**
 * Fixed ElevenLabs voice casting per title — see the Wovenfate project doc
 * "Narration & Voice Casting" for how these were chosen.
 *
 * Architecture (confirmed with Liam, not reader-configurable):
 *  - One narrator voice (Adam Stone) is used for every title, always.
 *  - Each title has its own fixed male/female character voice for
 *    dialogue ("his"/"her" segments — see textSegments.js).
 *  - The only reader-facing control is a per-book on/off toggle for
 *    whether dialogue plays in the character voices at all. When off,
 *    Adam Stone reads the whole book, dialogue included — that's why
 *    every title's narration is rendered as a full narrator-voice track
 *    (the "base" layer) regardless of whether its character overlay
 *    exists yet.
 *
 * There is deliberately no reader-facing narrator picker and no way to
 * choose which character voice plays — do not add one without a new
 * decision from Liam (see narration-voice-casting.md, Decision 2).
 */

// Adam Stone — fixed narrator for all titles.
export const NARRATOR_VOICE_ID = 'auq43ws1oslv0tO4BDa7';

// Keyed by the same kebab-case title id used everywhere else in the app
// (see src/data/covers.js) — not the story module's camelCase export name.
export const VOICE_CASTS = {
  'ember-court': {
    his: { name: 'Clyde', voiceId: 'wyWA56cQNU2KqUW4eCsI' },
    her: { name: 'Grace', voiceId: '4zDsWfgtAP9O9F9kJlUk' },
  },
  'binding-oath': {
    his: { name: 'Oswin', voiceId: 'dnvwj1EV3sVx1K3CnLL6' },
    her: { name: 'Evelyn', voiceId: 'XEoBW4iDmiawQP72xnAF' },
  },
  'salt-and-drowning': {
    his: { name: 'Cassius', voiceId: 'ktrGUw7rURIQyMrQZqCu' },
    her: { name: 'Alice', voiceId: 'ZEt85AU1ui8Rr8FxNslW' },
  },
  'wardens-heir': {
    his: { name: 'James', voiceId: 'GrVxA7Ub86nJH91Viyiv' },
    her: { name: 'Tamsin', voiceId: 'dAlhI9qAHVIjXuVppzhW' },
  },
  ashbound: {
    his: { name: 'Henry Dickinson', voiceId: 'JgqplyjpUYA3WY8MxmoG' },
    her: { name: 'Lyndy Lane', voiceId: '8z5UhJ1uv7X8TN5yg8oI' },
  },
};

/**
 * The voice_id to render a given segment's "character" (overlay) take
 * with, or null for a narrator segment (which has no character take —
 * the base track already is its only rendering). Unknown title id or
 * unknown speaker also resolves to null so callers can treat it as
 * "no overlay available" rather than throwing.
 */
export function characterVoiceIdFor(titleId, speaker) {
  if (speaker !== 'his' && speaker !== 'her') return null;
  return VOICE_CASTS[titleId]?.[speaker]?.voiceId ?? null;
}
