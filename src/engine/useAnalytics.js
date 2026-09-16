import { useEffect, useMemo, useRef } from 'react';
import { supabase } from '../data/supabaseClient.js';
import { buildEvent, createEventQueue } from './analyticsEvents.js';

const FLUSH_INTERVAL_MS = 4000;

/**
 * Fire-and-forget reader-behavior tracking into `analytics_events`.
 * Batches inserts client-side so a reader clicking through several
 * chapters in a row doesn't open a network request per click, and never
 * throws into (or awaits inside) the caller — a failed or slow insert
 * must never be something the reader can feel.
 *
 * Deliberately NOT wired into useStoryEngine — that hook stays ignorant
 * of Supabase/analytics by design (see its own header comment). This is
 * called once near the top of the tree instead and handed userId
 * explicitly, the same pattern as useReadingProgress/usePurchase.
 */
export function useAnalytics(userId) {
  const queueRef = useRef(null);
  if (!queueRef.current) queueRef.current = createEventQueue();

  const userIdRef = useRef(userId);
  userIdRef.current = userId;

  const flush = useMemo(() => {
    return () => {
      const events = queueRef.current.drain();
      if (events.length === 0) return;
      supabase
        .from('analytics_events')
        .insert(events)
        .then(({ error }) => {
          // Best-effort only — log and move on, never surface to the reader.
          if (error) console.error('Analytics flush failed:', error.message);
        });
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (queueRef.current.size > 0) flush();
    }, FLUSH_INTERVAL_MS);

    const handleVisibility = () => {
      if (document.visibilityState === 'hidden') flush();
    };
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('pagehide', flush);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, [flush]);

  const track = useMemo(() => {
    return (type, { titleId, payload } = {}) => {
      // Anonymous auth resolves within a tick of app load (see useAuth),
      // but if something fires before it has, there's no user_id to
      // attach an event to yet — drop it rather than log a null-owner
      // row the RLS policy would reject anyway.
      if (!userIdRef.current) return;
      try {
        const event = buildEvent(type, { userId: userIdRef.current, titleId, payload });
        queueRef.current.add(event);
        if (queueRef.current.shouldFlush()) flush();
      } catch (err) {
        // An unknown event type is a typo'd call site, not a runtime
        // failure worth surfacing to the reader — log it so it's visible
        // in dev/console instead of silently vanishing.
        console.error('Analytics track() rejected:', err.message);
      }
    };
  }, [flush]);

  return { track };
}
