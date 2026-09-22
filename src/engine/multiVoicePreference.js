/**
 * Per-book "multi-voice narration" toggle (see useAudioNarration and
 * voiceCasts.js) — stored inside the same settings blob as everything
 * else in useNarratorSettings, keyed by title id since each book's
 * toggle is independent. Defaults to on: once a title has pre-rendered
 * audio at all, the fuller cast experience is the expected default, not
 * an opt-in a reader has to find first.
 *
 * Kept in its own module — with no React import — rather than folded
 * into useNarratorSettings.js itself, purely so this bit of logic is
 * unit-testable in isolation (see multiVoicePreference.test.js) without
 * needing React installed or anything rendered.
 */
export function isMultiVoiceEnabled(settings, titleId) {
  return settings.multiVoiceByTitle?.[titleId] ?? true;
}

export function withMultiVoiceSetting(settings, titleId, enabled) {
  return {
    ...settings,
    multiVoiceByTitle: { ...settings.multiVoiceByTitle, [titleId]: enabled },
  };
}
