import { AuthGate } from './AuthGate.jsx';

export function AccountModal({ isAnonymous, userEmail, onClose }) {
  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(10, 8, 14, 0.82)', backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 20,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 16, padding: 24, maxWidth: 340, width: '100%',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {!isAnonymous ? (
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: "'Fraunces', serif", fontSize: 18, margin: '0 0 6px' }}>
              Your account
            </p>
            <p style={{ fontSize: 13, color: 'var(--ink-dim)', lineHeight: 1.5 }}>
              Signed in as <strong style={{ color: 'var(--ink)' }}>{userEmail}</strong>. Your
              progress and purchases follow this account on any device you
              sign in on.
            </p>
          </div>
        ) : (
          <AuthGate
            heading="Sign in or save your account"
            description="Enter your email — if you already have an account we'll sign you in, otherwise we'll create one so your progress and purchases follow you to any device. No password needed."
            redirectPath={window.location.pathname + window.location.search}
          />
        )}

        <button
          onClick={onClose}
          className="restart-btn"
          style={{ width: '100%', marginTop: 14 }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
