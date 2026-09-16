/**
 * Pure, framework- and network-free core of the analytics layer: shaping
 * events and batching them. No React, no Supabase import here on purpose —
 * same separation useStoryEngine already uses (it doesn't know Supabase
 * exists; this doesn't know React exists) — so both halves stay portable
 * and this half stays trivially unit-testable.
 *
 * useAnalytics.js is the thin, side-effecting wrapper around this that
 * actually talks to Supabase and the page lifecycle.
 */

// Deliberately small and tied to real funnel questions (where do readers
// drop off, which endings/choices land, does the paywall convert) rather
// than a generic "track anything" event bus — an unbounded event type set
// is how analytics tables turn into landfill.
const VALID_EVENT_TYPES = new Set([
  'chapter_viewed',
  'choice_made',
  'paywall_viewed',
  'checkout_started',
  'ending_reached',
]);

const MAX_PAYLOAD_KEYS = 8;
const MAX_STRING_LENGTH = 200;

/**
 * Builds one insert-ready row for the `analytics_events` table.
 *
 * Throws on an unrecognized `type` — that's a code bug (a typo'd call
 * site), not bad user input, so it's caught at the call site (see
 * useAnalytics.track) rather than silently swallowed here. Everything
 * about `payload`, by contrast, is attacker/accident-tolerant: it comes
 * from app state that could in principle carry anything.
 */
export function buildEvent(type, { userId = null, titleId = null, payload = {} } = {}) {
  if (!VALID_EVENT_TYPES.has(type)) {
    throw new Error(`Unknown analytics event type: "${type}"`);
  }
  return {
    event_type: type,
    user_id: userId || null,
    title_id: titleId || null,
    payload: sanitizePayload(payload),
    client_ts: new Date().toISOString(),
  };
}

function sanitizePayload(payload) {
  if (!payload || typeof payload !== 'object') return {};

  const clean = {};
  let kept = 0;
  for (const [key, value] of Object.entries(payload)) {
    if (kept >= MAX_PAYLOAD_KEYS) break;
    if (value === undefined) continue;

    if (typeof value === 'string') {
      clean[key] = value.slice(0, MAX_STRING_LENGTH);
    } else if (typeof value === 'number' || typeof value === 'boolean' || value === null) {
      clean[key] = value;
    } else {
      // Payloads should stay flat; anything nested this deep is almost
      // certainly a bug upstream. Best-effort stringify rather than
      // dropping it silently, so it's still visible for debugging.
      try {
        clean[key] = JSON.stringify(value).slice(0, MAX_STRING_LENGTH);
      } catch {
        continue; // circular or otherwise unserializable — drop, don't throw
      }
    }
    kept += 1;
  }
  return clean;
}

/**
 * A tiny bounded in-memory queue. `maxSize` caps memory if flushing is
 * failing or blocked (e.g. offline); once full, the oldest events are
 * dropped rather than the queue growing without limit — for analytics,
 * losing old events under sustained failure is the right trade, not an
 * unbounded buffer or a crash.
 */
export function createEventQueue({ maxSize = 50, flushSize = 8 } = {}) {
  let buffer = [];
  return {
    add(event) {
      if (!event) return;
      buffer.push(event);
      if (buffer.length > maxSize) {
        buffer = buffer.slice(buffer.length - maxSize);
      }
    },
    shouldFlush() {
      return buffer.length >= flushSize;
    },
    drain() {
      const out = buffer;
      buffer = [];
      return out;
    },
    get size() {
      return buffer.length;
    },
  };
}
