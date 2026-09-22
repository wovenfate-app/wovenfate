import { useState, useRef, useCallback, useEffect } from 'react';
import { buildSpeechQueue } from './textSegments.js';
import { manifestUrlFor, buildAudioQueue, isRealNarrationBackend } from './narrationManifest.js';

// Referentially stable across renders — App.jsx's voice-restoration
// effect depends on `narration.voices` and would otherwise re-run every
// render for no reason (a new [] literal compares unequal every time).
const NO_VOICES = [];
const noop = () => {};

/**
 * Narration backend that plays pre-rendered ElevenLabs audio clips
 * (see scripts/generate-narration.mjs) instead of the browser's
 * speechSynthesis engine. Exposes the same shape as useNarration() so
 * App.jsx/NarratorBar can swap between them with no other changes —
 * except there is no voice picker here: casting is fixed (see
 * src/data/voiceCasts.js), so setNarratorVoice/setHerVoice/setHisVoice
 * are no-ops and `voices` is always empty. `mode: 'audio'` and
 * `available` are how callers tell this apart from the speech backend
 * and know whether this title actually has pre-rendered audio at all.
 *
 * `multiVoice` is a controlled prop (not state owned here) — the
 * per-book toggle lives with the rest of narrator settings in App.jsx,
 * same as autoRead/handsFree, so there is exactly one source of truth
 * for it.
 */
export function useAudioNarration(titleId, multiVoice) {
  // null = not loaded yet, or this title has no pre-rendered audio at
  // all. Otherwise { [nodeId]: [{ base, char? }, ...] }.
  const [manifest, setManifest] = useState(null);
  // Which backend generated the current manifest ('silence' for the
  // ffmpeg placeholder tones used to test the plumbing during
  // development, 'elevenlabs' for real narration). See `available` below.
  const [backend, setBackend] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const audioRef = useRef(null);
  const queueRef = useRef([]);
  const onSegmentStartRef = useRef(null);
  const onWordBoundaryRef = useRef(null);
  const onQueueEmptyRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    setManifest(null); // don't keep serving the previous title's audio while the new one loads
    setBackend(null);
    fetch(manifestUrlFor(titleId))
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled) return;
        setManifest(data?.nodes || null);
        setBackend(data?.backend || null);
      })
      .catch(() => { if (!cancelled) { setManifest(null); setBackend(null); } });
    return () => { cancelled = true; };
  }, [titleId]);

  const getAudioEl = useCallback(() => {
    if (!audioRef.current && typeof Audio !== 'undefined') {
      audioRef.current = new Audio();
    }
    return audioRef.current;
  }, []);

  // Stop playback and release the element on unmount — otherwise an
  // in-flight clip keeps playing after the reader navigates away.
  useEffect(() => () => {
    const audio = audioRef.current;
    if (audio) { audio.pause(); audio.removeAttribute('src'); }
  }, []);

  const playAt = useCallback((idx) => {
    const queue = queueRef.current;
    if (idx >= queue.length) {
      queueRef.current = [];
      setIsSpeaking(false);
      if (onWordBoundaryRef.current) onWordBoundaryRef.current(null);
      if (onQueueEmptyRef.current) onQueueEmptyRef.current();
      return;
    }
    if (onSegmentStartRef.current) onSegmentStartRef.current(idx);
    if (onWordBoundaryRef.current) onWordBoundaryRef.current(null); // clear the previous segment's highlight

    const seg = queue[idx];
    const audio = getAudioEl();
    if (!audio) { setIsSpeaking(false); return; }

    const advance = () => playAt(idx + 1);
    // A single missing or corrupt clip shouldn't stall the rest of the
    // chapter — skip it rather than leaving narration stuck mid-book.
    audio.onended = advance;
    audio.onerror = advance;
    audio.src = seg.src;
    audio.currentTime = 0;
    const playPromise = audio.play();
    if (playPromise && typeof playPromise.catch === 'function') playPromise.catch(advance);

    // No word-level timing without ElevenLabs alignment data — the whole
    // segment is highlighted for its duration instead of word-by-word.
    if (onWordBoundaryRef.current) {
      onWordBoundaryRef.current({ segmentIndex: idx, charIndex: 0, charEnd: seg.text.length });
    }
  }, [getAudioEl]);

  /**
   * Same contract as useNarration's speakNode, plus `nodeId` in the
   * options — needed here (and not there) to look the node up in the
   * per-title manifest, since the node object itself carries no id.
   */
  const speakNode = useCallback((node, onDone, opts = {}) => {
    const { startIndex = 0, onSegmentStart = null, onWordBoundary = null, nodeId = null } = opts;
    const audio = getAudioEl();
    if (audio) audio.pause();

    const fullQueue = buildSpeechQueue(node);
    const entries = nodeId ? manifest?.[nodeId] : null;
    const audioQueue = entries ? buildAudioQueue(titleId, fullQueue, entries, multiVoice) : null;

    if (!audioQueue) {
      // Not generated yet, or the manifest is stale against edited story
      // text (see manifestMatchesQueue) — nothing safe to play. Callers
      // are expected to check `available` before picking this backend;
      // this is the fallback for a gap within an otherwise-covered book.
      setIsSpeaking(false);
      if (onDone) onDone();
      return;
    }

    queueRef.current = audioQueue;
    onSegmentStartRef.current = onSegmentStart;
    onWordBoundaryRef.current = onWordBoundary;
    onQueueEmptyRef.current = onDone || null;
    setIsSpeaking(true);
    setIsPaused(false);
    playAt(startIndex);
  }, [getAudioEl, manifest, multiVoice, playAt, titleId]);

  const stop = useCallback(() => {
    const audio = getAudioEl();
    if (audio) { audio.pause(); audio.removeAttribute('src'); }
    queueRef.current = [];
    setIsSpeaking(false);
    setIsPaused(false);
    if (onWordBoundaryRef.current) onWordBoundaryRef.current(null);
  }, [getAudioEl]);

  const pause = useCallback(() => {
    const audio = getAudioEl();
    if (audio) audio.pause();
    setIsPaused(true);
  }, [getAudioEl]);

  const resume = useCallback(() => {
    const audio = getAudioEl();
    if (audio) audio.play().catch(() => {});
    setIsPaused(false);
  }, [getAudioEl]);

  return {
    mode: 'audio',
    // Whether THIS TITLE has real, reader-ready narration — deliberately
    // excludes the 'silence' placeholder-tone manifest used to test the
    // plumbing during development. App.jsx uses this to decide whether
    // to show narration at all for this title; there is no reader-facing
    // fallback to the browser's speechSynthesis voices any more (that
    // was the "clunky" experience this whole feature exists to replace,
    // so a title without real audio yet simply has no narration UI).
    available: manifest != null && isRealNarrationBackend(backend),
    supported: true,
    // No voice picker in this backend — casting is fixed. Kept here only
    // so a caller written against useNarration's shape doesn't crash.
    voices: NO_VOICES, narratorVoice: 0, herVoice: 0, hisVoice: 0,
    setNarratorVoice: noop, setHerVoice: noop, setHisVoice: noop,
    isSpeaking, isPaused, speakNode, stop, pause, resume,
  };
}
