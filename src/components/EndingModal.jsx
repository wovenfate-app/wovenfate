import { useState, useEffect, useRef } from 'react';
import { generateEndingImage } from '../engine/generateEndingImage.js';
import { COVER_IMAGES } from '../data/covers.js';

// nextTitles: up to two other stories to offer once this one's over (see
// nextTitleSuggestions in pricing.js). This is where a reader who finished
// the free book is invited on to a paid one, so it's the funnel's key step.
export function EndingModal({ titleId, titleName, endingTag, endingsTotal, nextTitles = [], onOpenTitle }) {
  const [status, setStatus] = useState('generating'); // generating | ready | dismissed | error
  const [imageUrl, setImageUrl] = useState(null);
  const blobRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    generateEndingImage({ titleId, titleName, endingTag })
      .then((blob) => {
        if (cancelled) return;
        blobRef.current = blob;
        setImageUrl(URL.createObjectURL(blob));
        setStatus('ready');
      })
      .catch((err) => {
        console.error('Failed to generate ending image:', err);
        if (!cancelled) setStatus('error');
      });
    return () => {
      cancelled = true;
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
    // Only regenerate if the actual ending changes, not on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titleId, endingTag]);

  const handleShare = async () => {
    const blob = blobRef.current;
    if (!blob) return;
    const file = new File([blob], `${titleId}-ending.png`, { type: 'image/png' });
    try {
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: `My Wovenfate ending — ${titleName}`,
          text: `I just finished ${titleName} on Wovenfate.`,
        });
      } else {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${titleId}-ending.png`;
        a.click();
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      if (err.name !== 'AbortError') console.error('Share failed:', err);
    }
  };

  if (status === 'dismissed') return null;

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(10, 8, 14, 0.82)', backdropFilter: 'blur(4px)',
        // Scrollable, with the card centred by margin:auto rather than
        // align-items, so a card taller than the screen (image + "What's
        // next") scrolls instead of being cut off top and bottom.
        display: 'flex', overflowY: 'auto',
        padding: 20,
      }}
      onClick={() => setStatus('dismissed')}
    >
      <div
        style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 16, padding: 24, maxWidth: 340, width: '100%', margin: 'auto',
          textAlign: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <p style={{ fontFamily: "'Fraunces', serif", fontSize: 18, margin: '0 0 4px' }}>
          Your ending
        </p>
        <p style={{ fontSize: 13, color: 'var(--ink-dim)', marginBottom: 16 }}>
          {status === 'generating' ? 'Preparing your image…' : 'Ready to share'}
        </p>

        {status === 'generating' && (
          <div style={{
            aspectRatio: '9 / 16', maxHeight: '42vh', margin: '0 auto', background: 'var(--surface-raised)',
            borderRadius: 10, marginBottom: 16,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--ink-dim)', fontSize: 13,
          }}>
            …
          </div>
        )}

        {status === 'ready' && imageUrl && (
          <img
            src={imageUrl}
            alt="Your ending, ready to share"
            // Capped so the share buttons and "What's next" fit on a phone screen.
            style={{ width: '100%', maxHeight: '42vh', objectFit: 'contain', borderRadius: 10, marginBottom: 16, display: 'block' }}
          />
        )}

        {status === 'error' && (
          <p style={{ fontSize: 13, color: 'var(--ember)', marginBottom: 16 }}>
            Couldn't prepare the image — you can still keep reading.
          </p>
        )}

        <div style={{ display: 'flex', gap: 10 }}>
          <button
            className="choice-btn"
            style={{ flex: 1, textAlign: 'center', fontWeight: 600 }}
            onClick={handleShare}
            disabled={status !== 'ready'}
          >
            Share
          </button>
          <button
            className="restart-btn"
            style={{ flex: 'none' }}
            onClick={() => setStatus('dismissed')}
          >
            Not now
          </button>
        </div>

        {endingsTotal > 1 && (
          <p style={{ fontSize: 12, color: 'var(--ink-dim)', margin: '14px 0 0' }}>
            That was one of {endingsTotal} endings. Choose differently to find the others.
          </p>
        )}

        {nextTitles.length > 0 && onOpenTitle && (
          <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
            <p style={{ fontFamily: "'Fraunces', serif", fontSize: 16, margin: '0 0 10px' }}>
              What's next?
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {nextTitles.map((t) => (
                <button
                  key={t.id}
                  className="choice-btn"
                  style={{ flex: 1, padding: 8, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
                  onClick={() => { setStatus('dismissed'); onOpenTitle(t.id); }}
                >
                  {COVER_IMAGES[t.id] && (
                    <img src={COVER_IMAGES[t.id]} alt="" width="96" height="144" style={{ borderRadius: 6, display: 'block' }} />
                  )}
                  <span style={{ fontSize: 12, lineHeight: 1.3 }}>{t.name}</span>
                  <span style={{ fontSize: 11, color: 'var(--ink-dim)' }}>First 3 chapters free</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
