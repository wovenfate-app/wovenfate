import { useState } from 'react';

export function NarratorBar({
  narration, voiceChoice,
  multiVoice, setMultiVoice,
  autoRead, setAutoRead,
  handsFree, setHandsFree,
  onPlayPause, playLabel,
}) {
  const [expanded, setExpanded] = useState(true);
  const { voices, narratorVoice, setNarratorVoice, herVoice, setHerVoice, hisVoice, setHisVoice, supported } = narration;
  const isAudioCast = narration.mode === 'audio';

  const renderSelect = (label, value, onChange) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <span style={{ fontSize: 12, color: 'var(--ink-dim)', width: 64 }}>{label}</span>
      <select
        style={{ flex: 1 }}
        value={value}
        disabled={!supported}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {voices.length === 0 && <option>Loading voices…</option>}
        {voices.map((v, i) => (
          <option key={i} value={i}>{v.name}</option>
        ))}
      </select>
    </div>
  );

  // Every settings toggle follows the same shape — checkbox + label, with a
  // one-line explanation underneath of what it actually does (rather than
  // cramming that into the label itself, or leaving it unexplained). All
  // toggles render this way and stack in one place, in the order given
  // below, so the panel reads as a single settings list.
  const renderToggle = (checked, onChange, label, helper, disabled = false) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <label className="narrator-toggle" style={{ marginLeft: 0 }}>
        <input type="checkbox" checked={checked} disabled={disabled} onChange={(e) => onChange(e.target.checked)} />
        {label}
      </label>
      {helper && (
        <span style={{ fontSize: 12, color: 'var(--ink-dim)', marginLeft: 24 }}>{helper}</span>
      )}
    </div>
  );

  // Collapsed state: one compact row — play control plus a short summary
  // of the current settings, so the reading screen stays clean but the
  // active configuration is still visible at a glance.
  if (!expanded) {
    const summaryBits = [
      isAudioCast && (multiVoice ? 'dialogue voices on' : 'single narrator voice'),
      autoRead && 'auto-read on',
      handsFree && 'hands-free on',
    ].filter(Boolean);

    return (
      <div className="narrator" style={{ justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button className="narrator-btn" onClick={onPlayPause} disabled={!supported}>
            {playLabel}
          </button>
          {summaryBits.length > 0 && (
            <span style={{ fontSize: 12, color: 'var(--ink-dim)' }}>{summaryBits.join(' · ')}</span>
          )}
        </div>
        <button
          onClick={() => setExpanded(true)}
          style={{ background: 'none', border: 'none', color: 'var(--ink-dim)', fontSize: 12, cursor: 'pointer', textDecoration: 'underline' }}
        >
          Narration settings
        </button>
      </div>
    );
  }

  // Everything lives in one panel now, stacked in a single column, in the
  // order a reader would want to think about them: how dialogue sounds,
  // then playback behavior, then the play control itself.
  return (
    <div className="narrator" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 12, color: 'var(--ink-dim)', fontWeight: 600 }}>Narration settings</span>
        <button
          onClick={() => setExpanded(false)}
          style={{ background: 'none', border: 'none', color: 'var(--ink-dim)', fontSize: 12, cursor: 'pointer', textDecoration: 'underline' }}
        >
          Done
        </button>
      </div>

      {isAudioCast ? (
        // Fixed cast (see src/data/voiceCasts.js) — the reader can't pick
        // which voices are used, only whether dialogue uses them at all.
        renderToggle(
          multiVoice,
          setMultiVoice,
          'Different voices for dialogue',
          multiVoice
            ? 'Characters speak in their own voice — Adam Stone narrates everything else.'
            : 'Off — Adam Stone narrates everything, dialogue included.'
        )
      ) : (
        <>
          {renderSelect('Narrator', narratorVoice, setNarratorVoice)}
          {renderSelect('Her voice', herVoice, setHerVoice)}
          {renderSelect('His voice', hisVoice, setHisVoice)}
        </>
      )}

      {renderToggle(
        autoRead,
        setAutoRead,
        'Auto-read each chapter',
        'Starts reading aloud automatically whenever you open a new chapter.'
      )}

      {renderToggle(
        handsFree,
        setHandsFree,
        'Hands-free voice choices',
        voiceChoice.supported
          ? (voiceChoice.status || 'Speak your choice instead of tapping — say "option one" or a few words from it.')
          : voiceChoice.unsupportedReason,
        !voiceChoice.supported
      )}

      <button className="narrator-btn" onClick={onPlayPause} disabled={!supported} style={{ alignSelf: 'flex-start' }}>
        {playLabel}
      </button>
    </div>
  );
}
