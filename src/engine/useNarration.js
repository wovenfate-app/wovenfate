import { useState, useEffect, useRef, useCallback } from 'react';
import { segmentNode, tokenizeWords, humanizeForSpeech } from './textSegments.js';

const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;

/**
 * The full speech queue for a node: every prose segment (shared with
 * ChapterView via segmentNode, so what's highlighted always matches what's
 * spoken) plus, at the end, the "what do you choose?" prompt for its
 * choices — spoken, but never shown as chapter prose, so it's added here
 * rather than baked into segmentNode itself.
 */
function buildSpeechQueue(node) {
  const queue = segmentNode(node).flat.slice();
  if (node.choices && node.choices.length) {
    const options = node.choices.map((c) => c.label).join('. Or, ');
    queue.push({ speaker: 'narrator', text: `What do you choose? ${options}.` });
  }
  return queue;
}

export function useNarration() {
  const [voices, setVoices] = useState([]);
  const [narratorVoice, setNarratorVoice] = useState(0);
  const [herVoice, setHerVoice] = useState(0);
  const [hisVoice, setHisVoice] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const queueRef = useRef([]);
  const onQueueEmptyRef = useRef(null);

  useEffect(() => {
    if (!synth) return;
    const load = () => {
      const rawList = synth.getVoices();
      if (!rawList.length) return;

      // English-only, alphabetised — a raw system voice list is often
      // 40+ entries (every installed language), which makes for an
      // unusable picker. Content is English-only, so nothing else is
      // relevant here. Falls back to the full list only on the rare
      // device with no English voices at all.
      const englishOnly = rawList.filter((v) => v.lang && v.lang.toLowerCase().startsWith('en'));
      const list = (englishOnly.length ? englishOnly : rawList)
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name));
      setVoices(list);

      const enVoices = list.map((v, i) => ({ v, i }));
      const gbVoices = enVoices.filter((o) => o.v.lang === 'en-GB');
      const findFirst = (arr, pattern, exclude) => arr.find((o) => pattern.test(o.v.name) && o.i !== exclude);

      const narrator = findFirst(gbVoices, /male|daniel|arthur|george|oliver/i) || gbVoices[0] || enVoices[0] || { i: 0 };
      const his = findFirst(enVoices, /male|daniel|arthur|george|oliver|fred|aaron/i, narrator.i)
        || findFirst(gbVoices, /male/i, narrator.i) || narrator;
      const her = findFirst(enVoices, /female|samantha|serena|karen|victoria|susan|zira|fiona/i, narrator.i)
        || enVoices.find((o) => o.i !== narrator.i && o.i !== his.i) || enVoices[0] || narrator;

      setNarratorVoice(narrator.i >= 0 ? narrator.i : 0);
      setHisVoice(his.i >= 0 ? his.i : 0);
      setHerVoice(her.i >= 0 ? her.i : 0);
    };
    load();
    synth.onvoiceschanged = load;
  }, []);

  const voiceAndPitchFor = useCallback((speaker) => {
    if (speaker === 'his') return { voice: voices[hisVoice], pitch: 0.8, rate: 0.97 };
    if (speaker === 'her') return { voice: voices[herVoice], pitch: 1.05, rate: 1.0 };
    return { voice: voices[narratorVoice], pitch: 0.85, rate: 0.95 };
  }, [voices, hisVoice, herVoice, narratorVoice]);

  const indexRef = useRef(0);
  const onSegmentStartRef = useRef(null);
  const onWordBoundaryRef = useRef(null);
  const wordRangesRef = useRef([]);
  const wordCounterRef = useRef(0);

  const speakNext = useCallback(() => {
    if (!queueRef.current.length) {
      setIsSpeaking(false);
      if (onWordBoundaryRef.current) onWordBoundaryRef.current(null);
      if (onQueueEmptyRef.current) onQueueEmptyRef.current();
      return;
    }
    const segIndex = indexRef.current;
    if (onSegmentStartRef.current) onSegmentStartRef.current(segIndex);
    if (onWordBoundaryRef.current) onWordBoundaryRef.current(null); // clear the previous segment's highlight
    const seg = queueRef.current.shift();
    indexRef.current += 1;

    // Word ranges are computed from the untouched, on-screen text (what
    // ChapterView renders) — humanizeForSpeech only ever adjusts letters
    // within a word, never the word count, so "the Nth word boundary
    // event" reliably maps back to "the Nth range here" regardless of any
    // pronunciation tweaks applied to what's actually spoken below.
    wordRangesRef.current = tokenizeWords(seg.text);
    wordCounterRef.current = 0;

    const utter = new SpeechSynthesisUtterance(humanizeForSpeech(seg.text.replace(/\n+/g, ' ').trim()));
    const { voice, pitch, rate } = voiceAndPitchFor(seg.speaker);
    if (voice) utter.voice = voice;
    utter.pitch = pitch;
    utter.rate = rate;
    utter.onboundary = (event) => {
      // Some engines also fire sentence-level boundaries; only word ticks
      // should advance the highlight. A missing event.name (some browsers
      // don't send one) is treated as a word tick — the permissive
      // default — since that's what those browsers exclusively fire.
      if (event.name && event.name !== 'word') return;
      const range = wordRangesRef.current[wordCounterRef.current];
      wordCounterRef.current += 1;
      if (range && onWordBoundaryRef.current) {
        onWordBoundaryRef.current({ segmentIndex: segIndex, charIndex: range.start, charEnd: range.end });
      }
    };
    utter.onend = speakNext;
    utter.onerror = (event) => {
      // synth.cancel() (called by stop(), or by speakNode() starting a
      // new chapter) fires 'error' on whatever utterance was mid-speech
      // — that's an intentional interruption, not a finished segment.
      // Treating it as "advance to next" was the actual bug: stopping
      // playback was silently moving the saved position forward (and
      // could even trigger the next segment to start speaking anyway).
      // Only a genuine synthesis failure should behave like onend.
      if (event.error === 'canceled' || event.error === 'interrupted') return;
      speakNext();
    };
    synth.speak(utter);
  }, [voiceAndPitchFor]);

  /**
   * `startIndex` lets playback resume mid-chapter instead of always
   * starting fresh — used when a reader returns to a chapter they'd
   * already been listening to in a previous session (see
   * useNarrationPosition). `onSegmentStart(index)` fires right before
   * each segment plays, so the caller can persist "how far we got" as
   * we go, not just at the end. `onWordBoundary(range | null)` fires as
   * each word starts (browser support permitting — see NarratorBar's
   * caveat), and with `null` whenever nothing should currently be
   * highlighted (segment change, pause-worthy stop, or queue end).
   */
  const speakNode = useCallback((node, onDone, { startIndex = 0, onSegmentStart = null, onWordBoundary = null } = {}) => {
    if (!synth) return;
    synth.cancel();
    queueRef.current = buildSpeechQueue(node).slice(startIndex);
    indexRef.current = startIndex;
    onSegmentStartRef.current = onSegmentStart;
    onWordBoundaryRef.current = onWordBoundary;
    onQueueEmptyRef.current = onDone || null;
    setIsSpeaking(true);
    setIsPaused(false);
    speakNext();
  }, [speakNext]);

  const stop = useCallback(() => {
    if (synth) synth.cancel();
    queueRef.current = [];
    setIsSpeaking(false);
    setIsPaused(false);
    if (onWordBoundaryRef.current) onWordBoundaryRef.current(null);
  }, []);

  const pause = useCallback(() => {
    if (!synth) return;
    synth.pause();
    setIsPaused(true);
  }, []);

  const resume = useCallback(() => {
    if (!synth) return;
    synth.resume();
    setIsPaused(false);
  }, []);

  return {
    supported: !!synth,
    voices, narratorVoice, herVoice, hisVoice,
    setNarratorVoice, setHerVoice, setHisVoice,
    isSpeaking, isPaused, speakNode, stop, pause, resume,
  };
}
